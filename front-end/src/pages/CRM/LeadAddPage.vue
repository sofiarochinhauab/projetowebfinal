<template>
  <BreadCrumb PageTitle="Adicionar Cliente" />
  <LeadAdd />
</template>

<script>
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LeadAdd from "@/components/Leads/LeadAdd.vue";

export default defineComponent({
  name: "LeadAddPage",
  components: {
    BreadCrumb,
    LeadAdd,
  },
});
</script>