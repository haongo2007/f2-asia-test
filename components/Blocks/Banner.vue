<template>
  <div>
    <div class="w-100 d-flex align-items-start position-relative">
      <UiCategory v-if="width >= 768"/>
      <UiCarousel/>
    </div>
    <UiBottomBanner/>
  </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
</script>