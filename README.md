#  OverFinder 🌟
 
Aplicação web desenvolvida em **HTML, CSS e JavaScript puro** para listagem e filtragem dos heróis do jogo **Overwatch 2**, consumindo dados dos personagens através da **OverFast API**.
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
 
 
## Funcionalidades da Aplicação ⚙️
 
- **Listagem Completa de Heróis:** Exibição dos personagens com foto (portrait), nome, função (*role*) e subfunção (*subrole*), obtidos dinamicamente da API.
- **Busca por Nome:** Campo de pesquisa que filtra os heróis exibidos de acordo com o texto digitado.
- **Navegação por Âncoras:** Cabeçalho fixo com links de rolagem suave para as seções Início, Personagens e Rodapé.
- **Design Temático e Responsivo:** Layout customizado inspirado nas cores e identidade visual oficial do Overwatch, com responsividade para desktop, tablet e dispositos móveis.
- **Ícones:** Interface enriquecida com ícones do Font Awesome (busca, LinkedIn, GitHub).

## Cores da Aplicação 🎨

| Cor | Hex | Uso |
|:---:|:---:|:---:|
| ![#218ffe](https://placehold.co/15x15/218ffe/218ffe.png) | `#218ffe` | Fundo geral do site e degradê do banner |
| ![#f99e1a](https://placehold.co/15x15/f99e1a/f99e1a.png) | `#f99e1a` | Cor de destaque (título, hovers, cards, links) |
| ![#43484c](https://placehold.co/15x15/43484c/43484c.png) | `#43484c` | Texto padrão, links, fundo do container de personagens |
| ![#dedede](https://placehold.co/15x15/dedede/dedede.png) | `#dedede` | Fundo do cabeçalho e do rodapé |
| ![#405275](https://placehold.co/15x15/405275/405275.png) | `#405275` | Fundo dos cards de heróis (atrás do portrait) |
| ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) | `#ffffff` | Fundo da barra de pesquisa e borda dos cards |
| ![#000000](https://placehold.co/15x15/000000/000000.png) | `#000000` | Sombras (box-shadow) e texto do parágrafo do banner |

 
## Tecnologias Usadas 🧩
 
- **HTML5:** Estruturação semântica da página.
- **CSS3 Puro:** Estilização customizada com Flexbox, CSS Grid, `@media queries` e fonte personalizada (`@font-face`).
- **JavaScript (Vanilla):** Consumo da API via `fetch`, manipulação do DOM e lógica de filtragem dos heróis.
- **[OverFast API](https://overfast-api.tekrop.fr/):** API RESTful pública para obtenção dos dados atualizados do Overwatch.
- **[Font Awesome](https://fontawesome.com/):** Biblioteca de ícones utilizada via CDN.

 
## Estrutura de Pastas 📁
 
```text
wsFrontend-Fabrica26.2/
├── fonts/
│   └── big_noodle_titling.ttf   # Fonte customizada usada em todo o site
├── img/
│   ├── Overwatch_circle_logo.svg.webp   # Logo exibida no cabeçalho
│   └── Overwatch_game_poster.webp       # Imagem de fundo do banner
├── .gitattributes
├── index.html      # Estrutura principal da página
├── LICENSE
├── README.md
├── script.js       # Consumo da OverFast API e lógica de busca/renderização
└── style.css       # Estilos globais e responsividade
```
 
 
## Como Executar o Projeto Localmente 🖥️
 
Como o projeto é feito em HTML, CSS e JavaScript puro, não é necessário instalar dependências.
 
### Pré-requisitos
 
- Um navegador atualizado (Chrome, Firefox, Edge, etc.).
- **Recomendado**: a extensão **Live Server** (VS Code) para servir os arquivos localmente.
### Passo a passo
 
1. **Clone o repositório:**
```bash
   git clone https://github.com/byrafaelcore/wsFrontend-Fabrica26.2.git
```
2. **Acesse a pasta do projeto:**
```bash
   cd wsFrontend-Fabrica26.2
```
3. **Abra o arquivo `index.html`:**
   - Com Live Server: clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
   - Ou simplesmente abra o arquivo `index.html` diretamente no navegador.
 
##  Consumo da API 📥
 
Os dados dos heróis são obtidos pelo endereço:
 
```
https://overfast-api.tekrop.fr/heroes
```
 
O script `script.js` faz a requisição com `fetch`, cria e renderiza os cards de cada herói (`portrait`, `name`, `role` e `subrole`) e permite filtrar a lista pelo nome digitado na barra de pesquisa.
 
 
##  Créditos 🖇️
 
- Os dados usados foram fornecidos publicamente pela Api OverFast.
- Todos os direitos de imagens, informações dos personagens e marcas pertencem à criadora do Overwatch Blizzard Entertainment.
- Este projeto foi desenvolvido para o processo seletivo da Fábrica de Software 2026.2 para o cargo de desenvolvedor frontend.
- Este projeto está licenciado sob a **Licença MIT**.

## Link da Aplicação 🌐

```
https://ws-frontend-fabrica26-2-mu.vercel.app
```