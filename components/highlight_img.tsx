'use client';
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; 

type HighlightSectionProps = {
  imageurl: string; 
  title: string;
};

export default function HighlightSection({
  imageurl, 
  title,
}: HighlightSectionProps) {

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageDownloadUrl = async () => {
      setLoading(true);
      setError(null); 
      try {
        const storage = getStorage();
        const imageRef = ref(storage, imageurl); 

        const url = await getDownloadURL(imageRef);
        setDownloadUrl(url);
      } catch (err: any) {
        console.error("Error fetching highlight image:", err);
        setError("Failed to load image.");
      } finally {
        setLoading(false);
      }
    };


    if (imageurl) {
      fetchImageDownloadUrl();
    } else {
      setDownloadUrl(null);
      setLoading(false);
      setError("No image path provided.");
    }
  }, [imageurl]); 

  return (
    <div className="highlight-image">
      {loading && <p>Loading image...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {downloadUrl && !loading && !error && (
        <img className="highlight-photo"src={downloadUrl} alt={title} />
      )}
    </div>
  );
}
