const types = {
    name: {
        mask: /^[^"!#\$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9]+$/,
        resources: [
            {
                title: "Google",
                href: (q) => `https://www.google.com/search?q="${q}"`
            },
            {
                title: "Example",
                href: "https://example.com"
            }
        ]
    },
    username: {mask: /^[\w.-]+$/},
    email: {mask: /^[\w@.-]+$/},
    phone: {mask: [{mask: "(00) 0000-0000"}, {mask: "(00) 00000-0000"}]},
    cpf: {mask: "000.000.000-00"},
    cnpj: {mask: "00.000.000/0000-00"},
    plate: {
        mask: "###-####",
        definitions: {"#": /[a-zA-Z0-9]/},
        prepare: (str) => str.toUpperCase()
    },
    cep: {mask: "00000-000"},
    ip: {mask: /^[\d:.]+$/}
};

const queryForm = document.querySelector("header form");
const queryInput = document.querySelector("header form input");
const querySelect = document.querySelector("header form select");
const queryMask = IMask(queryInput, types[querySelect.value].mask);
const queryResults = document.querySelector("main");

querySelect.addEventListener("change", () => {
    queryMask.value = "";
    queryMask.updateOptions(types[querySelect.value]);
});

queryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    queryResults.innerHTML = "";
    types[querySelect.value].resources.forEach((resource) => {
        const title = document.createElement("h5");
        title.innerText = resource.title;
        title.className = "mb-0";
        const href = (resource.href instanceof Function) ? resource.href(queryInput.value) : resource.href;
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.innerText = href;
        link.className = "link-secondary stretched-link small";
        const div = document.createElement("div");
        div.className = "my-3 position-relative";
        div.appendChild(title);
        div.appendChild(link);
        queryResults.appendChild(div);
    });
});
