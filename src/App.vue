<template>
  <div id="app">
    <transition name="slide-fade">
      <div class="aside-settings" v-if="currentOpenBlock">
        <button class="aside-settings__close" @click="setCurrentEdit(null)">
          x
        </button>
      </div>
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
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
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
