<template>
  <div class="basketView">
    <Suspense @pending="pending" @fallback="fallback" @resolve="resolve">
      <template #default>
        <Basket-viewed />
      </template>
      <template #fallback>
        <div>Loading... (3 seconds)</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const BasketViewed = defineAsyncComponent(
  () => import('@/components/Basket/view.vue'),
);

const pending = () => {
  console.log('pending');
};
const fallback = () => {
  console.log('fallback');
};
const resolve = () => {
  console.log('resolve');
};
</script>
