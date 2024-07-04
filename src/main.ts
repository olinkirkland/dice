import * as CANNON from 'cannon';
import * as THREE from 'three';
import './styles.css';

const DICE_SIZE = 1;
const GROUND_SIZE = 10;

// Set up the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a basic light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(GROUND_SIZE / 2, 10, GROUND_SIZE / 2);
scene.add(light);

// Set up Cannon.js physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// Create a static ground plane in the physics world
const groundBody = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Plane()
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);

// Create a ground plane in the Three.js scene
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshToonMaterial({ color: 0x808080 });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
scene.add(groundMesh);

// Add straight, low walls to the scene, around the perimeter of the ground
const WALL_HEIGHT = 1;
const WALL_DEPTH = 0.1;
const wallData = [
  {
    geometry: [GROUND_SIZE, WALL_HEIGHT, WALL_DEPTH],
    position: [0, 0.5, 5]
  },
  {
    geometry: [GROUND_SIZE, WALL_HEIGHT, WALL_DEPTH],
    position: [0, 0.5, -5]
  },
  {
    geometry: [WALL_DEPTH, WALL_HEIGHT, GROUND_SIZE],
    position: [5, 0.5, 0]
  },
  {
    geometry: [WALL_DEPTH, WALL_HEIGHT, GROUND_SIZE],
    position: [-5, 0.5, 0]
  }
];

wallData.forEach((data) => {
  const geometry = new THREE.BoxGeometry(...data.geometry);
  const material = new THREE.MeshToonMaterial({ color: 0x808080 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(new THREE.Vector3(...data.position));
  scene.add(mesh);

  const cannonGeometry = new CANNON.Vec3(...data.geometry);
  cannonGeometry.y = 20;
  const shape = new CANNON.Box(cannonGeometry);
  // Make the shape super tall
  const body = new CANNON.Body({ mass: 0, shape });
  body.position.copy(new CANNON.Vec3(...data.position));
  world.addBody(body);
});

// Set the camera position
camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

// Array to store dice bodies and meshes
const diceBodies: CANNON.Body[] = [];
const diceMeshes: THREE.Mesh[] = [];

// Load textures for dice faces
const loader = new THREE.TextureLoader();
const textures = [
  loader.load('images/1.png'),
  loader.load('images/2.png'),
  loader.load('images/3.png'),
  loader.load('images/4.png'),
  loader.load('images/5.png'),
  loader.load('images/6.png')
];

// Function to create a die (cube) and add it to both Cannon.js and Three.js
function createDie() {
  // Cannon.js: create a dynamic body for the die
  const dieShape = new CANNON.Box(
    new CANNON.Vec3(DICE_SIZE / 2, DICE_SIZE / 2, DICE_SIZE / 2)
  );
  const dieBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(
      (Math.random() - 0.5) * 1,
      10,
      (Math.random() - 0.5) * 1
    ),
    shape: dieShape
  });

  // Spin the die in a random direction
  dieBody.angularVelocity.set(
    Math.random() * 4 - 2,
    Math.random() * 4 - 2,
    Math.random() * 4 - 2
  );

  // Start the die with a random angle
  dieBody.quaternion.setFromEuler(
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2
  );

  world.addBody(dieBody);
  diceBodies.push(dieBody);

  // Three.js: create a mesh for the die
  const geometry = new THREE.BoxGeometry(DICE_SIZE, DICE_SIZE, DICE_SIZE);
  const materials = textures.map(
    (texture) => new THREE.MeshBasicMaterial({ map: texture })
  );
  const mesh = new THREE.Mesh(geometry, materials);
  scene.add(mesh);
  diceMeshes.push(mesh);
}

// Handle user click to drop a new die
let isCreatingDice = false;
window.addEventListener('mousedown', () => {
  isCreatingDice = true;
});
window.addEventListener('mouseup', () => {
  isCreatingDice = false;
});

setInterval(() => {
  if (isCreatingDice) {
    createDie();
  }
}, 100);

window.addEventListener('keydown', (event) => {
  // On spacebar press, bounce all dice
  switch (event.key) {
    case ' ':
      diceBodies.forEach((body) => {
        if (Math.abs(body.velocity.y) > 0.01) return;
        body.velocity.set(Math.random() * 2 - 1, 5, Math.random() * 2 - 1);
      });
      break;

    case 'r':
      // Remove all dice
      diceBodies.forEach((body) => world.remove(body));
      diceBodies.length = 0;
      diceMeshes.forEach((mesh) => scene.remove(mesh));
      diceMeshes.length = 0;
      break;
  }
});

// Animation loop and update function
function animate() {
  requestAnimationFrame(animate);

  // Slowly rotate the camera around the center
  camera.position.x = Math.sin(Date.now() / 10000) * 20;
  camera.position.z = Math.cos(Date.now() / 10000) * 20;
  camera.lookAt(0, 0, 0);

  world.step(1 / 60);

  // Sync Cannon.js bodies with Three.js meshes
  for (let i = 0; i < diceBodies.length; i++) {
    diceMeshes[i].position.copy(diceBodies[i].position as any);
    diceMeshes[i].quaternion.copy(diceBodies[i].quaternion as any);
  }

  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
