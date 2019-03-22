<template>
  <div class="aside-settings">
    <div class="aside-settings-head">
      <h3>Настройки</h3>
      <button class="aside-settings__save" @click="saveSettings" tabindex="0">
        Сохранить
      </button>
      <button
        class="aside-settings__close"
        tabindex="0"
        @click="setCurrentEdit(null)"
        aria-label="close settings"
      >
        x
      </button>
    </div>
    <settings-item
      :setting="item"
      :key="item.blockID"
      :block-id="item.blockID"
      v-for="item in currentOpenBlock.settings"
    >
    </settings-item>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { EventBus } from "@/utils/bus";
import SettingsItem from "@/components/SettingsItem";

export default {
  name: "app-aside",
  components: { SettingsItem },
  computed: {
    ...mapState(["currentOpenBlock"])
  },
  methods: {
    ...mapMutations(["setCurrentEdit"]),
    ...mapActions(["updateSettings"]),
    saveSettings() {
      EventBus.$emit("save-settings");
      setTimeout(() => {
        this.updateSettings();
      }, 0);
      setTimeout(this.setCurrentEdit(null), 0);
    }
  }
};
</script>
