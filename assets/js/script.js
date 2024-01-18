const queryTypes = {
    name: {
        mask: /^[^"!#\$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9]+$/,
        resources: [
            {
                title: "Google",
                link: (q) => `https://www.google.com/search?q="${q}"`
            },
            {
                title: "Processos",
                link: (q) => `https://www.jusbrasil.com.br/consulta-processual/busca?q=${q}`
            },
            {
                title: "Portal da Transparência",
                link: (q) => `https://portaldatransparencia.gov.br/busca?termo=${q}`
            },
            {
                title: "Facebook",
                link: (q) => `https://www.facebook.com/search/people/?q=${q}`
            },
            {
                title: "Instagram",
                link: (q) => `https://www.google.com/search?q=site:instagram.com "${q}"`
            },
            {
                title: "X (Twitter)",
                link: (q) => `https://twitter.com/search?q=${q}`
            },
            {
                title: "LinkedIn",
                link: (q) => `https://www.linkedin.com/search/results/all/?keywords=${q}`
            },
            {
                title: "Domínios",
                link: (q) => `https://www.whoxy.com/search.php?name=${q}`
            },
            {
                title: "Usuários",
                link: () => "https://seintpl.github.io/NAMINT/"
            }
        ]
    },
    username: {
        mask: /^[\w.-]+$/,
        resources: [
            {
                title: "Google",
                link: (q) => `https://www.google.com/search?q="${q}"`
            },
            {
                title: "Facebook",
                link: (q) => `https://www.facebook.com/${q}`
            },
            {
                title: "Instagram",
                link: (q) => `https://www.instagram.com/${q}`
            },
            {
                title: "X (Twitter)",
                link: (q) => `https://twitter.com/${q}`
            },
            {
                title: "TikTok",
                link: (q) => `https://www.tiktok.com/@${q}`
            },
            {
                title: "Tinder",
                link: (q) => `https://tinder.com/@${q}`
            },
            {
                title: "Outros",
                link: () => "https://whatsmyname.app/"
            },
            {
                title: "Darknet",
                link: (q) => `https://ahmia.fi/search/?q=${q}`
            }
        ]
    },
    email: {
        mask: /^[\w@.-]+$/,
        resources: [
            {
                title: "Google",
                link: (q) => `https://www.google.com/search?q="${q}"`
            },
            {
                title: "Conta Google",
                link: () => `https://github.com/mxrch/GHunt`
            },
            {
                title: "Nome e Foto",
                link: () => `https://avatarapi.com/`
            },
            {
                title: "Reputação",
                link: (q) => `https://emailrep.io/${q}`
            },
            {
                title: "Vazamentos",
                link: () => "https://haveibeenpwned.com/"
            }
        ]
    },
    phone: {
        mask: [
            {mask: "(00) 0000-0000"},
            {mask: "(00) 00000-0000"}
        ],
        resources: [
            {
                title: "Google",
                link: (q, m) => `https://www.google.com/search?q="${m}" | "+55${q}" | "55${q}" | "${q}"`
            },
            {
                title: "Operadora e Região",
                link: (q) => `https://www.qualoperadora.net/?telefone=${q}`
            }
        ]
    },
    cpf: {
        mask: "000.000.000-00",
        resources: [
            {
                title: "Google",
                link: (q, m) => `https://www.google.com/search?q="${q}" | "${m}"`
            },
            {
                title: "Situação Cadastral",
                link: () => "https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp"
            },
            {
                title: "Situação Cadastral (Sem Nascimento)",
                link: () => "https://www.situacao-cadastral.com/"
            },
            {
                title: "Processos",
                link: (q) => `https://www.jusbrasil.com.br/consulta-processual/busca?q=${q}`
            }
        ]
    },
    cnpj: {
        mask: "00.000.000/0000-00",
        resources: [
            {
                title: "Google",
                link: (q, m) => `https://www.google.com/search?q="${q}" | "${m}"`
            },
            {
                title: "Situação Cadastral",
                link: () => "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/Cnpjreva_Solicitacao.asp"
            },
            {
                title: "CNPJ BIZ",
                link: (q) => `https://cnpj.biz/${q}`
            }
        ]
    },
    plate: {
        mask: "###-####",
        definitions: {"#": /[a-zA-Z0-9]/},
        prepare: (str) => str.toUpperCase(),
        resources: [
            {
                title: "Google",
                link: (q, m) => `https://www.google.com/search?q="${m}" | "${q}"`
            },
            {
                title: "Olho no Carro",
                link: () => "https://www.olhonocarro.com.br/"
            }
        ]
    },
    cep: {
        mask: "00000-000",
        resources: [
            {
                title: "Google",
                link: (q, m) => `https://www.google.com/search?q="${m}" | "${q}"`
            }
        ]
    },
    domain: {
        mask: /^[\w.-]+$/,
        resources: [
            {
                title: "Google",
                link: (q) => `https://www.google.com/search?q=site:${q}`
            },
            {
                title: "Registro.br",
                link: (q) => `https://registro.br/tecnologia/ferramentas/whois?search=${q}`
            },
            {
                title: "Whois",
                link: (q) => `https://www.whoxy.com/${q}`
            },
            {
                title: "Analytics",
                link: (q) => `https://analyzeid.com/?domain=${q}`
            },
            {
                title: "Web Archive",
                link: (q) => `https://web.archive.org/web/*/${q}`
            },
            {
                title: "Google Cache",
                link: (q) => `https://www.google.com/search?q=cache:${q}`
            },
            {
                title: "Host",
                link: (q) => `https://host.io/${q}`
            },
            {
                title: "Tecnologias",
                link: (q) => `https://builtwith.com/${q}`
            },
            {
                title: "Shodan",
                link: (q) => `https://www.shodan.io/search?query=${q}`
            },
            {
                title: "Rapid DNS",
                link: (q) => `https://rapiddns.io/s/${q}`
            },
            {
                title: "IP Reverso",
                link: () => "https://viewdns.info/reverseip/"
            },
            {
                title: "Registros DNS",
                link: () => "https://hackertarget.com/dns-lookup/"
            }
        ]
    },
    ip: {
        mask: /^[\d:.]+$/,
        resources: [
            {
                title: "Google",
                link: (q) => `https://www.google.com/search?q="${q}"`
            },
            {
                title: "Dados e Localização",
                link: (q) => `https://ipinfo.io/${q}`
            },
            {
                title: "Shodan",
                link: (q) => `https://www.shodan.io/host/${q}`
            },
            {
                title: "Pirataria",
                link: (q) => `https://iknowwhatyoudownload.com/en/peer/?ip=${q}`
            }
        ]
    }
};


const queryForm = document.querySelector("header form");
const queryInput = document.querySelector("header form input");
const querySelect = document.querySelector("header form select");
const queryMask = IMask(queryInput, queryTypes[querySelect.value].mask);
const queryArgs = new URLSearchParams(location.search);
const queryType = queryArgs.get("type");
const queryValue = queryArgs.get("value");
const queryResults = document.querySelector("#content");

querySelect.addEventListener("change", () => {
    queryMask.value = "";
    queryMask.updateOptions(queryTypes[querySelect.value]);
});

if (queryType && queryValue) {
    queryResults.innerHTML = "<h3>Acesso Rápido</h3>";
    querySelect.value = queryType;
    queryMask.updateOptions(queryTypes[queryType]);
    queryMask.value = queryValue;
    queryTypes[queryType].resources.forEach((resource) => {
        const h5 = document.createElement("h5");
        h5.innerHTML = resource.title;
        h5.className = "mb-0";
        const link = resource.link(queryMask.unmaskedValue, queryMask.value);
        const a = document.createElement("a");
        a.href = (new URL(link)).href;
        a.target = "_blank";
        a.innerText = link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/, "").replaceAll(" ", "+");
        a.className = "d-block text-truncate link-secondary stretched-link small";
        const div = document.createElement("div");
        div.className = "my-4 position-relative";
        div.appendChild(h5);
        div.appendChild(a);
        queryResults.appendChild(div);
    });
}
