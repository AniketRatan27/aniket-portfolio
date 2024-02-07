import React from "react";
import { FaReact ,FaJava} from "react-icons/fa";
import { SiTypescript ,SiMysql } from "react-icons/si";
import { CgMoreO } from "react-icons/cg";


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