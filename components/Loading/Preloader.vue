<template>
  <div class="global-component">
    <NuxtImg class="img-logo-preload" :width="300" alt="logo" src="/logo-brand.D-hX70gZ.png" />
  </div>
</template>
<style scoped>
  .global-component {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 9999;
  }
  .img-logo-preload {
    height: fit-content;
    object-fit: contain;
  }
</style>