export const products: ProductProps[] = [
    {
        id: "1",
        name: "Bạch tuộc sốt wasabi (tako wasabi)",
        image: "/products/28ce2d37-5fc8-49ef-8a99-218c4a5b69c302012025043704.jpg",
        slug: "bach-tuoc-sot-wasabi",
        description: "Bạch tuộc tươi với sốt wasabi đặc biệt",
        status: true,
        unit: "Kg",
        price: 702000,
    },
    {
        id: "2",
        name: "Cá hồi Nauy nguyên con tươi (Salmon)",
        image: "/products/Cá-Hồi-Nguyên-con17122024050223.png",
        slug: "ca-hoi-nauy-nguyen-con",
        description: "Cá hồi Nauy tươi nguyên con",
        status: true,
        unit: "Kg",
        price: 618000,
    },
    {
        id: "3",
        name: "Cá hồi Nauy tươi Fillet (Salmon)",
        image: "/products/SP000902-PD00052-WEB_Ca-Hoi-Phi-Le-Phan-Than17122024035448.png",
        slug: "ca-hoi-nauy-fillet",
        description: "Cá hồi Nauy fillet tươi ngon",
        status: true,
        unit: "Kg",
        price: 948000,
    },
    {
        id: "4",
        name: "Đầu cá hồi (Salmon)",
        image: "/products/YSEXTF00728112023114821_S17122024032008.jpg",
        slug: "dau-ca-hoi",
        description: "Đầu cá hồi tươi, thích hợp nấu canh",
        status: true,
        unit: "Kg",
        price: 98000,
    },
    {
        id: "5",
        name: "Trứng cá tuyết tẩm gia vị Mentaiko",
        image: "/products/Trứng-cá-tuyết-tẩm-gia-vị-Mentaiko-80g19122024024928.jpg",
        slug: "trung-ca-tuyet-mentaiko",
        description: "Trứng cá tuyết tẩm gia vị, hộp 80g",
        status: true,
        unit: "Hộp",
        price: 128000,
    },
    {
        id: "6",
        name: "Lườn Cá hồi Nauy tươi (Salmon)",
        image: "/products/Lườn-Cá-hồi-Nauy-tươi-(Salmon)17122024041523.jpg",
        slug: "luon-ca-hoi-nauy",
        description: "Lườn cá hồi Nauy tươi ngon",
        status: true,
        unit: "Kg",
        price: 178000,
    },
    {
        id: "7",
        name: "Xương Cá hồi",
        image: "/products/Xương-cá-Hồi17122024034743.jpg",
        slug: "xuong-ca-hoi",
        description: "Xương cá hồi, dùng nấu nước dùng",
        status: true,
        unit: "Kg",
        price: 58000,
    },
];

export interface ProductProps {
    id: string;
    name: string;
    image: string;
    slug: string;
    description: string;
    status: boolean;
    unit: string;
    price: number;
}