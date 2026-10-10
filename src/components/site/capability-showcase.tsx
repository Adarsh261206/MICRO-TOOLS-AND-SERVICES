import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capabilities } from "@/data/company";
import parts from "@/assets/component-study.jpg";
import milling from "@/assets/milling-detail.jpg";
import machining from "@/assets/machining-hero.jpg";

const images = [parts, milling, machining, parts, milling, machining];
export function CapabilityShowcase() {
  const [selected, setSelected] = useState(0);
  const capability = capabilities[selected];
  if (!capability) return null;
  return (
    <div className="capability-showcase">
      <div className="showcase-visual">
        <img key={selected} src={images[selected] || parts} alt={`Illustrative ${capability.name.toLowerCase()} machining and components`} loading="lazy" width={1280} height={1024} />
        <span className="showcase-marker"><Crosshair size={16} /> MACHINING / {String(selected + 1).padStart(2, "0")}</span>
        <div className="showcase-caption">
          <span>PROCESS FOCUS</span>
          <h3 key={capability.name}>{capability.name}</h3>
          <Link to="/capabilities" hash={capability.slug} aria-label={`Explore ${capability.name}`}><ArrowUpRight /></Link>
        </div>
        <span className="showcase-disclosure">ILLUSTRATIVE IMAGE · NOT OUR FACILITY OR PARTS</span>
      </div>
      <div className="showcase-processes" aria-label="Machining processes">
        {capabilities.slice(0, 6).map((item, index) => (
          <Button key={item.slug} variant="ghost" className="process-select" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="process-copy"><strong>{item.name}</strong><span>{item.short}</span></span>
            <ArrowUpRight />
          </Button>
        ))}
      </div>
    </div>
  );
}