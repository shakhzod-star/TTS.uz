<script setup lang="ts">
import { ref } from 'vue'
interface Project {
    img: string
    title: string
    subtitle: string
    btn: string
}
const projects = ref([
    {
        img: '/src/assets/img/Project/project1.png',
        title: 'O`zbekcha sintezator',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Batafsil',
    },
    {
        img: '/src/assets/img/Project/project2.png',
        title: 'UzNutq Sintezator',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Batafsil',
    },
    {
        img: '/src/assets/img/Project/project3.png',
        title: '@ttsuzbot Telegram boti',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Xizmatdan foydalanish',
    },
    {
        img: '/src/assets/img/Project/project4.png',
        title: 'TTS.uz API',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',

        btn: 'Xizmatdan foydalanish',
    },
    {
        img: '/src/assets/img/Project/project5.png',
        title: 'Ovozli tarjimon',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Batafsil',
    },
    {
        img: '/src/assets/img/Project/project6.png',
        title: 'Shamchiroq',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Batafsil',
    },
    {
        img: '/src/assets/img/Project/project7.png',
        title: 'Qo‘ng‘iroqlarni buyurtma qilish',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas',
        btn: 'Batafsil',
    },
    {
        img: '/src/assets/img/Project/project8.png',
        title: 'Web TTS',
        subtitle: 'Web TTS loyihasi-internet saytlar va Java Script uchun plagin hisoblanadi. UShbu loyihani o‘rnatish orqali istalgan matn ustiga sichqonchani olib borsangiz, ushbu matnni avtomatik tarzda o‘qib berish uchun maxsus tugma paydo bo‘ladi.',
        btn: 'Batafsil',
    }

])
</script>


<template>
    <div class="max-w-[1440px] mx-auto px-[110px]">
        <div class=" flex items-end justify-between mb-5">
            <div class="mb-[67px]">
                <span class="text-littleBlue font-medium text-[18px] leading-[59px] mb-[15px]">BIZNING LOYIHALAR</span>
                <h2 class="text-darkBlue text-[42px] leading-[46px] font-bold max-w-[462px]">Bizning amalga oshirilgan loyihalarimiz</h2>
            </div>
            <p class="font-light text-[22px] leading-9 max-w-[480px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut
                morbi purus porta proin et quis feugiat. In nascetur at
                neque amet erat. </p>
        </div>
        <div>
          <div class="flex flex-wrap justify-between   ">
            <div class=" even:mt-12" v-for="(item, index) in projects" :key="index">
                <div class=" mb-14  p-[10px] hover:bg-white hover:rounded-[14px] gap-x-12 hover:shadow-[0px_0px_100px_rgba(0,0,0,0.1)]  max-w-[560px]">
                    <img :src="item.img" alt="">
                    <h3 class="mt-[33px]  text-darkBlue font-medium text-[28px] leading-[59px] mb-1">{{ item.title }}</h3>
                    <p class="text-darkBlue font-light text-[17px] leading-[27px] mb-1">{{ item.subtitle }}</p>
                    <button class="flex text-gradientRed font-medium text-[18px] leading-[21px] " > {{ item.btn }}<img class="ml-4" src="/src/assets/icons/Project/rightArrow.svg" alt=""></button>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>