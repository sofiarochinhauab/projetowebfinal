<template>
  <div class="card mb-25 border-0 rounded-0 bg-white create-new-project-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Nome
              </label>
              <input
                  type="text"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="Nome"
                  v-model="client.name"
                  name="name"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Notas
              </label>
              <div class="mb-0">
                <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Notas sobre o Cliente"
                    v-model="client.notes"
                    name="notes"
                />
              </div>
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
                  placeholder="Empresa (opcional)"
                  v-model="client.company"
                  name="company"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Telf./Telemóvel
              </label>
              <input
                  type="number"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="Telf./Telemóvel"
                  v-model="client.phone_number"
                  name="phone_number"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                NIF
              </label>
              <input
                  type="number"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="NIF"
                  v-model="client.nif"
                  name="nif"
              />
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
                    placeholder="Email"
                    v-model="client.email"
                    name="email"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Recebido</label>
              <div class="input-group">
                <span
                    class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  €
                </span>
                <input
                    type="number"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Recebido"
                    v-model="client.received"
                    name="received"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Em falta</label>
              <div class="input-group">
                <span
                    class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  €
                </span>
                <input
                    type="number"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Em falta"
                    v-model="client.due"
                    name="due"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <a
                class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
                @click="saveClient()"
            >
              Guardar
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ClientDataService from "@/services/ClientDataService";

export default {
  name: "LeadAdd",
  data() {
    return {
      client: {
        id: null,
        due: 0,
        received: 0,
        email: "",
        nif: "",
        phone_number: "",
        company: "",
        notes: "",
        name: ""
      },
    };
  },
  methods: {
    saveClient() {
      var data = {
        due: this.client.due,
        received: this.client.received,
        email: this.client.email,
        nif: this.client.nif,
        phone_number: this.client.phone_number,
        company: this.client.company,
        notes: this.client.notes,
        name: this.client.name,
      };

      ClientDataService.create(data)
          .then(response => {
            this.client.id = response.data.id;
            this.$router.push({ name: "LeadDetailsPage", params: { id: this.client.id }});
          })
          .catch(e => {
            console.log(e);
          });


    },
  }
};
</script>
