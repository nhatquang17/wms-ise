<!--App.vue = Navbar.vue-->

<template>
    <div id="inspire">
      <v-navigation-drawer permanent
        v-model="drawer"
        app
        style="width: 300px;">
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
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child,index) in item.items"
              :key="index"
            >
            <router-link :to="child.link">{{ child.title }}</router-link>
            </v-list-item>
          </v-list-group>
        </v-list>
    
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>
          LOUTUS GROUP
        </v-toolbar-title>
      </v-app-bar>
    </div>
  </template>
  
  <script>
    export default {
      name: 'SideBar',
      components: {} ,
      data: () => ({ 
        drawer: null,
        items: [
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Cập nhật nhập kho', link: '/nhap-kho' },
            { title: 'Cập nhật xuất kho', link: '/xuat-kho' },
            { title: 'Cập nhật chuyển kho', link: '/chuyen-kho' },
            { title: 'Tồn kho hiện tại', link: '/ton-kho' },
          ],
          title: 'Quản lý tồn kho',
        },
        {
          action: 'mdi-school',
          items: [
            { title: 'Theo mã kho', link: '/theo-ma-kho' },
            { title: 'Theo nhóm vật tư hàng hóa', link: '/theo-vat-tu'},
          ],
          title: 'Truy xuất',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [
          { title: 'Cảnh báo mức 1', link: '/canh-bao-muc-1' },
          { title: 'Cảnh báo mức 2', link: '/canh-bao-muc-2' },
          { title: 'Kiểm tra khả năng', link: '/kiem-tra-kha-nang' },
          ],
          title: 'Cảnh báo hết hàng',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [
          { title: 'Cảnh báo xử lý', link: '/canh-bao-xu-ly' },
          { title: 'Cảnh báo thanh lý', link: '/canh-bao-thanh-ly' },
          { title: 'Kiểm tra khả năng', link: '/kiem-tra-kha-nang' },
          ],
          title: 'Cảnh báo hàng hết hạn',
        },
      ],
      }),
    }
  </script>

  <<style scoped>
  a {
    text-decoration: none;
  }
  #nspire .v-navigation-drawer__content {
    width: 300px;
  }

  </style>