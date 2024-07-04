import * as CANNON from 'cannon';
import * as THREE from 'three';
import './styles.css';

const DICE_SIZE = 1;
const GROUND_SIZE = 10;
let useNumberTextures = false;

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
const loader = new THREE.TextureLoader();

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
const groundTexture = loader.load('textures/oak.png');
const groundMaterial = new THREE.MeshToonMaterial({
  map: groundTexture
});
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
const numberTextures = [
  loader.load('textures/numbers/1.png'),
  loader.load('textures/numbers/2.png'),
  loader.load('textures/numbers/3.png'),
  loader.load('textures/numbers/4.png'),
  loader.load('textures/numbers/5.png'),
  loader.load('textures/numbers/6.png')
];

const diceTextures = [
  loader.load('textures/dice/1.png'),
  loader.load('textures/dice/2.png'),
  loader.load('textures/dice/3.png'),
  loader.load('textures/dice/4.png'),
  loader.load('textures/dice/5.png'),
  loader.load('textures/dice/6.png')
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
  const textures = useNumberTextures ? numberTextures : diceTextures;
  const materials = textures.map(
    (texture) => new THREE.MeshBasicMaterial({ map: texture })
  );
  const mesh = new THREE.Mesh(geometry, materials);
  scene.add(mesh);
  diceMeshes.push(mesh);
}

// Handle user click to drop a new die
let canCreateDice = false;
let timeToStartCreatingDice = new Date().getTime();
window.addEventListener('mousedown', () => {
  timeToStartCreatingDice = new Date().getTime() + 400;
  canCreateDice = true;
  createDie();
});
window.addEventListener('mouseup', () => {
  canCreateDice = false;
});

setInterval(() => {
  if (canCreateDice && new Date().getTime() > timeToStartCreatingDice)
    createDie();
}, 100);

window.addEventListener('keydown', (event) => {
  // On spacebar press, bounce all dice
  switch (event.key) {
    case ' ':
      diceBodies.forEach((body) => {
        if (Math.abs(body.velocity.y) > 0.01) return;
        body.velocity.set(
          Math.random() * 2 - 1,
          Math.random() * 5 + 2,
          Math.random() * 2 - 1
        );
      });
      break;

    case 'r':
      // Remove all dice
      diceBodies.forEach((body) => world.remove(body));
      diceBodies.length = 0;
      diceMeshes.forEach((mesh) => scene.remove(mesh));
      diceMeshes.length = 0;
      break;

    case 'd':
      // Toggle between number textures and dice textures
      useNumberTextures = !useNumberTextures;
      break;

    case 'c':
      // Calculate what numbers are face up
      calculateDiceFaces();
      break;
  }
});

function calculateDiceFaces() {
  console.log('==== Dice faces ====');
  diceBodies.forEach((dieBody) => {
    // What angle is the body at X Y Z
    const angles = new CANNON.Vec3();
    dieBody.quaternion.toEuler(angles);
    const degrees = angles.scale(180 / Math.PI);
    const dieValue = determineDieValueFromDegrees(
      Math.round(degrees.x),
      Math.round(degrees.z)
    );

    if (dieValue < 0)
      console.warn('Could not determine die value from degrees', degrees);
    else console.log(dieValue);
  });
}

function determineDieValueFromDegrees(x: number, z: number) {
  if (x === 0 && z === 90) return 1;
  if (x === 0 && z === -90) return 2;
  if (x === 0 && z === 0) return 3;
  if (Math.abs(x) === 180 && z === 0) return 4;
  if (x === -90 && z === 0) return 5;
  if (x === 90 && z === 0) return 6;
  return -1;
}

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
