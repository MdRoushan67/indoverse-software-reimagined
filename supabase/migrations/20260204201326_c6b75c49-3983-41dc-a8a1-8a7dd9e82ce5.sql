-- Contact form leads
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  source TEXT DEFAULT 'contact_form',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from anyone (public contact form)
CREATE POLICY "Anyone can submit contact form" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow insert from anyone (public newsletter signup)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Cached tech news
CREATE TABLE public.tech_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT,
  url TEXT,
  summary TEXT,
  image_url TEXT,
  fetched_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.tech_news ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read news (public display)
CREATE POLICY "Anyone can read tech news" ON public.tech_news
  FOR SELECT USING (true);

-- Game high scores
CREATE TABLE public.game_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name TEXT DEFAULT 'Anonymous',
  score INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.game_scores ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert scores and read leaderboard
CREATE POLICY "Anyone can submit scores" ON public.game_scores
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view leaderboard" ON public.game_scores
  FOR SELECT USING (true);