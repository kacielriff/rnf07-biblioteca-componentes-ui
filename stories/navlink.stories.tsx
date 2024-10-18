import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "@/components/navlink";

export default {
    title: "Components/NavLink",
    component: NavLink,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "O componente `NavLink` é utilizado para criar links de navegação com suporte a estilização dinâmica, como para indicar links em um componente de navegação.",
            },
        },
    },
} as Meta;

export const Default: StoryObj = {
    args: {
        label: "Conheça",
    },
    parameters: {
        docs: {
            description: { 
                story: "Este é o exemplo padrão do `NavLink`."
            },
        },
    },
};
