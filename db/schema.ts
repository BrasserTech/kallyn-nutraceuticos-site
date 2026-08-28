import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const siteContent = sqliteTable('site_content', {
  id: text('id').primaryKey(),
  payload: text('payload').notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  updatedBy: text('updated_by').notNull(),
});
