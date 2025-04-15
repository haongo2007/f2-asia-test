<template>
  <div class="header-nav bg-primary position-relative">
    <div class="nav-detail max-width pd-container m-auto">
      <NuxtImg class="cursor-pointer desktop icon-text" src="/images/icon-navige.svg" alt="icon bar" />
      <NuxtImg @click="toggleMobileNav" class="cursor-pointer mobile d-none icon-text" src="/images/icon-navige.svg" alt="icon bar" />
      <span class="fw-bolder fz-lg text-uppercase color-background">List of item</span>
    </div>
    <Transition name="slide">
      <div v-if="isMobileNavOpen" class="mobile-nav category-container pd-container w-100 d-flex align-items-start max-width m-auto">
        <div class="background-overlay" @click="closeMobileNav"></div>
        <UiCategory />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}
</script>

<style>
.mobile-nav {
  height: 100%;
  padding: 0 !important;
  position: fixed;
  top: 0;
  z-index: 550;
}
</style>