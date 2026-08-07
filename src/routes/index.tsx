import { createFileRoute } from "@tanstack/react-router";
import mockup from "@/assets/dossie-oculto-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tribuna Patriota | Inteligência e Informação Estratégica" },
      { name: "description", content: "O jornal que milhares de brasileiros consultam diariamente para entender o que realmente está acontecendo. Análises, notícias e inteligência política." },
      { property: "og:title", content: "Tribuna Patriota | Inteligência Política" },
      { property: "og:description", content: "Garanta seu acesso à comunidade que valoriza informação sem ruído e análises estratégicas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  const paymentLink = "https://pay.cakto.com.br/36s4mry_1011737";

  return (
    <main className="min-h-screen bg-[#050a05] text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/20 bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_50%)] bg-opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        
        <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:py-20">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-black/40 px-6 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">Acesso Restrito</span>
            </div>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl">
            <span className="block text-foreground drop-shadow-lg">O jornal que milhares de brasileiros</span>
            <span className="mt-2 block bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent drop-shadow-md">
              consultam diariamente
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Análises, notícias em tempo real, inteligência política e uma comunidade que valoriza informação sem ruído.
          </p>

          {/* VSL / Video Placeholder */}
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border-4 border-primary/20 bg-black shadow-[0_0_50px_-12px_rgba(234,179,8,0.3)]">
            <div className="aspect-video bg-neutral-900 flex items-center justify-center group cursor-pointer">
              <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                <div className="ml-1 h-0 w-0 border-y-[15px] border-y-transparent border-l-[25px] border-l-primary-foreground" />
              </div>
              <p className="absolute bottom-4 font-mono text-[10px] uppercase tracking-widest text-primary/60">Aguardando reprodução...</p>
            </div>
          </div>

          <div className="mt-10">
            <a 
              href={paymentLink}
              className="inline-flex h-16 items-center justify-center rounded-md bg-[#008000] px-10 text-lg font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-[#00a000] hover:shadow-[0_0_30px_rgba(0,128,0,0.4)] active:scale-95"
            >
              Quero garantir meu acesso
            </a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              🔒 Conexão segura · Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Narrative */}
      <section className="relative bg-black py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg border border-primary/20 p-4 bg-neutral-900/50 shadow-2xl">
                <img 
                  src={mockup} 
                  alt="Documentos e Inteligência" 
                  className="w-full rounded border border-white/5 opacity-80"
                />
                <div className="absolute -bottom-4 -right-4 rounded-sm bg-destructive px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-white shadow-lg">
                  Top Secret
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
                Enquanto a maioria consome manchetes soltas...
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Existe um grupo de leitores que acompanha o cenário completo.</p>
                <p className="text-foreground font-bold italic">Eles entendem contexto.</p>
                <p className="text-foreground font-bold italic">Antecipam movimentos.</p>
                <p>E não dependem do algoritmo para descobrir o que importa.</p>
              </div>
              <div className="pt-4">
                <div className="inline-block border-l-4 border-primary pl-4">
                  <p className="font-mono text-sm uppercase tracking-widest text-primary">Você sente que está perdendo algo importante?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Why we exist */}
      <section className="border-y border-primary/10 bg-[#080f08] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
            A Tribuna foi criada para <span className="text-primary">organizar o caos</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nascemos da necessidade de oferecer informação, contexto e análise estratégica em um mundo saturado de ruído e desinformação.
          </p>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Notícias em Tempo Real", desc: "A informação antes de chegar no grande público." },
              { title: "Análises Objetivas", desc: "O que o fato significa na prática para o país." },
              { title: "Leitura Estratégica", desc: "Curadoria do que realmente impacta o seu futuro." },
              { title: "Comunidade Ativa", desc: "Debate qualificado com quem pensa como você." },
              { title: "Conteúdo Reservado", desc: "Arquivos e inteligência política exclusiva." },
              { title: "Independência", desc: "Sem amarras com grupos editoriais ou algoritmos." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-primary/10 bg-black/40 p-6 text-left hover:border-primary/30 transition-colors">
                <div className="mb-4 h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">★</span>
                </div>
                <h3 className="font-bold uppercase text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Urgency */}
      <section className="bg-destructive/5 py-20 border-y border-destructive/20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block rounded-full bg-destructive/10 px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-destructive">
            Acesso Limitado
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
            O acesso a canais independentes pode mudar rapidamente
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Plataformas alteram alcance. Algoritmos mudam. Conteúdos deixam de ser distribuídos da mesma forma. 
            Por isso milhares de leitores preferem garantir acesso direto à Tribuna.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 font-mono text-destructive">
            <span className="text-2xl">⏳</span>
            <span className="text-xl font-bold uppercase tracking-widest">Cronômetro de segurança ativado</span>
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
            Quem <span className="text-primary">faz parte</span> da Tribuna
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Carlos M.", city: "São Paulo", text: "Passei a entender muito mais o contexto das notícias. A Tribuna é indispensável hoje." },
              { name: "Juliana R.", city: "Curitiba", text: "A área de Inteligência Política vale cada centavo da assinatura. Recomendo." },
              { name: "Marcos A.", city: "Belo Horizonte", text: "Hoje acompanho tudo em um só lugar. Economizo tempo e recebo o que importa." },
              { name: "Patrícia L.", city: "Recife", text: "Foi a primeira vez que encontrei um jornal organizado dessa forma. Estética impecável." },
              { name: "Rodrigo F.", city: "Porto Alegre", text: "Abro a Tribuna todos os dias. A comunidade é muito qualificada e o debate é outro nível." },
              { name: "Aline S.", city: "Brasília", text: "Informação estratégica de verdade. Fundamental para quem quer antecipar movimentos." },
            ].map((t, i) => (
              <div key={i} className="rounded-lg border border-white/5 bg-neutral-900/40 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.city}</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-primary text-xs">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 rounded-full border border-primary/20 bg-primary/5 px-8 py-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">+10.000</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Leitores Ativos</p>
              </div>
              <div className="h-10 w-px bg-primary/20" />
              <div className="text-center">
                <p className="text-2xl font-black text-primary">98%</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Comparison */}
      <section className="bg-neutral-900/50 py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-black shadow-2xl">
            <div className="grid grid-cols-2 divide-x divide-primary/20">
              <div className="p-8">
                <h3 className="mb-8 text-xl font-bold uppercase tracking-widest text-muted-foreground opacity-50">Leitor Comum</h3>
                <ul className="space-y-4">
                  {["Manchetes isoladas", "Excesso de ruído", "Falta de contexto", "Dependência do algoritmo"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground/60">
                      <span className="text-destructive">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 p-8 relative">
                <div className="absolute top-0 right-0 p-2">
                  <span className="rounded-sm bg-primary/20 px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-primary">Premium</span>
                </div>
                <h3 className="mb-8 text-xl font-bold uppercase tracking-widest text-primary">Assinante Tribuna</h3>
                <ul className="space-y-4">
                  {["Notícias organizadas", "Análises de impacto", "Inteligência Política", "Arquivos Reservados", "Comunidade Exclusiva"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-foreground">
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — The Letter */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
        <div className="mx-auto max-w-3xl px-4 relative">
          <div className="rounded-sm border border-primary/20 bg-[#fdfaf1]/5 p-8 sm:p-12 shadow-inner text-foreground/80 leading-relaxed font-serif text-lg sm:text-xl italic">
            <p className="mb-6">Você pode continuar consumindo informação fragmentada.</p>
            <p className="mb-6">Ou pode fazer parte de uma comunidade que decidiu levar informação a sério.</p>
            <p className="mb-6">A Tribuna não é apenas um jornal. É um centro de inteligência para quem quer compreender o cenário antes da maioria.</p>
            <p className="text-foreground font-black uppercase tracking-widest not-italic font-sans text-sm mt-12">Conselho Editorial, Tribuna Patriota</p>
          </div>
        </div>
      </section>

      {/* Section 10 — Offer */}
      <section id="oferta" className="bg-gradient-to-b from-black to-[#081a08] py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
              Seu acesso completo à <span className="text-primary">Tribuna Patriota</span>
            </h2>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-black/60 p-8 shadow-[0_0_80px_-20px_rgba(234,179,8,0.4)] backdrop-blur-md">
            <ul className="mb-10 grid gap-4 text-left sm:grid-cols-2">
              {[
                "Acesso imediato",
                "Atualizações contínuas",
                "Inteligência Política",
                "Arquivos Reservados",
                "Notícias ilimitadas",
                "Comunidade exclusiva",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-foreground">
                  <span className="text-primary">★</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-10 py-6 border-y border-primary/20">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Investimento único para acesso anual</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-muted-foreground line-through opacity-50">R$ 497</span>
                <span className="text-5xl font-black text-primary">R$ 197</span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">Ou 12x de R$ 19,70</p>
            </div>

            <a 
              href={paymentLink}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008000] py-6 text-xl font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-[#00a000] active:scale-95"
            >
              <span className="relative z-10">Garantir acesso agora</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-primary">🛡</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">⚡</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Liberação imediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-primary/10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="mb-8 flex justify-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="h-16 w-16 border-2 border-primary rounded-full flex items-center justify-center">
              <span className="text-primary font-black text-2xl">TP</span>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-8">Tribuna Patriota · Inteligência Política</p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-[10px] font-mono uppercase tracking-widest text-primary/60">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
          
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40">
            © 2024 Tribuna Patriota. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
