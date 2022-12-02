<template>
    <div class="banner">
    <v-card>
      <v-system-bar></v-system-bar>
      <v-toolbar flat>
        <v-toolbar-title>CẬP NHẬT HÀNG HÓA NHẬP KHO TỪ FILE DỮ LIỆU</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          
        </div>
      </v-toolbar>
      <v-banner
        single-line
        :sticky="sticky"
      >
        Tải lên 1 tệp Excel (***.xlsx)
  
        <template v-slot:actions>
            <v-btn color="gray">
          <v-file-input placeholder="CHỌN FILE">
          </v-file-input>
        </v-btn>
          
        </template>
      </v-banner>
      <v-card-text class="grey lighten-4">
        <v-sheet
          max-width="200"
          height="500"
          class="mx-auto"
        ></v-sheet>
      </v-card-text>
    </v-card>
    </div>
</template>


<script>
export default {
    name: 'NhapKho',
    data: () => ({
        sticky: false,
    }),
}
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: center;
}
</style>