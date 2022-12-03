<template>
  <v-app id="inspire">
    <SideBar />
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
export default {
  components: { SideBar, NavBar },
};
</script>