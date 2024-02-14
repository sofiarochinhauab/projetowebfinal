<template>
  <div class="card mb-25 border-0 rounded-0 bg-white add-product-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div>
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10"
                >Nome</label
              >
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="Nome do serviço"
                v-model="service.name"
                name="name"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Descrição do Serviço
              </label>
              <div class="mb-0">
                <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Descrição do serviço"
                    v-model="service.description"
                    name="description"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Preço</label>
              <div class="input-group">
                <span
                  class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  €
                </span>
                <input
                  type="text"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="ex. 120.00"
                  v-model="service.price"
                  name="price"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Email</label>
              <div class="input-group">
                <span
                    class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  @
                </span>
                <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="email@example.com"
                    v-model="service.email"
                    name="email"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Telf./Telemóvel
              </label>
              <div class="mb-0">
                <input
                    type="number"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Telf./Telemóvel"
                    v-model="service.phone_number"
                    name="phone_number"
                />
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                País
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0" v-model="service.country" name="country">
                <option value ="Portugal" selected>Portugal</option>
                <option value="Espanha">Espanha</option>
                <option value="França">França</option>
                <option value="Alemanha">Alemanha</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Empresa
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="Empresa"
                v-model="service.company"
                name="company"
              />
            </div>
          </div>

          <div class="col-md-12">
            <div
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
              type="submit" @click="saveService()"
            >
              Adicionar Serviço
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ServicesDataService from "@/services/ServicesDataService";

export default defineComponent({
  name: "AddProduct",
  data() {
    return {
      service: {
        id: null,
        email: "",
        phone_number: "",
        country: "",
        price: 0,
        company: "",
        description: ""
      },
    };
  },
  methods: {
    saveService() {
      var data = {
        name: this.service.name,
        email: this.service.email,
        phone_number: this.service.phone_number,
        country: this.service.country,
        price: this.service.price,
        description: this.service.description,
        company: this.service.country,
      };

      ServicesDataService.create(data)
          .then(response => {
            this.service.id = response.data.id;
            this.$router.push({ name: "ProductDetailsPage", params: { id: this.service.id }});
          })
          .catch(e => {
            console.log(e);
          });


    },
  },
});
</script>