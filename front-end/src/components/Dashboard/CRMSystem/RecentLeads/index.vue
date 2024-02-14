<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Clientes Recentes</h5>
      </div>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle ">
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
                Data
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in clients" :key="client.id">
              <th
                class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
              >
                <div class="d-flex align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input shadow-none"
                      type="checkbox"
                    />
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    {{ client.name }}
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-primary">
                {{ client.email }}
              </td>
              <td class="shadow-none lh-1 fw-medium">
                {{ formatDate(client.createdAt) }}
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClientDataService from "@/services/ClientDataService";

export default defineComponent({
  name: "RecentLeads",
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    retrieveTutorials() {
      ClientDataService.getAll()
          .then((response) => {
            console.log(response.data);
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
  }

});
</script>