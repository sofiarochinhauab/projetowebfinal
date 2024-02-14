<template>
  <BreadCrumb PageTitle="Editar Cliente" />
  <LeadEdit />
</template>

<script >
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LeadEdit from "@/components/Leads/LeadEdit.vue";

export default defineComponent({
  name: "LeadEditPage",
  components: {
    BreadCrumb,
    LeadEdit,
  },
});
</script>