align-self
align-items
justify-content
flex-direction 1°
flex-wrap 2°
flex-flow: 
align-content: This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

justify-content
align-items
flex-direction
order
align-self
flex-wrap
flex-flow
align-content


html, body {
    height: 100%; /* Garante que o body ocupe 100% da altura da tela */
    margin: 0; /* Remove margens padrão do body */
    display: flex; /* Aplica o Flexbox no body */
    align-items: center; /* Alinha os elementos verticalmente no centro */
    justify-content: center; /* Alinha os elementos horizontalmente no centro */
}

h1 {
    background-color: blue; /* Cor de fundo azul */
    padding: 20px; /* Espaçamento interno */
    color: white; /* Cor do texto */
}

body{
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}