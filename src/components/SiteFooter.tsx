import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.svg";
import alaudidaBird from "@/assets/alaudida-bird-mark.png";

const cols = [
  { title: "Platforms", links: ["Taskadabra", "Deskale", "SynopkgHub"] },
  { title: "Open Source", links: ["klick-deploy", "laravel-envribbon", "php-easy-deployer"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
];

const socials = [
  { name: "facebook", label: "Facebook" },
  { name: "x", label: "X (Twitter)" },
  { name: "instagram", label: "Instagram" },
  { name: "youtube", label: "YouTube" },
] as const;

const words = ["in Tours", "in Bristol", "on the train", "in parallel"];

export function SiteFooter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const full = words[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), 75);
      } else {
        t = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      t = setTimeout(() => setPhase("deleting"), 900);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, wordIndex]);

  return (
    <footer className="bg-[var(--navy-800)] text-[var(--text-on-brand)]">
      <div className="mx-auto max-w-[1280px] px-6 pb-8 pt-14 md:px-12">
        <div className="mb-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoMark} alt="" className="mb-3 h-10" />
            <p className="max-w-[280px] text-sm text-white/60">
              Pragmatic solutions for platforms and the teams that ship them.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="mb-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
                {c.title}
              </h5>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/85 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://alaudida.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alaudida"
              title="Alaudida"
              className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-l-md border-r-[3px] border-white/85 bg-[var(--navy-900)]"
            >
              <img src={alaudidaBird} alt="Alaudida" className="h-[18px]" />
            </a>
            <div className="text-xs leading-relaxed text-white/45">
              <div>an Alaudida project</div>
              <div>
                Made with <span style={{ color: "#e0645c" }}>❤</span> {text}
                <span className="blink-cursor ml-px">|</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.label}
                title={s.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:-translate-y-0.5"
              >
                <img
                  src={`https://cdn.simpleicons.org/${s.name}/1F4E79`}
                  alt=""
                  className="h-[15px] w-[15px]"
                />
              </a>
            ))}
            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:-translate-y-0.5"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="#1F4E79">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
