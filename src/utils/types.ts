import { StaticImageData } from "next/image";

export type Product = {
    id: string;
    name: string;
    tagline: string;
    price: number;
    category: string;
    image: string | StaticImageData;

};