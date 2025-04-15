export const banners: BannerProps[] = [
    {
        id: "1",
        name: "",
        image: "/banners/banner3_1.webp",
        slug: "#",
    },
    {
        id: "2",
        name: "",
        image: "/banners/banner3_2.webp",
        slug: "#",
    },
    {
        id: "3",
        name: "",
        image: "/banners/banner3_3.webp",
        slug: "#",
    },
];

export interface BannerProps {
    id: string;
    name: string;
    image: string;
    slug: string;
}