import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    url: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2",
    alt: "Professional Pet Grooming Service"
  },
  {
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    alt: "Dog Walking and Training"
  },
  {
    url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    alt: "Pet Sitting and Day Care"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-primary-50" id="gallery">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
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
                src={selectedImage}
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