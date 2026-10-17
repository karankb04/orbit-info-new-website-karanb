import Image from "next/image";
import EquipmentGrid from "@/components/EquipmentGrid";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import PortfolioFilters from "@/components/PortfolioFilters";
import { IMAGES } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Portfolio: Our Work Across Mumbai & Thane",
  description:
    "Projects delivered by Orbit IT Solutions: society and commercial CCTV, chip-level laptop repair, structured office cabling, EPABX and Synology backup across Mumbai & Thane.",
  path: "/portfolio",
});

/**
 * The twelve real projects, restored verbatim from the original site.
 *
 * `img` is attached only where a photograph genuinely shows THAT job. The rest
 * keep the original illustrated treatment rather than borrowing a photo of
 * different work — a photo captioned as a job it doesn't depict is a fabricated
 * case study, which is exactly the kind of unverifiable claim that costs trust
 * (and that AI answer engines increasingly discount).
 *
 * To add more: drop the photo in /public/images, register it in lib/images.ts,
 * and set `img` on the matching project below.
 */
const WORK = [
  { size: "tall", cat: "cctv", tag: "CCTV", title: "Society-wide CCTV",
    blurb: "24-camera setup across a Mulund housing society, full remote view.",
    img: IMAGES.societyCctvTeam },

  { size: "", cat: "laptop", tag: "Repair", title: "Chip-level board repair",
    blurb: "Water-damaged ultrabook revived by repairing the motherboard, not replacing it.",
    img: IMAGES.laptopChipRepair },

  { size: "short", cat: "network", tag: "Networking", title: "Office network rollout",
    blurb: "Structured cabling & Wi-Fi for a 40-seat Thane office.",
    img: IMAGES.networkRack },

  { size: "", cat: "server", tag: "Backup", title: "Synology backup rack",
    blurb: "Redundant NAS backup commissioned for a trading firm." },

  { size: "short", cat: "cctv", tag: "CCTV", title: "Retail store cameras",
    blurb: "Discreet surveillance for a Mumbai retail chain outlet." },

  { size: "tall", cat: "laptop", tag: "Repair", title: "Bulk laptop servicing",
    blurb: "SSD & RAM upgrades across an entire department.",
    img: IMAGES.laptopRepairTechnician },

  { size: "", cat: "server", tag: "Backup", title: "Server room cleanup",
    blurb: "Tangled rack to labelled, cooled, documented setup.",
    img: IMAGES.rackLabelled, pos: "center 30%" },

  { size: "", cat: "network", tag: "Networking", title: "EPABX & intercom",
    blurb: "Office-wide phone system installed and extended.",
    img: IMAGES.epabxHandset },

  { size: "", cat: "cctv", tag: "CCTV", title: "Commercial warehouse",
    blurb: "High-coverage cameras for a Bhandup warehouse floor." },

  // No photo: the only desktop-repair shot we have is a tower cabinet, which
  // does not depict a laptop hinge/screen job. Illustrated until we have one.
  { size: "short", cat: "laptop", tag: "Repair", title: "Hinge & screen fix",
    blurb: "Cracked hinge and panel replaced, same-day return." },

  { size: "tall", cat: "network", tag: "Networking", title: "Multi-floor cabling",
    blurb: "Clean inter-floor networking for a growing SMB.",
    img: IMAGES.rackStructured },

  { size: "short", cat: "server", tag: "Backup", title: "RAID configuration",
    blurb: "Fault-tolerant storage configured and tested." },

  // Added with the September 2026 site photos. Blurbs describe only what
  // each photo shows, so no tile claims more than its picture proves.
  { size: "tall", cat: "cctv", tag: "CCTV", title: "Camera installation",
    blurb: "Dome and bullet cameras mounted, aimed and tested on site.",
    img: IMAGES.cctvDomeInstall },

  { size: "", cat: "network", tag: "Networking", title: "Wi-Fi access points",
    blurb: "Ceiling-mounted access points for coverage across the floor.",
    img: IMAGES.wifiApInstall, pos: "center 35%" },

  { size: "short", cat: "network", tag: "Networking", title: "Rack patching",
    blurb: "Cables patched, dressed and labelled into a floor rack.",
    img: IMAGES.rackTechnician, pos: "center 25%" },

  { size: "", cat: "network", tag: "Networking", title: "Trading-desk setup",
    blurb: "Multi-monitor workstations set up and networked for a trading desk.",
    img: IMAGES.tradingDesk },
];

const FILTERS = [
  { key: "all", label: "All work" },
  { key: "cctv", label: "CCTV" },
  { key: "laptop", label: "Repairs" },
  { key: "network", label: "Networking" },
  { key: "server", label: "Backup" },
];

/** Per-category gradient, matching the original palette. */
const GRAD: Record<string, string> = {
  cctv: "gp-cctv", laptop: "gp-laptop", network: "gp-network", server: "gp-server",
};

/** Illustrated fallback for projects without a photograph of their own. */
function Art({ cat }: { cat: string }) {
  const paths: Record<string, React.ReactNode> = {
    cctv: (<><rect x="40" y="70" width="70" height="38" rx="9" /><circle cx="60" cy="89" r="9" /><path d="M110 80l40-18M110 98l40 18" /></>),
    laptop: (<><rect x="60" y="55" width="90" height="58" rx="5" /><path d="M48 113h114l10 16H38z" /></>),
    network: (<><circle cx="105" cy="60" r="10" /><circle cx="55" cy="130" r="10" /><circle cx="155" cy="130" r="10" /><path d="M105 70v30M98 108l-35 14M112 108l35 14" /></>),
    server: (<><rect x="70" y="45" width="70" height="110" rx="6" /><line x1="70" y1="78" x2="140" y2="78" /><line x1="70" y1="108" x2="140" y2="108" /><circle cx="125" cy="63" r="3" /></>),
  };
  return (
    <svg className="art" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#fff" strokeWidth="2">{paths[cat]}</g>
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }])} />
      <PortfolioFilters />

      <header className="phero">
        <svg className="arc" viewBox="0 0 400 400" aria-hidden="true">
          <g fill="none" strokeWidth="1.4">
            <circle cx="200" cy="200" r="120" stroke="#2E97FF" opacity=".4" />
            <circle cx="200" cy="200" r="170" stroke="#FF9933" opacity=".25" />
          </g>
        </svg>
        <div className="wrap phero-inner">
          <Breadcrumbs trail={[{ name: "Portfolio", path: "/portfolio" }]} />
          <h1>
            The work, <span className="grad">on the wall.</span>
          </h1>
          <p>
            Cameras up, boards repaired, racks tidied, offices wired. A look at jobs
            we&rsquo;ve handled across Mumbai &amp; Thane.
          </p>
        </div>
      </header>

      <section className="gal-sec">
        <div className="wrap">
          <div className="filters reveal">
            {FILTERS.map((f, i) => (
              <button key={f.key} className={`filter${i === 0 ? " active" : ""}`} data-f={f.key}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="masonry reveal">
            {WORK.map((item) => (
              <div
                key={item.title}
                className={`tile ${item.size}${item.img ? " has-photo" : ""}`}
                data-cat={item.cat}
              >
                <span className="top-accent" />
                <div className="canvas">
                  {item.img && (
                    <Image
                      src={item.img.src}
                      alt={item.img.alt}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw"
                      className="tile-photo"
                      // Most site photos are portrait but the tiles are
                      // landscape; `pos` keeps the subject (a ceiling
                      // device, a face) inside the crop.
                      style={item.pos ? { objectPosition: item.pos } : undefined}
                    />
                  )}
                  <div className={`grad ${GRAD[item.cat]}`} />
                  {!item.img && <Art cat={item.cat} />}
                  <div className="veil" />
                  <div className="meta">
                    <span className="stag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.blurb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*
        Kept deliberately separate from the case studies above. These are
        catalogue shots of hardware Orbit supplies — not photographs of a
        finished job — and DEC-006 says a portfolio photo may only sit next to
        work it genuinely depicts. Labelling the section for what it is keeps
        that line intact.
      */}
      <section className="kit-sec" id="equipment">
        <div className="wrap">
          <div className="sec-head light reveal">
            <span className="eyebrow on-light">Equipment we supply</span>
            <h2>The hardware behind the work.</h2>
            <p>Cameras, racks, machines and office systems we source, install and service. Everything is genuine, and the people who fit it are the ones you call later.</p>
          </div>
          <EquipmentGrid />
        </div>
      </section>

      <section className="band">
        <svg className="rings" viewBox="0 0 400 400" aria-hidden="true">
          <g fill="none" strokeWidth="1.2">
            <circle cx="200" cy="200" r="80" stroke="#2E97FF" />
            <circle cx="200" cy="200" r="130" stroke="#FF9933" opacity=".6" />
            <circle cx="200" cy="200" r="180" stroke="#138808" opacity=".4" />
          </g>
        </svg>
        <div className="wrap band-inner">
          <h2>Your project could be next.</h2>
          <p>Tell us what you need installed, fixed or backed up. We&rsquo;ll do it to the same standard.</p>
          <div className="band-cta">
            <a href="/contact#quote" className="btn btn-primary">
              <span>Get a Free Quote</span> <span className="arr">→</span>
            </a>
            <a href="https://wa.me/919324032476" target="_blank" rel="noopener" className="btn btn-ghost">
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
