import Image from "next/image";
import CheckIcon from "@/components/CheckIcon";
import { IMAGES } from "@/lib/images";
import { telHref } from "@/lib/siteConfig";
import type { ServiceDetail } from "@/lib/services";

/** The decorative rings behind every service photo. */
function Rings() {
  return (
    <svg className="ring" viewBox="0 0 400 400" aria-hidden="true">
      <g fill="none" strokeWidth="1">
        <circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" />
        <circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" />
        <circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" />
      </g>
    </svg>
  );
}

/** One photo-plus-text service block on /services. */
export default function ServiceSection({ s }: { s: ServiceDetail }) {
  const img = IMAGES[s.image];
  return (
    <section className={`svc-sec ${s.section}`} id={s.id}>
      <div className="wrap">
        <div className={`svc-block${s.flip ? " flip" : ""}`}>
          <div className="svc-visual reveal">
            <Image className="svc-photo" src={img.src} alt={img.alt} fill sizes="(max-width: 980px) 100vw, 546px" />
            <div className={`grad ${s.grad}`}></div>
            <Rings />
            <span className="tag">{s.tag}</span>
            {s.art}
          </div>
          <div className="reveal">
            <span className="svc-num">SERVICE {s.num}</span>
            <h2>{s.heading}</h2>
            <p className="lead-p">{s.lead}</p>
            <ul className="svc-list">
              {s.bullets.map((b) => (
                <li key={b}><CheckIcon />{b}</li>
              ))}
            </ul>
            {s.after}
            <div className="svc-cta-row">
              <a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
              <a href={telHref} className="btn btn-ghost on-light"><span>Call now</span></a>
            </div>
          </div>
        </div>
        {s.extra}
      </div>
    </section>
  );
}
