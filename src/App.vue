<!--App.vue = Navbar.vue-->

<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent
      v-model="drawer"
      app>
      <v-list-item >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            LOUTUS GROUP
          </v-list-item-title>
          <v-list-item-subtitle>
            Make your life blossom
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <DropDown title="QUẢN LÝ TỒN KHO" :items="quanlytonkho" />
          <DropDown title="TRUY XUẤT" :items="truyxuat" />
          <DropDown title="CẢNH BÁO HẾT HÀNG" :items="canhbaohethang" />
          <DropDown title="CẢNH BÁO HÀNG HẾT HẠN" :items="canhbaohanghethan" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        LOUTUS GROUP
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
import DropDown from './components/Dropdown.vue'
  export default {
    components: { DropDown },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
      quanlytonkho: [
          {
            title: 'Cập nhật Nhập kho',
            link: '/nhap-kho'
          },
          {
            title: 'Cập nhật Xuất kho',
            link:'/xuat-kho'
          },
          {
            title: 'Cập nhật Chuyển kho',
            link: '/chuyen-kho'
          },
          {
            title: 'Tồn kho Hiện tại',
            link: '/ton-kho' 
          }
      ], 
      truyxuat: [
          {
            title: 'Theo mã kho',
            link: '/theo-ma-kho'
          },
          {
            title: 'Theo nhóm vật tư hàng hóa',
            link:'/theo-vat-tu'
          }
      ],
      canhbaohethang: [
          {
            title: 'Cảnh báo mức 1',
            link: '/canh-bao-muc-1'
          },
          {
            title: 'Cảnh báo mức 2',
            link:'/canh-bao-muc-2'
          },
          {
            title: 'Kiểm tra khả năng',
            link: '/kiem-tra-kha-nang'
          }

      ],
      canhbaohanghethan: [
          {
            title: 'Cảnh báo Xử lý',
            link: '/canh-bao-xu-ly'
          },
          {
            title: 'Cảnh báo Thanh lý',
            link:'/canh-bao-thanh-ly'
          },
          {
            title: 'Kiểm tra khả năng',
            link: '/kiem-tra-kha-nang'
          }
      ],
    }),
  }
</script>