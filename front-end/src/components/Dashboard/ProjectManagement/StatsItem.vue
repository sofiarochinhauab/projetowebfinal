<template>
  <div class="row">
    <div class="col-xxl-3 col-sm-6">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="d-flex align-items-center justify-content-between">
            <div
              class="icon position-relative text-primary rounded-1 text-center"
            >
              <i class="flaticon-people"></i>
            </div>
            <div class="title text-end">
              <span class="d-block fw-bold text-dark-emphasis mb-5">
                Clientes
              </span>
              <div class="d-flex align-items-center justify-content-end">
                <h3 class="fw-black mb-0 me-10">{{clients.length}}</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="d-flex align-items-center justify-content-between">
            <div class="icon position-relative text-info rounded-1 text-center">
              <i class="flaticon-gallery"></i>
            </div>
            <div class="title text-end">
              <span class="d-block fw-bold text-dark-emphasis mb-5">
                Serviços
              </span>
              <div class="d-flex align-items-center justify-content-end">
                <h3 class="fw-black mb-0 me-10">{{services.length}}</h3>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="d-flex align-items-center justify-content-between">
            <div
              class="icon position-relative text-success rounded-1 text-center"
            >
              <i class="flaticon-edit"></i>
            </div>
            <div class="title text-end">
              <span class="d-block fw-bold text-dark-emphasis mb-5">
                Tarefas
              </span>
              <div class="d-flex align-items-center justify-content-end">
                <h3 class="fw-black mb-0 me-10">{{task.length}}</h3>

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
import ClientDataService from "@/services/ClientDataService";
import ServicesDataService from "@/services/ServicesDataService";
import TaskDataService from "@/services/TaskDataService";

export default defineComponent({
  name: "StatsItem",
  data() {
    return {
      clients: [],
      services: [],
      task: []
    };
  },
  methods: {
    retrieveClients() {
      ClientDataService.getAll()
          .then((response) => {
            this.clients = response.data
          })
          .catch((e) => {
            console.log(e);
          });
    },
    retrieveServices() {
      ServicesDataService.getAll()
          .then((response) => {
            this.services = response.data
          })
          .catch((e) => {
            console.log(e);
          });
    },
    retrieveTasks() {
      TaskDataService.getAll()
          .then((response) => {
            this.task = response.data
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

  },
  mounted() {
    this.retrieveClients();
    this.retrieveServices();
    this.retrieveTasks();
  }
});
</script>