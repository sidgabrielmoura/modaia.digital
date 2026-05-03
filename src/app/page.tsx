"use client";

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CountdownTimer } from "@/components/CountdownTimer";

// Icons as SVGs to avoid dependency issues
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);
const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
);
const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
);
const MoneyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export default function LandingPage() {
  const checkoutLink = "https://pay.cakto.com.br/34x7gsh_871269";
  const price = "29,90";

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-zinc-800">

      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="text-zinc-400"><SparklesIcon /></span>
            Moda IA
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-0.5">Oferta encerra em</span>
              <CountdownTimer />
            </div>
            <a href={checkoutLink} className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors">
              Adquirir Prompts
            </a>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 overflow-hidden">

        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Pack Exclusivo de Prompts de IA
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-balance mb-6">
              Prompts para transformar <br className="hidden md:block" />
              <span className="bg-linear-to-r from-zinc-300 to-zinc-600 bg-clip-text text-transparent">fotos simples em editoriais.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 text-balance leading-relaxed">
              Copie e cole nossos prompts validados de Inteligência Artificial para melhorar drasticamente as fotos das modelos da sua loja. Crie imagens com padrão de revista sem pagar por estúdios caros.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 flex flex-col items-center">
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1.5">Vagas com desconto limitadas</span>
                <CountdownTimer />
              </div>
              <a
                href={checkoutLink}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Acesso Imediato por R$ {price}
                <ArrowRightIcon />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* INTERACTIVE BEFORE/AFTER SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-full relative rounded-3xl p-1 bg-linear-to-b from-white/10 to-transparent">
              <BeforeAfterSlider
                beforeImage="/before.png"
                afterImage="/after.png"
              />
            </div>
            <p className="mt-6 text-sm text-zinc-500 flex items-center gap-2">
              <span className="hidden sm:inline">← Arraste a linha para ver a transformação →</span>
              <span className="sm:hidden">Arraste para ver a transformação</span>
            </p>
          </motion.div>
        </section>

        {/* THE PROBLEM / WHY SECTION */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Fotos amadoras <span className="text-zinc-500">destroem</span> suas vendas.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Você sabe que a imagem vende a roupa. Mas contratar um estúdio, luz, fotógrafo e modelo para cada nova peça corrói todo o seu lucro.
              </p>
              <ul className="space-y-4">
                {[
                  "Fim dos custos absurdos com fotógrafos",
                  "Chega de fotos escuras e no cabide",
                  "Crie um feed de alto padrão em segundos",
                  "Independência total para a sua loja"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="bg-white/10 p-1 rounded-full"><CheckIcon /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                <MoneyIcon />
                <h3 className="font-medium mt-4 mb-2">Economia</h3>
                <p className="text-sm text-zinc-500">Custo zero com estúdio</p>
              </div>
              <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square mt-8">
                <CameraIcon />
                <h3 className="font-medium mt-4 mb-2">Velocidade</h3>
                <p className="text-sm text-zinc-500">Pronto em segundos</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              O que as <span className="text-zinc-500">lojistas</span> dizem
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Resultados reais de quem já transformou a apresentação da sua loja com nossos prompts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Amanda Silva",
                store: "Boutique Bella",
                text: "Eu gastava quase R$ 1.000 por mês com fotos em estúdio. Agora faço tudo pelo celular, aplico o prompt e o resultado fica mil vezes melhor. Minhas vendas no Instagram dobraram!"
              },
              {
                name: "Carla Mendes",
                store: "Store Conceito",
                text: "Nunca achei que inteligência artificial fosse pra mim, mas é literalmente só copiar e colar. As fotos ficam parecendo campanha de marca grande. Recomendo de olhos fechados."
              },
              {
                name: "Juliana Costa",
                store: "Ju Modas",
                text: "O que mais me impressionou foi a qualidade da iluminação e o cenário que a IA cria em volta da modelo. Ninguém acredita que a foto original foi tirada na parede branca do meu estoque."
              }
            ].map((feedback, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col h-full"
              >
                <div className="flex gap-1 text-yellow-500 mb-6">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p className="text-zinc-300 flex-1 mb-8 leading-relaxed">
                  "{feedback.text}"
                </p>
                <div>
                  <p className="font-semibold">{feedback.name}</p>
                  <p className="text-sm text-zinc-500">{feedback.store}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* OFFER SECTION */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white mb-6">
              Oferta Exclusiva
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
              O segredo das grandes marcas.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Tenha acesso imediato ao nosso arquivo de prompts de IA. Apenas copie, cole e deixe a Inteligência Artificial elevar as fotos das suas modelos a um nível profissional.
            </p>

            <div className="flex flex-col items-center justify-center mb-10">
              <span className="text-zinc-500 line-through text-lg mb-1">De R$ 97,00 por apenas</span>
              <div className="flex items-start justify-center gap-1 mb-6">
                <span className="text-2xl font-medium mt-1">R$</span>
                <span className="text-6xl font-bold tracking-tighter">{price}</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1.5">Atenção: A oferta acaba em</span>
                <CountdownTimer />
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={checkoutLink}
              className="w-full sm:w-auto inline-flex bg-white text-black px-12 py-5 rounded-full font-bold text-lg items-center justify-center gap-3 transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Comprar Agora
            </motion.a>
            <p className="mt-6 text-sm text-zinc-500">
              Pagamento 100% seguro. Acesso imediato.
            </p>
          </motion.div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-3xl mx-auto px-6 mb-32 mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Preciso de um celular caro ou computador potente?",
                a: "Não. A inteligência artificial faz todo o trabalho pesado na nuvem. Você só precisa de qualquer celular ou computador com acesso à internet para aplicar nossos prompts."
              },
              {
                q: "Serve para fotos tiradas no espelho ou no cabide?",
                a: "Com certeza! Nossos prompts foram desenhados especificamente para transformar cenários caseiros ou simples em ambientes de estúdio, valorizando a roupa independentemente de como foi fotografada."
              },
              {
                q: "Tenho que pagar alguma assinatura além dos prompts?",
                a: "O pacote de prompts é um pagamento único. As ferramentas de IA recomendadas possuem versões gratuitas muito generosas que atendem perfeitamente a imensa maioria das lojas."
              },
              {
                q: "Como recebo o material?",
                a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail com acesso direto ao nosso portal exclusivo onde todos os prompts e instruções estão disponíveis."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-zinc-200">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-zinc-500">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 text-center text-zinc-500 text-sm">
        <p>© 2026 Moda IA Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
