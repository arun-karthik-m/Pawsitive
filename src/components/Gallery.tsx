import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    alt: "Happy cat after grooming"
  },
  {
    url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    alt: "Playful kitten"
  },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=600&h=600`}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <img
                src={`${selectedImage}?auto=format&fit=crop&w=1200`}
                alt="Gallery preview"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;