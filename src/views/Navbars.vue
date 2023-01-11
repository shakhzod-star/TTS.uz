<script setup lang="ts">
import { ref } from 'vue';
import BaseSelect from '../components/BaseSelect/index.vue'

const languages: any = ref([
    {
        img: `/src/assets/img/Navbar/uzb.png`,
        lang: 'O`zbekcha'

    },
    {
        img: '/src/assets/img/Navbar/rus.png',
        lang: 'Русский '
    },
    {
        img: '/src/assets/img/Navbar/eng.png',
        lang: 'English'
    }
])

</script>

<template>
    <div class="flex items-center pt-[28px] mb-4  justify-between max-w-[1440px] px-[120px] mx-auto">
        <div>
            <img src="/src/assets/img/Navbar/logo.png" alt="">
        </div>
        <ul class="flex items-center  z-10">
            <li class=" cursor-pointer mr-[50px] before:content-[''] before:w-0 before:hover:w-full before:h-[2px] before:left-0 before:top-[calc(100%+2px)]
                     before:rounded-[2px] before:absolute relative before:bg-gradientRed before:transition-[0.5s]"> <a
                    class="font-regular text-[18px] leading-5  text-darkBlue " href="">Bosh sahifa</a> </li>
            <li class=" mr-[50px] before:content-[''] before:w-0 before:hover:w-full before:h-[2px] before:left-0 before:top-[calc(100%+2px)]
                     before:rounded-[2px] before:absolute relative before:bg-gradientRed before:transition-[0.5s]"> <a
                    class="font-regular text-[18px] leading-5  text-darkBlue " href="">Loyihalar</a> </li>
            <li class=" mr-[50px] before:content-[''] before:w-0 before:hover:w-full before:h-[2px] before:left-0 before:top-[calc(100%+2px)]
                     before:rounded-[2px] before:absolute relative before:bg-gradientRed before:transition-[0.5s]"> <a
                    class="font-regular text-[18px] leading-5  text-darkBlue " href="">
                    API </a></li>
            <li class=" mr-[50px] before:content-[''] before:w-0 before:hover:w-full before:h-[2px] before:left-0 before:top-[calc(100%+2px)]
                     before:rounded-[2px] before:absolute relative before:bg-gradientRed before:transition-[0.5s]"> <a
                    class="font-regular text-[18px] leading-5  text-darkBlue " href="">Sohalar</a> </li>
            <li class="before:content-[''] before:w-0 before:hover:w-full before:h-[2px] before:left-0 before:top-[calc(100%+2px)]
                     before:rounded-[2px] before:absolute relative before:bg-gradientRed before:transition-[0.5s]"> <a
                    class="font-regular text-[18px] leading-5  text-darkBlue " href="">Statistika</a></li>
        </ul>
        <div class="flex items-center ">
            <div class="mr-4">
                <BaseSelect :options="languages" />
            </div>
            <button
                class="py-[14px] px-12 border-2 border-solid rounded-[1000px] border-gradientRed text-gradientRed  hover:bg-gradient-to-r hover:from-[#F92B74] hover:to-[#FB4C59] hover:text-white ">
                Kirish
            </button>
        </div>

    </div>
</template>