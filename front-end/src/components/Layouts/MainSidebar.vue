<template>
  <div
    :class="[
      'sidebar-area position-fixed start-0 top-0 bg-black h-100vh transition',
      { active: stateStoreInstance.open },
    ]"
    id="sidebar-area"
  >
    <div class="logo position-absolute start-0 end-0 top-0 bg-black">
      <router-link
        to="/"
        class="d-flex align-items-center text-white text-decoration-none"
      >
        <img src="../../assets/logo.png" width="40px" height="40px" alt="logo-icon" />
        <span class="fw-bold ms-10">Mundo dos eventos</span>
      </router-link>
      <div class="border-bottom"></div>
      <button
        class="sidebar-burger-menu position-absolute lh-1 bg-transparent p-0 border-0"
        @click="stateStoreInstance.onChange"
      >
        <i class="ph-duotone ph-caret-double-right"></i>
      </button>
    </div>
    <div class="sidebar-menu">
      <ul
        class="sidebar-navbar-nav ps-0 mb-0 list-unstyled accordion"
        id="sidebarNavAccordion"
      >

        <li class="sub-title sidebar-nav-item">
          <span class="d-block text-uppercase fw-medium"></span>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/" class="sidebar-nav-link d-block">
            <i class="flaticon-extension"></i>
            <span class="title">Painel de Controlo</span>
          </router-link>
        </li>

        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwo"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwo"
          >
            <i class="flaticon-avatar"></i>
            <span class="title">Clientes</span>
          </a>
          <div
            id="sidebarCollapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/clientes" class="sidebar-sub-menu-link"
                    >Listagem Clientes</router-link
                  >
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/cliente-adicionar" class="sidebar-sub-menu-link">
                    Adicionar Cliente
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseFour"
            aria-expanded="false"
            aria-controls="sidebarCollapseFour"
          >
            <i class="flaticon-gallery"></i>
            <span class="title">Serviços</span>
          </a>
          <div
            id="sidebarCollapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/products" class="sidebar-sub-menu-link">
                    Listagem Serviços
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/add-product" class="sidebar-sub-menu-link">
                    Adicionar Serviço
                  </router-link>
                </li>


              </ul>
            </div>
          </div>
        </li>
        <li
            class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
              href="#"
              class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapseSeven"
              aria-expanded="false"
              aria-controls="sidebarCollapseSeven"
          >
            <i class="flaticon-draft"></i>
            <span class="title">Tarefas</span>
          </a>
          <div
              id="sidebarCollapseSeven"
              class="accordion-collapse collapse"
              data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/to-do-list" class="sidebar-sub-menu-link">
                    Tarefas
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                      to="/adicionar-tarefa"
                      class="sidebar-sub-menu-link"
                  >
                    Adicionar nova tarefa
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "MainSidebar",
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>