import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoAsset from "@/assets/logo-tribuna.png.asset.json";
import heroAsset from "@/assets/hero-tribuna.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tribuna Patriota | Inteligência e Informação Estratégica" },
      { name: "description", content: "O único que escancara os poderes sem censura. Jornalismo de direita, notícias, análises e inteligência." },
      { property: "og:title", content: "Tribuna Patriota | Inteligência Política" },
      { property: "og:description", content: "Garanta seu acesso à comunidade que valoriza informação sem ruído e análises estratégicas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
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
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={`min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating Interactive Flag Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-20 -left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-10 w-60 h-60 bg-secondary rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Header / Logo Section */}
      <header className="py-6 border-b border-primary/10 bg-card/40 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 flex justify-center">
          <img src={logoAsset.url} alt="Tribuna Patriota" className="h-16 md:h-24 w-auto drop-shadow-sm" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">Acesso Restrito</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-none hover:scale-[1.01] transition-transform cursor-default">
              O ÚNICO <span className="text-primary italic animate-pulse">ESCAN CARA</span> OS PODERES SEM CENSURA.
            </h1>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground border-l-4 border-destructive pl-4 bg-destructive/5 py-2">
                <span className="text-destructive font-bold uppercase tracking-widest block mb-1">Alto Risco de Banimento...</span>
                A verdade incomoda. Eles sabem. E por isso podem tentar nos calar.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: "Notícias em tempo real", icon: "⚡" },
                { label: "Análises sem filtro", icon: "🛡" },
                { label: "Bastidores exclusivos", icon: "🎯" },
                { label: "Conteúdo protegido", icon: "🔒" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center space-y-2 group">
                  <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors text-primary">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#oferta"
                className="inline-flex h-16 w-full md:w-auto items-center justify-center rounded-md bg-[#008000] px-12 text-xl font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-[#00a000] hover:shadow-[0_0_40px_rgba(0,128,0,0.4)] active:scale-95"
              >
                Garantir meu acesso agora
              </a>
            </div>
          </div>

          <div className="relative group cursor-zoom-in">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse group-hover:opacity-50 transition-opacity" />
            <img 
              src={heroAsset.url} 
              alt="Tribuna Patriota Inteligência" 
              className="relative w-full h-auto drop-shadow-2xl rounded-2xl border border-primary/10 transition-all duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 bg-card/90 border border-primary/20 backdrop-blur-md px-4 py-2 rounded flex flex-col items-center shadow-lg transform transition-transform group-hover:-translate-y-1">
              <span className="text-primary text-xl font-black">+10.000</span>
              <span className="text-[8px] uppercase tracking-widest text-foreground">Acessos nas últimas 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-muted/30 py-24 border-y border-primary/10">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Não fique de fora. O próximo pode ser você.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Em um cenário onde a informação é manipulada, ter acesso direto à fonte não é apenas um luxo, é uma estratégia de defesa. 
            A Tribuna Patriota foi construída para quem não aceita ser apenas um espectador.
          </p>
          <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg inline-block">
             <p className="text-destructive font-black uppercase tracking-[0.2em]">Acesse agora enquanto ainda está no ar.</p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-24 bg-card relative z-10 border-y border-primary/5">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-12 tracking-tighter">Nosso Compromisso com a <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Verdade</span></h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-muted rounded-lg w-fit mx-auto">
            {["Independência", "Coragem", "Bastidores"].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 rounded-md font-bold text-sm uppercase tracking-widest transition-all ${
                  activeTab === idx 
                    ? "bg-primary text-primary-foreground shadow-md scale-105" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl min-h-[200px] flex flex-col justify-center items-center transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            {activeTab === 0 && (
              <div className="space-y-4">
                <span className="text-4xl text-primary">⚖️</span>
                <h3 className="text-xl font-black uppercase text-foreground">Zero Influência Estatal</h3>
                <p className="text-muted-foreground">Não aceitamos um centavo de dinheiro público. Nossa lealdade é apenas com você e com o Brasil.</p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="space-y-4">
                <span className="text-4xl text-primary">🛡️</span>
                <h3 className="text-xl font-black uppercase text-foreground">Resistência à Censura</h3>
                <p className="text-muted-foreground">Mantemos nossos servidores em jurisdições protegidas para garantir que a voz da direita nunca seja calada.</p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="space-y-4">
                <span className="text-4xl text-primary">🕵️</span>
                <h3 className="text-xl font-black uppercase text-foreground">Fontes Blindadas</h3>
                <p className="text-muted-foreground">Nossa rede de informantes em Brasília garante que você saiba do movimento antes que ele aconteça.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Curadoria de Inteligência", 
                desc: "Nossa equipe filtra o que realmente importa, economizando seu tempo e protegendo sua mente do lixo informacional.",
                icon: "📋"
              },
              { 
                title: "Análise de Bastidores", 
                desc: "O que acontece nos corredores de Brasília antes de se tornar notícia. Antecipamos movimentos para você.",
                icon: "🏛"
              },
              { 
                title: "Comunidade Patriota", 
                desc: "Debates de alto nível com pessoas que compartilham seus valores e sua visão de mundo, longe de trolls e censura.",
                icon: "🤝"
              }
            ].map((f) => (
              <div key={f.title} className="p-8 rounded-xl border border-primary/10 bg-card hover:border-primary/40 transition-all group shadow-sm hover:shadow-md">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block text-primary">{f.icon}</div>
                <h3 className="text-xl font-bold uppercase text-primary mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/5">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-16">
            Quem confia na <span className="text-primary">Tribuna</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sérgio K.", city: "São Paulo", text: "Finalmente um lugar onde a informação é tratada com seriedade e os valores são respeitados." },
              { name: "Maria Clara", city: "Joinville", text: "As análises de bastidores são cirúrgicas. Mudou minha forma de acompanhar política." },
              { name: "Henrique M.", city: "Goiânia", text: "A comunidade no WhatsApp/Telegram é excelente. Gente de bem discutindo o país." },
            ].map((t, i) => (
              <div key={i} className="bg-card border border-primary/5 p-8 rounded-xl text-left space-y-4 shadow-sm">
                <div className="flex gap-1 text-secondary">
                  {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                </div>
                <p className="text-muted-foreground italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Offer */}
      <section id="oferta" className="py-24 bg-gradient-to-t from-background to-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
              GARANTA SEU ACESSO <span className="text-primary">ANUAL</span>
            </h2>
            <p className="text-xl text-muted-foreground">O acesso completo à inteligência política que você não encontra em nenhum outro lugar.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-4 border-primary bg-card p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {[
                    "Notícias Sem Filtro",
                    "Análises de Bastidores",
                    "Acesso à Comunidade",
                    "Arquivos de Inteligência",
                    "Suporte VIP",
                    "Garantia Incondicional"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-foreground">
                      <span className="text-primary">★</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20 space-y-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Assinatura Anual</p>
                <div className="py-6 border-y border-primary/10">
                  <p className="text-sm font-bold text-primary italic uppercase tracking-widest">Condição Especial Disponível</p>
                  <p className="text-xs text-muted-foreground mt-2">Clique no botão abaixo para conferir o valor atualizado e bônus exclusivos.</p>
                </div>
                
                <a 
                  href={paymentLink}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008000] py-6 text-xl font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-[#00a000] active:scale-95"
                >
                  <span className="relative z-10">Garantir Acesso</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </a>

                <div className="flex justify-center gap-4">
                   <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6 w-auto grayscale opacity-50" />
                   <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6 w-auto grayscale opacity-50" />
                   <img src="https://img.icons8.com/color/48/000000/pix.png" className="h-6 w-auto grayscale opacity-50" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © 2024 TRIBUNA PATRIOTA · TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </section>
    </main>
  );
}