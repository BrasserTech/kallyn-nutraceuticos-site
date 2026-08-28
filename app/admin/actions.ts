'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { requireChatGPTUser } from '../chatgpt-auth';
import { defaultContent, saveSiteContent, type SiteContent } from '@/db/content';

export async function updateSiteContent(formData: FormData) {
  const user = await requireChatGPTUser('/admin');
  const text = (key: keyof SiteContent) => String(formData.get(key) || defaultContent[key]).trim();
  const content: SiteContent = { heroEyebrow:text('heroEyebrow'),heroTitle:text('heroTitle'),heroAccent:text('heroAccent'),heroDescription:text('heroDescription'),years:text('years'),whatsapp:text('whatsapp'),aboutTitle:text('aboutTitle'),aboutDescription:text('aboutDescription'),productTitle:text('productTitle'),productDescription:text('productDescription'),productImage:text('productImage'),qualityTitle:text('qualityTitle'),qualityDescription:text('qualityDescription'),contactEmail:text('contactEmail') };
  await saveSiteContent(content, user.email); revalidatePath('/'); revalidatePath('/admin'); redirect('/admin?saved=1');
}
