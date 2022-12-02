<template>
  <div class="banner">
    <v-card>
      <v-system-bar></v-system-bar>
      <v-toolbar flat>
        <v-toolbar-title
          >CẬP NHẬT HÀNG HÓA NHẬP KHO TỪ FILE DỮ LIỆU</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div></div>
      </v-toolbar>
      <v-banner single-line :sticky="sticky">
        Tải lên 1 tệp Excel (***.xlsx)

        <template v-slot:actions>
          <v-btn color="gray">
            <v-file-input placeholder="Chọn file"> </v-file-input>
          </v-btn>
        </template>
      </v-banner>
      <v-card-text class="lighten-4">
        <v-sheet max-width="200" height="50" class="mx-auto card-body">
          <div class="submit-btn">
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              Lưu
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Stock",
  data: () => ({
    sticky: false,
  }),
  methods: {
    ...mapActions(["setTitlePage"]),
  },
  created() {
    this.setTitlePage("Nhap kho");
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.card-body {
  text-align: center;
}
</style>
