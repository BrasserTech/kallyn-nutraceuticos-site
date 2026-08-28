/* eslint-disable @next/next/no-img-element */
import { getSiteContent } from '@/db/content';
import { SiteHeader } from './site-header';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const c = await getSiteContent();
  const whatsappUrl = `https://wa.me/${c.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Ola! Gostaria de conhecer melhor as solucoes da Kallyn.')}`;
  return <main>
    <SiteHeader />
    <section className="hero" id="inicio">
      <div className="hero-copy"><p className="eyebrow"><span />{c.heroEyebrow}</p><h1>{c.heroTitle}<br/><em>{c.heroAccent}</em></h1><p className="hero-lead">{c.heroDescription}</p><div className="hero-actions"><a className="primary-button" href="#solucoes">Conheca nossas solucoes <span>↗</span></a><a className="text-button" href="#sobre">Nossa essencia <span>↓</span></a></div><div className="hero-proof"><strong>{c.years}</strong><span>anos transformando<br/>ciencia em bem-estar</span><i/></div></div>
      <div className="hero-visual" aria-label="Representacao tridimensional de uma formula nutraceutica"><div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/><div className="ring ring-one"/><div className="ring ring-two"/><div className="product-card"><span className="mini-mark">K</span><div><small>KALLYN NUTRACEUTICOS</small><strong>ESSENCIAL</strong><p>equilibrio de dentro para fora</p></div><b>60 capsulas</b></div><div className="floating-tag tag-one"><span>01</span>Ciencia aplicada</div><div className="floating-tag tag-two"><span>02</span>Ativos naturais</div><div className="visual-caption"><small>FORMULAS INTELIGENTES</small><strong>Resultados que voce sente.</strong></div></div>
    </section>

    <section className="manifesto" id="sobre"><div className="section-index">01 — NOSSA ESSENCIA</div><div><p className="section-kicker">CUIDAR E A NOSSA NATUREZA</p><h2>{c.aboutTitle}</h2></div><div className="manifesto-copy"><p>{c.aboutDescription}</p><a href="#qualidade">Conheca nosso jeito de fazer <span>↗</span></a></div></section>

    <section className="pillars"><article><span>01</span><div className="pillar-icon">✦</div><h3>Ciencia com proposito</h3><p>Pesquisa e desenvolvimento orientados por evidencias e pelas necessidades reais das pessoas.</p></article><article><span>02</span><div className="pillar-icon">◌</div><h3>Natureza potencializada</h3><p>Ativos criteriosamente selecionados e combinados para oferecer formulas mais completas.</p></article><article><span>03</span><div className="pillar-icon">◇</div><h3>Cuidado transparente</h3><p>Informacao clara, rastreabilidade e responsabilidade em cada etapa do desenvolvimento.</p></article></section>

    <section className="solutions" id="solucoes"><div className="solutions-copy"><div className="section-index light">02 — NOSSAS SOLUCOES</div><p className="section-kicker light">BEM-ESTAR EM MOVIMENTO</p><h2>{c.productTitle}</h2><p>{c.productDescription}</p><a className="cream-button" href="#contato">Encontre sua solucao <span>↗</span></a></div><div className="solutions-stage">{c.productImage ? <img src={c.productImage} alt="Produto Kallyn em destaque"/> : <><div className="bottle"><i/><span>K</span><small>KALLYN</small><strong>VITAL</strong><p>energia & equilibrio</p><b>60 capsulas</b></div><div className="capsule capsule-a"/><div className="capsule capsule-b"/></>}<div className="stage-label"><small>DESTAQUE</small><strong>Vitalidade que acompanha<br/>o seu ritmo.</strong></div></div></section>

    <section className="quality" id="qualidade"><div className="quality-art"><div className="leaf leaf-a"/><div className="leaf leaf-b"/><div className="quality-seal"><span>100%</span><small>compromisso<br/>com qualidade</small></div></div><div className="quality-copy"><div className="section-index">03 — NOSSO COMPROMISSO</div><p className="section-kicker">DA ORIGEM A SUA ROTINA</p><h2>{c.qualityTitle}</h2><p>{c.qualityDescription}</p><ul><li><span>✓</span>Ingredientes selecionados</li><li><span>✓</span>Processos rastreaveis</li><li><span>✓</span>Desenvolvimento especializado</li><li><span>✓</span>Qualidade em cada detalhe</li></ul></div></section>

    <section className="contact" id="contato"><p className="section-kicker light">VAMOS CONVERSAR?</p><h2>O proximo passo para<br/>uma vida mais <em>equilibrada.</em></h2><p>Nossa equipe esta pronta para entender suas necessidades e apresentar as melhores solucoes.</p><div><a className="cream-button" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span>↗</span></a><a className="contact-email" href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a></div></section>

    <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">K</span><span className="brand-copy"><strong>Kallyn</strong><small>Nutraceuticos</small></span></a><p>Ciencia, natureza e tecnologia<br/>para transformar saude.</p><div><a href="#sobre">Sobre</a><a href="#solucoes">Solucoes</a><a href="#qualidade">Qualidade</a><a href="/admin">Administrativo</a></div><small>© 2026 Kallyn Nutraceuticos. Todos os direitos reservados.</small></footer>
    <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a Kallyn pelo WhatsApp"><span>☏</span><i>Fale conosco</i></a>
  </main>;
}
