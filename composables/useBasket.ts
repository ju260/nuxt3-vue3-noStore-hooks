import { ref } from 'vue';
import Product from '@/types/product';


const items = ref<Product[]>([]);

export const useBasket = () => {

  function callApi(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const fetchItems = async () => {
    try {
      await callApi(3000);
      const { data } = await useFetch(
        `http://${window.location.host}/cart.json`,
      );
      items.value = Object.values(data.value.products);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  async function updateItem({ itemRef, patch }) {
    try {
      await callApi(1000); // l'api doit renvoyer l'item mis a jour
      const updatedItemIndex = items.value.findIndex(
        (item) => item.reference === itemRef,
      );
      if (updatedItemIndex === -1) return;
        items.value[updatedItemIndex] = {
          ...items.value[updatedItemIndex],
          ...patch,
        };

    } catch (error) {
      console.error('error during updateItem', error);
      throw error;
    }
  }

  const deleteItem = async ({ itemRef }) => {
    try {
      await callApi(1000); // le produit doit etre delete du panier coté api
      items.value = items.value.filter((item) => item.reference !== itemRef);

    } catch (error) {
      console.error('error during deleteItem', error);
      throw error;
    }
  };


  return {
    items,
    fetchItems,
    updateItem,
    deleteItem,
  };
};
