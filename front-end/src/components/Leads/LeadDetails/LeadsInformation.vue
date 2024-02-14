<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing lead-info-box"
  >
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <div class="profile-info d-sm-flex align-items-center">
        <img
          src="../../../assets/images/client.jpeg"
          class="rounded"
          alt="user"
        />
        <div class="title mt-12 mt-sm-0">
          <h5 class="text-black fw-medium mb-8">{{ data.name }}</h5>
          <span class="d-block fw-bold text-primary"> {{ data.company }} </span>
        </div>
      </div>
      <div
        class="border-top mt-15 mb-15 mt-sm-20 mb-sm-20 mt-md-25 mb-md-25 mt-lg-30 mb-lg-30"
      ></div>
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="fw-medium text-black-emphasis mb-0">Informações do Cliente</h5>
        <router-link
            :to="{ name: 'LeadEditPage' }"
          class="d-inline-block text-decoration-none lh-1 text-muted fw-medium"
        >
          <i
            class="ph-duotone ph-pencil text-black position-relative top-1 fs-16 me-1"
          ></i>
          Editar
        </router-link>
      </div>
      <ul class="info mt-25 ps-0 mb-0 list-unstyled">
        <li class="position-relative">
          <div class="icon text-success rounded-circle text-center">
            <i class="flaticon-mail-inbox-app"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Email</span>
          <a
            href="mailto:johnathon23@gmail.com"
            class="d-inline-block fs-md-15 fs-lg-16 text-primary text-decoration-none"
          >
            {{ data.email }}
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-danger rounded-circle text-center">
            <i class="flaticon-telephone-call"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Telf./Telmóvel</span>
          <a
            href="tel:+1-321-456-8756"
            class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          >
            {{ data.phone_number }}
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-warning rounded-circle text-center">
            <i class="flaticon-money"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Valor</span>
          <a
              href="#"
              target="_blank"
              class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          ><a href=""></a>
            {{ data.received }}
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-info rounded-circle text-center">
            <i class="flaticon-document"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Nif</span>
          <a
              href="#"
              target="_blank"
              class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          ><a href=""></a>
            {{ data.nif }}
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-secondary rounded-circle text-center">
            <i class="flaticon-home"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Empresa</span>
          <a
              href="#"
              target="_blank"
              class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          ><a href=""></a>
            {{ data.company }}
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-warning rounded-circle text-center">
            <i class="flaticon-status"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold"> Estado Cliente </span>
          <span class="badge text-outline-info">New Lead</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "LeadsInformation",
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>