import React from "react";
import { FaHome, FaUser, FaRegFileAlt } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
export const links = [
  {
    id: 1,
    text: "home",
    icon: <BiHome />,
    url: "/",
  },
  {
    id: 2,
    text: "about",
    icon: <AiOutlineUser />,
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    icon: <AiOutlineFundProjectionScreen />,
    url: "/projects",
  },
  {
    id: 4,
    text: "resume",
    icon: <FaRegFileAlt />,
    url: "/resume",
  },
];

export const projects = [
  {
    img: "../assets/myproject/shopee.jpg",
    title: "shopee",
    description: "HTML, CSS",
    gitLink: "https://github.com/mynguyen98/shopee-clone",
    demoLink: "https://github.com/",
  },
  {
    img: "../assets/myproject/lux-stay.jpg",
    title: "luxstay",
    description: "HTML, CSS",
    gitLink: "https://github.com/mynguyen98/luxstay-clone",
    demoLink: "https://github.com/",
  },
  {
    img: "../assets/myproject/forkify-app.jpg",
    title: "forkify",
    description: "HTML, CSS, Javascript",
    gitLink: "https://github.com/",
    demoLink: "https://github.com/",
  },
  {
    img: "../assets/myproject/nhaccuatui.jpg",
    title: "nhaccuatui",
    description: "HTML, CSS, Javascript",
    gitLink: "https://github.com/mynguyen98/nhaccuatui-app",
    demoLink: "https://github.com/",
  },
  {
    img: "../assets/myproject/comfy-sloth.jpg",
    title: "comfy-sloth",
    description: "ReactJS",
    gitLink: "https://github.com/mynguyen98/comfy-sloth-reactjs",
    demoLink: "https://github.com/",
  },
  {
    img: "../assets/myproject/portfolio.jpg",
    title: "Portfolio",
    description: "ReactJS",
    gitLink: "https://github.com/mynguyen98/my-portfolio",
    demoLink: "https://github.com/",
  },
];
