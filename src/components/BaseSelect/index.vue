<script setup lang="ts">
import { onMounted, ref } from 'vue'
const emit = defineEmits(['selectValue'])
const PropsDropdown = defineProps({
  options: {
    type: Array,
    default: [],
  }
})
const active = ref<boolean>(false)
let options = ref<any>([])
options.value = PropsDropdown.options
const selectedLang = ref<any>('')
function selected() {
  active.value = !active.value
}
function clickOption(params: any) {
  selectedLang.value = params
  active.value = false
  emit('selectValue', params)
}
onMounted(() => {
  for (let i = 0; i < options.value.length; i++) {
    selectedLang.value = options.value[0]
  }
})
</script>
<template>
  <div class="select-box">
    <div class="options-container" :class="active ? 'active' : ''">
      <div v-for="option in options" @click="clickOption(option)" :class="option != selectedLang ? 'option' : ''">
        <input v-if="option != selectedLang" type="radio" class="radio" name="category" />
        <img v-if="option != selectedLang" class="w-[36px] h-[36px]" :src="option.img" alt="">
        <label v-if="option != selectedLang" for="automobiles" class="ml-3 text-darkBlue font-medium text-[18px] leading-[20px]">{{
          option.lang
        }}</label>
      </div>
    </div>
    <div class="selected" :class="active ? 'active' : ''" @click="selected">
      <img class="w-[36px] h-[36px]" :src="selectedLang.img" alt="">
      <p class="ml-3 text-darkBlue font-medium text-[18px] leading-[20px]"> {{ selectedLang.lang }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 16px;
}

.select-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.select-box .options-container {
  position: absolute;
  border: 1px solid #e3e3e3;
  border-top: transparent;
  top: 100%;
  z-index: 50;
  background: #fff;
  color: rgba(0, 0, 0, 0.38);
  max-height: 0;
  width: 100%;
  opacity: 0;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  order: 1;

}

.selected {
  background: #fff;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.38);
  position: relative;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
  order: 0;
}

.selected::after {
  content: "";
  background: url("/src/assets/icons/Navbar/dropdown.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 12px;
  width: 12px;
  top: 7px;
  bottom: 0;
  margin: auto 0;
  right: 10px;
  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  overflow-y: auto;
  opacity: 1;

}

.select-box .options-container.active+.selected::after {
  transform: rotateX(180deg);
  top: -1px;
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: transparent;
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  display: flex;
  padding: 8px 16px 8px 9px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 180px;
  cursor: pointer;
  font-size: 15px;

}

.selected {
  box-shadow: 0px 5px 5px rgba(8, 15, 52, 0.04);
  border-radius: 50px;
}

.selected.active {
  border-radius: 20px 20px 0 0;
  border-bottom: #fff;
  background: #EFF0F6;
}

/* .select-box .option:hover {
  background: rgba(0, 0, 0, 0.1);
} */

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

@media(max-width: 640px) {
  .selected {
    padding: 0px;
    padding-left: 16px;
    font-size: 12px;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .selected::after {
    top: 9px;
  }
}
</style>