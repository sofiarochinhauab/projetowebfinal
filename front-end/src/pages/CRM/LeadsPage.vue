<template>
  <BreadCrumb PageTitle="Clientes" />
  <LeadsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LeadsContent from "@/components/Leads/LeadsContent.vue";

export default defineComponent({
  name: "LeadsPage",
  components: {
    BreadCrumb,
    LeadsContent,
  },
});
</script>