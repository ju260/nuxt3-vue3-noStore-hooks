<template>
  <div>
    <ul class="grid gap-10">
      <li
        v-for="(product) in products"
        :key="`product__${product.ref}`"
      >
        <Product-item :item="product" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Product from '@/types/product';

interface Props {
  products: Product[];
}
const props = defineProps<Props>();

</script>
