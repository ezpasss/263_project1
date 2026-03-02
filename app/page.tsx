
import Link from "next/link";
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
              <p>BIO DESCRIPTION</p>
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-text">
              <h2>Wildlife</h2>
              <p>BIO DESCRIPTION</p>
            </div>

            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_3954.jpg" alt="DSC_3954" />
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_2529.jpg" alt="DSC_2529" />
            </div>

            <div className="highlight-text">
              <h2>Landscapes</h2>
              <p>BIO DESCRIPTION</p>
            </div>
          </section>

          <section className="highlight-row">
            <div className="highlight-text">
              <h2>Portraits</h2>
              <p>BIO DESCRIPTION</p>
            </div>

            <div className="highlight-image">
              <img className="highlight-photo" src="/DSC_1717.jpg" alt="DSC_1717" />
            </div>
          </section>

      </main>
    </div>
  );
}
