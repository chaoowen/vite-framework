import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Button from "@/views/Button.vue";
import Popup from "@/views/Popup.vue";
import Article from "@/views/Article.vue";
import Table from "@/views/Table.vue";
import Form from "@/views/Form.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/popup",
    name: "Popup",
    component: Popup,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  }
];

const router = createRouter({
  history: createWebHistory('/vite-framework/'),
  routes,
});

export default router;