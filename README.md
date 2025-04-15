# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

# Link bài test:  http://107.155.65.77:3008

# Câu hỏi: Nếu API trả về chậm, bạn sẽ debug và tối ưu cách nào để cải thiện tốc độ load?
# DEBUG 
Trước tiên cần hiểu rõ vấn đề API trả về chậm là do ở đâu Backend hay Frontend
1. Nếu nằm ở backend thì sẽ rà soát code backend và kiểm tra dữ liệu database đã tối ưu chưa vd:(index,partition,relation ship,caching data...)
2. Nếu nằm ở Frontend thì cầm kiểm tra công cụ debug như debtool xem có phải tab network conditions có đang set slow hay không,
và kiểm tra code ở frontend có đang giả lập preload hay không, check các vị trí fetch data có đang trùng lặp api call không.
# OPTIMIZE
có rất nhiều cách optimize VD: caching,CDN,lazy load,

1. Caching backend server redis,memcache,optize database (đánh index, đánh partition nếu dữ liệu lớn, tối ưu hóa câu truy vấn)
2. Chúng ta có thể sử dụng cdn để lưu trữ các tệp css,js để browser tự cache
3. Nuxtjs sử dụng revalidate để cache các file tĩnh sau render
4. tối ưu hóa các tài nguyên assets như (image,fonts..) giảm kích thước image lại, chuyển dạng ảnh png,jpg sang dạng webp
5. minify nén các file js,css để giảm kích thước các tệp js,css
6. sử dụng lazy loading để hạn chế tài nguyên tải trước khi tài nguyên đó chưa được người dùng kéo tới
