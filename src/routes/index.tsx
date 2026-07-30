import { createFileRoute } from "@tanstack/react-router";
import mockup from "@/assets/dossie-oculto-mockup.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dossiê Oculto — Confidencial | Os Escândalos Que Tentaram Esconder" },
      { name: "description", content: "Descubra os maiores escândalos de corrupção que a mídia tentou esconder de você. Dados reais, investigações, provas e documentos." },
      { property: "og:title", content: "Dossiê Oculto — Confidencial" },
      { property: "og:description", content: "Os escândalos que tentaram esconder de você. Acesso liberado." },
      { property: "og:image", content: mockup.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SalesPage />
  );
}

function SalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top alert bar */}
      <div className="border-b border-destructive/40 bg-destructive/10">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] sm:text-xs font-mono uppercase tracking-widest text-destructive">
          ⚠ Atenção: informações que a mídia tentou esconder de você
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,.5) 2px 3px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Documento Classificado
            </div>
            <h1 className="font-black uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl">
              <span className="block text-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">Dossiê</span>
              <span className="block text-primary drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">Oculto</span>
            </h1>
            <div className="mt-4 inline-block -rotate-2 border-2 border-destructive px-3 py-1 font-mono text-sm font-bold uppercase tracking-[0.3em] text-destructive">
              Confidencial
            </div>
            <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground">
              Descubra os maiores escândalos de corrupção que a mídia tentou{" "}
              <span className="text-destructive font-semibold">esconder</span> de você por anos.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-sm border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-primary">
              <span>🔒 Dados reais</span>
              <span className="text-primary/40">•</span>
              <span>Investigações</span>
              <span className="text-primary/40">•</span>
              <span>Provas</span>
              <span className="text-primary/40">•</span>
              <span>Documentos</span>
            </div>

          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_60%)] opacity-20 blur-2xl"
            />
            <img
              src={mockup.url}
              alt="Dossiê Oculto — Livro, e-book, versão desktop, tablet e mobile"
              className="w-full rounded-md border border-border shadow-2xl shadow-black/60"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {[
            { icon: "💰", label: "Bilhões", sub: "desviados" },
            { icon: "⚖️", label: "Milhões", sub: "prejudicados" },
            { icon: "🔨", label: "Anos", sub: "de corrupção" },
          ].map((n) => (
            <div key={n.label} className="bg-background p-6 text-center">
              <div className="text-2xl">{n.icon}</div>
              <div className="mt-2 font-mono text-2xl font-black uppercase text-primary">
                {n.label}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {n.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll discover */}
      <section id="descobrir" className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Arquivo / 001
          </div>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            O que você vai <span className="text-primary">descobrir</span>
          </h2>
        </div>
        <ul className="mx-auto grid max-w-2xl gap-3 rounded-sm border border-border bg-card p-6 font-mono text-sm sm:text-base">
          {[
            "Fatos escondidos",
            "Bastidores reais",
            "Documentos exclusivos",
            "Nomes envolvidos",
            "Impactos reais na sua vida",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-sm border-2 border-primary text-primary">
                ✓
              </span>
              <span className="uppercase tracking-wide">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories grid */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-center text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Capítulos do <span className="text-primary">dossiê</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["📁", "Investigações abafadas"],
              ["👤", "Nomes envolvidos"],
              ["📄", "Provas documentadas"],
              ["⌛", "Crimes prescritos"],
              ["📹", "Mídia cúmplice"],
              ["👁", "Verdades ocultas"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="group rounded-sm border border-border bg-background p-4 text-center transition hover:border-primary"
              >
                <div className="text-xl">{icon}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Depoimentos / Leitores
          </div>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Quem leu, <span className="text-primary">não calou</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-primary text-base tracking-normal">★★★★★</span>
            <span>4,9 / 5 · +12.480 leitores</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Carlos M.",
              city: "São Paulo, SP",
              text: "Conteúdo pesado. Nomes, datas, cifras — coisas que eu nunca tinha visto em lugar nenhum. Abriu meus olhos.",
            },
            {
              name: "Juliana R.",
              city: "Curitiba, PR",
              text: "Comprei achando que era mais um e-book. Errei. É um verdadeiro dossiê — com documentos e fontes. Vale cada centavo.",
            },
            {
              name: "Marcos A.",
              city: "Belo Horizonte, MG",
              text: "Li em duas noites. Mandei pra família toda. O Brasil precisa enxergar o que está nesse material.",
            },
            {
              name: "Patrícia L.",
              city: "Recife, PE",
              text: "Linguagem direta, sem enrolação. Os capítulos sobre os bastidores são chocantes. Recomendo demais.",
            },
            {
              name: "Rodrigo F.",
              city: "Porto Alegre, RS",
              text: "Esperava menos pelo preço. Recebi muito mais. Os documentos anexos foram o ponto alto pra mim.",
            },
            {
              name: "Aline S.",
              city: "Brasília, DF",
              text: "Material sério, com referências. Não é teoria da conspiração — é o que a grande mídia não conta.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="relative rounded-sm border border-border bg-card p-6"
            >
              <div className="mb-2 text-primary text-sm tracking-widest">★★★★★</div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold uppercase text-primary">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.city} · ✓ Compra verificada
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
          {[
            ["+12.480", "Leitores"],
            ["4,9/5", "Avaliação média"],
            ["98%", "Recomendam"],
            ["7 dias", "Garantia total"],
          ].map(([v, l]) => (
            <div key={l} className="bg-background p-4 text-center">
              <div className="font-mono text-xl font-black text-primary">{v}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <section id="oferta" className="mx-auto max-w-3xl px-4 py-20">
        <div className="relative rounded-md border-2 border-primary bg-card p-8 text-center shadow-[0_0_60px_-15px_var(--primary)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-destructive px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-destructive-foreground">
            Acesso Liberado
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Nível de acesso
          </div>
          <div className="mt-1 text-xl font-black uppercase tracking-wide">Ultra secreto</div>
          <p className="mt-4 text-muted-foreground">
            Receba o <span className="text-primary font-semibold">Dossiê Oculto</span> completo —
            livro digital + arquivos confidenciais.
          </p>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            🔒 Material confidencial · garantia de 7 dias
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        © Dossiê Oculto — Material exclusivo · Confidencial
      </footer>
    </main>
  );
}
