import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { supabase, STATUS_META, type Submission, type SubmissionStatus } from '../lib/supabase';
import logoWhite from '@/assets/mustache-crew-white.png';

const PIPELINE: SubmissionStatus[] = ['pending', 'in_review', 'gold_list', 'approved'];

export default function TrackPage() {
  const id = new URLSearchParams(window.location.search).get('id') || '';
  const [sub, setSub] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) { setNotFound(true); setLoading(false); return; }
    supabase
      .from('submissions')
      .select('*')
      .eq('public_id', id)
      .single()
      .then(({ data, error }) => {
        setLoading(false);
        if (error || !data) setNotFound(true);
        else setSub(data as Submission);
      });
  }, [id]);

  if (loading) return (
    <Screen>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#22C55E] border-t-transparent animate-spin" />
        <p className="text-[#728A72] text-sm">Looking up your submission…</p>
      </div>
    </Screen>
  );

  if (notFound) return (
    <Screen>
      <div className="text-center">
        <p className="text-5xl mb-4">🎵</p>
        <h2 className="font-black text-[#F0EDE6] text-2xl -tracking-[1px] mb-3">Submission not found</h2>
        <p className="text-[#728A72] text-sm mb-6">Double-check your tracker link or ID. If you just submitted, try again in a few seconds.</p>
        <Link to="/submit" className="inline-flex h-10 items-center px-5 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] transition-colors">
          Submit a track →
        </Link>
      </div>
    </Screen>
  );

  const status = sub!.status as SubmissionStatus;
  const meta = STATUS_META[status];
  const isRejected = status === 'rejected';
  const isApproved = status === 'approved';

  return (
    <div className="min-h-screen bg-[#060A06]">
      {/* Header */}
      <div className="border-b border-[#182B18]">
        <div className="max-w-[640px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoWhite} alt="Mustache Crew" className="h-10 w-auto invert" />
          </Link>
          <span className="text-xs font-mono text-[#728A72] border border-[#182B18] rounded-full px-3 py-1.5">
            ID: {id}
          </span>
        </div>
      </div>

      <div className="max-w-[640px] mx-auto px-4 md:px-8 py-12 md:py-20">

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8"
          style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.color}40` }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: meta.color }} />
          {meta.label}
        </div>

        {/* Main heading */}
        <h1 className="font-black text-[#F0EDE6] leading-[1.0] -tracking-[2px] mb-3" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          {isApproved ? "You're in. 🎉" : isRejected ? "Not this time." : "We got your demo."}
        </h1>
        <p className="text-[#728A72] text-base leading-relaxed mb-10">
          {meta.desc}
        </p>

        {/* Progress pipeline (not shown for rejected) */}
        {!isRejected && (
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72] mb-5">Mission progress</p>
            <div className="relative flex items-start">
              {PIPELINE.map((s, i) => {
                const m = STATUS_META[s];
                const isDone = PIPELINE.indexOf(status) >= i;
                const isCurrent = s === status;
                return (
                  <div key={s} className="flex-1 flex flex-col items-center relative">
                    {/* Connector */}
                    {i > 0 && (
                      <div className="absolute top-[14px] right-1/2 w-full h-[2px] bg-[#182B18]">
                        <div
                          className="h-full bg-[#22C55E] transition-all duration-700"
                          style={{ width: isDone ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                    {/* Dot */}
                    <div
                      className={`relative z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isCurrent ? 'border-[#22C55E] bg-[#22C55E] scale-110 shadow-[0_0_12px_rgba(34,197,94,0.5)]'
                        : isDone ? 'border-[#22C55E] bg-[#0A2A0A]'
                        : 'border-[#182B18] bg-[#060A06]'
                      }`}
                    >
                      {isDone && !isCurrent && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l2.5 2.5 5.5-5" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <p className={`mt-2 text-[10px] text-center font-medium leading-tight max-w-[80px] ${isCurrent ? 'text-[#F0EDE6]' : 'text-[#728A72]'}`}>
                      {m.label.split(' ')[0]}{s === 'gold_list' ? ' List' : ''}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Submission details card */}
        <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72]">Your submission</p>
          <Row label="Artist" value={sub!.artist_name} />
          <Row label="Track" value={sub!.track_name} />
          <Row label="Email" value={sub!.email} />
          <Row label="Submitted" value={new Date(sub!.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} />
        </div>

        {/* Approved next steps */}
        {isApproved && (
          <div className="mt-6 bg-[#0A2A0A] border border-[#22C55E]/30 rounded-2xl p-6">
            <p className="font-bold text-[#22C55E] mb-2">What happens next?</p>
            <ul className="text-sm text-[#728A72] space-y-1.5 leading-relaxed">
              <li>→ Check your email — the artist agreement is on its way</li>
              <li>→ Confirm your spot and complete the €299 payment</li>
              <li>→ You'll be added to the private Telegram squad</li>
              <li>→ Campaign timeline and assets will be shared there</li>
            </ul>
          </div>
        )}

        {/* Rejected — can resubmit */}
        {isRejected && (
          <div className="mt-6 bg-[#0C140C] border border-[#182B18] rounded-2xl p-6">
            <p className="text-[#728A72] text-sm leading-relaxed mb-4">
              This VA has a very tight curation — not every great track makes it in.
              You're welcome to submit again for future Mustache Crew campaigns.
            </p>
            <Link to="/submit" className="inline-flex h-10 items-center px-5 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] transition-colors">
              Submit for next mission →
            </Link>
          </div>
        )}

        <p className="mt-8 text-xs text-[#728A72]">
          Questions? Reach us on <a href="https://www.instagram.com/mustachecrew/" target="_blank" rel="noreferrer" className="text-[#22C55E] hover:underline">Instagram @mustachecrew</a>
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#182B18] last:border-0">
      <span className="text-xs font-semibold text-[#728A72] uppercase tracking-[1px]">{label}</span>
      <span className="text-sm text-[#F0EDE6]">{value}</span>
    </div>
  );
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#060A06] flex items-center justify-center px-4">
      <div className="max-w-[480px] w-full">{children}</div>
    </div>
  );
}
