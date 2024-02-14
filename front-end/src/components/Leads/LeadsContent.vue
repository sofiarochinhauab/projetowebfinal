<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="d-sm-flex align-items-center">
      </div>
      <div class="d-sm-flex align-items-center">
        <router-link :to="{ name: 'LeadAddPage' }"
            class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mb-10 mb-lg-0"
            type="button">
            Adicionar
          <i class="flaticon-plus position-relative ms-5 fs-12"></i>
        </router-link>
      </div>
    </div>
    <div class="card-body p-15 p-sm-20 p-md-25">
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                Nome
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                EMAIL
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Tel/Telemóvel
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                EMPRESA
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Valor
              </th>
              <th
                  scope="col"
                  class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Data de criação
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>

          <tr v-for="(client, index) in clients" :key="index">
            <th
                class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
            >
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                  {{ client.name }}
                </div>
              </div>
            </th>
            <td class="shadow-none lh-1 fw-medium text-black-emphasis">
              {{ client.email }}
            </td>
            <td class="shadow-none lh-1 fw-medium text-black-emphasis">
              {{ client.phone_number }}
            </td>
            <td class="shadow-none lh-1 fw-medium text-black-emphasis">
              {{ client.company }}
            </td>
            <td class="shadow-none lh-1 fw-medium text-black-emphasis">
              {{ client.received }}
            </td>
            <td class="shadow-none lh-1 fw-medium text-black-emphasis">
              {{ formatDate(client.createdAt) }}
            </td>
            <td
                class="shadow-none text-body-tertiary text-end pe-0"
            >
                    <a
                        class="dropdown-item d-flex align-items-center"
                        @click="showClient(client.id)"
                    ><i
                        class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                      View</a
                    >
                    <a
                        class="dropdown-item d-flex align-items-center"
                        @click="editClient(client.id)"
                    ><i
                        class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
                      Edit</a>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ClientDataService from "/src/services/ClientDataService.js";
export default {
  name: "clients-list",
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    retrieveTutorials() {
      ClientDataService.getAll()
          .then((response) => {
            this.clients = response.data.map(this.getDisplayTutorial);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTutorial(client) {
      return {
        id: client.id,
        name: client.name,
        email: client.email,
        phone_number: client.phone_number,
        company: client.company,
        received: client.received - client.due,
        createdAt: client.createdAt,
      };
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' });
    },
    showClient(id) {
      console.log("Client ID:", id);
      this.$router.push({ name: "LeadDetailsPage", params: { id: id } });
    },
    editClient(id) {
      console.log("Client ID:", id);
      this.$router.push({ name: "LeadEditPage", params: { id: id } });
    },
  },

  mounted() {
    this.retrieveTutorials();
  },
};
</script>
