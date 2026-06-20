import { useState, useEffect, useRef } from 'react';
import { X, Send, RotateCcw, ChevronLeft } from 'lucide-react';

/* ---------------------------------------------------------------------- */
/*  CONFIG — edit these to match your business                            */
/* ---------------------------------------------------------------------- */

const PHONE_NUMBER = '256758434429'; // no "+" needed for wa.me
const AGENT_NAME = 'Mark';
const AGENT_TITLE = 'Travel Consultant';
const AGENT_AVATAR = 'https://api.dicebear.com/9.x/lorelei/svg?seed=Mark&backgroundColor=ffe4c4';

const GREETING =
  "Hi there! \uD83D\uDC4B I'm Mark. I help travelers plan unforgettable trips to Uganda. What are you interested in?";

const CATEGORIES = [
  {
    id: 'gorilla',
    label: 'Gorilla Trekking',
    emoji: '\uD83E\uDD8D',
    accent: '#2F6B3A',
    soft: '#EAF3EA',
    followUp:
      "Gorilla trekking is the one trip people never forget \uD83C\uDF3F Permits sell out months ahead, so tell me: how many people, and roughly when are you hoping to go?",
  },
  {
    id: 'safari',
    label: 'Wildlife Safaris',
    emoji: '\uD83E\uDD81',
    accent: '#C97A2B',
    soft: '#FBF1E6',
    followUp:
      "Love it \uD83D\uDC18 Which park are you drawn to (or not sure yet?), and how many days were you thinking?",
  },
  {
    id: 'destinations',
    label: 'Destinations',
    emoji: '\uD83D\uDDFA\uFE0F',
    accent: '#1F6F78',
    soft: '#E8F3F4',
    followUp:
      "Great choice to start with \u2014 Uganda has a lot of ground to cover. Which destination(s) have caught your eye, and when are you thinking of traveling?",
  },
  {
    id: 'experiences',
    label: 'Experiences',
    emoji: '\u2728',
    accent: '#7B5EA7',
    soft: '#F0ECF7',
    followUp:
      "Nice \u2014 are you after culture, adventure, food, relaxation, or a mix of it all? Tell me a bit more about what excites you.",
  },
  {
    id: 'other',
    label: 'Something else',
    emoji: '\uD83D\uDCAC',
    accent: '#5B6168',
    soft: '#EEEFF1',
    followUp:
      "Of course \u2014 tell me a little about what you're looking for and I'll point you in the right direction.",
  },
];

/* ---------------------------------------------------------------------- */
/*  ICONS                                                                  */
/* ---------------------------------------------------------------------- */

const WhatsAppGlyph = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.22.6 4.3 1.65 6.1L3 29l8.02-2.55a12.9 12.9 0 0 0 5.02 1c6.67 0 12.08-5.4 12.08-12.07C28.12 8.4 22.71 3 16.04 3Zm0 22.02c-1.7 0-3.36-.45-4.8-1.32l-.34-.2-4.76 1.52 1.55-4.64-.22-.36a9.9 9.9 0 0 1-1.53-5.96 10.06 10.06 0 1 1 10.1 11Zm5.52-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.94-2.26-.25-.6-.5-.5-.68-.5l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  COMPONENT                                                              */
/* ---------------------------------------------------------------------- */

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [phase, setPhase] = useState('intro'); // intro | category | details | sent
  const [selected, setSelected] = useState(null);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const scrollRef = useRef(null);
  const teaserTimer = useRef(null);

  useEffect(() => {
    teaserTimer.current = setTimeout(() => setTeaser(true), 3500);
    return () => clearTimeout(teaserTimer.current);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, typing, phase]);

  const pushMessage = (msg) =>
    setMessages((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, ...msg }]);

  const startConversation = () => {
    setOpen(true);
    setTeaser(false);
    clearTimeout(teaserTimer.current);
    if (messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        pushMessage({ from: 'Mark', text: GREETING });
        setPhase('category');
      }, 900);
    }
  };

  const handlePick = (cat) => {
    setSelected(cat);
    pushMessage({ from: 'user', text: `${cat.emoji} ${cat.label}` });
    setPhase('typing2');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      pushMessage({ from: 'Mark', text: cat.followUp });
      setPhase('details');
    }, 1000);
  };

  const handleSend = () => {
    if (!draft.trim()) return;
    const text = draft.trim();
    pushMessage({ from: 'user', text });
    const waMessage = `Hi Mark! I'm interested in *${selected.label}*.\n\n${text}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      pushMessage({ from: 'Mark', text: "Perfect, thank you! Opening WhatsApp so we can continue there \u2705" });
      window.open(url, '_blank', 'noopener,noreferrer');
      setPhase('sent');
    }, 700);
    setDraft('');
  };

  const handleRestart = () => {
    setMessages([]);
    setSelected(null);
    setDraft('');
    setPhase('intro');
    setTimeout(startConversation, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        @keyframes wa-pop-in { from { opacity:0; transform: translateY(14px) scale(.97); } to { opacity:1; transform: translateY(0) scale(1); } }
        @keyframes wa-bubble-in { from { opacity:0; transform: translateY(6px); } to { opacity:1; transform: translateY(0); } }
        @keyframes wa-dot { 0%, 60%, 100% { transform: translateY(0); opacity:.45; } 30% { transform: translateY(-4px); opacity:1; } }
        @keyframes wa-ring { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,.45); } 70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); } 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); } }
        @keyframes wa-teaser-in { from { opacity:0; transform: translateX(-8px) scale(.95); } to { opacity:1; transform: translateX(0) scale(1); } }
        .wa-msg { animation: wa-bubble-in .25s ease both; }
        .wa-panel { animation: wa-pop-in .28s cubic-bezier(.2,.9,.3,1.2) both; }
        .wa-teaser { animation: wa-teaser-in .3s ease both; }
        .wa-fab-ring { animation: wa-ring 2.4s ease-out infinite; }
        .wa-scroll::-webkit-scrollbar { width: 6px; }
        .wa-scroll::-webkit-scrollbar-thumb { background: #c9c9c9; border-radius: 999px; }
        .wa-dot { width: 7px; height: 7px; border-radius: 999px; background: #8a8a8a; animation: wa-dot 1.2s infinite ease-in-out; }
      `}</style>

      {/* ---------------- Proactive teaser bubble ---------------- */}
      {teaser && !open && (
        <div
          className="wa-teaser fixed bottom-24 left-6 z-[9998] max-w-[230px] cursor-pointer rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-xl ring-1 ring-black/5"
          onClick={startConversation}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTeaser(false);
            }}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-900"
            aria-label="Dismiss"
          >
            <X size={11} />
          </button>
          <p className="text-[13px] leading-snug text-gray-700">
            👋 Planning a trip to Uganda? I can help you sort it out in under a minute.
          </p>
        </div>
      )}

      {/* ---------------- Floating action button ---------------- */}
      {!open && (
        <button
          onClick={startConversation}
          aria-label="Chat with us on WhatsApp"
          className="wa-fab-ring fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#20BA5C]"
        >
          <WhatsAppGlyph size={28} />
        </button>
      )}

      {/* ---------------- Chat panel ---------------- */}
      {open && (
        <div
          className="wa-panel fixed bottom-6 left-6 z-[9999] flex h-[520px] max-h-[78vh] w-[340px] max-w-[92vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 text-white">
            {phase === 'sent' ? (
              <button onClick={handleRestart} className="text-white/80 hover:text-white" aria-label="Start over">
                <ChevronLeft size={20} />
              </button>
            ) : (
              <div className="h-10 w-10 overflow-hidden rounded-full bg-white/20 ring-2 ring-white/40">
                {!avatarFailed ? (
                  <img
                    src={AGENT_AVATAR}
                    alt={AGENT_NAME}
                    className="h-full w-full object-cover"
                    onError={() => setAvatarFailed(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold">D</div>
                )}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{AGENT_NAME}</p>
              <p className="flex items-center gap-1 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7CFFB2]" />
                {AGENT_TITLE} · Online
              </p>
            </div>
            {phase !== 'intro' && (
              <button onClick={handleRestart} className="text-white/70 hover:text-white" aria-label="Restart conversation" title="Start over">
                <RotateCcw size={16} />
              </button>
            )}
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white" aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="wa-scroll flex-1 space-y-2.5 overflow-y-auto bg-[#FAF6EF] px-3 py-4">
            {messages.map((m) => (
              <div key={m.id} className={`wa-msg flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug shadow-sm ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-[#DCF8C6] text-gray-800'
                      : 'rounded-bl-sm bg-white text-gray-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="wa-msg flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  <span className="wa-dot" style={{ animationDelay: '0ms' }} />
                  <span className="wa-dot" style={{ animationDelay: '150ms' }} />
                  <span className="wa-dot" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {phase === 'category' && !typing && (
              <div className="wa-msg flex flex-col gap-2 pt-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handlePick(cat)}
                    className="flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 text-left text-[13.5px] font-medium text-gray-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderColor: cat.soft, borderLeftWidth: '4px', borderLeftColor: cat.accent }}
                  >
                    <span className="text-lg">{cat.emoji}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {phase === 'sent' && !typing && (
              <div className="wa-msg flex justify-center pt-2">
                <button
                  onClick={handleRestart}
                  className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                >
                  Ask something else
                </button>
              </div>
            )}
          </div>

          {/* Input / send bar */}
          {phase === 'details' && (
            <div className="border-t bg-white px-3 py-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your details here..."
                  rows={1}
                  className="max-h-24 flex-1 resize-none rounded-2xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-[13.5px] text-gray-800 outline-none focus:border-[#25D366]"
                />
                <button
                  onClick={handleSend}
                  disabled={!draft.trim()}
                  aria-label="Send to WhatsApp"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={17} />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10.5px] text-gray-400">
                Pressing send opens WhatsApp with your message ready to go
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;