<template>
  <div id="app">
    <transition name="slide-fade">
      <app-aside v-if="currentOpenBlock" />
    </transition>
    <div class="container">
      <div
        class="block-item"
        :class="`block-item--${block.bColor}`"
        v-for="block in blocks"
      >
        <button
          tabindex="0"
          @click="openSettings(block)"
          class="block-item__button"
        >
          Настройки
        </button>
        <p
          class="block-item__text"
          contenteditable
          @input="handeInput($event, block.blockID)"
        >
          {{ block.bText }}
        </p>
      </div>
      <button class="update" aria-label="Update" title="Выгрузить посты">
        <img src="./assets/icons8-upload-to-the-cloud.svg" alt="cloud" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppAside from "@/components/AppAside";

export default {
  name: "app",
  components: { AppAside },
  computed: {
    ...mapState(["blocks", "currentOpenBlock"])
  },
  methods: {
    ...mapMutations(["setCurrentEdit", "updateText"]),
    openSettings(block) {
      this.setCurrentEdit(block);
    },
    handeInput(e, id) {
      this.updateText({ id, newText: e.target.innerText });
    }
  }
};
</script>

<style lang="postcss">
@import "./assets/styles/main.pcss";
</style>
