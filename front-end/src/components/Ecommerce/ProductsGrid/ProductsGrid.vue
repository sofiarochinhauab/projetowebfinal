<template>
  <div class="row">
    <div class="col-lg-8 col-xxxl-12">
      <div class="row">
        <div v-for="(service, index) in services" :key="index" class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                      src="../../../assets/images/products/product1.jpg"
                    alt="product"
                  />
                </router-link>

              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-16 fs-lg-18">
                  <a href="#" class="text-decoration-none text-black">
                    {{service.name}}
                  </a>
                </h4>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-secondary fw-bold fs-md-15 fs-lg-16"
                  >{{service.company}}</span
                  >
                </div>

                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >{{service.price}}€</span
                  >
                </div>

                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                  @click="showService(service.id)"
                >
                  Ver detalhes
                  <i class="flaticon-document transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ServicesDataService from "@/services/ServicesDataService";

export default defineComponent({
  name: "ProductsGrid",
  data() {
    return {
      services: [],
    };
  },
  methods: {
    retrieveServices() {
      ServicesDataService.getAll()
          .then((response) => {
            this.services = response.data.map(this.getDisplayService);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayService(service) {
      return {
        id: service.id,
        name: service.name,
        email: service.email,
        phone_number: service.phone_number,
        company: service.company,
        country: service.country,
        price: service.price,
        description: service.description
      };
    },
    showService(id) {
      console.log(" ID:", id);
      this.$router.push({ name: "ProductDetailsPage", params: { id: id } });
    },
  },

  mounted() {
    this.retrieveServices();
  },
});

</script>