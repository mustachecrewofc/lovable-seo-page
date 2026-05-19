-- =============================================
-- Mustache Gang World Cup 2026 — Supabase Setup
-- Run this in your Supabase SQL Editor
-- =============================================

-- 1. Create submissions table
create table public.submissions (
  id uuid default gen_random_uuid() primary key,
  public_id varchar(8) unique not null,

  -- Artist info
  full_name text not null,
  artist_name text not null,
  track_name text not null,
  email text not null,
  track_link text not null,
  beatport_profile text,
  spotify_profile text,
  instagram_profile text,
  additional_info text,

  -- Pipeline status
  status text not null default 'pending'
    check (status in ('pending', 'in_review', 'gold_list', 'approved', 'rejected')),

  -- Admin notes (JSON array: [{text, createdAt}])
  admin_notes text not null default '[]',

  -- Payment
  payment_status text not null default 'not_charged'
    check (payment_status in ('not_charged', 'requested', 'paid')),
  payment_requested_at timestamptz,
  payment_paid_at timestamptz,
  payment_method text,
  payment_link text,
  payment_notes text,
  payment_amount numeric,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Auto-update updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger submissions_updated_at
  before update on submissions
  for each row execute function update_updated_at();

-- 3. Row Level Security
alter table public.submissions enable row level security;

-- Anyone can submit (INSERT)
create policy "public_can_insert" on public.submissions
  for insert with check (true);

-- Anyone can read (public_id acts as the access token for artists)
create policy "public_can_read" on public.submissions
  for select using (true);

-- Only authenticated users (admins) can update
create policy "auth_can_update" on public.submissions
  for update using (auth.role() = 'authenticated');

-- Only authenticated users (admins) can delete
create policy "auth_can_delete" on public.submissions
  for delete using (auth.role() = 'authenticated');

-- 4. Index for fast public_id lookups
create index submissions_public_id_idx on public.submissions(public_id);

-- 5. Create your admin user:
-- Go to Supabase → Authentication → Users → Add User
-- Email: your admin email
-- Password: your admin password
-- Done! The VITE_ADMIN_EMAILS env var controls who sees the admin panel.
