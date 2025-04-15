<template>
  <div class="layout-container">
    <UiHeaderNav />
    <PageHome />
  </div>
</template>

<script lang="ts" setup>
useHead(() => ({
  title: 'Prenium Quality',
  meta: [
    {
      name: 'description',
      content: 'Mô tả cửa hàng',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: process.env.NUXT_PUBLIC_BASE_URL,
    }
  ],
}))
definePageMeta({
  layout: 'page',
})
</script>

<style></style>