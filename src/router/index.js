
import Vue from "vue";
import VueRouter from "vue-router";
import Stock from "../components/page/stock.vue";
import TruyXuat from "../components/page/truyxuat.vue"
import CanhBaoHetHang from "../components/page/canhbaohethang.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/nhap-kho", name: "Stock", component: Stock },
  { path: "/theo-ma-kho", name: "TheoMaKho", component: TruyXuat },
  { path: "/kiem-tra-kha-nang", name: "KiemTraKhaNang", component: CanhBaoHetHang,},

  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  //
];

const router = new VueRouter({
  routes,
});

export default router;