<template>
    <div class="list-subcategory">
        <div class="subcate-item w-100 d-flex flex-column">
            <div class="img-banner w-100">
                <!-- Có thể thêm banner nếu cần -->
            </div>
            <span class="subcate-name fz-xxl color-title fw-bold">Cá và hải sản</span>
            <div class="list-item">
                <div v-for="product in products" :key="product.id">
                    <CardsProduct :product="product"/>
                </div>
            </div>
            <div class="btn-seemore w-100 d-flex align-items-center justify-content-center">
                <div class="style-button">
                    <p class="confirm radius-100px" @click="navigateToMenu">
                        See all
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { products as mockProducts, type ProductProps } from '~/mockData/products';

// Lấy dữ liệu sản phẩm bằng useAsyncData cho SSR
const { data: products, error } = await useAsyncData<ProductProps[]>('products', () => {
    return Promise.resolve(mockProducts);
});

// Hàm điều hướng đến menu
function navigateToMenu() {
    navigateTo('/menu');
}

// Xử lý lỗi
if (error.value) {
    console.error('Lỗi khi lấy sản phẩm:', error.value);
}
</script>