<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-2 grid-cols-1">
        <Basket v-if="showBasket" />
      </div>
      <Basket-summary v-if="showBasket" class="col-span-2 grid-cols-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBasket } from '../../stores/basket';

const basketStore = useBasket();
const { fetchItems } = basketStore;
const showBasket = ref(false);

async function getBasket() {
  try {
    await fetchItems();
    showBasket.value = true;
  } catch (error) {
    console.error(error);
  }
}
await getBasket();
</script>
