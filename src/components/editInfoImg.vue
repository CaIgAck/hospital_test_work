<template>
  <div class="d-flex justify-center mt-7">
    <div class="pr-12 settings">
      <h2 class="mb-12">Настройки</h2>
      <p>Яркость</p>
      <v-slider
        :value="sliders"
        :min="min"
        :max="max"
        @input="set('sliders', $event)"
      ></v-slider>
    </div>
    <div>
      <v-card width="1045" height="900" rounded>
        <v-card-title>Тестирование</v-card-title>
        <strong class="ml-4">Женщина, 19.03.1976</strong>
        <v-img
          width="638"
          height="772"
          class="rounded-lg ma-auto d-flex align-end"
          :style="{
            filter: 'brightness(' + sliders + '%)'
          }"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        >
          <div class="blue ma-auto white--text py-3 d-flex justify-center">
            <strong>10.08.2019</strong>
          </div>
        </v-img>
      </v-card>
    </div>
    <div class="ml-12 settings">
      <h2 class="mb-12">Описание</h2>
      <p>Качество снимка</p>

      <v-radio-group class="mb-12" @change="set('fullVolume', $event)">
        <v-radio label="Radio 1"></v-radio>
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-radio label="Radio 2" v-on="on"></v-radio>
          </template>

          <v-radio-group :value="edit" @change="set('edit', $event)">
            <v-radio label="Radio 3"></v-radio>
            <v-radio label="Radio 4"></v-radio>
          </v-radio-group>
        </v-menu>
      </v-radio-group>
      <v-btn class="primary mt-12" @click="submitDataImg(fullVolume, edit)"
        >Подтвердить</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "editInfoImg",
  computed: {
    ...mapGetters({
      fullVolume: "getFullVolume",
      edit: "getEdit",
      min: "getMinValue",
      max: "getMaxValue",
      sliders: "getSlidersValue"
    })
  },
  methods: {
    set(newField, newValue) {
      return this.$store.commit("editCategoriesInfo", {
        field: newField,
        value: newValue
      });
    },
    submitDataImg(Volume, edit) {
      return this.$store.dispatch("submitDataPhoto", { Volume, edit });
    }
  }
};
</script>

<style scoped>
.settings {
  width: 243px;
}
.contentImg {
  width: 638px;
  height: 772px;
}
</style>
