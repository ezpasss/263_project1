type HighlightSectionProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function HighlightSection({
  imageUrl,
  title,
  description,
}: HighlightSectionProps) {
  return (
    <section className="highlight-row">
      <div className="highlight-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="highlight-image">
        <img src={imageUrl} alt={title} />
      </div>
    </section>
  );
}