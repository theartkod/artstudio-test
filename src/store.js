import Vue from "vue";
import Vuex from "vuex";
import { saveSettings } from "@/api/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentOpenBlock: null,
    blocks: [
      {
        blockID: 1,
        bName: "Желтый блок",
        bColor: "yellow",
        bText:
          "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
        settings: [
          {
            ID: 34,
            Name: "Ширина",
            stringType: "int",
            filedType: "input",
            currentValue: "400",
            fieldSize: 4
          },
          {
            ID: 35,
            Name: "Высота",
            stringType: "int",
            filedType: "input",
            currentValue: "500",
            fieldSize: 4
          }
        ]
      },
      {
        blockID: 2,
        bName: "Розовый блок",
        bColor: "pink",
        bText:
          "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
        settings: [
          {
            ID: 36,
            Name: "Скрытое",
            stringType: "str",
            filedType: "select",
            currentValue: false,
            fieldValue: [
              {
                label: "Да",
                value: true
              },
              {
                label: "Нет",
                value: false
              }
            ],
            fieldSize: 4
          }
        ]
      }
    ]
  },
  mutations: {
    setCurrentEdit(state, block) {
      state.currentOpenBlock = block;
    },
    updateSettings(state, settings) {
      state.currentOpenBlock.settings.forEach((item, index) => {
        if (settings.ID === item.ID) {
          state.currentOpenBlock.settings.splice(index, 1, settings);
        }
      });
    },
    updateText(state, { id, newText }) {
      state.blocks.find(item => item.blockID === id).bText = newText;
    }
  },
  actions: {
    async updateSettings({ state }) {
      await saveSettings(state.blocks);
    }
  }
});
