export const LOCALES = {
  EN: "en",
  PT_BR: "pt-br",
} as const;

export const PT_BR_PREFIX = "/pt-br";

export const ui = {
  en: {
    // nav
    "nav.home": "Home",
    "nav.garden": "Garden",
    "nav.about": "About",
    // home hero
    "home.greeting": "Hello, my name is",
    "home.role": "and I am a",
    "home.job1": "Software Developer",
    "home.job2": "Software Artisan.",
    "home.cta.garden": "Read my digital garden",
    "home.cta.work": "View my work",
    // article layout
    "article.backTo": "Back to",
    "article.updatedIn": "Updated in",
    "article.humanWritten": "Human-written article",
    "article.seeDemo": "See Demo",
    "article.seeRepo": "See Repository",
    "article.prev": "Prev",
    "article.next": "Next",
    "article.toc": "Contents",
    // garden component
    "garden.filter": "Filter",
    "garden.gardenTags": "Digital Garden Tags",
    "garden.showing": "SHOWING",
    "garden.of": "OF",
    "garden.posts": "POSTS",
    "garden.noResults": "No posts match the selected filters.",
    // search
    "search.placeholder": "What are you looking for?",
    "search.results": "Found {count} results for '{query}'",
    // footer
    "footer.backToTop": "Back to top",
    "footer.allSystems": "All systems normal",
    "footer.github.operational": "GitHub operational",
    "footer.github.degraded": "GitHub degraded",
    "footer.github.outage": "GitHub outage",
    "footer.github.loading": "Checking status…",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    // about bio paragraphs
    "about.p1":
      "Software Developer with experience in Front-End Development with React (JavaScript/TypeScript), and also interested in Back-End Development with ASP.NET Core, NodeJS, and Django.",
    "about.p2":
      "I've been working with programming languages like JavaScript, TypeScript, Python, C#, and with frameworks like ReactJS, GatsbyJS, Astro, NodeJS, Django, .NET Core, and spaCy.",
    "about.p3":
      "I am also interested in Generative Syntax and Formal Semantics, and I am experienced in NLP (Natural Language Processing)",
    // lang switcher
    "lang.switchTo": "PT",
    "lang.current": "en",
    "lang.full": "English",
  },
  "pt-br": {
    "nav.home": "Início",
    "nav.garden": "Jardim",
    "nav.about": "Sobre",
    "home.greeting": "Olá, meu nome é",
    "home.role": "e eu sou",
    "home.job1": "Desenvolvedor de Software",
    "home.job2": "Artesão de Software.",
    "home.cta.garden": "Leia meu jardim digital",
    "home.cta.work": "Ver meu trabalho",
    "article.backTo": "Voltar para",
    "article.updatedIn": "Atualizado em",
    "article.humanWritten": "Texto escrito por humano",
    "article.seeDemo": "Ver Demo",
    "article.seeRepo": "Ver Repositório",
    "article.prev": "Anterior",
    "article.next": "Próximo",
    "article.toc": "Conteúdo",
    "garden.filter": "Filtrar",
    "garden.gardenTags": "Tags do Jardim Digital",
    "garden.showing": "MOSTRANDO",
    "garden.of": "DE",
    "garden.posts": "POSTS",
    "garden.noResults": "Nenhum post corresponde aos filtros selecionados.",
    "search.placeholder": "O que você está procurando?",
    "search.results": "Encontrados {count} resultados para '{query}'",
    "footer.backToTop": "Voltar ao topo",
    "footer.allSystems": "Todos os sistemas normais",
    "footer.github.operational": "GitHub operacional",
    "footer.github.degraded": "GitHub degradado",
    "footer.github.outage": "GitHub fora do ar",
    "footer.github.loading": "Verificando status…",
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "about.p1":
      "Desenvolvedor de Software com experiência em Desenvolvimento Front-End com React (JavaScript/TypeScript), e também interessado em Desenvolvimento Back-End com ASP.NET Core, NodeJS e Django.",
    "about.p2":
      "Trabalhei com linguagens de programação como JavaScript, TypeScript, Python, C#, e com frameworks como ReactJS, GatsbyJS, Astro, NodeJS, Django, .NET Core e spaCy.",
    "about.p3":
      "Também me interesso por Sintaxe Gerativa e Semântica Formal, e tenho experiência em NLP (Processamento de Linguagem Natural).",
    "lang.switchTo": "EN",
    "lang.current": "br",
    "lang.full": "Português Brasileiro",
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui.en;
