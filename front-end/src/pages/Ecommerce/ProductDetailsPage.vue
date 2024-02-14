<template>
  <BreadCrumb PageTitle="Detalhes do Serviço" />
  <ProductDetails />
</template>

<script>
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProductDetails from "../../components/Ecommerce/ProductDetails/ProductDetails.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    BreadCrumb,
    ProductDetails,
  },
});
</script>