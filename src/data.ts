import React, { createElement } from "react";
import { FaReact ,FaJava ,FaHtml5 ,FaCss3Alt } from "react-icons/fa";
import { SiTypescript ,SiMysql ,SiJavascript } from "react-icons/si";
import { CgMoreO } from "react-icons/cg";
import photo1 from "./assets/Screenshot (13).png";
import photo2 from "./assets/MovieProjectExample.png";

export const skillData = [
    {
        title:"Java",
        icon:React.createElement(FaJava)
    },
    {
        title:"MySQL",
        icon:React.createElement(SiMysql)
    },
    {
        title:"React",
        icon:React.createElement(FaReact)
    },
    {
        title:"Typescript",
        icon:React.createElement(SiTypescript)
    },
    {
        title:"And More",
        icon:React.createElement(CgMoreO),
    },
] as const;

export const projectDetail = [
    {
        name:"Game Hub",
        description:"I have built Game WebApplication which is the mini version of RAWG WebSite",
        link:"https://game-hub-git-main-aniketratan27.vercel.app/",
        techUsed:["React","typescript"],
    },
    {
        name:"Movies",
        description:"Built a mini movie interface using react and react-page",
        link:"https://movies-app-seven-beryl.vercel.app/",
        techUsed:["React"],
    },
    {
        name:"Swadhist",
        description:"Built a mini chat application where in more than two people can communicate",
        link:"",
        techUsed:["Html","Css","javaScript","NodeJs"]
    }
]as const;