/* Editorial Instrument: paper-first workspace, ink hierarchy, proofreading red for active language signals. */
import { useMemo, useState } from "react";
import {
  AlignLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  FileText,
  Filter,
  FlaskConical,
  GitBranch,
  Info,
  LayoutPanelLeft,
  ListChecks,
  MoreHorizontal,
  Play,
  Plus,
  RotateCcw,
  Search,
  Settings2,
  Sparkles,
  Target,
  TextQuote,
  WandSparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const manuscript = [
  { no: "01", text: "When readers arrive at a new interface,", kind: "plain" },
  { no: "02", text: "they do not read every word in order.", kind: "plain" },
  { no: "03", text: "They scan for signals — contrast, rhythm,", kind: "focus" },
  { no: "04", text: "and the small promises that tell them", kind: "plain" },
  { no: "05", text: "where their attention should land next.", kind: "plain" },
  { no: "06", text: "This is where language becomes behavior:", kind: "warning" },
  { no: "07", text: "a phrase is not only understood, it is acted on.", kind: "plain" },
];

type Finding = {
  id: string;
  label: string;
  title: string;
  detail: string;
  location: string;
  color: "red" | "blue" | "green";
};

const findings: Finding[] = [
  { id: "tone", label: "TONE", title: "Confident, with a soft edge", detail: "The article uses direct verbs without sounding prescriptive. Keep the second-person moments; they make the analysis feel collaborative.", location: "Lines 01–02", color: "red" },
  { id: "signal", label: "SIGNAL", title: "Contrast carries the argument", detail: "The em dash creates a useful pause. It behaves like a visual marker and supports the article’s central claim.", location: "Line 03", color: "blue" },
  { id: "promise", label: "PROMISE", title: "The next step is legible", detail: "The final sentence turns an abstract idea into an observable action. Strong closing cadence detected.", location: "Lines 06–07", color: "green" },
];

export default function Home() {
  const [activeFinding, setActiveFinding] = useState("tone");
  const [activeTab, setActiveTab] = useState<"diagnostics" | "outline">("diagnostics");
  const [isRunning, setIsRunning] = useState(false);
  const [showMeta, setShowMeta] = useState(true);
  const [filter, setFilter] = useState<"all" | Finding["color"]>("all");

  const visibleFindings = useMemo(
    () => filter === "all" ? findings : findings.filter((item) => item.color === filter),
    [filter],
  );

  const runAnalysis = () => {
    setIsRunning(true);
    window.setTimeout(() => {
      setIsRunning(false);
      toast.success("Analysis refreshed", { description: "The manuscript is still holding its signal." });
    }, 900);
  };

  return (
    <main className="app-shell">
      <aside className="left-rail">
        <div className="brand-mark" aria-label="Language Behavior Debugging Lab">⌁</div>
        <div className="rail-rule" />
        <nav className="rail-nav" aria-label="Primary navigation">
          <button className="rail-button rail-button-active" aria-label="Manuscript"><FileText size={18} strokeWidth={1.7} /></button>
          <button className="rail-button" aria-label="Structure" onClick={() => toast("Outline view is available in the diagnostics panel.")}><GitBranch size={18} strokeWidth={1.7} /></button>
          <button className="rail-button" aria-label="Checks" onClick={() => setActiveTab("diagnostics")}><ListChecks size={18} strokeWidth={1.7} /></button>
        </nav>
        <div className="rail-bottom">
          <button className="rail-button" aria-label="Help" onClick={() => toast("Select a finding to trace language into behavior.")}><CircleHelp size={18} strokeWidth={1.7} /></button>
          <button className="rail-button" aria-label="Settings" onClick={() => toast("Workspace settings are coming next.")}><Settings2 size={18} strokeWidth={1.7} /></button>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="crumbs"><span className="crumb-muted">LAB / ARTICLES</span><ChevronRight size={14} /><span>Untitled study</span></div>
          <div className="topbar-actions">
            <span className="saved-state"><span className="saved-dot" /> Saved just now</span>
            <Button variant="outline" className="button-ghost" onClick={() => toast("Share link copied to clipboard.")}><ArrowUpRight size={15} /> Share</Button>
            <button className="icon-button" aria-label="More options" onClick={() => toast("More actions are not needed for this study.")}><MoreHorizontal size={18} /></button>
          </div>
        </header>

        <div className="content-wrap">
          <section className="intro-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> LANGUAGE BEHAVIOR DEBUGGING LAB</div>
              <h1>Read the behavior,<br /><em>not just the sentence.</em></h1>
              <p className="intro-copy">A quiet workbench for finding the signals inside your writing — where tone, rhythm, and intent change what a reader does next.</p>
            </div>
            <div className="score-note">
              <span className="score-label">SIGNAL SCORE</span>
              <strong>87<span>/100</span></strong>
              <div className="score-bar"><span /></div>
              <span className="score-caption">Clear enough to act on</span>
            </div>
          </section>

          <div className="meta-strip">
            <div className="meta-item"><span className="meta-label">ARTICLE</span><span className="meta-value">The wayfinding sentence</span></div>
            <div className="meta-item"><span className="meta-label">MODE</span><span className="meta-value"><span className="live-dot" /> Live analysis</span></div>
            <div className="meta-item"><span className="meta-label">LAST RUN</span><span className="meta-value">Today, 10:42</span></div>
            <button className="collapse-meta" onClick={() => setShowMeta(!showMeta)}>{showMeta ? "Hide details" : "Show details"} <ChevronDown size={14} className={showMeta ? "rotate-180" : ""} /></button>
          </div>

          <section className="lab-grid">
            <article className="manuscript-panel paper-card">
              <div className="panel-heading">
                <div><span className="section-kicker">01 / MANUSCRIPT</span><h2>The wayfinding sentence</h2></div>
                <div className="heading-actions"><button className="icon-button small" aria-label="Search manuscript" onClick={() => toast("Search is ready for the next pass.")}><Search size={16} /></button><button className="icon-button small" aria-label="More manuscript actions"><MoreHorizontal size={16} /></button></div>
              </div>
              <div className="manuscript-body">
                <div className="article-label">DRAFT / 004</div>
                <h3>Language is an interface</h3>
                <p className="dek">A short field note on how tiny choices in prose become directions for attention.</p>
                <div className="body-rule" />
                <div className="lines" aria-label="Article manuscript">
                  {manuscript.map((line) => (
                    <button key={line.no} className={`manuscript-line ${line.kind === "focus" ? "line-focus" : ""} ${line.kind === "warning" ? "line-warning" : ""}`} onClick={() => setActiveFinding(line.kind === "warning" ? "promise" : line.kind === "focus" ? "signal" : "tone")}>
                      <span className="line-no">{line.no}</span><span className="line-text">{line.text}</span>{line.kind === "focus" && <span className="annotation-dot blue" />}{line.kind === "warning" && <span className="annotation-dot red" />}
                    </button>
                  ))}
                </div>
                <div className="article-footer"><span>FIELD NOTE / 01</span><span>—</span><span>1 min read</span></div>
              </div>
            </article>

            <aside className="diagnostics-panel">
              <div className="diagnostic-head">
                <div><span className="section-kicker">02 / DIAGNOSTICS</span><h2>What the language is doing</h2></div>
                <button className="icon-button small" aria-label="Diagnostic panel options"><MoreHorizontal size={16} /></button>
              </div>
              <div className="diagnostic-tabs" role="tablist">
                <button className={activeTab === "diagnostics" ? "tab-active" : ""} onClick={() => setActiveTab("diagnostics")}>Findings <span>03</span></button>
                <button className={activeTab === "outline" ? "tab-active" : ""} onClick={() => setActiveTab("outline")}>Outline <span>04</span></button>
              </div>
              {activeTab === "diagnostics" ? <>
                <div className="filter-row"><div className="filter-label"><Filter size={13} /> Filter</div><div className="filter-pills">{(["all", "red", "blue", "green"] as const).map((item) => <button key={item} className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)}>{item === "all" ? "All" : item === "red" ? "Tone" : item === "blue" ? "Signal" : "Promise"}</button>)}</div></div>
                <div className="finding-list">
                  {visibleFindings.map((finding) => <button key={finding.id} className={`finding-card ${activeFinding === finding.id ? "finding-active" : ""}`} onClick={() => setActiveFinding(finding.id)}><div className="finding-top"><span className={`finding-mark ${finding.color}`} /> <span className="finding-label">{finding.label}</span><span className="finding-location">{finding.location}</span></div><strong>{finding.title}</strong><p>{finding.detail}</p><span className="inspect-link">Inspect behavior <ChevronRight size={13} /></span></button>)}
                </div>
                <div className="selected-insight"><div className="insight-header"><Sparkles size={15} /> <span>SELECTED INSIGHT</span><button onClick={() => setActiveFinding("")} aria-label="Close insight"><X size={15} /></button></div><p>{findings.find((item) => item.id === activeFinding)?.detail || "Select a finding to see the language trace."}</p><div className="trace-row"><span>reader action</span><span className="trace-line" /><b>{activeFinding === "signal" ? "pause → scan" : activeFinding === "promise" ? "trust → continue" : "notice → orient"}</b></div></div>
              </> : <div className="outline-view"><div className="outline-item outline-item-active"><span>01</span><strong>Language is an interface</strong><small>Current section</small></div><div className="outline-item"><span>02</span><strong>Signals before syntax</strong><small>Next section</small></div><div className="outline-item"><span>03</span><strong>Where attention lands</strong><small>Planned</small></div><div className="outline-item"><span>04</span><strong>Closing the loop</strong><small>Planned</small></div></div>}
            </aside>
          </section>

          <section className="bottom-bar">
            <div className="bottom-status"><div className="status-icon"><Check size={15} /></div><div><strong>Ready for another pass</strong><span>3 signals are stable across the manuscript.</span></div></div>
            <div className="bottom-actions"><button className="secondary-action" onClick={() => { setFilter("all"); setActiveFinding("tone"); toast("Filters reset."); }}><RotateCcw size={15} /> Reset view</button><Button className="run-button" onClick={runAnalysis} disabled={isRunning}>{isRunning ? <><span className="spinner" /> Reading…</> : <><Play size={14} fill="currentColor" /> Run analysis</>}</Button></div>
          </section>
        </div>
      </section>
    </main>
  );
}
