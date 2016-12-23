import "./styles/index.css"

const h1 = document.createElement("h1")

h1.innerText = "hmr"

document.body.appendChild(h1)

if (module.hot) module.hot.dispose(() =>
        window.location.reload())
