<template>
  <div class="header-content pd-container w-100 max-width d-flex align-items-center justify-content-between">
    <div class="img-brand select-none">
      <NuxtImg src="/logo-brand.D-hX70gZ.png" alt="Yến Market" />
    </div>
    <div class="header-find">
      <div class="group-find"><input type="text" class="style-input fz-lg" placeholder="Tìm kiếm">
        <NuxtImg class="cursor-pointer" src="/images/icon-find.svg" alt="search icon"/>
      </div>
    </div>
    <div class="header-hotline select-none">
      <NuxtImg class="cursor-pointer icon-primary" src="/images/icon-hotline.svg" alt="hot line icon"/>
      <span class="span-hotline gap-1 d-flex flex-column cursor-pointer">
        <span class="fz-md fw-bold">Hotline</span>
        <span class="fz-md fw-bold">1900 066 890</span>
      </span>
    </div>
    <div class="header-user select-none">
      <NuxtImg class="cursor-pointer icon-primary" src="/images/icon-user.svg" alt="account user"/>
      <span class="span-user gap-1 d-flex flex-column cursor-pointer">
        <span class="fz-md fw-bold">Hi, </span>
        <span class="fz-md fw-bold">Đăng nhập</span>
      </span>
    </div>
    <div class="header-right select-none">
      <div class="btn-cart p-1 cursor-pointer">
        <NuxtImg class="cursor-pointer icon-primary" src="/images/icon-cart.svg" alt="cart user"/>
      </div>
      <div class="header-lang">
        <NuxtImg class="cursor-pointer" src="/images/flag-vi.svg" alt="vi flag"/>
        <NuxtImg class="cursor-pointer" src="/images/flag-en.svg" alt="en flag"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>