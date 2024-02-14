<template>
  <div class="row">
    <StatsItem />

    <div class="col-lg-5 col-xxl-4">
      <ToDoList />

    </div>
    <div class="col-lg-5 col-xxl-6">
      <RecentLeads />
    </div>
    <div class="col-lg-5 col-xxl-4">
      <ProjectDistribution />
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import StatsItem from "@/components/Dashboard/ProjectManagement/StatsItem.vue";
import ProjectDistribution from "@/components/Dashboard/ProjectManagement/ProjectDistribution.vue";
import ToDoList from "@/components/Dashboard/ProjectManagement/ToDoList/index.vue";
import RecentLeads from "@/components/Dashboard/CRMSystem/RecentLeads/index.vue";

export default defineComponent({
  name: "EcommercePage",
  components: {
    StatsItem,
    ToDoList,
    RecentLeads,

  },
});
</script>