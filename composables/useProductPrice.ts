import { computed } from 'vue'
import Product from '@/types/product';

export const useProductPrice = (product: Product) => {

const isProductSales = computed(() => !!product.price.sales?.amount)

  const percentage = computed(() =>
    isProductSales.value
      ? Math.floor(
        ((product.price?.base.amount - product.price?.sales?.amount) /
          product.price?.base.amount) *
          100
      )
      : null
  )

  const currentPrice = computed(
    () => product.price?.sales?.amount || product.price?.base.amount
  )

  return {
    isProductSales,
    percentage,
    currentPrice,
  }
}
