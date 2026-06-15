-- =============================================
-- Migration: add decline reason field
-- Run this once in your Supabase SQL Editor
-- =============================================

alter table public.submissions
  add column if not exists decline_reason text;
