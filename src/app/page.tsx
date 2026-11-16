"use client";

import { useMemo, useState } from "react";
import AgeNotice from "@/components/AgeNotice";
import { videos } from "@/data/videos";

const categories = ["All", "Featured", "Studio", "New", "Popular", "Documentary", "Creators"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return videos.filter((video) => {
      const matchesCategory = activeCategory === "All" || video.category === activeCategory;
      const matchesSearch =
        !query ||
        [video.title, video.category, video.description].some((value) =>
          value.toLowerCase().includes(query)
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main>
      <AgeNotice />
      <header className="topbar">
        <a className="brand" href="#"><span className="brandIcon">X</span><span>XXX<span className="red">VIRAL</span><small>VIDEOS 2027 · UI DEMO</small></span></a>
        <nav><a href="#browse">Browse</a><a href="#about">About this demo</a></nav>
        <span className="demoPill">PROTOTYPE</span>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow"><span className="liveDot" /> DESIGN PREVIEW · PLACEHOLDER CONTENT</p>
          <h1>Discover the <span className="red">experience.</span></h1>
          <p className="heroText">A black-and-red streaming interface concept. This preview uses fictional catalogue entries and contains no playable adult media.</p>
          <a className="primaryButton linkButton" href="#browse">Explore the demo <span>→</span></a>
          <p className="heroNote">No real videos · No uploads · No payments</p>
        </div>
        <div className="heroArt" aria-label="Abstract decorative artwork">
          <div className="orb orbOne" /><div className="orb orbTwo" />
          <div className="heroTile"><span className="tilePlay">▶</span><b>PREVIEW</b><small>PLACEHOLDER ONLY</small></div>
        </div>
      </section>

      <section className="stats">
        <div><strong>06</strong><span>Sample cards</span></div>
        <div><strong>00</strong><span>Playable videos</span></div>
        <div><strong>100%</strong><span>Demo content</span></div>
      </section>

      <section className="catalogue" id="browse">
        <div className="sectionHeading"><div><p className="eyebrow">THE CATALOGUE</p><h2>Browse collections</h2></div><span className="muted">All items are fictional</span></div>
        <div className="catalogueTools">
          <label className="searchBox">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search sample collections..."
              aria-label="Search sample collections"
            />
            {searchQuery && (
              <button type="button" className="clearSearch" onClick={() => setSearchQuery("")} aria-label="Clear search">×</button>
            )}
          </label>
          <span className="resultCount" aria-live="polite">{filteredVideos.length} of {videos.length} samples</span>
        </div>
        <div className="chips" aria-label="Filter sample catalogue by category">
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "chip active" : "chip"}
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredVideos.length > 0 ? (
          <div className="videoGrid">
            {filteredVideos.map((video) => {
              const originalIndex = videos.findIndex((item) => item.id === video.id);
              return (
                <article className="videoCard" key={video.id}>
                  <div className={`thumbnail thumb${originalIndex + 1}`}><span className="demoTag">{video.label}</span><span className="playIcon">▶</span><span className="duration">{video.duration}</span></div>
                  <div className="cardMeta"><span>{video.category}</span><span>UI SAMPLE</span></div>
                  <h3>{video.title}</h3><p>{video.description}</p>
                  <button className="disabledButton" disabled>Playback unavailable in demo</button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="emptyState">
            <strong>No sample collections found</strong>
            <p>Try another search term or choose a different category.</p>
            <button type="button" className="resetButton" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>Clear filters</button>
          </div>
        )}
      </section>

      <section className="compliance" id="about">
        <div><p className="eyebrow">BEFORE ANY LAUNCH</p><h2>Rights. Safety. Compliance.</h2><p>This prototype is not a legal clearance or a production-ready adult service. Before publishing anything, obtain qualified legal advice, written provider approval, documented content rights, and effective jurisdiction-specific age assurance.</p></div>
        <ul><li>Documented distribution licence</li><li>Verified adult performers and releases</li><li>Country-specific access controls</li><li>Privacy, reporting and takedown process</li></ul>
      </section>

      <footer><a className="brand footerBrand" href="#"><span className="brandIcon">X</span><span>XXX<span className="red">VIRAL</span><small>VIDEOS 2027 · UI DEMO</small></span></a><p>© 2027 UI prototype. Fictional sample catalogue.</p><div><a href="#about">Compliance notes</a><a href="#browse">Catalogue</a></div></footer>
    </main>
  );
}
