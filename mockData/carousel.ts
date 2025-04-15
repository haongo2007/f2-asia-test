export const carousel: CarouselProps[] = [
    {
        id: "1",
        name: "",
        image: "/banners/banner-1.webp",
        slug: "#",
    },
    {
        id: "2",
        name: "",
        image: "/banners/banner-8.webp",
        slug: "#",
    },
];

export interface CarouselProps {
    id: string;
    name: string;
    image: string;
    slug: string;
}