# ProjetoMuralis

## Introdução

Eu apelidei esse projeto assim por ser um dos desafios propostos pela empresa Muralis Tecnologia. Ele consiste em um cadastro de ingressantes em 3 cursos diferentes, seleção de estado e cidade e um dashboard com as informações sobre os ingressantes e os cadastros feitos.

# Descrição
No dia 02 de Out a Equipe da Muralis me passou esse desafio em React como forma de avaliação para o processo seletivo para a vaga de estagiário onde eu teria até o dia 07 de Out para dar retorno da entrega. E este é o desafio que tive que fazer:

* 1- Construir um formulario que tem tenha o seguinte layout:<br />
<div align='center'>
  <img src="https://github.com/Pokernol/ProjetoMuralis/assets/100011077/ae3aec2b-68d1-43af-b547-a08654085e9f" alt="desafio_formulario" width="300px">
</div>

* 2- O formulario é feito para receber 4 informações sendo elas:<br />
° Nome: Nome do 'aluno' ingressante<br />
° Curso: Um seletor com 3 opções de curso, sendo elas, Matematica, Letras e Geografia.<br />
° Estado: Um seletor com 3 opções de Estado, sendo elas, São Paulo, Rio de Janeiro e Minas Gerais.<br />
° Cidades: Um outro seletor com opções de Cidades de acordo com o estado escolhido, sendo elas:<br />
para São Paulo: Mogi das Cruzes, Suzano, Poá e Guararema - <br />
para Rio de Janeiro: Angra dos Reis, Niterói e Itaboraí -<br />
para Minas Gerais: Belo Horizonte, Monte Azul e Muzambinho.<br /><br />
  
* 3- Construir o Dashboard abaixo:
<div align='center'>
  <img src="https://github.com/Pokernol/ProjetoMuralis/assets/100011077/30387e4b-21b2-408b-8338-299f4d31a065" alt="desafio_dashboard" width="600px">
</div>

<br /><br />

# Índice
=================
   * [Titulo](#projetomuralis)
   * [Descrição](#descrição)
   * [Índice](#índice)
   * [Instalação](#instalação)
     * [React](#react)
     * [Bootstrap](#bootstrap)
     * [ReactStrap](#reactstrap)
     * [Recharts](#recharts)
     * [React-Calendar](react-calendar)
   * [Stack Utilizada](#stack-utilizada)
   * [Funcionalidades](#funcionalidades)
   * [Melhorias](#melhorias)
   * [Aprendizados](#aprendizados)
   * [Agradecimentos](#agradecimentos)
   * [Autor](#autor)

=================

Nas Imagens que terão aqui será para melhor endentimento e compreenção do que é o projeto e ver as funcionalidades. Como essa para uma visualização geral:

<br /><br />
<div align='center'>
  <img src="https://github.com/Pokernol/ProjetoMuralis/assets/100011077/24f4783c-6f0d-4459-8f18-1050e1f1e0fe" alt="Visão Geral do Site" width="700px">
</div>
<br /><br />

## Instalação
Antes de falar mais sobre o projeto é importante falar um pouco sobre as  dependências necessárias para instalar para o funcionamento do site em sua maquina, siga os seguintes passos:

#### React
Pela agilidade na instalação e rodar o projeto resolvi utilizar o "React + vite", então para criar, instalar, e rodar o projeto é necessario usar os comandos abaixo. <br />
1. Criar um novo projeto Vite usando o comando `npm create vite@latest`. <br />
2. Instalar as dependências do projeto usando o comando `npm install`. <br />
3. Iniciar o servidor de desenvolvimento usando o comando `npm run dev`. <br /><br />

#### Bootstrap
O Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. O comando --save é usado para salvar o pacote instalado como uma dependência do projeto.<br /><br />
1. Instale o Bootstrap usando o comando `npm install --save bootstrap`. <br />
2. É importante também, no arquivo principal ('app.jsx') importar o arquivo bootstrap para tudo funcionar: `import 'bootstrap/dist/css/bootstrap.css';` <br /><br />

#### ReactStrap
O reactstrap é um conjunto de componentes React que utilizam o Bootstrap como base para a criação de interfaces de usuário. <br />
1. Instale o Reactstrap, React e React-DOM usando o comando `npm install reactstrap react react-dom`. <br /><br />

#### Recharts
o Recharts é uma biblioteca de gráficos composta e construída com React e D3. O Recharts é usado para criar gráficos de linhas, gráficos de barras, gráficos de pizza, etc. Os componentes do Recharts são declarativos e independentes ou seja você pode criar seus próprios componentes personalizados e reutilizáveis ​​para criar gráficos personalizados. <br />
1. Instale o Recharts usando o comando `npm install recharts`. <br /><br />

#### React Calendar
o React-Calendar é uma biblioteca de calendário para React que permite selecionar dias, meses, anos ou décadas <br />
1. Instale o React Calendar usando o comando `npm i react-calendar`. <br /><br />


## Stack Utilizada

**Front-end:** React+Vite, Bootstrap, Recharts, ReactStrap, React-Calendar


## Funcionalidades

- Modal
- Seleção de Estado Cidade
- Visualização de Incritos


## Melhorias

Nesse ponto sobre melhorias acho pertinente colocar não o que eu melhorei, mas sim o que há de melhorar primeiro, já que essa é a primeira versão do projeto. A melhorias seriam em:

 **Correção de bug do botão modal:** Ao clicar no botão de 'Ingressante' foi programado uma alteração em sua cor após o clique, porem ainda não achei uma maneira de resolver o bug. 

**Integração das informações do Forms ao Grafico e Calendario:** Os dados utilazados são todos mockados, ainda é necessessario guardar as informações colocadas no formularios e apresentar na tela.

**Dados Mockados ao Calendario:** Foi possivel a adesão do Calendario porem ainda sim não achei uma maneira de colocar os dados mockados no Calendario, será uma coisa a trabalhar


## Aprendizados

Durante a construção desse projeto, tive a oportunidade de explorar novas funcionalidades que ainda não havia experimentado, como a junção do React com o Bootstrap. Além disso, pude revisitar a forma como utilizo a sidebar, em vez de me limitar à navbar, como costumo fazer.
Apesar de ter enfrentado algumas dificuldades, como juntar várias bibliotecas e fazê-las conversarem entre si, foi algo que amei fazer, principalmente por ter conhecido novas bibliotecas. Tive a oportunidade de aprender com vários professores diferentes em diferentes vídeos no youtube e duvidas no stack overflow.

## Agradecimentos

Agradeço a Rafaella Ballerini, Guilherme Lima, Paulo Silveira e a Alura por todo conhecimento passado

## Autor

<div align="center">
<a href="https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100011077?v=4" width="100px;" alt="foto do autor"/>
 <br />

[![Linkedin Badge linktree](https://img.shields.io/badge/-Leonardo_Vinícius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/)](https://linktr.ee/pokernol)
[![Linkedin Badge linkedin](https://img.shields.io/badge/-Leonardo_Vinícius-39E09B?style=flat-square&logo=linktree&logoColor=white&link=https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/)](https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/)

</div>

## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de meu Email:

[![Gmail Badge](https://img.shields.io/badge/-Lenardopoke25@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leonardopoke25.com)](mailto:leonardopoke25.com)
