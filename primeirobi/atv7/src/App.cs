* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: #d3d3d3;
    margin: 0;
    padding: 10px;
}

.container-app {
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-areas:
        "cabecalho cabecalho"
        "conteudo lateral"
        "rodape rodape";
    gap: 10px;
}

header {
    grid-area: cabecalho;
    background-color: #ff0000;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    grid-area: conteudo;
    background-color: white;
    padding: 15px;
    border: 1px solid black;
}

aside {
    grid-area: lateral;
    background-color: white;
    padding: 15px;
    border: 1px solid black;
}

footer {
    grid-area: rodape;
    background-color: #ff0000;
    color: white;
    padding: 15px;
    text-align: center;
}

nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin-top: 15px;
}

nav a {
    color: yellow;
    font-weight: bold;
}

img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .container-app {
        grid-template-columns: 1fr;
        grid-template-areas:
            "cabecalho"
            "conteudo"
            "lateral"
            "rodape";
    }

    nav ul {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}