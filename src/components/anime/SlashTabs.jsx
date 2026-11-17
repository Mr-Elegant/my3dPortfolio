import { useEffect, useRef, useState } from "react";
import useSpringVars from "../../hooks/useSpringVars";
import { animeFX } from "../../utils/animeFX";

/**
 * Tabs where switching cuts the panel with a sword slash and the new
 * content smears in. The active indicator springs (and overshoots) to place.
 *
 * tabs: [{ id, label, content: ReactNode }]
 */
const SlashTabs = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.id);
  const tabRefs = useRef({});
  const panelRef = useRef(null);
  const dir = useRef(1);
  const { ref: listRef, set } = useSpringVars({ ix: 0, iw: 0 }, { stiffness: 420, damping: 18 });

  useEffect(() => {
    const el = tabRefs.current[active];
    if (el) set({ ix: el.offsetLeft, iw: el.offsetWidth });
  }, [active, set]);

  const select = (id) => {
    if (id === active) return;
    const from = tabs.findIndex((t) => t.id === active);
    const to = tabs.findIndex((t) => t.id === id);
    dir.current = to > from ? 1 : -1;
    setActive(id);

    const r = panelRef.current?.getBoundingClientRect();
    if (r) {
      const l = r.left + r.width * 0.08;
      const rr = r.right - r.width * 0.08;
      dir.current > 0
        ? animeFX.slash(l, r.bottom - 20, rr, r.top + 20, { color: "accent" })
        : animeFX.slash(rr, r.bottom - 20, l, r.top + 20, { color: "hot" });
    }
  };

  // Arrow-key navigation per WAI-ARIA tabs pattern.
  const onKeyDown = (e) => {
    const i = tabs.findIndex((t) => t.id === active);
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = tabs[(i + step + tabs.length) % tabs.length];
    select(next.id);
    tabRefs.current[next.id]?.focus();
  };

  const current = tabs.find((t) => t.id === active);

  return (
    <div className="ani-tabs">
      <div ref={listRef} role="tablist" className="ani-tabs__list" onKeyDown={onKeyDown}>
        {tabs.map((t) => (
          <button
            key={t.id}
            ref={(el) => (tabRefs.current[t.id] = el)}
            role="tab"
            id={`ani-tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls={`ani-panel-${t.id}`}
            tabIndex={t.id === active ? 0 : -1}
            className="ani-tabs__tab"
            onClick={() => select(t.id)}
          >
            {t.label}
          </button>
        ))}
        <span className="ani-tabs__ink" aria-hidden="true" />
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={`ani-panel-${active}`}
        aria-labelledby={`ani-tab-${active}`}
        className="ani-tabs__panel"
      >
        <div key={active} className="ani-smear-in" style={{ "--dir": dir.current }}>
          {current?.content}
        </div>
      </div>
    </div>
  );
};

export default SlashTabs;
