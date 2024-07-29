import * as CANNON from 'cannon';
import * as THREE from 'three';
import {
  getRandomHeightMap as getHeightMap,
  SNAP_SEGMENTS
} from './height-map';
import './styles.css';
import { getColorBetweenColors } from './utils/image-util';

const MAP_SIZE = 24;

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
light.position.set(MAP_SIZE / 2, 10, MAP_SIZE / 2);
scene.add(light);

// Create the terrain tiles
const terrainTileData: {
  geometry: [number, number, number];
  position: [number, number, number];
  point: { x: number; y: number };
}[] = [];
for (let x = 0; x < MAP_SIZE; x++) {
  for (let y = 0; y < MAP_SIZE; y++) {
    terrainTileData.push({
      point: { x, y },
      geometry: [1, 1, 1],
      position: [x - MAP_SIZE / 2, 0, y - MAP_SIZE / 2]
    });
  }
}

// Set the camera position
let cameraMode: 'rotate' | 'top' = 'rotate';
camera.position.set(0, 20, 0);
camera.lookAt(0, 0, 0);

// Create the Cannon.js world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// Array to store bodies and meshes
const physicsBodies: CANNON.Body[] = [];
const physicsMeshes: THREE.Mesh[] = [];

function addPhysicsObject(body: CANNON.Body, mesh: THREE.Mesh) {
  physicsBodies.push(body);
  physicsMeshes.push(mesh);
  world.addBody(body);
  scene.add(mesh);
  return { body, mesh };
}

window.addEventListener('mousedown', onMouseDown);
window.addEventListener('mouseup', onMouseUp);
window.addEventListener('touchstart', onMouseDown);
window.addEventListener('touchend', onMouseUp);

setInterval(() => {
  // Logic
}, 100);

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case ' ':
      cameraMode = cameraMode === 'rotate' ? 'top' : 'rotate';
      break;
  }
});

load();

async function load() {
  // Load a height map
  const heightMap = await getHeightMap({
    width: MAP_SIZE,
    height: MAP_SIZE
  });
  console.log(heightMap);

  // Load tiles
  terrainTileData.forEach((data) => {
    const position = new THREE.Vector3(...data.position);
    position.y =
      heightMap[data.point.x][data.point.y] * SNAP_SEGMENTS * data.geometry[1];
    const geometry = new THREE.BoxGeometry(...data.geometry);
    const color = getColorBetweenColors(
      0x0000ff,
      0xff0000,
      heightMap[data.point.x][data.point.y]
    );

    const material = new THREE.MeshToonMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(new THREE.Vector3(...position));

    const shape = new CANNON.Box(
      new CANNON.Vec3(
        data.geometry[0] / 2,
        data.geometry[1] / 2,
        data.geometry[2] / 2
      )
    );
    const body = new CANNON.Body({ mass: 0, shape });
    body.position.copy(new CANNON.Vec3(...position));

    addPhysicsObject(body, mesh);
  });
}

// Handle mouse and touch events
function onMouseDown() {}

function onMouseUp() {}

// Animation loop and update function
function animate() {
  requestAnimationFrame(animate);

  switch (cameraMode) {
    case 'rotate':
      // Slowly rotate the camera around the center
      camera.position.y = 20;
      camera.position.x = Math.sin(Date.now() / 10000) * 20;
      camera.position.z = Math.cos(Date.now() / 10000) * 20;
      camera.lookAt(0, 0, 0);
      break;
    case 'top':
      camera.position.set(0, 32, 0);
      camera.lookAt(0, 0, 0);
      break;
  }

  world.step(1 / 60);

  // Sync Cannon.js bodies with Three.js meshes
  for (let i = 0; i < physicsBodies.length; i++) {
    physicsMeshes[i].position.copy(physicsBodies[i].position);
    physicsMeshes[i].quaternion.copy(physicsBodies[i].quaternion);
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
