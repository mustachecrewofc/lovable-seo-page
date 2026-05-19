import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { supabase, generatePublicId } from '../lib/supabase';
import logoWhite from '@/assets/mustache-crew-white.png';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  full_name: string;
  artist_name: string;
  track_name: string;
  email: string;
  track_link: string;
  beatport_profile: string;
  spotify_profile: string;
  instagram_profile: string;
  additional_info: string;
}

const EMPTY: FormState = {
  full_name: '', artist_name: '', track_name: '',
  email: '', track_link: '', beatport_profile: '',
  spotify_profile: '', instagram_profile: '', additional_info: '',
};

function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#F0EDE6]">
        {label}{required && <span className="text-[#22C55E] ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

const inputCls = `w-full bg-[#0C140C] border border-[#182B18] rounded-xl px-4 py-3 text-[#F0EDE6]
  text-sm placeholder:text-[#728A72] focus:outline-none focus:border-[#22C55E]
  transition-colors`;

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.full_name.trim())   e.full_name = 'Required';
    if (!form.artist_name.trim()) e.artist_name = 'Required';
    if (!form.track_name.trim())  e.track_name = 'Required';
    else if (form.track_name.trim().length < 2)  e.track_name = 'Minimum 2 characters';
    else if (form.track_name.trim().length > 80) e.track_name = 'Maximum 80 characters';
    if (!form.email.trim())       e.email = 'Required';
    else if (!EMAIL_RE.test(form.email)) e.email = 'Invalid email address';
    if (!form.track_link.trim())  e.track_link = 'Required — SoundCloud, WeTransfer or Dropbox link';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setLoading(true);
    const publicId = generatePublicId();

    const { error } = await supabase.from('submissions').insert({
      public_id: publicId,
      full_name: form.full_name.trim(),
      artist_name: form.artist_name.trim(),
      track_name: form.track_name.trim(),
      email: form.email.trim().toLowerCase(),
      track_link: form.track_link.trim(),
      beatport_profile: form.beatport_profile.trim() || null,
      spotify_profile: form.spotify_profile.trim() || null,
      instagram_profile: form.instagram_profile.trim() || null,
      additional_info: form.additional_info.trim() || null,
      status: 'pending',
    });

    setLoading(false);
    if (error) {
      setServerError(error.message);
    } else {
      setSubmittedId(publicId);
    }
  }

  // ── Success screen ────────────────────────────────────────────────────────
  if (submittedId) {
    const trackerUrl = `${window.location.origin}/track?id=${submittedId}`;
    return (
      <div className="min-h-screen bg-[#060A06] flex items-center justify-center px-4">
        <div className="max-w-[560px] w-full text-center">
          <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h1 className="font-black text-[#F0EDE6] text-3xl md:text-4xl -tracking-[1.5px] mb-3">
            Demo received. 🎧
          </h1>
          <p className="text-[#728A72] text-base leading-relaxed mb-8">
            We'll review your track within 7 days. Save your tracker link to check your status anytime:
          </p>
          <div className="bg-[#0C140C] border border-[#22C55E]/30 rounded-2xl p-5 mb-6 text-left">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72] mb-2">Your tracker link</p>
            <p className="text-[#22C55E] font-mono text-sm break-all mb-3">{trackerUrl}</p>
            <button
              onClick={() => navigator.clipboard.writeText(trackerUrl)}
              className="h-9 flex items-center gap-2 px-4 rounded-full bg-[#182B18] border border-[#22C55E]/30 text-xs font-semibold text-[#22C55E] hover:bg-[#22C55E]/10 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy link
            </button>
          </div>
          <p className="text-xs text-[#728A72] mb-6">Submission ID: <span className="font-mono text-[#F0EDE6]">{submittedId}</span></p>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#728A72] hover:text-[#F0EDE6] transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#060A06]">
      {/* Header */}
      <div className="border-b border-[#182B18]">
        <div className="max-w-[780px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoWhite} alt="Mustache Crew" className="h-10 w-auto invert" />
          </Link>
          <span className="text-xs font-medium text-[#728A72] border border-[#182B18] rounded-full px-3 py-1.5">
            🌍 Free submission
          </span>
        </div>
      </div>

      <div className="max-w-[780px] mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Page heading */}
        <div className="mb-10">
          <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">Mustache Gang World Cup 2026</div>
          <h1 className="font-black text-[#F0EDE6] leading-[1.0] -tracking-[2px] mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Submit your track.
          </h1>
          <p className="text-[#728A72] text-base max-w-[520px] leading-relaxed">
            Free to submit. We review within 7 days. €299 only upon acceptance — no cost if not selected.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Free to submit', 'All genres', 'Reply in 7 days', 'Deadline Aug 15, 2026'].map(t => (
              <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#0C140C] border border-[#182B18] text-[#728A72]">{t}</span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Required fields */}
          <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl p-6 md:p-8 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72]">Artist info</p>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" required error={errors.full_name}>
                <input className={inputCls} placeholder="João Silva" value={form.full_name} onChange={set('full_name')} />
              </Field>
              <Field label="Artist Name" required error={errors.artist_name}>
                <input className={inputCls} placeholder="DJ Joãozinho" value={form.artist_name} onChange={set('artist_name')} />
              </Field>
            </div>

            <Field label="Track Name" required error={errors.track_name}>
              <input className={inputCls} placeholder="My World Cup Track" value={form.track_name} onChange={set('track_name')} maxLength={80} />
              <p className="text-xs text-[#728A72] text-right">{form.track_name.length}/80</p>
            </Field>

            <Field label="Email" required error={errors.email}>
              <input className={inputCls} type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
            </Field>

            <Field label="Private Track Link" required error={errors.track_link}>
              <input className={inputCls} placeholder="SoundCloud, WeTransfer or Dropbox link" value={form.track_link} onChange={set('track_link')} />
              <p className="text-xs text-[#728A72]">Private SoundCloud, WeTransfer, or Dropbox. Make sure the link is accessible.</p>
            </Field>
          </div>

          {/* Optional fields */}
          <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl p-6 md:p-8 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72]">Optional — helps us review faster</p>

            <div className="grid md:grid-cols-3 gap-5">
              <Field label="Beatport Profile">
                <input className={inputCls} placeholder="beatport.com/artist/..." value={form.beatport_profile} onChange={set('beatport_profile')} />
              </Field>
              <Field label="Spotify Profile">
                <input className={inputCls} placeholder="open.spotify.com/artist/..." value={form.spotify_profile} onChange={set('spotify_profile')} />
              </Field>
              <Field label="Instagram">
                <input className={inputCls} placeholder="@yourhandle" value={form.instagram_profile} onChange={set('instagram_profile')} />
              </Field>
            </div>

            <Field label="Anything else you'd like to tell us?">
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                placeholder="Genre, BPM, references, or anything relevant..."
                value={form.additional_info}
                onChange={set('additional_info')}
              />
            </Field>
          </div>

          {serverError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
              Something went wrong: {serverError}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="h-[52px] flex items-center gap-2 px-8 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Sending...
                </>
              ) : 'Submit My Track →'}
            </button>
            <p className="text-xs text-[#728A72]">
              Free to submit · €299 only upon acceptance
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
