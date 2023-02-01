<template>
  <div class="border-2 my-2 p-2">
    <span v-if="percentage && item?.price?.base?.amount"
      ><span class="text-sm">remise de:<span class="font-bold"> -{{ percentage }}%</span></span><br />
      <span class="text-sm">ancien prix: <span class="font-bold">{{ item.price.base.formatted }}</span></span
      ><br />
      <span class="text-sm">prix soldé: <span class="font-bold">{{ item.price.sales.formatted }}</span></span
      ><br />
    </span>
    <span class="font-bold" v-else>{{ item?.price?.base?.formatted }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, onMounted } from 'vue';
import Product from '@/types/product';
import { useProductPrice } from '@/composables/useProductPrice';

interface Props {
  item: Product;
}
const props = defineProps<Props>();
const { currentPrice, percentage, isProductSales } = useProductPrice(props.item);
</script>
