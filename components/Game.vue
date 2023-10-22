<script setup lang="ts">
import { BoxGeometry, Color, DirectionalLight, Fog, Mesh, MeshBasicMaterial, AmbientLight, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { Ref } from 'vue'

const experience: Ref<HTMLCanvasElement | null> = ref(null)
var renderer: WebGLRenderer
var scene = new Scene();
var camera = new PerspectiveCamera(80, 1, 0.1, 2000);
scene.background = new Color(0xff0000)
// end template here

var geom = new BoxGeometry(10, 10, 10);
var mat = new MeshBasicMaterial({ color: 0x00ff00, opacity: 1 });
var cube = new Mesh(geom, mat);
scene.add(cube);
camera.position.set(0, 0, 20)
var light = new AmbientLight(0xffffff); // soft white light
light.position.set(30, 30, 30)
scene.add(light);

// White directional light at 70% intensity shining from the top.
var directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.castShadow = true;
directionalLight.rotation
scene.add(directionalLight);

// movement

function onDocumentKeyDown(event: KeyboardEvent) {
  var keyCode = event.which;
  console.log(event)
  // up
  if (keyCode == 87) {
    cube.translateY(1);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    // down
  } else if (keyCode == 83) {
    cube.translateY(-1);
    // left
  } else if (keyCode == 65) {
    cube.translateX(-1);
    // right
  } else if (keyCode == 68) {
    cube.translateX(1)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    // space
  } else if (keyCode == 32) {
    cube.rotation.set(0, 0, 0)
    cube.position.set(0, 0, 0)
  }
  render()
};
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
};

onMounted(() => {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
    var bool = false
    document.addEventListener("mousedown", e => {
      bool = true
    })
    document.addEventListener("mouseup", e => {
      bool = false
    })
    document.addEventListener("mousemove", e => {
      if (bool) console.log(e);
    })
  }
})
</script>
<template>
  <div>
    <canvas ref="experience"></canvas>
  </div>
</template>