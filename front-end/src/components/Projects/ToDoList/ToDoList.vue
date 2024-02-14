<template>
  <div class="card mb-25 border-0 rounded-0 bg-white to-do-list-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <ul class="to-do-list ps-0 list-unstyled mb-0">
        <li v-for="(task, index) in tasks" :key="index"
          class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
        >
          <div
            class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
          >
            <label class="form-check-label" for="task1">
              {{task.name}}
              <span class="fs-14 fw-normal text-muted ms-10 lh-1">
                 {{formatDate(task.createdAt)}}
              </span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskDataService from "@/services/TaskDataService";

export default {
  name: "ToDoList",
  data() {
  return {
    tasks: [],
    };
  },
  methods: {
  retrieveTutorials() {
    TaskDataService.getAll()
      .then((response) => {
        this.tasks = response.data.map(this.getDisplayTutorial);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getDisplayTutorial(task) {
      return {
        id: task.id,
        name: task.name,
        date: task.date,
        createdAt: task.createdAt
      };
    },
      formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });
    },
    },

  mounted() {
    this.retrieveTutorials();
  },
};
</script>