import { createWebHistory, createRouter } from "vue-router";

import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import CalendarPage from "../pages/CalendarPage.vue";
import LeadsPage from "../pages/CRM/LeadsPage.vue";
import LeadDetailsPage from "../pages/CRM/LeadDetailsPage.vue";
import ProductsGridPage from "../pages/Ecommerce/ProductsGridPage.vue";
import AddProductPage from "../pages/Ecommerce/AddProductPage.vue";
import ProductDetailsPage from "../pages/Ecommerce/ProductDetailsPage.vue";
import ProjectsGridPage from "../pages/Projects/ProjectsGridPage.vue";
import CreateNewProjectPage from "../pages/Projects/CreateNewProjectPage.vue";
import ProjectDetailsPage from "../pages/Projects/ProjectDetailsPage.vue";
import ToDoListPage from "../pages/Projects/ToDoListPage.vue";
import EventsGridPage from "../pages/Events/EventsGridPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import LeadEditPage from "@/pages/CRM/LeadEditPage.vue";
import LeadAddPage from "@/pages/CRM/LeadAddPage.vue";

const routes = [
  {
    path: "/",
    name: "EcommercePage",
    component: EcommercePage,
  },
  {
    path: "/calendar",
    name: "CalendarPage",
    component: CalendarPage,
  },
  {
    path: "/clientes",
    name: "LeadsPage",
    component: LeadsPage,
  },
  {
    path: "/cliente-detalhes/:id",
    name: "LeadDetailsPage",
    component: LeadDetailsPage,
  },
  {
    path: "/cliente-adicionar/",
    name: "LeadAddPage",
    component: LeadAddPage,
  },
  {
    path: "/cliente-editar/:id",
    name: "LeadEditPage",
    component: LeadEditPage,
  },
  {
    path: "/products",
    name: "ProductsGridPage",
    component: ProductsGridPage,
  },
  {
    path: "/add-product",
    name: "AddProductPage",
    component: AddProductPage,
  },
  {
    path: "/servico-detalhes/:id",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/projects-grid",
    name: "ProjectsGridPage",
    component: ProjectsGridPage,
  },
  {
    path: "/adicionar-tarefa",
    name: "CreateNewProjectPage",
    component: CreateNewProjectPage,
  },
  {
    path: "/project-details",
    name: "ProjectDetailsPage",
    component: ProjectDetailsPage,
  },
  {
    path: "/to-do-list",
    name: "ToDoListPage",
    component: ToDoListPage,
  },
  {
    path: "/events",
    name: "EventsGridPage",
    component: EventsGridPage,
  },
  {
    path: "/event-details",
    name: "EventDetailsPage",
    component: EventDetailsPage,
  },
  {
    path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;