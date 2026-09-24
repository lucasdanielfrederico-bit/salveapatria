import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/bp-hero.jpg";
import dossiesImg from "@/assets/bp-dossies.jpg";
import docsImg from "@/assets/bp-documentarios.jpg";
import ebooksImg from "@/assets/bp-ebooks.jpg";
import linhaImg from "@/assets/bp-linha.jpg";
import personagensImg from "@/assets/bp-personagens.jpg";
import arquivoImg from "@/assets/bp-arquivo.jpg";

const PAYMENT_LINK = "https://pay.cakto.com.br/36s4mry_1011737";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bastidores do Poder — Documentos, Dossiês e História Política" },
      {
        name: "description",
        content:
          "Bastidores do Poder é uma biblioteca digital de conteúdos políticos, documentais e históricos: dossiês, documentários, e-books, personagens e acontecimentos.",
      },
      { property: "og:title", content: "Bastidores do Poder — Documentos, Dossiês e História Política" },
      {
        property: "og:description",
        content: "Dossiês, documentários, e-books, personagens e acontecimentos em uma experiência de streaming.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

interface Card {
  title: string;
  desc: string;
  img: string;
}

const CARDS: Card[] = [
  { title: "Dossiês", desc: "Conteúdos organizados para facilitar a compreensão de acontecimentos políticos.", img: dossiesImg },
  { title: "Documentários", desc: "Conteúdos apresentados em formato audiovisual e editorial.", img: docsImg },
  { title: "E-books", desc: "Materiais completos para leitura aprofundada.", img: ebooksImg },
  { title: "Linha do Tempo", desc: "Acontecimentos históricos organizados cronologicamente.", img: linhaImg },
  { title: "Personagens", desc: "Informações documentadas sobre figuras políticas relevantes.", img: personagensImg },
  { title: "Arquivo", desc: "Uma biblioteca organizada para explorar acontecimentos, documentos e fontes.", img: arquivoImg },
];

const TABS = [
  { label: "Documentação", title: "Fontes e registros", text: "Cada conteúdo é organizado a partir de documentos, registros e acontecimentos, para você entender o contexto completo." },
  { label: "Profundidade", title: "Além da manchete", text: "Capítulos, personagens e linhas do tempo conectados para mostrar o que acontece por trás das decisões." },
  { label: "Experiência", title: "Como um streaming", text: "Navegue por coleções, assista, leia e explore em uma plataforma pensada para ser simples e envolvente." },
];

const TESTIMONIALS = [
  { name: "Sérgio K.", city: "São Paulo", text: "Parece um streaming de documentários políticos. Organizado e muito bem feito." },
  { name: "Maria Clara", city: "Joinville", text: "As linhas do tempo mudaram minha forma de entender a história política." },
  { name: "Henrique M.", city: "Goiânia", text: "Os dossiês são claros e completos. Vale cada minuto." },
];

function SalesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-5">
          <span className="font-display text-xl font-bold uppercase tracking-[0.25em] text-primary md:text-2xl">
            Bastidores <span className="text-foreground">do</span> Poder
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Mesa com documentos históricos, mapas e arquivos à luz de um abajur" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className="max-w-2xl space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Bastidores do Poder
            </p>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Os bastidores da política <span className="text-primary">em um só lugar.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore dossiês, documentários, documentos, personagens, acontecimentos históricos e conteúdos organizados em uma experiência digital premium.
            </p>
            <a href="#plataforma" className="inline-flex items-center justify-center border border-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Conhecer a plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">A história não acontece só nas manchetes.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Decisões, alianças e acontecimentos que moldaram o país estão registrados em documentos, arquivos e bastidores. O Bastidores do Poder reúne tudo isso em uma biblioteca feita para quem quer entender de verdade.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-10 font-display text-2xl font-bold md:text-4xl">
            O que torna a plataforma <span className="text-primary">diferente</span>
          </h2>
          <div className="mx-auto mb-8 flex w-fit flex-wrap justify-center gap-1 border border-border bg-card p-1">
            {TABS.map((t, idx) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeTab === idx ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div key={activeTab} className="min-h-[160px] border border-border bg-card p-8 animate-in fade-in slide-in-from-bottom-2">
            <h3 className="mb-3 font-display text-xl font-bold text-primary">{tab.title}</h3>
            <p className="text-muted-foreground">{tab.text}</p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="plataforma" className="scroll-mt-24 border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent">Biblioteca digital</p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Tudo o que você vai explorar</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <article key={c.title} className="group overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" width={944} height={704} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-primary">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-12 font-display text-3xl font-bold md:text-5xl">
            Quem já está nos <span className="text-primary">bastidores</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="space-y-4 border border-border bg-card p-7 text-left transition-transform hover:-translate-y-1">
                <div className="text-primary" aria-label="5 estrelas">★★★★★</div>
                <blockquote className="italic text-muted-foreground">“{t.text}”</blockquote>
                <figcaption>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-accent">{t.city}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="oferta" className="relative isolate overflow-hidden border-t border-primary/30 py-24">
        <img src={arquivoImg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/60" />
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
            Entre nos <span className="text-primary">Bastidores do Poder</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Uma biblioteca digital para explorar documentos, acontecimentos, personagens e capítulos importantes da história política.
          </p>
          <a
            href={PAYMENT_LINK}
            className="inline-flex w-full items-center justify-center bg-cta px-10 py-5 text-lg font-bold uppercase tracking-[0.2em] text-cta-foreground shadow-xl transition-all hover:brightness-110 active:scale-95 sm:w-auto"
          >
            Acessar a plataforma
          </a>
        </div>
        <p className="mt-16 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Bastidores do Poder · Todos os direitos reservados
        </p>
      </section>
    </main>
  );
}
