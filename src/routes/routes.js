import { Children, Component } from "react";
import MainLayout from "../pages/MainLayout";
import HomePage from "../pages/HomePage"
import WikiPage from "../pages/WikiPage"
import CharacterPage from "../pages/CharacterPage";
export const routes = [
    {
        path:"/",
        Component: MainLayout,
        children: [
            {
            index:true,
            Component: HomePage,
            meta:{
                title: "Home",
                inMenu: true
            }

            },
            {
            path: "characters",
            Component: WikiPage,
            meta:{
                title: "Home",
                inMenu: false
            }
            },
            {
                path:"character:id",
                Component: CharacterPage,
                meta:{
                title: "Home",
                inMenu: true
            }
            }
        ]
    }
]