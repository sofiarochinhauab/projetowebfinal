<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing product-details-box"
  >
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-9">
          <swiper
            :slidesPerView="1"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true,
            }"
            :spaceBetween="10"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[Thumbs]"
            class="productDetailsSwiper"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <img :src="product.image" alt="product-details" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-lg-2 col-md-3">
          <swiper
            :direction="'vertical'"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :spaceBetween="25"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :breakpoints="{
              0: {
                direction: 'horizontal',
                spaceBetween: 15,
              },
              768: {
                direction: 'vertical',
                spaceBetween: 25,
              },
            }"
            :modules="[Thumbs]"
            @swiper="setThumbsSwiper"
            class="productDetailsThumbSwiper"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <img :src="product.image" alt="product-details" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-lg-5 col-md-12">
          <div class="product-details-content">
            <h3 class="text-black fw-semibold">
              {{currentService.name}}
            </h3>

            <div class="mt-10 mb-12 mb-md-15 price d-flex align-items-center">
              <span class="text-primary fw-bold fs-md-15 fs-lg-16">
                {{currentService.price}} €
              </span>
              <!-- <span class="text-muted fs-13 fw-medium ms-5 me-8">$3250.00</span>
                                    <span class="text-success fw-medium"><span class="fw-black">60%</span> Off</span> -->
            </div>
            <p class="text-paragraph fs-md-15 fs-xxxl-16 lh-base">
              {{currentService.description}}
            </p>
            <ul class="info ps-0 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">
                  Empresa:
                </span>
                {{currentService.company}}
              </li>
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">
                  País:
                </span>
                {{currentService.country}}
              </li>
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">
                  Contactos:
                </span>
                {{currentService.email}} / {{currentService.phone_number}}
              </li>

            </ul>



          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css/free-mode";
import "swiper/css/thumbs";
import ServicesDataService from "@/services/ServicesDataService";

export default defineComponent({
  name: "ProductDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("../../../assets/images/products/product-details5.jpg"),
        },
        {
          id: 2,
          image: require("../../../assets/images/products/product-details6.jpg"),
        },
        {
          id: 3,
          image: require("../../../assets/images/products/product-details7.jpg"),
        },
        {
          id: 4,
          image: require("../../../assets/images/products/product-details8.jpg"),
        },
      ],
      itemNumber: 1,
      currentService: {}

    };
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Autoplay,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
  methods: {
    increment() {
      if (this.itemNumber < 10) {
        this.itemNumber++;
      }
    },
    decrement() {
      if (this.itemNumber > 1) {
        this.itemNumber--;
      }
    },
    getService(id) {
      ServicesDataService.get(id)
          .then((response) => {
            this.currentService = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getService(this.$route.params.id);
  },
});
</script>