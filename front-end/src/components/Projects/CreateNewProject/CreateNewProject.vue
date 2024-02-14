<template>
  <div class="card mb-25 border-0 rounded-0 bg-white create-new-project-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Nome da Tarefa
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="Nome da Tarefa"
                v-model="task.name"
                name="name"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Starting Date
              </label>
              <div class="input-group">
                <span class="input-group-text rounded-0 fs-14 text-muted">
                  <i class="flaticon-calendar lh-1 position-relative top-1"></i>
                </span>
                <input
                  type="date"
                  class="form-control shadow-none rounded-0 text-black"
                  v-model="task.date"
                  name="date"
                />
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <a
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              type="submit" @click="saveClient()"
            >
              Adicionar Tarefa
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskDataService from "@/services/TaskDataService";

export default defineComponent({
  name: "CreateNewProject",
  components: {
  },
  data() {
    return {
      task: {
        name: "",
        date: "",
      },
    };
  },
  methods: {
    saveClient() {
      var data = {
        name: this.task.name,
        date: this.task.date
      };

      TaskDataService.create(data)
          .then(response => {
            this.$router.push('/to-do-list');
          })
          .catch(e => {
            console.log(e);
          });

      },
    },
});
</script>