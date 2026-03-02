import HighlightSection from "@/components/highlight_img";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-5xl font-bold text-center">Welcome to Rowan's Studio</h1>
          <section className="highlight-row">
            <div className="highlight-text">
              <h2>Welcome to Rowan's Studio</h2>
              <p>Take some time to scroll through a collection of my work</p>
            </div>

            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_1803-Enhanced-NR.jpg" alt="DSC_1803-Enhanced-NR" />
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_1803-Enhanced-NR.jpg" alt="DSC_1803-Enhanced-NR" />
            </div>

            <div className="highlight-text">
              <h2>Astro Photography</h2>
              <p>Overlooking CanyonLands National Park the Milky way can be seen sprawling across the night sky.</p>
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-text">
              <h2>Wildlife</h2>
              <p>Up close and personal with all types of wildlife</p>
            </div>

            <HighlightSection imageurl="Road Trip/glacier/DSC_3954.jpg" title="Stunning Landscape"/>

          </section>

          <section className="highlight-row">
            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_2529.jpg" alt="DSC_2529" />
            </div>

            <div className="highlight-text">
              <h2>Landscapes</h2>
              <p>Beautiful landscapes from around the United States</p>
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-text">
              <h2>Portraits</h2>
              <p>Personal portraits of individuals and families, if you are interested head to our contact page and put in a request!</p>
            </div>

            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_1717.jpg" alt="DSC_1717" />
            </div>
          </section>

      </main>
    </div>
  );
}
