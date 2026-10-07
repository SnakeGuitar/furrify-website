export const locales = ["en", "es", "pt", "ja"] as const;
export const localizedLocales = ["es", "pt", "ja"] as const;

export type Locale = (typeof locales)[number];
export type LocalizedLocale = (typeof localizedLocales)[number];

export type Translation = {
  meta: { title: string; description: string };
  languageLabel: string;
  nav: { creators: string; clients: string; about: string; status: string };
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
    meta: {
      title: "Furrify — The marketplace for furry creators",
      description:
        "Discover furry artists and fursuit makers, organize commissions, and keep every project detail in one place. Furrify is currently in early development.",
    },
    languageLabel: "Choose language",
    nav: {
      creators: "Creators",
      clients: "Clients",
      about: "About",
      status: "MVP in development",
    },
    hero: {
      eyebrow: "Founded 2026 · Early stage",
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
    meta: {
      title: "Furrify — El marketplace para creadores furry",
      description:
        "Descubre artistas furry y creadores de fursuits, organiza comisiones y mantén cada detalle del proyecto en un solo lugar. Furrify está en desarrollo inicial.",
    },
    languageLabel: "Elegir idioma",
    nav: {
      creators: "Creadores",
      clients: "Clientes",
      about: "Acerca de",
      status: "MVP en desarrollo",
    },
    hero: {
      eyebrow: "Fundada en 2026 · Etapa inicial",
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
    meta: {
      title: "Furrify — O marketplace para criadores furry",
      description:
        "Encontre artistas furry e fabricantes de fursuits, organize comissões e mantenha todos os detalhes do projeto em um só lugar. A Furrify está em desenvolvimento inicial.",
    },
    languageLabel: "Escolher idioma",
    nav: {
      creators: "Criadores",
      clients: "Clientes",
      about: "Sobre",
      status: "MVP em desenvolvimento",
    },
    hero: {
      eyebrow: "Fundada em 2026 · Estágio inicial",
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
    meta: {
      title: "Furrify — ファーリークリエイターのためのマーケットプレイス",
      description:
        "ファーリーアーティストやファースーツ制作者を見つけ、コミッションを整理し、プロジェクトの情報を一か所で管理。Furrifyは現在、初期開発段階です。",
    },
    languageLabel: "言語を選択",
    nav: {
      creators: "クリエイター",
      clients: "クライアント",
      about: "Furrifyについて",
      status: "MVP開発中",
    },
    hero: {
      eyebrow: "2026年創業 · アーリーステージ",
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
