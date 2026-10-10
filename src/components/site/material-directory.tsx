import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { materials } from "@/data/company";
import { PageIntro, ContactCTA, ArrowEnquiry } from "./shared";
export function filterMaterials(search: string, category: string) {
  return materials.filter(
    ([name, group]) =>
      (category === "All materials" || group === category) &&
      name.toLowerCase().includes(search.trim().toLowerCase()),
  );
}
export function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All materials");
  const results = useMemo(() => filterMaterials(search, category), [search, category]);
  return (
    <>
      <PageIntro
        label="Materials"
        title="Every Material. A Considered Process."
        description="Explore the 18 supplied material names. Share the exact grade and drawing to confirm machining feasibility for your component."
      />
      <section className="section">
        <div className="container-site">
          <div className="directory-controls">
            <label className="search-field">
              <Search />
              <span className="sr-only">Search materials</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search materials…"
              />
            </label>
            <div className="filter-group" aria-label="Material categories">
              {[
                "All materials",
                "Steels",
                "Non-ferrous",
                "Special alloys",
                "Polymers",
                "Grade to confirm",
              ].map((c) => (
                <Button
                  variant={category === c ? "secondary" : "ghost"}
                  size="sm"
                  aria-pressed={category === c}
                  key={c}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <p className="font-mono text-[10px] text-steel mb-5" role="status">
            {results.length} MATERIALS
          </p>
          {results.length ? (
            <div className="material-grid">
              {results.map(([name, group]) => (
                <article key={name} className="material-entry">
                  <span className="material-category">{group}</span>
                  <h2>{name}</h2>
                  <ArrowEnquiry context={name} />
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2 className="text-2xl mb-3">No matching materials.</h2>
              <p>Try another material name or category.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearch("");
                  setCategory("All materials");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
          <p className="notice">
            Material names are preserved exactly as supplied. Stavex and WPS require grade
            confirmation. No machining guarantee is implied for any geometry or specification.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
