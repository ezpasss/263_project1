"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export default function SelectedCatPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchImages = async () => {
      try {
        const storage = getStorage();
        const listRef = ref(storage, `Road Trip/${id}`);
        const result = await listAll(listRef);

        const urls = await Promise.all(
          result.items.map((itemRef) => getDownloadURL(itemRef))
        );

        setImages(urls);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{id} national park</h1>
      <div className="grid grid-cols-4 gap-2">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            className="w-full aspect-square object-cover"
          />
        ))}
      </div>
    </main>
  );
}

   