<template>
  <div class="settings-item">
    <template v-if="setting.filedType === 'input'">
      <label>{{ setting.Name }}:</label>
      <input type="text" v-model="model.currentValue" />
    </template>
    <template v-if="setting.filedType === 'select'">
      <label>{{ setting.Name }}:</label>
      <select v-model="model.currentValue">
        <option
          :selected="item.value === item.currentValue"
          v-for="item in setting.fieldValue"
          :value="item.value"
          >{{ item.label }}</option
        >
      </select>
    </template>
  </div>
</template>

<script>
import { EventBus } from "@/utils/bus";
import { mapState, mapMutations } from "vuex";
export default {
  name: "SettingsItem",
  data() {
    return {
      model: {}
    };
  },
  props: {
    setting: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    currentOpenBlock: {
      handler: function() {
        for (let key in this.setting) {
          this.$set(this.model, key, this.setting[key]);
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(["isUpdateSettings", "currentOpenBlock"])
  },
  methods: {
    ...mapMutations(["updateSettings", "updateSettingsFlag"])
  },
  created() {
    EventBus.$on("save-settings", () => {
      this.updateSettings(this.model);
    });
  },
  mounted() {}
};
</script>
