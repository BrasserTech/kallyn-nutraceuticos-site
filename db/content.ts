import { env } from 'cloudflare:workers';

export type SiteContent = {
  heroEyebrow: string; heroTitle: string; heroAccent: string; heroDescription: string;
  years: string; whatsapp: string; aboutTitle: string; aboutDescription: string;
  productTitle: string; productDescription: string; productImage: string;
  qualityTitle: string; qualityDescription: string; contactEmail: string;
};

export const defaultContent: SiteContent = {
  heroEyebrow: 'Ciencia, equilibrio e bem-estar',
  heroTitle: 'Inovacao que transforma', heroAccent: 'saude.',
  heroDescription: 'Desenvolvemos solucoes nutraceuticas que unem ciencia, natureza e tecnologia para promover uma vida mais saudavel.',
  years: '+12', whatsapp: '5548999999999',
  aboutTitle: 'Saude pensada por inteiro.',
  aboutDescription: 'Na Kallyn, cada formula nasce do encontro entre pesquisa, ativos de qualidade e um olhar genuino para as necessidades das pessoas.',
  productTitle: 'Solucoes inteligentes para cada fase da vida.',
  productDescription: 'Linhas desenvolvidas com rigor, rastreabilidade e ingredientes selecionados para apoiar energia, equilibrio, imunidade e longevidade.',
  productImage: '', qualityTitle: 'Qualidade que comeca na origem.',
  qualityDescription: 'Da selecao dos insumos ao produto final, trabalhamos com processos consistentes e parceiros certificados.',
  contactEmail: 'contato@kallyn.com.br',
};

async function ensureTable() {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_content (
    id TEXT PRIMARY KEY,
    payload TEXT NOT NULL,
    updated_at INTEGER NOT NULL,
    updated_by TEXT NOT NULL
  )`).run();
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    await ensureTable();
    const row = await env.DB.prepare('SELECT payload FROM site_content WHERE id = ?').bind('home').first<{ payload: string }>();
    return row ? { ...defaultContent, ...JSON.parse(row.payload) } : defaultContent;
  } catch { return defaultContent; }
}

export async function saveSiteContent(content: SiteContent, email: string) {
  await ensureTable();
  await env.DB.prepare(`INSERT INTO site_content (id, payload, updated_at, updated_by) VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at, updated_by = excluded.updated_by`)
    .bind('home', JSON.stringify(content), Date.now(), email).run();
}
