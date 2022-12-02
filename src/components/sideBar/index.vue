<template>
  <v-navigation-drawer v-model="drawer" app>
    <router-link class="logo" to="/">
      <div class="logo-icon">LOGO</div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> LOUTUS GROUP </v-list-item-title>
          <v-list-item-subtitle> Make your life blossom </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group :value="true" no-action prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Quản lí tồn kho</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="({ title, link }, i) in quanlytonkho" :key="i" link>
          <router-link :to="link">
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon> </v-list-item-icon
          ></router-link>
        </v-list-item>
      </v-list-group>
      <!-- <DropDown title="QUẢN LÝ TỒN KHO" :items="quanlytonkho" />
      
        <DropDown title="CẢNH BÁO HÀNG HẾT HẠN" :items="canhbaohanghethan" /> -->
    </v-list>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <!-- 
        <v-list-group :value="true" prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { MenuWarehouse } from "../../utils/menu.js";
export default {
  name: "SideBar",
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    quanlytonkho: MenuWarehouse,
    truyxuat: [
      {
        title: "Theo mã kho",
        link: "/theo-ma-kho",
      },
      {
        title: "Theo nhóm vật tư hàng hóa",
        link: "/theo-vat-tu",
      },
    ],
    canhbaohethang: [
      {
        title: "Cảnh báo mức 1",
        link: "/canh-bao-muc-1",
      },
      {
        title: "Cảnh báo mức 2",
        link: "/canh-bao-muc-2",
      },
      {
        title: "Kiểm tra khả năng",
        link: "/kiem-tra-kha-nang",
      },
    ],
    canhbaohanghethan: [
      {
        title: "Cảnh báo Xử lý",
        link: "/canh-bao-xu-ly",
      },
      {
        title: "Cảnh báo Thanh lý",
        link: "/canh-bao-thanh-ly",
      },
      {
        title: "Kiểm tra khả năng",
        link: "/kiem-tra-kha-nang",
      },
    ],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
.logo-icon {
  padding: 0px 10px;
}
</style>
