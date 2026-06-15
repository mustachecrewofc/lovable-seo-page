import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!url || !key) {
  console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(url || '', key || '');

// ─── Types ──────────────────────────────────────────────────────────────────

export type SubmissionStatus = 'pending' | 'in_review' | 'gold_list' | 'approved' | 'rejected';
export type PaymentStatus = 'not_charged' | 'first_contact' | 'interested' | 'recall' | 'declined' | 'paid';

export interface AdminNote {
  text: string;
  createdAt: string;
}

export interface Submission {
  id: string;
  public_id: string;
  full_name: string;
  artist_name: string;
  track_name: string;
  email: string;
  track_link: string;
  beatport_profile?: string;
  spotify_profile?: string;
  instagram_profile?: string;
  additional_info?: string;
  status: SubmissionStatus;
  admin_notes: string; // JSON string of AdminNote[]
  payment_status: PaymentStatus;
  payment_requested_at?: string;
  payment_paid_at?: string;
  payment_method?: string;
  payment_link?: string;
  payment_notes?: string;
  payment_amount?: number;
  next_action_at?: string;
  next_action_note?: string;
  decline_reason?: string;
  created_at: string;
  updated_at: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Generates a short, readable publicId (no ambiguous chars: 0/O, 1/I/l) */
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
export function generatePublicId(length = 8): string {
  return Array.from({ length }, () =>
    CHARSET[Math.floor(Math.random() * CHARSET.length)]
  ).join('');
}

export function parseNotes(raw: string): AdminNote[] {
  try { return JSON.parse(raw) as AdminNote[]; } catch { return []; }
}

export const STATUS_META: Record<SubmissionStatus, { label: string; color: string; bg: string; desc: string }> = {
  pending:     { label: 'Received',                      color: '#728A72', bg: '#182B18', desc: 'Demo is in the review queue.' },
  in_review:   { label: 'In Review',                     color: '#F5C842', bg: '#2A230A', desc: 'Our A&R team is listening to your track.' },
  gold_list:   { label: 'Shortlisted (Gold List)',        color: '#F5C842', bg: '#2A1A0A', desc: 'High priority — strong candidate for the lineup.' },
  approved:    { label: 'Approved',                      color: '#22C55E', bg: '#0A2A0A', desc: "You're in the lineup. Check your email for next steps." },
  rejected:    { label: 'Not selected for this mission', color: '#EF4444', bg: '#2A0A0A', desc: 'Not selected this time — you can submit again for future VAs.' },
};

export const PAYMENT_META: Record<PaymentStatus, { label: string; color: string }> = {
  not_charged:  { label: 'Not contacted yet',  color: '#728A72' },
  first_contact:{ label: 'First contact',      color: '#F5C842' },
  interested:   { label: 'Interested',         color: '#A78BFA' },
  recall:       { label: 'Recall',             color: '#3B82F6' },
  declined:     { label: 'Declined to pay',    color: '#EF4444' },
  paid:         { label: 'Paid',               color: '#22C55E' },
};

export const MISSION_SLOTS = 30;
export const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || '').split(',').map((e: string) => e.trim().toLowerCase()).filter(Boolean);
