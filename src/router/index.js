import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "../view/Board/BoardList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'BoardList',
    components: {
      content: BoardList,
    },
  },
]

export const router = new VueRouter({
  //mode: 'history',
  routes
});