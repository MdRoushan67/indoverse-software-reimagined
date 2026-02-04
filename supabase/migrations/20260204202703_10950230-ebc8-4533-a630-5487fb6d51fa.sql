-- Add unique constraint on title for upsert to work
ALTER TABLE public.tech_news ADD CONSTRAINT tech_news_title_unique UNIQUE (title);