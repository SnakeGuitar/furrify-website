import type { Locale } from "../i18n";
import { translations } from "../i18n";

const languageOptions: { locale: Locale; short: string; name: string }[] = [
  { locale: "en", short: "EN", name: "English" },
  { locale: "es", short: "ES", name: "Español" },
  { locale: "pt", short: "PT", name: "Português" },
  { locale: "ja", short: "JA", name: "日本語" },
];

function localeHref(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

function BrandMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 32 32" fill="none">
      <path d="M7.5 6.5h17v5.25h-11.5v3.5h9v5h-9v7.25H7.5v-21Z" fill="currentColor" />
      <path d="M22.5 6.5h3v3h-3z" fill="#b9ff66" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M11.5 5.5 16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2.9 10h14.2M10 2.75c2 2 3 4.42 3 7.25s-1 5.25-3 7.25C8 15.25 7 12.83 7 10s1-5.25 3-7.25Z" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function LanguageMenu({ locale, label }: { locale: Locale; label: string }) {
  const current = languageOptions.find((option) => option.locale === locale)!;

  return (
    <details className="language-menu">
      <summary aria-label={label}>
        <LanguageIcon />
        <span>{current.short}</span>
      </summary>
      <div className="language-options">
        {languageOptions.map((option) => (
          <a
            href={localeHref(option.locale)}
            hrefLang={option.locale}
            lang={option.locale}
            aria-current={option.locale === locale ? "page" : undefined}
            key={option.locale}
          >
            <span>{option.name}</span>
            <span>{option.short}</span>
          </a>
        ))}
      </div>
    </details>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Furrify home">
          <BrandMark />
          <span>Furrify</span>
        </a>

        <div className="nav-links">
          <a href="#creators">{t.nav.creators}</a>
          <a href="#clients">{t.nav.clients}</a>
          <a href="#about">{t.nav.about}</a>
        </div>

        <div className="nav-actions">
          <LanguageMenu locale={locale} label={t.languageLabel} />
          <span className="nav-status">{t.nav.status}</span>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {t.hero.eyebrow}
          </p>
          <h1>
            {t.hero.beforeHighlight}<span>{t.hero.highlight}</span>{t.hero.afterHighlight}
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <span className="primary-cta">{t.hero.cta}</span>
            <a href="#about" className="text-link">
              {t.hero.whyLink} <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="workflow-card" aria-label={t.workflow.label}>
          <div className="card-topline">
            <span>{t.workflow.label}</span>
            <span className="card-index">01—04</span>
          </div>
          <div className="orbit" aria-hidden="true">
            <div className="orbit-core"><BrandMark /></div>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
          </div>
          <ol className="workflow-steps">
            {t.workflow.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="audiences shell" aria-label={`${t.creators.label} / ${t.clients.label}`}>
        <article className="audience-card" id="creators">
          <div className="section-label"><span>01</span><p>{t.creators.label}</p></div>
          <h2>{t.creators.heading}</h2>
          <ul>
            {t.creators.benefits.map((benefit) => (
              <li key={benefit}><span aria-hidden="true">+</span> {benefit}</li>
            ))}
          </ul>
        </article>

        <article className="audience-card accent-card" id="clients">
          <div className="section-label"><span>02</span><p>{t.clients.label}</p></div>
          <h2>{t.clients.heading}</h2>
          <ul>
            {t.clients.benefits.map((benefit) => (
              <li key={benefit}><span aria-hidden="true">+</span> {benefit}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="why shell" id="about">
        <div className="section-label"><span>03</span><p>{t.why.label}</p></div>
        <div className="why-copy">
          <p>{t.why.problem}</p>
          <p className="muted">{t.why.proposal}</p>
        </div>
      </section>

      <section className="ai-section shell">
        <div className="ai-heading">
          <div className="section-label"><span>04</span><p>{t.ai.label}</p></div>
          <h2>{t.ai.headingFirst}<br />{t.ai.headingSecond}</h2>
          <p>{t.ai.description}</p>
        </div>

        <ul className="ai-list">
          {t.ai.features.map((feature, index) => (
            <li key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
              <span className="planned">{t.ai.planned}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing shell">
        <div className="closing-glow" aria-hidden="true" />
        <p className="eyebrow">{t.closing.eyebrow}</p>
        <h2>{t.closing.heading}</h2>
        <p>{t.closing.description}</p>
        <span className="primary-cta">{t.hero.cta}</span>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top" aria-label="Back to top">
          <BrandMark />
          <span>Furrify</span>
        </a>
        <p>Furrify © 2026</p>
        <p>{t.footerStatus}</p>
      </footer>
    </main>
  );
}
