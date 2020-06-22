import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Cube from "./Cube";


let scene: THREE.Scene;
let camera: THREE.Camera;
let cube: any;
let texture: THREE.MeshStandardMaterial;
let mesh: THREE.Mesh;
let renderer: THREE.WebGLRenderer;
let light: THREE.HemisphereLight;
// let cubes: THREE.Mesh[];

function init() {


  scene = new THREE.Scene();
  scene.background = new THREE.Color('skyblue')

  renderer = new THREE.WebGLRenderer({ antialias: true });
  document.body.appendChild(renderer.domElement);
  renderer.setSize(document.body.clientWidth, document.body.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  camera = new THREE.PerspectiveCamera(60, document.body.clientWidth / document.body.clientHeight, 0.1, 100);
  camera.position.set(0, 5, 10);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enablePan = false;

  light = new THREE.HemisphereLight("skyblue", "green", 3);
  light.position.set(9, 7, 5);
  scene.add(light);

  cube = new THREE.BoxBufferGeometry(0.9, 0.9, 0.9);
  texture = new THREE.MeshStandardMaterial({ color: 0x800080 })
  mesh = new THREE.Mesh(cube, texture);

  const planeShape = new THREE.PlaneBufferGeometry(1000, 1000);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: "green" });
  const ground = new THREE.Mesh(planeShape, planeMaterial);
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -30;

  scene.add(mesh);
  scene.add(ground);

  var corner1 = new Cube.Corner(scene);
  var corner2 = new Cube.Corner(scene);
  var corner3 = new Cube.Corner(scene);
  var corner4 = new Cube.Corner(scene);

  corner1.group.position.set(-1, 1, -1)
  corner1.group.rotation.y = Math.PI

  corner2.group.position.set(1, 1, -1)
  corner2.group.rotation.y = Math.PI / 2

  corner3.group.position.set(-1, 1, 1)
  corner3.group.rotation.y = -Math.PI / 2

  corner4.group.position.set(1, 1, 1)
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init()
animate()