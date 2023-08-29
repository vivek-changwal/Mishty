import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { resize, mishty4, mishty5,mishty6,mishty7,mishty8,mishty9, customer1, customer2, shoe4, shoe5, shoe6, shoe7,} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Pictures" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: resize,
        bigShoe: resize,
    },
    {
        thumbnail: mishty4,
        bigShoe: mishty4,
    },
    {
        thumbnail: mishty5,
        bigShoe: mishty5,
    },
];

export const statistics = [
    { value: '100%', label: 'Energy' },
    { value: '100%', label: 'PlayFullNature' },
    { value: '100%', label: 'Foodie' },
];

export const products = [
    {
        imgURL: mishty6,
        name: "New Jacket",
        price: "Happy",
    },
    {
        imgURL: mishty7,
        name: "3-Months Old",
        price: "Kid",
    },
    {
        imgURL: mishty8,
        name: "Bathing Time",
        price: "Enjoying",
    },
    {
        imgURL: mishty9,
        name: "Cutie",
        price: "Smiling",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Love Travelling",
        subtext: "She Loves To Travel in Car."
    },
    {
        imgURL: shieldTick,
        label: "Fully Active",
        subtext: "She is fully active and permanent security gaurd."
    },
    {
        imgURL: support,
        label: "Love",
        subtext: "Everyone loves her in home."
    },
];



export const footerLinks = [
    {
        title: "MISHTY",
        links: [
            { name: "Happy", link: "/" },
            { name: "Energetic", link: "/" },
            { name: "Loving", link: "/" },
            { name: "Caring", link: "/" },
            { name: "Cute", link: "/" },
            { name: "Beautiful", link: "/" },
        ],
    },
    {
        title: "THANK YOU",
        links: [
            { name: "Thanks", link: "/" },
            { name: "For", link: "/" },
            { name: "Looking", link: "/" },
            { name: "The", link: "/" },
            { name: "Webpage", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "mishty@gmail.com", link: "mailto:customer@mishty.com" },
            { name: "+9999999999", link: "tel:+999999999" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
