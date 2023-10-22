<script setup lang="ts">
import { Scene, PerspectiveCamera, Mesh, MeshBasicMaterial, WebGLRenderer, DirectionalLight, Vector3, Color, Fog, BoxGeometry } from 'three'
import { Ref } from 'vue'

const aspectRatio = computed(() => 16 / 9)

let renderer: WebGLRenderer
const experience: Ref<HTMLCanvasElement | null> = ref(null)

const scene = new Scene()

scene.background = new Color(0xa0a0a0);
scene.fog = new Fog(0xa0a0a0, 1000, 11000);

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
camera.position.set(0, 800, -800);
camera.lookAt(new Vector3());

const light = new DirectionalLight(0xaaaaaa);
light.position.set(0, 200, 100);
light.lookAt(new Vector3());

light.castShadow = true;
light.shadow.camera.top = 180;
light.shadow.camera.bottom = -180;
light.shadow.camera.left = -180;
light.shadow.camera.right = 180;

//告诉平行光需要开启阴影投射
light.castShadow = true;

scene.add(light);

const mesh = new Mesh(new BoxGeometry(100,100,100), new MeshBasicMaterial({ color: 0xc0c0c0 }));
mesh.receiveShadow = true;
scene.add(mesh);

onMounted(() => {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value })
    renderer.setSize(1600, 900)
  renderer.render(scene, camera)
  }
})

</script>
<template>
  <div>
    <canvas ref="experience"></canvas>
  </div>
</template>