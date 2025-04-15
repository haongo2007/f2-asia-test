<template>
  <div class="item-info">
    <div class="item-function">
      <div class="item-img cursor-pointer" @click="navigateToProduct(product.name)">
        <NuxtImg loading="lazy" :src="product.image" :alt="product.name" />
      </div>
      <div class="group-quantity">
        <div class="btn-plus bg-primary" @click="addToCart(product)">
          <NuxtImg class="icon-white w-100" src="/images/icon-cart.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="item-name">
      <span class="span-name cursor-pointer hover-primary limit-line-2 fw-bolder fz-lg color-text"
        @click="navigateToProduct(product.name)">
        {{ product.name }}
      </span>
      <div class="item-price">
        <span class="span-price cursor-pointer color-primary fw-bold">
          {{ formatPrice(product.price) }}
        </span>
        <span class="span-price cursor-pointer color-primary">
          /{{ product.unit }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductProps } from '~/mockData/products';
defineProps<{product: ProductProps}>()

// Hàm định dạng giá
function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}

// Hàm điều hướng đến trang sản phẩm
function navigateToProduct(name: string) {
  const slug = name.trim().replace(/\s+/g, '-').toLowerCase();
  navigateTo(`/item/${encodeURIComponent(slug)}`);
}

// Hàm thêm vào giỏ hàng (giả lập)
function addToCart(product: ProductProps) {
  console.log(`Thêm ${product.name} vào giỏ hàng`);
  // TODO: Thêm logic giỏ hàng thực tế
}
</script>