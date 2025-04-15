<template>
  <div id="contentBanner" class="banner-container select-none flex-1">
    <div class="_carousel">
      <div class="_carousel-track-container">
        <div class="_carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(banner, index) in carousel" :key="index" class="_carousel-item w-100">
            <NuxtImg loading="lazy" :src="banner.image" :alt="banner.name" />
          </div>
        </div>
      </div>
      <button class="btn-slide prev" @click="moveCarousel(-1)">
        <NuxtImg src="/icon-arrow.svg" alt="" class="rotate-90 icon-white" />
      </button>
      <button class="btn-slide next" @click="moveCarousel(1)">
        <NuxtImg src="/icon-arrow.svg" alt="" class="rotate--90 icon-white" />
      </button>
    </div>
    <div class="_carousel-indicators">
      <span v-for="(banner, index) in carousel" :key="index" class="indicator"
        :class="{ active: currentSlide === index }" @click="moveCarousel(index - currentSlide)"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { carousel } from '~/mockData/carousel';
const currentSlide = ref(0);
let carouselInterval: ReturnType<typeof setInterval> | null = null;

function moveCarousel(direction: number) {
  const totalSlides = carousel.length;
  if (direction === 0) return;
  if (direction > 0) {
    if (currentSlide.value < totalSlides - 1) {
      currentSlide.value = currentSlide.value + 1
    } else {
      currentSlide.value = 0
    }
  } else {
    if (currentSlide.value > 0) {
      currentSlide.value = currentSlide.value - 1
    } else {
      currentSlide.value = totalSlides - 1;
    }
  }
}

onMounted(() => {
  carouselInterval = setInterval(() => moveCarousel(1), 3000);
});

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval);
});
</script>