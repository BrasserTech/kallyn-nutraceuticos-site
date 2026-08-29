'use client';
import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#inicio" aria-label="Kallyn Nutracêuticos - Início"><span className="brand-mark">K</span><span className="brand-copy"><strong>Kallyn</strong><small>Nutracêuticos</small></span></a>
    <nav className={open ? 'nav-open' : ''} aria-label="Navegação principal"><a onClick={()=>setOpen(false)} href="#sobre">Sobre</a><a onClick={()=>setOpen(false)} href="#solucoes">Soluções</a><a onClick={()=>setOpen(false)} href="#qualidade">Qualidade</a><a onClick={()=>setOpen(false)} href="#contato">Contato</a><a onClick={()=>setOpen(false)} className="admin-link" href="/admin">Área administrativa</a></nav>
    <a className="header-cta" href="#contato">Fale com a gente <span>↗</span></a>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}><span/><span/></button>
  </header>;
}
