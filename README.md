# DBC UI - A Biblioteca de Componentes React da DBC

Bem-vindo à **Biblioteca de Componentes DBC**! Esta documentação visa fornecer todas as informações necessárias para o 
uso de componentes desenvolvida para os projetos da DBC. A biblioteca é construída utilizando **React** com 
**TypeScript** e integrada ao **Storybook** para visualização, desenvolvimento e testes de componentes.

## Índice

1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Uso dos Componentes](#uso-dos-componentes)
4. [Executando o Storybook](#executando-o-storybook)
5. [Conclusão](#conclusão)

---

## Introdução

A Biblioteca de Componentes DBC foi criada para facilitar a reutilização de componentes visuais nos projetos da DBC. 
Cada componente é projetado para ser modular, reutilizável, acessível e personalizável, permitindo que desenvolvedores 
integrem facilmente os componentes nos seus projetos.

Essa biblioteca tem como foco a flexibilidade e a consistência visual, além 
de oferecer variações e propriedades de estilo configuráveis para cada componente.

---

## Instalação

Para instalar a biblioteca de componentes DBC em seu projeto, siga os passos abaixo:

1. Instale a biblioteca via NPM:

   ```bash
   npm install dbc-ui-library
   ```

2. Instale as dependências relacionadas ao tema, se necessário:

3. Importe os componentes no seu projeto da seguinte forma:

   ```typescript
   import { Button } from 'dbc-ui-library';
   ```

---

## Uso dos Componentes

### Exemplo de Uso

Cada componente é configurável por meio de props, que permitem a personalização de comportamento e estilo. Veja abaixo 
um exemplo de uso do componente **Button**:

```tsx
import { Button } from 'dbc-ui-library';

export function MyComponent() {
  return (
    <Button label="Clique aqui" onClick={() => console.log('Clicked!')} />
  );
};
```

### Personalização de Estilos

Cada componente permite a customização dos estilos através de props ou classes adicionais com a prop **className**. 
Além disso, você pode estender os estilos utilizando `styled-components`.

---

## Executando o Storybook

O **Storybook** é utilizado para visualizar e testar os componentes em um ambiente isolado. Para rodar o Storybook 
localmente:

1. Clone o projeto que contém o Storybook:
    ```bash
    git clone https://github.com/kacielriff/rnf07-biblioteca-componentes-ui.git
    ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Execute o comando para iniciar o Storybook:
   ```bash
   npm run storybook
   ```

4. O Storybook estará disponível em `http://localhost:6006`.

### Configuração do Storybook

As configurações do Storybook estão localizadas na pasta `.storybook`, onde você pode adicionar novas configurações 
conforme necessário.

---

## Conclusão

Essa documentação oferece uma visão geral da **Biblioteca de Componentes DBC**. Esperamos que você tenha uma 
experiência produtiva utilizando ou contribuindo com essa biblioteca! Para qualquer dúvida ou problema, sinta-se à 
vontade para abrir uma issue ou enviar uma mensagem para a equipe responsável.

**Happy coding!**
