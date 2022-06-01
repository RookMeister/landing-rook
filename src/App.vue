<script setup lang="ts">
import { ref } from 'vue';
import { leftSide, rightSide } from '../json.json'
import LeftSideVue from './components/LeftSide.vue';
import RightSideVue from './components/RightSide.vue';


const leftSideData = ref<any>(null);
const rightSideData = ref<any>(null);

// fetch(import.meta.env.VITE_JSON_URL, {
//   method: "GET",
//   headers: {
//     "Accept": "*/*",
//     "X-Master-Key": '$2b$10$' + import.meta.env.VITE_JSON_KEY
//     }
// }).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   const { record: { leftSide, rightSide } } = data;
//   leftSideData.value = leftSide;
//   rightSideData.value = rightSide;
// })
leftSideData.value = leftSide;
rightSideData.value = rightSide;

</script>

<template>
  <main class="main-container">
    <div class="grid gap-5 lg:grid-cols-3">
      <LeftSideVue v-if="leftSideData" :left-side="leftSideData" />
      <RightSideVue v-if="rightSideData" :right-side="rightSideData" />
    </div>
  </main>
</template>

<style lang="less">
.main-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .main-container {
    max-width: 640px;
    padding: 1.25rem;
  }
}

@media (min-width: 768px) {
  .main-container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .main-container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .main-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .main-container {
    max-width: 1536px;
  }
}


.block-section {
  background-color: var(--tp-secondary-background-color);
  border-radius: 0.75rem;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  h2 {
    font-weight: var(--tp-font-weight-bold-text);
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
  }
}


</style>