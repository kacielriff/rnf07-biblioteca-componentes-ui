import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button";

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "O componente `Button` é um botão reutilizável que pode ser estilizado de várias formas, incluindo variações de layout como 'contained' e 'outlined'. Ele suporta personalização de cores, estado desabilitado, e pode ser usado em diferentes contextos, como formulários.",
            },
        },
    },
} as Meta;

export const Contained: StoryObj = {
    args: {
        label: "Entre em contato",
        onClick: () => console.log("Enviado"),
        type: "submit",
    },
    parameters: {
        docs: {
            description: {
                story: "Este é o exemplo de um botão do tipo `contained`, ideal para ações primárias como enviar um formulário.",
            }
        },
    },
};

export const Outlined: StoryObj = {
    args: {
        variant: "outlined",
        label: "Entre em contato",
        onClick: () => console.log("Enviado"),
        labelColor: "#004BF5",
        borderColor: "#004BF5",
        focusColor: "#F2F2F2",
    },
    parameters: {
        docs: {
            description: {
                story: "Este exemplo mostra um botão `outlined`, que tem bordas visíveis e um estilo mais discreto, frequentemente usado em ações secundárias.",
            }
        },
    },
};

export const Disabled: StoryObj = {
    args: {
        label: "Entre em contato",
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: "Este exemplo demonstra um botão desabilitado, onde a interação está bloqueada.",
            }
        },
    },
};
