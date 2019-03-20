import Vue from "vue";
import Vuex from "vuex";

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
            fieldValue: "600",
            fieldSize: 4
          },
          {
            ID: 35,
            Name: "Высота",
            stringType: "int",
            filedType: "input",
            fieldValue: "500",
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
            ID: 34,
            Name: "Ширина",
            stringType: "int",
            filedType: "input",
            fieldValue: "600",
            fieldSize: 4
          },
          {
            ID: 35,
            Name: "Высота",
            stringType: "int",
            filedType: "input",
            fieldValue: "500",
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
    updateText(state, { id, newText }) {
      state.blocks.forEach(item => {
        if (item.blockID === id) {
          item.bText = newText;
        }
      });
    }
  },
  actions: {}
});
