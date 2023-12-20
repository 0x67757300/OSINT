const masks = {
    'name': {mask: /^[^"!#\$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9]+$/},
    'username': {mask: /^[\w.-]+$/},
    'email': {mask: /^[\w@.-]+$/},
    'phone': {mask: [{mask: "(00) 0000-0000"}, {mask: "(00) 00000-0000"}]},
    'cpf': {mask: "000.000.000-00"},
    'cnpj': {mask: "00.000.000/0000-00"},
    'plate': {
        mask: "###-####",
        definitions: {"#": /[a-zA-Z0-9]/},
        prepare: (str) => str.toUpperCase()
    },
    'cep': {mask: "00000-000"},
    'ip': {mask: /^[\d:.]+$/}
}

const form = document.querySelector("form")
const formInput = document.querySelector("form input")
const formSelect = document.querySelector("form select")
const mask = IMask(formInput, masks[formSelect.value].mask)

formSelect.addEventListener("change", () => {
    mask.value = ""
    mask.updateOptions(masks[formSelect.value])
})
