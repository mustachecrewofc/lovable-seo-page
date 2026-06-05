import { useInView } from '../../hooks/useInView';
import { Music, UserCheck, MessageSquare, Zap, Calendar, BarChart2 } from 'lucide-react';
import RadialOrbitalTimeline from '../ui/radial-orbital-timeline';

const journeyData = [
  {
    id: 1,
    title: 'Send Demo',
    date: 'By July 10',
    content:
      'Submit your track through the form. Mustache Crew A&R listens to every demo personally and responds within 7 days. No bots, no filters — real ears.',
    category: 'Submission',
    icon: Music,
    relatedIds: [2],
    status: 'in-progress' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Get Selected',
    date: 'Within 7 days',
    content:
      '30 spots. When you are confirmed, you receive access to the private squad channel and the campaign brief. Genre, BPM, energy — we curate the VA for maximum chart impact.',
    category: 'Selection',
    icon: UserCheck,
    relatedIds: [1, 3],
    status: 'pending' as const,
    energy: 85,
  },
  {
    id: 3,
    title: 'Join the Squad',
    date: 'After selection',
    content:
      'Enter the Telegram group with 29 other artists from different genres and countries. Campaign strategy, launch day plan, and real-time coordination — all in one place.',
    category: 'Community',
    icon: MessageSquare,
    relatedIds: [2, 4],
    status: 'pending' as const,
    energy: 75,
  },
  {
    id: 4,
    title: 'Activate',
    date: 'Before July 17',
    content:
      'Coordinated pre-save campaign. Everyone activates their own audience: stories, reels, email lists, bio links. 30 artists triggering 30 audiences on the same timeline.',
    category: 'Campaign',
    icon: Zap,
    relatedIds: [3, 5],
    status: 'pending' as const,
    energy: 65,
  },
  {
    id: 5,
    title: 'Launch Day',
    date: 'July 17, 2026',
    content:
      'All 30 tracks drop at the same time. The squad activates simultaneously — every fan who buys the album pushes all 30 tracks up the chart. The flood begins.',
    category: 'Launch',
    icon: Calendar,
    relatedIds: [4, 6],
    status: 'pending' as const,
    energy: 50,
  },
  {
    id: 6,
    title: 'Chart Run',
    date: 'Weeks after',
    content:
      "As the album climbs, Beatport starts surfacing individual tracks to new listeners. Artists from previous VAs landed Top 10 in their genre — weeks after launch, with zero additional spend.",
    category: 'Result',
    icon: BarChart2,
    relatedIds: [5],
    status: 'pending' as const,
    energy: 35,
  },
];

export default function JourneySection() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-0 md:py-8 overflow-hidden"
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(245,200,66,0.04) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="container">
          <p
            className="text-[#F0EDE6]/55 text-base md:text-lg leading-relaxed max-w-[520px]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '80ms',
            }}
          >
            Click each node to explore the journey.
            Every step is connected — that's the point.
          </p>
        </div>

        {/* Orbital timeline — full width */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '350ms',
          }}
        >
          <RadialOrbitalTimeline timelineData={journeyData} />
        </div>

        {/* Bridge to Extra Push */}
        <div
          className="flex flex-col items-center gap-2 pb-4"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease',
            transitionDelay: '600ms',
          }}
        >
          <p className="text-sm text-[#728A72] text-center">
            And the machine goes further than the Beatport chart.
          </p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round" className="opacity-50">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
