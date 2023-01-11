<script setup lang="ts">
import { onMounted, ref } from 'vue'
interface Counters {
    img: string
    number: string
    title: string
}
const counters: any = ref([
    {
        img: '@/assets/img/Count/count1.png',
        number: '648 000+',
        title: 'Foydalanuvchilar soni'
    },
    {
        img: '@/assets/img/Count/count2.png',
        number: '90 mln+',
        title: 'Foydalanuvchilar soni'
    },
    {
        img: '@/assets/img/Count/count3.png',
        number: '10+',
        title: 'Mijozlarlar soni'
    }
])



</script>


<template>
    <div ref="counter" class="flex max-w-[1440px] mx-auto justify-around my-[100px]">
        <div v-for="(item, index) in counters" :key="index">
            <div class="flex flex-col items-center">
                <img class="mb-5" :src="item.img" alt="">
                <h2 class="text-4xl font-bold text-darkBlue mb-2">{{ item.number }}</h2>
                <p class="font-light text-[20px] leading-[42px]">{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>