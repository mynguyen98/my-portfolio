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
    tech: "HTML, CSS",
    title: "shopee",
    description: `this project build along with the course HTML, CSS, with fully responsive on all devices`,
    gitLink: "https://github.com/mynguyen98/shopee-clone",
    demoLink: "https://shopee-page-mynguyen.netlify.app",
  },
  {
    img: "../assets/myproject/lux-stay.jpg",
    tech: "HTML, CSS",
    title: "luxstay",
    description:
      "Luxstay clone is the project I built after finish HTML,CSS course, fully responsive on all devices \n \n",
    gitLink: "https://github.com/mynguyen98/luxstay-clone",
    demoLink: "https://mynguyen-luxstay.netlify.app",
  },
  {
    img: "../assets/myproject/forkify-app.jpg",
    tech: "HTML, CSS, JavaScript",
    title: "forkify",
    description:
      "this project build along with the course javascript. Has key feature such as search for ingredients of a dish, save search history, add to Bookmark and add your own recipe",
    gitLink: "https://github.com/",
    demoLink: "https://mynguyen-forkify.netlify.app",
  },
  {
    img: "../assets/myproject/nhaccuatui.jpg",
    tech: "HTML, CSS, JavaScript",
    title: "nhaccuatui",
    description:
      "main features are render songs and albums with all basic playing music function. Searching songs, albums, artists. Add songs to love song list \n",
    gitLink: "https://github.com/mynguyen98/nhaccuatui-app",
    demoLink: "https://nhaccuatui-mynguyen.netlify.app",
  },
  {
    img: "../assets/myproject/comfy-sloth.jpg",
    tech: "ReactJS, CSS, Styled Components",
    title: "comfy-sloth",
    description:
      "This project is the ecommerce website selling furniture. This project has key features such as: fully responsive, register, login, logout, filter products,......",
    gitLink: "https://github.com/mynguyen98/comfy-sloth-reactjs",
    demoLink: "https://comfy-sloth-mynguyen.netlify.app",
  },
  {
    img: "../assets/myproject/portfolio.jpg",
    tech: "ReactJS, React Bootstrap, Styled Component",
    title: "Portfolio",
    description:
      "This project list all information about me and all of my projects that I build. \n \n",
    gitLink: "https://github.com/mynguyen98/my-portfolio",
    demoLink: "https://mynguyen-portfolio.netlify.app/",
  },
];
