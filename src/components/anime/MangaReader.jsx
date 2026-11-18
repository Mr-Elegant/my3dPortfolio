import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { architectureADRs } from "../../constants";
import AnimeMascot from "./AnimeMascot";
import { animeFX } from "../../utils/animeFX";
import { audioFX } from "../../utils/audioFX";
import { unlock } from "../../utils/achievements";

/**
 * "Read as manga": tells a project's story as a 5-page comic built entirely
 * from its ADR data (constants → architectureADRs):
 *   Cover → The Challenge (constraints) → The Plan (decisions)
 *   → When Things Break (failure modes) → The Result (ROI impact)
 * Navigate with buttons, ← / → keys, or swipe. Esc closes.
 */

// Project keys used by ShowcaseSection → ADR ids.
const ADR_FOR = {
  "interview-lab": "interview-lab-adr",
  "muhurat-ai": "muhurat-calendar-adr",
  "devnet-chat": "devnet-ai-chat-adr",
};

// "Title: body" → { title, body }
const splitLead = (text) => {
  const i = text.indexOf(":");
  return i > 0 && i < 60 ? { title: text.slice(0, i), body: text.slice(i + 1).trim() } : { title: null, body: text };
};

const buildPages = (adr) => [
  { kind: "cover" },
  {
    kind: "chapter",
    label: "Chapter 1",
    title: "The Challenge",
    lead: adr.executiveSummary,
    panels: adr.constraints.map((c) => ({ body: c })),
  },
  {
    kind: "chapter",
    label: "Chapter 2",
    title: "The Plan",
    panels: adr.decisions.map((d) => ({ title: d.decision, body: d.tradeOff })),
  },
  {
    kind: "chapter",
    label: "Chapter 3",
    title: "When Things Break",
    panels: adr.failureModes.map(splitLead),
  },
  {
    kind: "chapter",
    label: "Final Chapter",
    title: "The Result",
    panels: adr.roiImpact.map((r) => ({ body: r })),
    finale: true,
  },
];

const MangaReader = ({ projectId, onClose, onOpenADR }) => {
  const adr = useMemo(
    () => architectureADRs.find((a) => a.id === (ADR_FOR[projectId] || projectId)) || architectureADRs[0],
    [projectId]
  );
  const pages = useMemo(() => buildPages(adr), [adr]);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const closeRef = useRef(null);
  const pageRef = useRef(null);
  const swipe = useRef(null);

  const go = useCallback(
    (next) => {
      if (next < 0 || next >= pages.length) return;
      setDir(next > page ? 1 : -1);
      setPage(next);
      const r = pageRef.current?.getBoundingClientRect();
      if (r) {
        next > page
          ? animeFX.slash(r.left + 20, r.bottom - 30, r.right - 20, r.top + 30, { color: "hot", width: 18 })
          : animeFX.slash(r.right - 20, r.bottom - 30, r.left + 20, r.top + 30, { color: "accent", width: 18 });
      }
      try {
        audioFX.playShing();
      } catch {
        // audio is optional
      }
    },
    [page, pages.length]
  );

  // Open: lock scroll, focus, achievement. Close: restore.
  useEffect(() => {
    unlock("manga-reader");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(page + 1);
      else if (e.key === "ArrowLeft") go(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, page, onClose]);

  const current = pages[page];
  const episode = architectureADRs.indexOf(adr) + 1;

  return (
    <div
      className="manga-reader"
      role="dialog"
      aria-modal="true"
      aria-label={`${adr.projectTitle}, told as a manga`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="manga-reader__frame">
        <header className="manga-reader__bar">
          <span className="manga-reader__series">PREET.EXE · EP.{String(episode).padStart(2, "0")}</span>
          <span className="manga-reader__count" aria-live="polite">
            Page {page + 1} / {pages.length}
          </span>
          <button ref={closeRef} type="button" className="manga-reader__close" onClick={onClose} aria-label="Close manga">
            ✕
          </button>
        </header>

        <div
          ref={pageRef}
          className="manga-reader__page"
          onPointerDown={(e) => (swipe.current = e.clientX)}
          onPointerUp={(e) => {
            if (swipe.current == null) return;
            const dx = e.clientX - swipe.current;
            swipe.current = null;
            if (Math.abs(dx) > 60) go(page + (dx < 0 ? 1 : -1));
          }}
        >
          <div key={page} className="manga-page ani-smear-in" style={{ "--dir": dir }}>
            {current.kind === "cover" ? (
              <div className="manga-cover">
                <span className="manga-cover__ep">EPISODE {String(episode).padStart(2, "0")}</span>
                <h2 className="manga-cover__title">{adr.projectTitle}</h2>
                <p className="manga-cover__rfc">{adr.rfcTitle}</p>
                <span className="manga-cover__stamp">{adr.status}</span>
                <div className="manga-cover__narrator">
                  <div className="manga-bubble">
                    This is the story of how it was built. Every page is from the real architecture record!
                  </div>
                  <AnimeMascot className="ani-mascot--narrator" />
                </div>
              </div>
            ) : (
              <>
                <div className="manga-page__head">
                  <span className="manga-page__label">{current.label}</span>
                  <h3 className="manga-page__title">{current.title}</h3>
                </div>
                {current.lead && <p className="manga-page__lead">{current.lead}</p>}
                <div className="manga-panels" data-count={current.panels.length}>
                  {current.panels.map((p, i) => (
                    <div key={i} className="manga-panel" style={{ "--i": i }}>
                      <span className="manga-panel__num">{i + 1}</span>
                      {p.title && <strong className="manga-panel__title">{p.title}</strong>}
                      <p className="manga-panel__body">{p.body}</p>
                    </div>
                  ))}
                </div>
                {current.finale && (
                  <div className="manga-finale">
                    <span className="manga-finale__stamp">MISSION COMPLETE!</span>
                    {onOpenADR && (
                      <button
                        type="button"
                        className="ani-btn ani-btn--gold"
                        onClick={() => {
                          onClose();
                          onOpenADR(projectId);
                        }}
                      >
                        Read the full ADR
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <footer className="manga-reader__nav">
          <button type="button" className="ani-btn ani-btn--ghost ani-btn--sm" onClick={() => go(page - 1)} disabled={page === 0}>
            ◀ Prev
          </button>
          <div className="manga-reader__dots" aria-hidden="true">
            {pages.map((_, i) => (
              <span key={i} data-active={i === page} />
            ))}
          </div>
          {page < pages.length - 1 ? (
            <button type="button" className="ani-btn ani-btn--sm" onClick={() => go(page + 1)}>
              Next ▶
            </button>
          ) : (
            <button type="button" className="ani-btn ani-btn--hot ani-btn--sm" onClick={onClose}>
              The End ✕
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default MangaReader;
