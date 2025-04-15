<template>
  <div class="list-category scrollbar-custom">
    <div class="category-title w-100 d-none align-items-center justify-content-center">
      <b class="text-title text-center">List of item</b>
    </div>
    <div class="category">
      <div class="cate-item cursor-pointer">
        <span class="cate-name fz-lg">PROMOTION</span>
      </div>
    </div>
    <div class="category">
      <div class="cate-item cursor-pointer">
        <span class="cate-name fz-lg">OUR PRODUCTS</span>
        <NuxtImg src="/icon-arrow.svg" alt="" class="img-arrow rotate--90"/>
      </div>
    </div>
    <div class="category">
      <div class="cate-item cursor-pointer">
        <span class="cate-name fz-lg">YEN MARKET MENU</span>
        <NuxtImg src="/icon-arrow.svg" alt="" class="img-arrow rotate--90"/>
      </div>
    </div>
    <div class="category">
      <div class="cate-item cursor-pointer">
        <span class="cate-name fz-lg">SEASONAL</span>
        <NuxtImg src="/icon-arrow.svg" alt="" class="img-arrow rotate--90"/>
      </div>
    </div>
    <div class="cate-lang d-none">
      <NuxtImg class="cursor-pointer" src="https://yenmarket.vn/images/flag-vi.svg" alt=""/>
      <NuxtImg class="cursor-pointer" src="https://yenmarket.vn/images/flag-en.svg" alt=""/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>