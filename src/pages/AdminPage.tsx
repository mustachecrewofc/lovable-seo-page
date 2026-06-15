import { useEffect, useState, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
import {
  supabase, ADMIN_EMAILS, MISSION_SLOTS, STATUS_META, PAYMENT_META,
  parseNotes, generatePublicId,
  type Submission, type SubmissionStatus, type PaymentStatus, type AdminNote,
} from '../lib/supabase';
import logoWhite from '@/assets/mustache-crew-white.png';

// ─── Auth ─────────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) { setError(err.message); return; }
    const userEmail = data.user?.email?.toLowerCase() || '';
    if (ADMIN_EMAILS.length > 0 && !ADMIN_EMAILS.includes(userEmail)) {
      await supabase.auth.signOut();
      setError('This account does not have admin access.');
      return;
    }
    onLogin();
  }

  return (
    <div className="min-h-screen bg-[#060A06] flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <img src={logoWhite} alt="Mustache Crew" className="h-12 w-auto invert mx-auto mb-4" />
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#728A72]">Admin Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#0C140C] border border-[#182B18] rounded-2xl p-8 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#728A72] uppercase tracking-[1px]">Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#060A06] border border-[#182B18] rounded-xl px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#728A72] focus:outline-none focus:border-[#22C55E] transition-colors"
              placeholder="admin@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#728A72] uppercase tracking-[1px]">Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#060A06] border border-[#182B18] rounded-xl px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#728A72] focus:outline-none focus:border-[#22C55E] transition-colors"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="w-full h-11 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] disabled:opacity-60 transition-colors"
          >
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>
        </form>
        <p className="text-center mt-6 text-xs text-[#728A72]">
          <Link to="/" className="hover:text-[#F0EDE6] transition-colors">← Back to site</Link>
        </p>
      </div>
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: SubmissionStatus }) {
  const m = STATUS_META[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: m.bg, color: m.color }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
      {m.label}
    </span>
  );
}

const inputCls = 'w-full bg-[#060A06] border border-[#182B18] rounded-xl px-3 py-2.5 text-sm text-[#F0EDE6] placeholder:text-[#728A72] focus:outline-none focus:border-[#22C55E] transition-colors';

function daysAgo(iso: string): number {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
}

function startOfToday(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// ─── Submission detail modal ──────────────────────────────────────────────────

function SubmissionModal({ sub, onClose, onUpdate, onDelete }: {
  sub: Submission;
  onClose: () => void;
  onUpdate: (updated: Submission) => void;
  onDelete: () => void;
}) {
  const [status, setStatus] = useState<SubmissionStatus>(sub.status);
  const [noteText, setNoteText] = useState('');
  const [saving, setSaving] = useState(false);
  const notes = parseNotes(sub.admin_notes);

  async function saveStatus(newStatus: SubmissionStatus) {
    setSaving(true);
    const { data } = await supabase.from('submissions').update({ status: newStatus }).eq('id', sub.id).select().single();
    setSaving(false);
    if (data) { setStatus(newStatus); onUpdate(data as Submission); }
  }

  async function addNote() {
    if (!noteText.trim()) return;
    const newNotes: AdminNote[] = [...notes, { text: noteText.trim(), createdAt: new Date().toISOString() }];
    const { data } = await supabase.from('submissions').update({ admin_notes: JSON.stringify(newNotes) }).eq('id', sub.id).select().single();
    if (data) { setNoteText(''); onUpdate(data as Submission); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl w-full max-w-[660px] max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#182B18]">
          <div>
            <p className="font-bold text-[#F0EDE6]">{sub.artist_name}</p>
            <p className="text-xs text-[#728A72]">{sub.track_name} · {sub.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`/track?id=${sub.public_id}`} target="_blank" rel="noreferrer"
              className="h-8 px-3 flex items-center rounded-lg border border-[#182B18] text-[#728A72] text-xs hover:text-[#F5C842] hover:border-[#F5C842]/30 transition-colors"
            >
              🔗 Tracker ↗
            </a>
            <button onClick={onClose} className="text-[#728A72] hover:text-[#F0EDE6] transition-colors text-xl leading-none ml-1">×</button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Fields */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ['Full Name', sub.full_name], ['Artist', sub.artist_name],
              ['Track', sub.track_name], ['Email', sub.email],
              ['Submitted', new Date(sub.created_at).toLocaleDateString('en-GB')],
              ['Public ID', sub.public_id],
            ].map(([l, v]) => (
              <div key={l} className="bg-[#060A06] rounded-xl px-3 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#728A72] mb-0.5">{l}</p>
                <p className="text-[#F0EDE6] font-mono text-xs">{v}</p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="space-y-2">
            <a href={sub.track_link} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#22C55E] hover:underline">
              🎵 Listen to track ↗
            </a>
            {sub.beatport_profile && <a href={sub.beatport_profile} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#728A72] hover:text-[#F0EDE6]">Beatport ↗</a>}
            {sub.spotify_profile && <a href={sub.spotify_profile} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#728A72] hover:text-[#F0EDE6]">Spotify ↗</a>}
            {sub.instagram_profile && <a href={`https://instagram.com/${sub.instagram_profile.replace('@','')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#728A72] hover:text-[#F0EDE6]">Instagram ↗</a>}
          </div>

          {sub.additional_info && (
            <div className="bg-[#060A06] rounded-xl px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1">Additional info</p>
              <p className="text-sm text-[#F0EDE6] leading-relaxed">{sub.additional_info}</p>
            </div>
          )}

          {/* Status change */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-2">Status</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(STATUS_META) as SubmissionStatus[]).map(s => (
                <button key={s}
                  onClick={() => saveStatus(s)}
                  disabled={saving || s === status}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    s === status
                      ? 'border-[#22C55E] bg-[#22C55E]/10 text-[#22C55E]'
                      : 'border-[#182B18] text-[#728A72] hover:border-[#728A72]'
                  }`}
                >
                  {STATUS_META[s].label}
                </button>
              ))}
            </div>
          </div>

          {/* Admin notes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-3">
              Internal notes <span className="normal-case font-normal">(not visible to artist)</span>
            </p>
            <div className="space-y-2 mb-3 max-h-[160px] overflow-y-auto">
              {notes.length === 0 ? (
                <p className="text-xs text-[#728A72] italic">No notes yet.</p>
              ) : notes.map((n, i) => (
                <div key={i} className="bg-[#060A06] rounded-xl px-3 py-2.5">
                  <p className="text-[10px] text-[#728A72] mb-1">{new Date(n.createdAt).toLocaleString()}</p>
                  <p className="text-sm text-[#F0EDE6]">{n.text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <textarea
                className={`${inputCls} flex-1 resize-none`} rows={2}
                placeholder="Add internal note…"
                value={noteText} onChange={e => setNoteText(e.target.value)}
              />
              <button onClick={addNote}
                className="self-end h-10 px-4 rounded-xl bg-[#182B18] border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold hover:bg-[#22C55E]/10 transition-colors">
                Add
              </button>
            </div>
          </div>

          {/* Delete */}
          <div className="pt-2 border-t border-[#182B18]">
            <button
              onClick={onDelete}
              className="w-full h-10 rounded-xl border border-red-500/20 text-red-400/70 text-sm font-semibold hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/40 transition-colors"
            >
              🗑️ Delete this submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Payment detail modal ─────────────────────────────────────────────────────

function PaymentModal({ sub, onClose, onUpdate }: {
  sub: Submission; onClose: () => void; onUpdate: (s: Submission) => void;
}) {
  const [method, setMethod] = useState(sub.payment_method || '');
  const [link, setLink] = useState(sub.payment_link || '');
  const [notes, setNotes] = useState(sub.payment_notes || '');
  const [amount, setAmount] = useState(String(sub.payment_amount || '299'));
  const [nextActionAt, setNextActionAt] = useState(sub.next_action_at ? sub.next_action_at.slice(0, 10) : '');
  const [nextActionNote, setNextActionNote] = useState(sub.next_action_note || '');
  const [declineReason, setDeclineReason] = useState(sub.decline_reason || '');
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    const { data, error } = await supabase.from('submissions').update({
      payment_method: method || null,
      payment_link: link || null,
      payment_notes: notes || null,
      payment_amount: parseFloat(amount) || null,
      next_action_at: nextActionAt ? new Date(nextActionAt).toISOString() : null,
      next_action_note: nextActionNote || null,
      decline_reason: declineReason || null,
    }).eq('id', sub.id).select().single();
    setSaving(false);
    if (error) { console.error(error); alert(`Failed to save: ${error.message}`); return; }
    if (data) onUpdate(data as Submission);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl w-full max-w-[520px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#182B18]">
          <div>
            <p className="font-bold text-[#F0EDE6]">{sub.artist_name}</p>
            <p className="text-xs text-[#728A72]">{sub.track_name} · {sub.email}</p>
          </div>
          <button onClick={onClose} className="text-[#728A72] hover:text-[#F0EDE6] text-xl leading-none">×</button>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: PAYMENT_META[sub.payment_status].color, background: `${PAYMENT_META[sub.payment_status].color}15` }}>
              {PAYMENT_META[sub.payment_status].label}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Amount (€)</label>
              <input className={inputCls} type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Method</label>
              <input className={inputCls} placeholder="PayPal, Bank, etc." value={method} onChange={e => setMethod(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Payment link</label>
            <input className={inputCls} placeholder="https://paypal.com/..." value={link} onChange={e => setLink(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Notes</label>
            <textarea className={`${inputCls} resize-none`} rows={2} value={notes} onChange={e => setNotes(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Next action date</label>
              <input className={inputCls} type="date" value={nextActionAt} onChange={e => setNextActionAt(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[1px] text-[#728A72] mb-1.5 block">Next action note</label>
              <input className={inputCls} placeholder="e.g. Call again, send reminder" value={nextActionNote} onChange={e => setNextActionNote(e.target.value)} />
            </div>
          </div>
          {sub.payment_status === 'declined' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-[1px] text-red-400 mb-1.5 block">Why did they decline?</label>
              <textarea className={`${inputCls} resize-none`} rows={2} placeholder="e.g. Too expensive, bad timing, no budget..."
                value={declineReason} onChange={e => setDeclineReason(e.target.value)} />
            </div>
          )}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={save} disabled={saving}
              className="h-10 px-5 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] disabled:opacity-60 transition-colors">
              {saving ? 'Saving…' : 'Save'}
            </button>
            <a href="https://www.paypal.com/ncp/payment/4LMWNJXKP58LU" target="_blank" rel="noreferrer"
              className="h-10 px-5 rounded-full border border-[#182B18] text-[#728A72] text-sm font-semibold hover:text-[#F0EDE6] hover:border-[#728A72] transition-colors flex items-center">
              Open PayPal Page ↗
            </a>
          </div>
          <div className="bg-[#060A06] rounded-xl px-4 py-3 space-y-1.5 text-xs">
            <p className="text-[#728A72]">Email: <span className="text-[#F0EDE6]">{sub.email}</span></p>
            <p className="text-[#728A72]">Track: <span className="text-[#F0EDE6]">{sub.track_name}</span></p>
            {sub.payment_requested_at && (
              <p className="text-[#728A72]">
                First contact sent: <span className="text-[#F0EDE6]">{new Date(sub.payment_requested_at).toLocaleString()}</span>
                {' '}<span className="text-[#728A72]">({daysAgo(sub.payment_requested_at)}d ago)</span>
              </p>
            )}
            {sub.payment_paid_at && <p className="text-[#728A72]">Paid: <span className="text-[#22C55E]">{new Date(sub.payment_paid_at).toLocaleString()}</span></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Panel ─────────────────────────────────────────────────────────

type Tab = 'pipeline' | 'payments';

export default function AdminPage() {
  const [session, setSession] = useState<boolean | null>(null);
  const [subs, setSubs] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>('pipeline');
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | 'all'>('all');
  const [selectedSub, setSelectedSub] = useState<Submission | null>(null);
  const [paymentSub, setPaymentSub] = useState<Submission | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<Submission | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ── Auth check
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(!!data.session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(!!s));
    return () => subscription.unsubscribe();
  }, []);

  // ── Load submissions
  const loadSubs = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
    setLoading(false);
    if (data) setSubs(data as Submission[]);
  }, []);

  useEffect(() => { if (session) loadSubs(); }, [session, loadSubs]);

  function updateLocal(updated: Submission) {
    setSubs(prev => prev.map(s => s.id === updated.id ? updated : s));
    if (selectedSub?.id === updated.id) setSelectedSub(updated);
    if (paymentSub?.id === updated.id) setPaymentSub(updated);
  }

  async function changeStatus(sub: Submission, newStatus: SubmissionStatus) {
    const { data, error } = await supabase.from('submissions').update({ status: newStatus }).eq('id', sub.id).select().single();
    if (error) { console.error(error); alert(`Failed to update status: ${error.message}`); return; }
    if (data) updateLocal(data as Submission);
  }

  async function changePaymentStatus(sub: Submission, newStatus: PaymentStatus) {
    const update: Partial<Submission> = { payment_status: newStatus };
    if ((newStatus === 'first_contact' || newStatus === 'recall') && !sub.payment_requested_at) update.payment_requested_at = new Date().toISOString();
    if (newStatus === 'paid') {
      update.payment_paid_at = new Date().toISOString();
      if (!sub.payment_requested_at) update.payment_requested_at = new Date().toISOString();
    }
    if (newStatus === 'not_charged') { update.payment_requested_at = undefined; update.payment_paid_at = undefined; }
    const { data, error } = await supabase.from('submissions').update(update).eq('id', sub.id).select().single();
    if (error) { console.error(error); alert(`Failed to update payment status: ${error.message}`); return; }
    if (data) updateLocal(data as Submission);
  }

  async function approveAndMarkFirstContact(sub: Submission) {
    const update: Partial<Submission> = { status: 'approved', payment_status: 'first_contact' };
    if (!sub.payment_requested_at) update.payment_requested_at = new Date().toISOString();
    const { data, error } = await supabase.from('submissions').update(update).eq('id', sub.id).select().single();
    if (error) { console.error(error); alert(`Failed to approve + mark first contact: ${error.message}`); return; }
    if (data) updateLocal(data as Submission);
  }

  async function deleteSub(sub: Submission) {
    await supabase.from('submissions').delete().eq('id', sub.id);
    setSubs(prev => prev.filter(s => s.id !== sub.id));
    setDeleteConfirm(null);
    setSelectedSub(null);
  }

  function copyTrackerLink(sub: Submission) {
    const url = `${window.location.origin}/track?id=${sub.public_id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(sub.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  async function signOut() { await supabase.auth.signOut(); setSession(false); }

  if (session === null) return <div className="min-h-screen bg-[#060A06]" />;
  if (!session) return <LoginScreen onLogin={() => setSession(true)} />;

  const approvedCount = subs.filter(s => s.status === 'approved').length;
  const filtered = statusFilter === 'all' ? subs : subs.filter(s => s.status === statusFilter);

  // Payment metrics
  const approvedSubs = subs.filter(s => s.status === 'approved');
  const pmNot = approvedSubs.filter(s => s.payment_status === 'not_charged').length;
  const pmFirstContact = approvedSubs.filter(s => s.payment_status === 'first_contact').length;
  const pmInterested = approvedSubs.filter(s => s.payment_status === 'interested').length;
  const pmRecall = approvedSubs.filter(s => s.payment_status === 'recall').length;
  const pmDeclined = approvedSubs.filter(s => s.payment_status === 'declined').length;
  const pmPaid = approvedSubs.filter(s => s.payment_status === 'paid').length;
  const dueToday = approvedSubs
    .filter(s => s.next_action_at && new Date(s.next_action_at).getTime() <= Date.now())
    .sort((a, b) => new Date(a.next_action_at!).getTime() - new Date(b.next_action_at!).getTime());

  return (
    <div className="min-h-screen bg-[#060A06] text-[#F0EDE6]">
      {/* Topbar */}
      <div className="border-b border-[#182B18] sticky top-0 bg-[#060A06]/95 backdrop-blur z-40">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={logoWhite} alt="Mustache Crew" className="h-8 w-auto invert" />
            </Link>
            <span className="text-xs font-bold text-[#728A72] uppercase tracking-[1px] hidden md:inline">Admin</span>
          </div>

          {/* Mission capacity */}
          <div className="flex items-center gap-2 bg-[#0C140C] border border-[#182B18] rounded-full px-4 py-1.5">
            <span className="text-xs text-[#728A72]">Approved</span>
            <span className={`text-sm font-black tabular-nums ${approvedCount > MISSION_SLOTS ? 'text-[#F5C842]' : 'text-[#22C55E]'}`}>
              {approvedCount}/{MISSION_SLOTS}
            </span>
            <div className="w-16 h-1.5 bg-[#182B18] rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all ${approvedCount > MISSION_SLOTS ? 'bg-[#F5C842]' : 'bg-[#22C55E]'}`} style={{ width: `${Math.min((approvedCount / MISSION_SLOTS) * 100, 100)}%` }} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={loadSubs} className="text-[#728A72] hover:text-[#F0EDE6] transition-colors p-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            </button>
            <button onClick={signOut} className="text-xs text-[#728A72] hover:text-[#F0EDE6] transition-colors hidden md:inline">Sign out</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6">

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[#0C140C] border border-[#182B18] rounded-xl p-1 w-fit">
          {(['pipeline', 'payments'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                tab === t ? 'bg-[#182B18] text-[#F0EDE6]' : 'text-[#728A72] hover:text-[#F0EDE6]'
              }`}>
              {t === 'pipeline' ? 'Pipeline' : 'Payments'}
              {t === 'payments' && (pmFirstContact + pmRecall) > 0 && (
                <span className="ml-2 bg-[#F5C842] text-[#060612] text-xs font-black px-1.5 py-0.5 rounded-full">{pmFirstContact + pmRecall}</span>
              )}
            </button>
          ))}
        </div>

        {/* ─── PIPELINE TAB ─── */}
        {tab === 'pipeline' && (
          <>
            {/* Status filter chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              <Chip active={statusFilter === 'all'} onClick={() => setStatusFilter('all')}>
                All <Count n={subs.length} />
              </Chip>
              {(Object.keys(STATUS_META) as SubmissionStatus[]).map(s => (
                <Chip key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)} color={STATUS_META[s].color}>
                  {STATUS_META[s].label.split(' ')[0]} <Count n={subs.filter(x => x.status === s).length} />
                </Chip>
              ))}
            </div>

            {loading ? (
              <div className="flex items-center gap-3 py-12 text-[#728A72]">
                <div className="w-5 h-5 rounded-full border-2 border-[#22C55E] border-t-transparent animate-spin" />
                Loading submissions…
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-[#728A72]">
                <p className="text-4xl mb-3">📭</p>
                <p className="font-semibold">No submissions yet.</p>
              </div>
            ) : (
              <div className="bg-[#0C140C] border border-[#182B18] rounded-2xl overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#182B18]">
                      {['Artist', 'Track', 'Email', 'Status', 'Submitted', 'Tracker', 'Actions'].map(h => (
                        <th key={h} className="px-2 py-3 text-left text-xs font-bold uppercase tracking-[1px] text-[#728A72] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(sub => (
                      <tr key={sub.id} className="border-b border-[#182B18] last:border-0 hover:bg-[#182B18]/30 transition-colors cursor-pointer"
                        onClick={() => setSelectedSub(sub)}>
                        <td className="px-2 py-3 font-semibold text-[#F0EDE6] max-w-[120px] truncate">{sub.artist_name}</td>
                        <td className="px-2 py-3 text-[#728A72] max-w-[120px] truncate">{sub.track_name}</td>
                        <td className="px-2 py-3 text-[#728A72] max-w-[140px] truncate hidden xl:table-cell">{sub.email}</td>
                        <td className="px-2 py-3">
                          <select
                            value={sub.status}
                            onClick={e => e.stopPropagation()}
                            onChange={e => { e.stopPropagation(); changeStatus(sub, e.target.value as SubmissionStatus); }}
                            className="bg-[#060A06] border border-[#182B18] rounded-lg px-2 py-1.5 text-xs text-[#F0EDE6] focus:outline-none focus:border-[#22C55E] cursor-pointer"
                          >
                            {(Object.keys(STATUS_META) as SubmissionStatus[]).map(s => (
                              <option key={s} value={s}>{STATUS_META[s].label}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-2 py-3 text-[#728A72] text-xs hidden lg:table-cell whitespace-nowrap">
                          {new Date(sub.created_at).toLocaleDateString('en-GB')}
                        </td>
                        {/* Tracker link */}
                        <td className="px-2 py-3" onClick={e => e.stopPropagation()}>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => copyTrackerLink(sub)}
                              className="h-7 w-7 flex items-center justify-center rounded-lg bg-[#182B18] text-[#728A72] text-xs hover:text-[#F5C842] transition-colors"
                              title="Copy tracker link"
                            >
                              {copiedId === sub.id ? '✓' : '🔗'}
                            </button>
                            <a
                              href={`/track?id=${sub.public_id}`} target="_blank" rel="noreferrer"
                              className="h-7 w-7 flex items-center justify-center rounded-lg border border-[#182B18] text-[#728A72] text-xs hover:text-[#F0EDE6] transition-colors"
                              title="Open tracker"
                            >
                              ↗
                            </a>
                          </div>
                        </td>
                        {/* Actions */}
                        <td className="px-2 py-3" onClick={e => e.stopPropagation()}>
                          <div className="flex items-center gap-1.5">
                            <a href={sub.track_link} target="_blank" rel="noreferrer" title="Open track"
                              className="h-7 w-7 flex items-center justify-center rounded-lg bg-[#182B18] text-[#22C55E] text-xs font-semibold hover:bg-[#22C55E]/10 transition-colors">
                              ▶
                            </a>
                            <button onClick={() => setSelectedSub(sub)} title="Details"
                              className="h-7 w-7 flex items-center justify-center rounded-lg border border-[#182B18] text-[#728A72] text-xs hover:text-[#F0EDE6] transition-colors">
                              i
                            </button>
                            {sub.payment_status === 'not_charged' ? (
                              <button onClick={() => approveAndMarkFirstContact(sub)}
                                className="h-7 px-2 flex items-center rounded-lg bg-[#F5C842]/15 text-[#F5C842] text-xs font-semibold hover:bg-[#F5C842]/25 transition-colors whitespace-nowrap">
                                + Contact
                              </button>
                            ) : (
                              <span className="h-7 px-2 flex items-center rounded-lg border border-[#182B18] text-[#728A72] text-xs whitespace-nowrap">
                                {PAYMENT_META[sub.payment_status].label}
                              </span>
                            )}
                            <button onClick={() => setDeleteConfirm(sub)} title="Delete"
                              className="h-7 w-7 flex items-center justify-center rounded-lg border border-red-500/20 text-red-400/60 text-xs hover:text-red-400 hover:border-red-500/50 transition-colors">
                              🗑
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* ─── PAYMENTS TAB ─── */}
        {tab === 'payments' && (
          <>
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {[
                { label: 'Not Contacted', value: pmNot, color: '#728A72' },
                { label: 'First Contact', value: pmFirstContact, color: '#F5C842' },
                { label: 'Interested',    value: pmInterested, color: '#A78BFA' },
                { label: 'Recall',        value: pmRecall, color: '#3B82F6' },
                { label: 'Declined',      value: pmDeclined, color: '#EF4444' },
                { label: 'Paid',          value: pmPaid, color: '#22C55E' },
              ].map(m => (
                <div key={m.label} className="bg-[#0C140C] border border-[#182B18] rounded-xl px-4 py-4">
                  <p className="text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-xs text-[#728A72] mt-1 uppercase tracking-[1px]">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Today's follow-ups */}
            {dueToday.length > 0 && (
              <div className="mb-6 bg-[#0C140C] border border-[#F5C842]/30 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-[1px] text-[#F5C842] mb-3">
                  📋 Follow-ups due ({dueToday.length})
                </p>
                <div className="flex flex-col gap-2">
                  {dueToday.map(sub => {
                    const overdue = new Date(sub.next_action_at!).getTime() < startOfToday();
                    return (
                      <div key={sub.id}
                        className="flex items-center justify-between gap-3 bg-[#060A06] rounded-xl px-3 py-2 cursor-pointer hover:border-[#728A72] border border-[#182B18] transition-colors"
                        onClick={() => setPaymentSub(sub)}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${overdue ? 'bg-red-500/15 text-red-400' : 'bg-[#F5C842]/15 text-[#F5C842]'}`}>
                            {overdue ? 'Overdue' : 'Today'}
                          </span>
                          <p className="font-semibold text-sm text-[#F0EDE6] truncate">{sub.artist_name}</p>
                          <p className="text-xs text-[#728A72] truncate">{sub.next_action_note}</p>
                        </div>
                        <span className="text-xs flex-shrink-0" style={{ color: PAYMENT_META[sub.payment_status].color }}>
                          {PAYMENT_META[sub.payment_status].label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {approvedSubs.length === 0 ? (
              <div className="text-center py-16 text-[#728A72]">
                <p className="text-4xl mb-3">💳</p>
                <p>No approved artists yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {(Object.keys(PAYMENT_META) as PaymentStatus[]).map(col => {
                  const colSubs = approvedSubs.filter(s => s.payment_status === col);
                  const meta = PAYMENT_META[col];
                  return (
                    <div key={col} className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2 mb-3 px-1">
                        <span className="w-2 h-2 rounded-full" style={{ background: meta.color }} />
                        <p className="text-xs font-bold uppercase tracking-[1px] text-[#F0EDE6]">{meta.label}</p>
                        <Count n={colSubs.length} />
                      </div>
                      <div className="flex flex-col gap-2 min-h-[60px]">
                        {colSubs.length === 0 ? (
                          <div className="border border-dashed border-[#182B18] rounded-xl py-6 text-center text-xs text-[#728A72]">Empty</div>
                        ) : colSubs.map(sub => (
                          <div key={sub.id}
                            className="bg-[#0C140C] border border-[#182B18] rounded-xl p-3 cursor-pointer hover:border-[#728A72] transition-colors"
                            onClick={() => setPaymentSub(sub)}
                          >
                            <p className="font-semibold text-sm text-[#F0EDE6] truncate">{sub.artist_name}</p>
                            <p className="text-xs text-[#728A72] truncate mb-2">{sub.track_name}</p>

                            {sub.payment_amount ? (
                              <p className="text-xs font-mono text-[#F0EDE6] mb-2">€{sub.payment_amount}</p>
                            ) : null}

                            {sub.payment_status === 'declined' && sub.decline_reason && (
                              <p className="text-xs text-red-400/70 italic mb-2">"{sub.decline_reason}"</p>
                            )}

                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {sub.payment_requested_at && !['paid', 'declined'].includes(sub.payment_status) && (() => {
                                const d = daysAgo(sub.payment_requested_at);
                                const stale = d >= 3;
                                return (
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${stale ? 'bg-red-500/15 text-red-400' : 'bg-[#182B18] text-[#728A72]'}`}>
                                    {d === 0 ? 'Contacted today' : `${d}d since contact`}
                                  </span>
                                );
                              })()}
                              {sub.next_action_at && (() => {
                                const due = new Date(sub.next_action_at).getTime();
                                const today = startOfToday();
                                const overdue = due < today;
                                const isToday = due === today;
                                return (
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                    overdue ? 'bg-red-500/15 text-red-400' : isToday ? 'bg-[#F5C842]/15 text-[#F5C842]' : 'bg-[#182B18] text-[#728A72]'
                                  }`}>
                                    {overdue ? '⚠ ' : ''}{new Date(sub.next_action_at).toLocaleDateString('en-GB')}{sub.next_action_note ? `: ${sub.next_action_note}` : ''}
                                  </span>
                                );
                              })()}
                            </div>

                            <div onClick={e => e.stopPropagation()}>
                              <select
                                value={sub.payment_status}
                                onChange={async e => {
                                  const newStatus = e.target.value as PaymentStatus;
                                  await changePaymentStatus(sub, newStatus);
                                  if (newStatus === 'declined') setPaymentSub({ ...sub, payment_status: newStatus });
                                }}
                                className="w-full bg-[#060A06] border border-[#182B18] rounded-lg px-2 py-1.5 text-xs font-semibold focus:outline-none focus:border-[#22C55E] cursor-pointer"
                                style={{ color: PAYMENT_META[sub.payment_status].color }}
                              >
                                {(Object.keys(PAYMENT_META) as PaymentStatus[]).map(p => (
                                  <option key={p} value={p} style={{ color: PAYMENT_META[p].color, background: '#060A06' }}>
                                    {PAYMENT_META[p].label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)}>
          <div className="bg-[#0C140C] border border-red-500/30 rounded-2xl p-7 max-w-[380px] w-full" onClick={e => e.stopPropagation()}>
            <p className="text-2xl mb-3">🗑️</p>
            <h3 className="font-black text-[#F0EDE6] text-lg mb-1">Delete submission?</h3>
            <p className="text-[#728A72] text-sm leading-relaxed mb-1">
              <span className="text-[#F0EDE6] font-semibold">{deleteConfirm.artist_name}</span> — {deleteConfirm.track_name}
            </p>
            <p className="text-[#728A72] text-xs mb-6">This action is permanent and cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => deleteSub(deleteConfirm)}
                className="flex-1 h-10 rounded-full bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-colors"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 h-10 rounded-full border border-[#182B18] text-[#728A72] text-sm font-semibold hover:text-[#F0EDE6] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {selectedSub && (
        <SubmissionModal
          sub={selectedSub}
          onClose={() => setSelectedSub(null)}
          onUpdate={updateLocal}
          onDelete={() => { setDeleteConfirm(selectedSub); setSelectedSub(null); }}
        />
      )}
      {paymentSub && <PaymentModal sub={paymentSub} onClose={() => setPaymentSub(null)} onUpdate={updateLocal} />}
    </div>
  );
}

function Chip({ active, onClick, color, children }: { active: boolean; onClick: () => void; color?: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
        active ? 'border-[#22C55E] bg-[#22C55E]/10 text-[#F0EDE6]' : 'border-[#182B18] text-[#728A72] hover:text-[#F0EDE6]'
      }`}
      style={active && color ? { borderColor: color, color: color, background: `${color}15` } : {}}>
      {children}
    </button>
  );
}

function Count({ n }: { n: number }) {
  return <span className="text-[10px] opacity-70 ml-0.5">({n})</span>;
}
