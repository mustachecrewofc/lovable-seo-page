-- =============================================
-- Migration: add follow-up scheduling fields
-- Run this once in your Supabase SQL Editor
-- =============================================

alter table public.submissions
  add column if not exists next_action_at timestamptz,
  add column if not exists next_action_note text;
