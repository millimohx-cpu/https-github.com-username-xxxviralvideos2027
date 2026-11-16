import AgeNotice from "@/components/AgeNotice";
import { videos } from "@/data/videos";

const categories = ["All", "Featured", "Studio", "New", "Popular", "Documentary", "Creators"];

export default function HomePage() {
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
        <div className="chips">{categories.map((category, i) => <span className={i === 0 ? "chip active" : "chip"} key={category}>{category}</span>)}</div>
        <div className="videoGrid">
          {videos.map((video, i) => (
            <article className="videoCard" key={video.id}>
              <div className={`thumbnail thumb${i + 1}`}><span className="demoTag">{video.label}</span><span className="playIcon">▶</span><span className="duration">{video.duration}</span></div>
              <div className="cardMeta"><span>{video.category}</span><span>UI SAMPLE</span></div>
              <h3>{video.title}</h3><p>{video.description}</p>
              <button className="disabledButton" disabled>Playback unavailable in demo</button>
            </article>
          ))}
        </div>
      </section>

      <section className="compliance" id="about">
        <div><p className="eyebrow">BEFORE ANY LAUNCH</p><h2>Rights. Safety. Compliance.</h2><p>This prototype is not a legal clearance or a production-ready adult service. Before publishing anything, obtain qualified legal advice, written provider approval, documented content rights, and effective jurisdiction-specific age assurance.</p></div>
        <ul><li>Documented distribution licence</li><li>Verified adult performers and releases</li><li>Country-specific access controls</li><li>Privacy, reporting and takedown process</li></ul>
      </section>

      <footer><a className="brand footerBrand" href="#"><span className="brandIcon">X</span><span>XXX<span className="red">VIRAL</span><small>VIDEOS 2027 · UI DEMO</small></span></a><p>© 2027 UI prototype. Fictional sample catalogue.</p><div><a href="#about">Compliance notes</a><a href="#browse">Catalogue</a></div></footer>
    </main>
  );
}
