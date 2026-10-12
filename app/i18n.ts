export const locales = ["en", "es", "pt", "ja"] as const;
export const localizedLocales = ["es", "pt", "ja"] as const;

export type Locale = (typeof locales)[number];
export type LocalizedLocale = (typeof localizedLocales)[number];

export type Translation = {
  languageLabel: string;
  nav: {
    creators: string;
    clients: string;
    research: string;
    value: string;
    status: string;
  };
  hero: {
    eyebrow: string;
    beforeHighlight: string;
    highlight: string;
    afterHighlight: string;
    description: string;
    cta: string;
    whyLink: string;
  };
  workflow: {
    label: string;
    steps: string[];
  };
  creators: {
    label: string;
    heading: string;
    benefits: string[];
  };
  clients: {
    label: string;
    heading: string;
    benefits: string[];
  };
  why: {
    label: string;
    problem: string;
    proposal: string;
  };
  research: {
    label: string;
    heading: string;
    description: string;
    totalLabel: string;
    makersLabel: string;
    buyersLabel: string;
    interviews: {
      role: string;
      context: string;
      channel: string;
      insight: string;
    }[];
  };
  empathy: {
    label: string;
    heading: string;
    description: string;
    personas: {
      name: string;
      summary: string;
      items: { label: string; text: string }[];
    }[];
  };
  value: {
    label: string;
    heading: string;
    description: string;
    pillars: { number: string; title: string; text: string }[];
    promiseLabel: string;
    promise: string;
  };
  ai: {
    label: string;
    headingFirst: string;
    headingSecond: string;
    description: string;
    features: string[];
    planned: string;
  };
  closing: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  footerStatus: string;
};

export const translations: Record<Locale, Translation> = {
  en: {
    languageLabel: "Choose language",
    nav: {
      creators: "Creators",
      clients: "Clients",
      research: "Research",
      value: "Value",
      status: "MVP in development",
    },
    hero: {
      eyebrow: "Founded 2026 · Early-stage startup · MVP in development",
      beforeHighlight: "The marketplace built for ",
      highlight: "furry creators",
      afterHighlight: " and their clients.",
      description:
        "Discover artists and fursuit makers, organize commissions, and keep communication, project details and progress in one place.",
      cta: "Coming soon",
      whyLink: "Why Furrify",
    },
    workflow: {
      label: "Planned workflow",
      steps: ["Discover", "Brief", "Collaborate", "Complete"],
    },
    creators: {
      label: "For creators",
      heading: "Make your work easier to discover—and commissions easier to run.",
      benefits: [
        "Showcase your work",
        "Manage commission requests",
        "Keep project details organized",
        "Build trust with clients",
      ],
    },
    clients: {
      label: "For clients",
      heading: "Find the right creator and stay close to every step of the work.",
      benefits: [
        "Discover creators",
        "Compare portfolios",
        "Structure commission requests",
        "Follow project progress",
      ],
    },
    why: {
      label: "Why Furrify",
      problem:
        "Commission workflows today are fragmented across social media, messaging apps and payment platforms.",
      proposal:
        "Furrify is being built to bring discovery, portfolios, requests, communication, project tracking, payments and history together.",
    },
    research: {
      label: "User research",
      heading: "Eight conversations. One fragmented process.",
      description:
        "We spoke with makers and experienced buyers to understand how commissions are discovered, agreed, paid for and delivered.",
      totalLabel: "interviews",
      makersLabel: "makers",
      buyersLabel: "buyers",
      interviews: [
        { role: "Maker 01", context: "2 years making fursuits", channel: "Facebook · Instagram · X", insight: "Needs a single, simple catalog for work, materials, policies and examples." },
        { role: "Maker 02", context: "8–9 years of experience", channel: "Facebook · conventions · referrals", insight: "Late payments affect daily operations and access to professional equipment." },
        { role: "Maker 03", context: "Active since 2013", channel: "Facebook · Instagram · X", insight: "International work makes communication, logistics and payment records essential." },
        { role: "Maker 04", context: "12 years making fursuits", channel: "Word of mouth · Instagram · Facebook", insight: "AI-generated references are often inconsistent; managing several suits, extra costs and payment options requires clarity." },
        { role: "Buyer 01", context: "Mostly commissions art", channel: "X · Discord · Facebook", insight: "Wants delivery estimates, revision rules, payment options and queue position before paying." },
        { role: "Buyer 02", context: "Furhead, apparel and collectibles", channel: "Groups · Telegram · referrals", insight: "Looks for verified reviews, clear packages and terms that prevent surprise costs." },
        { role: "Buyer 03", context: "Commissions art", channel: "Facebook", insight: "Values direct contact, steady communication and clarity around correction fees." },
        { role: "Buyer 04", context: "Digital art, YCHs and custom figures", channel: "Facebook · Instagram", insight: "Prefers split payments after bad experiences and wants visible work-in-progress updates." },
      ],
    },
    empathy: {
      label: "Empathy map",
      heading: "Two sides of the same commission.",
      description: "The interviews reveal different pressures, but a shared need for clarity and trust.",
      personas: [
        {
          name: "Maker or established studio",
          summary: "Wants to protect their time, income and client trust while producing quality work.",
          items: [
            { label: "Thinks & feels", text: "Income is variable; late payments and misunderstandings put the business at risk." },
            { label: "Sees & hears", text: "Social networks, referrals, international clients and inconsistent AI-generated references." },
            { label: "Says & does", text: "Publishes across several channels, explains the process and resolves logistics manually." },
            { label: "Needs", text: "A clear catalog, production planning, payment options and a lasting conversation history." },
          ],
        },
        {
          name: "Experienced buyer",
          summary: "Wants the right style and a fair price without losing visibility or peace of mind.",
          items: [
            { label: "Thinks & feels", text: "Communication can cause anxiety; silence and delays quickly erode trust." },
            { label: "Sees & hears", text: "Scattered portfolios, offers, waitlists, recommendations and stories of bad experiences." },
            { label: "Says & does", text: "Compares style, price and reputation, sends references and asks about revisions." },
            { label: "Needs", text: "Clear prices and terms, verified reviews, delivery estimates and visible progress." },
          ],
        },
      ],
    },
    value: {
      label: "Value proposition",
      heading: "From scattered messages to a commission everyone can follow.",
      description: "Furrify brings the information, agreement and progress of a commission into one shared workspace—without taking the creator out of the work.",
      pillars: [
        { number: "01", title: "Discover with confidence", text: "Compare portfolios, styles, prices, availability and verified reputation in one place." },
        { number: "02", title: "Agree before paying", text: "Validate references and make scope, materials, revisions, delivery estimates, terms and payment stages explicit." },
        { number: "03", title: "Follow without friction", text: "Keep messages, references, work-in-progress updates, payments and decisions attached to the project." },
      ],
      promiseLabel: "Core promise",
      promise: "More certainty for buyers. More control for creators. Better commissions for both.",
    },
    ai: {
      label: "AI-assisted workflows",
      headingFirst: "Less admin.",
      headingSecond: "More creating.",
      description:
        "We are exploring responsible, practical ways for AI to support the commission process—not replace the people behind the work.",
      features: [
        "Structuring commission requirements",
        "Summarizing project conversations",
        "Creator onboarding",
        "Customer support",
        "Workflow automation",
      ],
      planned: "Planned",
    },
    closing: {
      eyebrow: "A better home for creative work",
      heading: "Furrify is taking shape.",
      description:
        "We are currently validating the idea and developing the first version of the platform.",
    },
    footerStatus: "Early development",
  },
  es: {
    languageLabel: "Elegir idioma",
    nav: {
      creators: "Creadores",
      clients: "Clientes",
      research: "Entrevistas",
      value: "Propuesta",
      status: "MVP en desarrollo",
    },
    hero: {
      eyebrow: "Fundada en 2026 · Startup en etapa inicial · MVP en desarrollo",
      beforeHighlight: "El marketplace creado para ",
      highlight: "creadores furry",
      afterHighlight: " y sus clientes.",
      description:
        "Descubre artistas y creadores de fursuits, organiza comisiones y mantén la comunicación, los detalles y el progreso en un solo lugar.",
      cta: "Próximamente",
      whyLink: "Por qué Furrify",
    },
    workflow: {
      label: "Flujo previsto",
      steps: ["Descubrir", "Definir", "Colaborar", "Completar"],
    },
    creators: {
      label: "Para creadores",
      heading: "Haz que tu trabajo sea más fácil de descubrir y tus comisiones, más fáciles de gestionar.",
      benefits: [
        "Muestra tu trabajo",
        "Gestiona solicitudes de comisión",
        "Mantén organizados los detalles",
        "Genera confianza con tus clientes",
      ],
    },
    clients: {
      label: "Para clientes",
      heading: "Encuentra al creador ideal y sigue de cerca cada etapa del trabajo.",
      benefits: [
        "Descubre creadores",
        "Compara portafolios",
        "Estructura solicitudes de comisión",
        "Sigue el progreso del proyecto",
      ],
    },
    why: {
      label: "Por qué Furrify",
      problem:
        "Hoy, el proceso de una comisión está fragmentado entre redes sociales, aplicaciones de mensajería y plataformas de pago.",
      proposal:
        "Furrify se está creando para reunir descubrimiento, portafolios, solicitudes, comunicación, seguimiento, pagos e historial.",
    },
    research: {
      label: "Investigación con usuarios",
      heading: "Ocho conversaciones. Un proceso fragmentado.",
      description:
        "Hablamos con makers y compradores con experiencia para entender cómo descubren, acuerdan, pagan y dan seguimiento a una comisión.",
      totalLabel: "entrevistas",
      makersLabel: "makers",
      buyersLabel: "compradores",
      interviews: [
        { role: "Maker 01", context: "2 años haciendo fursuits", channel: "Facebook · Instagram · X", insight: "Necesita un catálogo único y simple con trabajos, materiales, reglas y ejemplos." },
        { role: "Maker 02", context: "8–9 años de experiencia", channel: "Facebook · convenciones · recomendaciones", insight: "Los pagos tardíos afectan la operación diaria y el acceso a equipo profesional." },
        { role: "Maker 03", context: "En actividad desde 2013", channel: "Facebook · Instagram · X", insight: "El trabajo internacional vuelve esenciales la comunicación, la logística y el historial de pagos." },
        { role: "Maker 04", context: "12 años haciendo fursuits", channel: "Voz a voz · Instagram · Facebook", insight: "Las referencias generadas con IA suelen ser inconsistentes; coordinar varios trajes, costos extra y pagos exige claridad." },
        { role: "Comprador 01", context: "Compra principalmente arte", channel: "X · Discord · Facebook", insight: "Quiere conocer tiempos, revisiones, forma de pago y posición en la fila antes de pagar." },
        { role: "Comprador 02", context: "Furhead, ropa y coleccionables", channel: "Grupos · Telegram · recomendaciones", insight: "Busca reseñas verificadas, paquetes claros y condiciones que eviten costos sorpresa." },
        { role: "Comprador 03", context: "Compra arte por comisión", channel: "Facebook", insight: "Valora el contacto directo, la comunicación constante y saber cuánto cuestan las correcciones." },
        { role: "Comprador 04", context: "Arte digital, YCH y figuras custom", channel: "Facebook · Instagram", insight: "Prefiere pagos parciales tras malas experiencias y quiere avances visibles del trabajo." },
      ],
    },
    empathy: {
      label: "Mapa de empatía",
      heading: "Dos lados de una misma comisión.",
      description: "Las entrevistas revelan presiones distintas, pero una necesidad compartida: claridad y confianza.",
      personas: [
        {
          name: "Maker o taller con trayectoria",
          summary: "Busca proteger su tiempo, sus ingresos y la confianza del cliente mientras entrega trabajo de calidad.",
          items: [
            { label: "Piensa y siente", text: "Los ingresos son variables; los pagos tardíos y malos entendidos ponen en riesgo el negocio." },
            { label: "Ve y oye", text: "Redes sociales, recomendaciones, clientes internacionales y referencias de IA inconsistentes." },
            { label: "Dice y hace", text: "Publica en varios canales, explica su proceso y resuelve la logística de forma manual." },
            { label: "Necesita", text: "Catálogo claro, planeación de producción, opciones de pago e historial de conversación." },
          ],
        },
        {
          name: "Comprador con experiencia",
          summary: "Busca el estilo correcto y un precio justo sin perder visibilidad ni tranquilidad.",
          items: [
            { label: "Piensa y siente", text: "Comunicarse puede causar ansiedad; el silencio y los retrasos desgastan la confianza." },
            { label: "Ve y oye", text: "Portafolios dispersos, ofertas, listas de espera, recomendaciones y relatos de malas experiencias." },
            { label: "Dice y hace", text: "Compara estilo, precio y reputación, entrega referencias y pregunta por revisiones." },
            { label: "Necesita", text: "Precios y condiciones claras, reseñas verificadas, tiempos estimados y avances visibles." },
          ],
        },
      ],
    },
    value: {
      label: "Propuesta de valor",
      heading: "De mensajes dispersos a una comisión que todos pueden seguir.",
      description: "Furrify reúne la información, los acuerdos y el progreso de cada comisión en un espacio compartido, sin sacar al creador del trabajo.",
      pillars: [
        { number: "01", title: "Descubrir con confianza", text: "Compara portafolios, estilos, precios, disponibilidad y reputación verificada en un solo lugar." },
        { number: "02", title: "Acordar antes de pagar", text: "Valida las referencias y deja claros el alcance, materiales, revisiones, tiempos, condiciones y etapas de pago." },
        { number: "03", title: "Seguir sin fricción", text: "Mantén mensajes, referencias, avances, pagos y decisiones unidos al proyecto." },
      ],
      promiseLabel: "Promesa central",
      promise: "Más certeza para compradores. Más control para creadores. Mejores comisiones para ambos.",
    },
    ai: {
      label: "Flujos asistidos por IA",
      headingFirst: "Menos gestión.",
      headingSecond: "Más creación.",
      description:
        "Estamos explorando formas responsables y prácticas de usar IA para apoyar el proceso de comisión, no para reemplazar a las personas que crean.",
      features: [
        "Estructuración de requisitos",
        "Resumen de conversaciones",
        "Incorporación de creadores",
        "Atención al cliente",
        "Automatización de flujos",
      ],
      planned: "Planeado",
    },
    closing: {
      eyebrow: "Un mejor hogar para el trabajo creativo",
      heading: "Furrify está tomando forma.",
      description:
        "Actualmente estamos validando la idea y desarrollando la primera versión de la plataforma.",
    },
    footerStatus: "Desarrollo inicial",
  },
  pt: {
    languageLabel: "Escolher idioma",
    nav: {
      creators: "Criadores",
      clients: "Clientes",
      research: "Entrevistas",
      value: "Proposta",
      status: "MVP em desenvolvimento",
    },
    hero: {
      eyebrow: "Fundada em 2026 · Startup em estágio inicial · MVP em desenvolvimento",
      beforeHighlight: "O marketplace feito para ",
      highlight: "criadores furry",
      afterHighlight: " e seus clientes.",
      description:
        "Encontre artistas e fabricantes de fursuits, organize comissões e mantenha comunicação, detalhes e progresso em um só lugar.",
      cta: "Em breve",
      whyLink: "Por que Furrify",
    },
    workflow: {
      label: "Fluxo planejado",
      steps: ["Descobrir", "Definir", "Colaborar", "Concluir"],
    },
    creators: {
      label: "Para criadores",
      heading: "Facilite a descoberta do seu trabalho e a gestão das suas comissões.",
      benefits: [
        "Apresente seu trabalho",
        "Gerencie pedidos de comissão",
        "Organize os detalhes do projeto",
        "Construa confiança com clientes",
      ],
    },
    clients: {
      label: "Para clientes",
      heading: "Encontre o criador ideal e acompanhe de perto cada etapa do trabalho.",
      benefits: [
        "Encontre criadores",
        "Compare portfólios",
        "Estruture pedidos de comissão",
        "Acompanhe o progresso do projeto",
      ],
    },
    why: {
      label: "Por que Furrify",
      problem:
        "Hoje, os fluxos de comissão estão fragmentados entre redes sociais, aplicativos de mensagens e plataformas de pagamento.",
      proposal:
        "A Furrify está sendo criada para reunir descoberta, portfólios, pedidos, comunicação, acompanhamento, pagamentos e histórico.",
    },
    research: {
      label: "Pesquisa com usuários",
      heading: "Oito conversas. Um processo fragmentado.",
      description: "Conversamos com makers e compradores experientes para entender como descobrem, combinam, pagam e acompanham uma comissão.",
      totalLabel: "entrevistas",
      makersLabel: "makers",
      buyersLabel: "compradores",
      interviews: [
        { role: "Maker 01", context: "2 anos fazendo fursuits", channel: "Facebook · Instagram · X", insight: "Precisa de um catálogo único e simples com trabalhos, materiais, regras e exemplos." },
        { role: "Maker 02", context: "8–9 anos de experiência", channel: "Facebook · convenções · indicações", insight: "Pagamentos atrasados afetam a operação diária e o acesso a equipamentos profissionais." },
        { role: "Maker 03", context: "Em atividade desde 2013", channel: "Facebook · Instagram · X", insight: "O trabalho internacional torna essenciais a comunicação, a logística e o histórico de pagamentos." },
        { role: "Maker 04", context: "12 anos fazendo fursuits", channel: "Boca a boca · Instagram · Facebook", insight: "Referências geradas por IA costumam ser inconsistentes; coordenar vários trajes, custos extras e pagamentos exige clareza." },
        { role: "Comprador 01", context: "Compra principalmente arte", channel: "X · Discord · Facebook", insight: "Quer prazos, regras de revisão, forma de pagamento e posição na fila antes de pagar." },
        { role: "Comprador 02", context: "Furhead, roupas e colecionáveis", channel: "Grupos · Telegram · indicações", insight: "Busca avaliações verificadas, pacotes claros e condições sem custos surpresa." },
        { role: "Comprador 03", context: "Compra arte por comissão", channel: "Facebook", insight: "Valoriza contato direto, comunicação constante e clareza sobre custos de correções." },
        { role: "Comprador 04", context: "Arte digital, YCHs e figuras custom", channel: "Facebook · Instagram", insight: "Prefere pagamentos parciais após experiências ruins e quer atualizações visíveis." },
      ],
    },
    empathy: {
      label: "Mapa de empatia",
      heading: "Dois lados da mesma comissão.",
      description: "As entrevistas revelam pressões diferentes, mas uma necessidade compartilhada: clareza e confiança.",
      personas: [
        { name: "Maker ou ateliê experiente", summary: "Quer proteger tempo, renda e confiança do cliente enquanto entrega qualidade.", items: [
          { label: "Pensa e sente", text: "A renda varia; atrasos e mal-entendidos colocam o negócio em risco." },
          { label: "Vê e ouve", text: "Redes sociais, indicações, clientes internacionais e referências de IA inconsistentes." },
          { label: "Diz e faz", text: "Publica em vários canais, explica o processo e resolve a logística manualmente." },
          { label: "Precisa", text: "Catálogo claro, planejamento da produção, opções de pagamento e histórico de conversas." },
        ]},
        { name: "Comprador experiente", summary: "Quer o estilo certo e um preço justo sem perder visibilidade ou tranquilidade.", items: [
          { label: "Pensa e sente", text: "A comunicação pode causar ansiedade; silêncio e atrasos desgastam a confiança." },
          { label: "Vê e ouve", text: "Portfólios dispersos, ofertas, filas, recomendações e relatos de experiências ruins." },
          { label: "Diz e faz", text: "Compara estilo, preço e reputação, envia referências e pergunta sobre revisões." },
          { label: "Precisa", text: "Preços e condições claros, avaliações verificadas, prazos e progresso visível." },
        ]},
      ],
    },
    value: {
      label: "Proposta de valor",
      heading: "De mensagens dispersas a uma comissão que todos podem acompanhar.",
      description: "A Furrify reúne informações, acordos e progresso em um espaço compartilhado, sem tirar o criador do trabalho.",
      pillars: [
        { number: "01", title: "Descobrir com confiança", text: "Compare portfólios, estilos, preços, disponibilidade e reputação verificada." },
        { number: "02", title: "Combinar antes de pagar", text: "Valide as referências e deixe claros escopo, materiais, revisões, prazos, condições e etapas de pagamento." },
        { number: "03", title: "Acompanhar sem atrito", text: "Mantenha mensagens, referências, atualizações, pagamentos e decisões junto ao projeto." },
      ],
      promiseLabel: "Promessa central",
      promise: "Mais certeza para compradores. Mais controle para criadores. Melhores comissões para ambos.",
    },
    ai: {
      label: "Fluxos assistidos por IA",
      headingFirst: "Menos gestão.",
      headingSecond: "Mais criação.",
      description:
        "Estamos explorando formas responsáveis e práticas de usar IA para apoiar o processo de comissão, sem substituir as pessoas por trás do trabalho.",
      features: [
        "Estruturação de requisitos",
        "Resumo de conversas",
        "Integração de criadores",
        "Suporte ao cliente",
        "Automação de fluxos",
      ],
      planned: "Planejado",
    },
    closing: {
      eyebrow: "Um lugar melhor para o trabalho criativo",
      heading: "A Furrify está tomando forma.",
      description:
        "Estamos validando a ideia e desenvolvendo a primeira versão da plataforma.",
    },
    footerStatus: "Desenvolvimento inicial",
  },
  ja: {
    languageLabel: "言語を選択",
    nav: {
      creators: "クリエイター",
      clients: "クライアント",
      research: "インタビュー",
      value: "提供価値",
      status: "MVP開発中",
    },
    hero: {
      eyebrow: "2026年創業 · アーリーステージ・スタートアップ · MVP開発中",
      beforeHighlight: "",
      highlight: "ファーリークリエイター",
      afterHighlight: "とクライアントのためのマーケットプレイス。",
      description:
        "アーティストやファースーツ制作者を見つけ、コミッションを整理し、やり取りやプロジェクトの詳細、進捗を一か所で管理できます。",
      cta: "近日公開",
      whyLink: "Furrifyをつくる理由",
    },
    workflow: {
      label: "予定している流れ",
      steps: ["見つける", "依頼する", "制作する", "完了する"],
    },
    creators: {
      label: "クリエイター向け",
      heading: "作品をもっと見つけやすく。コミッション管理をもっとスムーズに。",
      benefits: [
        "作品を紹介",
        "コミッション依頼を管理",
        "プロジェクト情報を整理",
        "クライアントとの信頼を築く",
      ],
    },
    clients: {
      label: "クライアント向け",
      heading: "ぴったりのクリエイターを見つけ、制作のすべての段階を見守れます。",
      benefits: [
        "クリエイターを探す",
        "ポートフォリオを比較",
        "コミッション依頼を整理",
        "プロジェクトの進捗を確認",
      ],
    },
    why: {
      label: "Furrifyをつくる理由",
      problem:
        "現在のコミッション制作は、SNS、メッセージアプリ、決済サービスなど、複数の場所に分散しています。",
      proposal:
        "Furrifyは、クリエイター探し、ポートフォリオ、依頼、連絡、進捗管理、支払い、履歴を一か所にまとめるために開発されています。",
    },
    research: {
      label: "ユーザーリサーチ",
      heading: "8つの対話から見えた、分散した制作プロセス。",
      description: "メイカーと購入経験者へのインタビューを通じて、依頼の発見・合意・支払い・納品までを調査しました。",
      totalLabel: "インタビュー",
      makersLabel: "メイカー",
      buyersLabel: "購入者",
      interviews: [
        { role: "メイカー 01", context: "ファースーツ制作歴2年", channel: "Facebook · Instagram · X", insight: "作品、素材、規約、実例を一つにまとめたシンプルなカタログを必要としている。" },
        { role: "メイカー 02", context: "制作歴8〜9年", channel: "Facebook · イベント · 紹介", insight: "支払いの遅れは日々の運営や専門機材への投資に影響する。" },
        { role: "メイカー 03", context: "2013年から活動", channel: "Facebook · Instagram · X", insight: "海外案件では連絡、物流、支払い履歴の管理が不可欠。" },
        { role: "メイカー 04", context: "ファースーツ制作歴12年", channel: "口コミ · Instagram · Facebook", insight: "AI生成の資料は一貫性に欠けやすく、複数の制作、追加費用、支払い方法の明確な管理が必要。" },
        { role: "購入者 01", context: "主にアートを依頼", channel: "X · Discord · Facebook", insight: "支払い前に納期、修正条件、支払い方法、待ち順を知りたい。" },
        { role: "購入者 02", context: "ファーヘッド、衣類、グッズ", channel: "グループ · Telegram · 紹介", insight: "確認済みレビュー、明確なプラン、追加費用のない条件を重視する。" },
        { role: "購入者 03", context: "コミッションアートを購入", channel: "Facebook", insight: "直接連絡でき、継続的な進捗連絡と修正費用が明確であることを重視。" },
        { role: "購入者 04", context: "デジタルアート、YCH、カスタムフィギュア", channel: "Facebook · Instagram", insight: "過去の経験から分割払いと、見える進捗更新を求めている。" },
      ],
    },
    empathy: {
      label: "共感マップ",
      heading: "同じコミッションを見つめる二つの立場。",
      description: "抱える負担は異なっても、双方が求めるのは明確さと信頼です。",
      personas: [
        { name: "経験のあるメイカー／スタジオ", summary: "品質を守りながら、時間、収入、顧客からの信頼も守りたい。", items: [
          { label: "考え・感じる", text: "収入は不安定で、支払い遅延や認識違いが事業のリスクになる。" },
          { label: "見聞きする", text: "SNS、紹介、海外顧客、一貫性のないAI生成資料。" },
          { label: "言動", text: "複数の場所で発信し、工程を説明し、物流を手作業で調整する。" },
          { label: "必要なもの", text: "明確なカタログ、制作計画、支払い方法、会話履歴。" },
        ]},
        { name: "購入経験のあるクライアント", summary: "好みのスタイルと適正価格を選び、安心して完成を待ちたい。", items: [
          { label: "考え・感じる", text: "連絡には不安が伴い、沈黙や遅延は信頼を急速に損なう。" },
          { label: "見聞きする", text: "点在する作品、価格、待ち順、口コミ、悪い体験談。" },
          { label: "言動", text: "作風、価格、評判を比較し、資料を送り、修正について確認する。" },
          { label: "必要なもの", text: "明確な価格と条件、確認済みレビュー、納期目安、見える進捗。" },
        ]},
      ],
    },
    value: {
      label: "提供価値",
      heading: "散らばったメッセージを、誰もが追える制作プロセスへ。",
      description: "Furrifyは依頼の情報、合意、進捗を一つの共有スペースにまとめ、クリエイター主体の制作を支えます。",
      pillars: [
        { number: "01", title: "安心して見つける", text: "作品、作風、価格、受付状況、確認済みの評判を一か所で比較。" },
        { number: "02", title: "支払い前に合意する", text: "資料を確認し、範囲、素材、修正、納期、条件、支払い段階を明確に。" },
        { number: "03", title: "負担なく追跡する", text: "会話、資料、進捗、支払い、決定事項をプロジェクトに集約。" },
      ],
      promiseLabel: "中心となる約束",
      promise: "購入者に確かな安心を。クリエイターに確かな管理を。双方により良いコミッションを。",
    },
    ai: {
      label: "AIアシスト機能",
      headingFirst: "管理を減らし、",
      headingSecond: "創作をもっと。",
      description:
        "クリエイターに代わるのではなく、コミッション制作を支えるための、責任ある実用的なAI活用を検討しています。",
      features: [
        "依頼要件の整理",
        "プロジェクト会話の要約",
        "クリエイター登録のサポート",
        "カスタマーサポート",
        "ワークフローの自動化",
      ],
      planned: "計画中",
    },
    closing: {
      eyebrow: "クリエイティブな仕事に、より良い居場所を",
      heading: "Furrifyは、形になり始めています。",
      description:
        "現在、アイデアの検証とプラットフォーム初期版の開発を進めています。",
    },
    footerStatus: "初期開発段階",
  },
};

export function isLocalizedLocale(value: string): value is LocalizedLocale {
  return localizedLocales.includes(value as LocalizedLocale);
}
