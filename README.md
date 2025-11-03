# Jogo da Memória com Emojis 🧠

Este é um clássico jogo da memória desenvolvido para web, utilizando apenas as tecnologias essenciais: HTML, CSS e JavaScript puro. O objetivo é encontrar todos os pares de emojis no menor tempo possível. O projeto foi criado com um design minimalista e retrô, inspirado em jogos clássicos.

---

## ✨ Funcionalidades

O jogo implementa as seguintes funcionalidades:

-   **Tabuleiro Dinâmico:** As cartas são geradas e embaralhadas aleatoriamente a cada nova partida.
-   **Animação de "Virar":** Efeitos visuais suaves ao clicar nas cartas, proporcionando uma experiência de usuário mais agradável.
-   **Lógica de Pares:** O sistema verifica se duas cartas viradas são iguais. Se forem um par, elas permanecem visíveis; caso contrário, são viradas de volta.
-   **Botão de Reset:** Um botão "RESET GAME" permite que o jogador reinicie a partida a qualquer momento.
-   **Mensagem de Vitória:** Ao encontrar todos os pares, o jogo exibe um alerta de parabéns e oferece a opção de jogar novamente.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando apenas as tecnologias fundamentais da web, sem a necessidade de frameworks ou bibliotecas externas.

-   **HTML5:** Para a estrutura semântica do jogo.
-   **CSS3:** Para a estilização, layout (Grid Layout) e animações.
-   **JavaScript (ES6+):** Para toda a lógica funcional, manipulação do DOM e interatividade.
-   **Google Fonts:** Para a fonte `Press Start 2P`, que confere o visual retrô ao título.

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma para manter o código limpo e modular:
.
├── index.html
├── README.md
└── src/
├── scripts/
│ └── main.js
└── styles/
├── reset.css
└── style.css

-   **`index.html`**: Arquivo principal que contém a estrutura da página.
-   **`src/styles/`**: Pasta que armazena os arquivos de estilização.
    -   `reset.css`: Zera os estilos padrão dos navegadores.
    -   `style.css`: Estilização principal do jogo.
-   **`src/scripts/`**: Pasta que contém a lógica do jogo.
    -   `main.js`: Lógica de criação do tabuleiro, virada de cartas e regras do jogo.

---

## 🚀 Como Executar o Jogo

Como este é um projeto baseado em tecnologias front-end puras, você não precisa de um servidor ou de qualquer processo de compilação.

1.  Clone este repositório (ou baixe os arquivos para o seu computador).
2.  Navegue até a pasta raiz do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! O jogo estará funcionando.

---

## 🎮 Como Jogar

1.  Abra o jogo no seu navegador.
2.  Clique em uma carta para revelar o emoji escondido.
3.  Clique em uma segunda carta para tentar encontrar o par correspondente.
4.  Se os emojis forem iguais, as cartas permanecerão viradas.
5.  Se forem diferentes, elas voltarão a ficar viradas para baixo.
6.  Continue até que todos os pares tenham sido encontrados.
7.  Use o botão **RESET GAME** se quiser começar uma nova partida a qualquer momento.

Divirta-se!
