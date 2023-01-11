<script setup lang="ts">
import Navbar from '@/views/Navbars.vue'
import Header from '@/views/Header.vue'
import Project from '@/views/Project.vue'
import Telegram from '@/views/Telegram.vue'
import Services from '@/views/Services.vue'
import Target from '@/views/Target.vue'
import Count from '@/views/Count.vue'
import Footer from '@/views/Footer.vue'
</script>
<template>
  <div>
    <div class="bg-white">
      <Navbar />
    <Header />
    <Project />
    <Telegram />
    <Services />
    <Target />
    <Count />
    </div>

    <Footer />
  </div>
</template>