# Ally Challenge

Esta é a minha solução para o Desafio Parte 2 da seleção de estágio em Desenvolvimento de Software na Ally Hub.

## Sumário

- [Visão Geral](#visão-geral)
  - [O Desafio](#o-desafio)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Fontes utilizadas](#fontes-utilizadas)
- [Meus Links](#meus-links)

## Visão Geral

### O Desafio

Criar uma interface web para marcar Destinos de Interesse.

**Requisitos Obrigatórios:**

- Interface deve ser feita em React.
- O formulário deverá conter os seguintes campos:
    - Nome
    - Email
    - Telefone
    - CPF
    - País
    - Cidade
- Todos os campos devem ser obrigatórios.
- Os campos de País e Cidade devem permitr a seleção de múltiplas opções.
- Os Países e Cidades devem ser preenchidos via API.

### Capturas de tela

-  [Captura de tela versão Mobile](https://raw.githubusercontent.com/igormath/ally-challenge/main/src/assets/ally-challenge.vercel.app_mobile.png)
- [Captura de tela versão Desktop](https://raw.githubusercontent.com/igormath/ally-challenge/main/src/assets/ally-challenge.vercel.app_.png)

### Links

- [URL do deploy na Vercel](https://ally-challenge.vercel.app/)

## Meu processo

### Tecnologias utilizadas

- HTML5 semântico
- CSS "puro"
- Flexbox
- Fluxo Mobile-First
- [React](https://reactjs.org/) - Biblioteca JS

### O que aprendi

Neste projeto, me foi introduzida a tag "select". Num primeiro momento, tentei utilizar a solução nativa do HTML5, obtive até algum sucesso, porém, não consegui adicionar mais de uma opção inline nessa solução.

Foi aí que passei por algumas bibliotecas disponíveis na minha pesquisa, tentando tornar este efeito possível, e após duas tentativas sem sucesso, finalmente encontrei a biblioteca [React Select](https://react-select.com/), que me permitiu selecionar diferentes países e cidades e exibi-los em cada input.

Validação dos campos também foi um desafio novo pra mim. Já conhecia a propriedade HTML required então nos campos Nome, Email, Telefone e CPF o trabalho me foi um pouco menor. Como medidas adicionais, configurei o campo Nome de modo que este apenas receba letras, e para os campos Telefone e CPF adicionei máscaras que, além de auxiliar o usuário no preenchimento destes campos, limitam o tamanho do input. Aqui utilizei a biblioteca externa [React Imask Plugin](https://www.npmjs.com/package/react-imask), também não a conhecia mas achei a utilização bem tranquila, não tive maiores problemas na sua adição ao código./.

### Desenvolvimento contínuo

Pra mim, manipular inputs é sempre complicado dada a miríade de formas diferentes com que o usuário pode interagir com o formulário. Tentar antecipar este comportamento, diminuíndo assim as chances de envio de dados inconsistentes com aquilo que é esperado pelo back-end, é sempre uma tarefa árdua e constante no processo de desenvolvimento. 

Com a participação na resolução deste desafio, me sinto inspirado a continuar empenhado nesse estudo da implementação de interfaces cada vez mais performáticas e com maior prevenção possível de possíveis erros.


### Fontes utilizadas

- [Stackoverflow](https://stackoverflow.com/) - Sempre ele. Tirei dúvidas desde HTML ou CSS puro até a própria biblioteca React, tudo em um só lugar.
- [W3Schools](https://www.w3schools.com/) - Para mim a melhor fonte primária de informações sobre HTML, CSS e Javascript.
- [NPM](https://www.npmjs.com/) - Tantas bibliotecas consultadas... A primeira leitura na documentação de todas as bibliotecas utilizadas nesta resolução vieram daí.

## Meus links

- GitHub - [Igor Matheus](https://github.com/igormath)