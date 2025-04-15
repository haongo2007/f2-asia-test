<template>
  <div class="w-100" id="contentSilder">
    <div class="pt-3 align-items-center msb d-flex overflow-x-auto">
      <div class="effect-ming col-10 col-sm-8 col-md-7 col-lg-4" v-for="banner in banners" :key="banner.id">
        <a class="rounded modal-open position-relative w-100 ratio2by1 has-edge aspect d-block sitdown" :href="banner.slug" :title="banner.name">
          <NuxtImg loading="lazy" class="d-block img img-cover lazy loaded" :src="banner.image" :alt="banner.name"/>
        </a>
			</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { banners } from '~/mockData/banner';

</script>