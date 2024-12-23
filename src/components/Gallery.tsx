import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    url: "https://unsplash.com/photos/a-person-walking-a-group-of-dogs-TWrtodIYgYE",
    alt: "Dog Walking Service"
  },
  {
    url: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2",
    alt: "Pet Grooming"
  },
  {
    url: "https://images.unsplash.com/photo-1612531822963-3ae4dead0160",
    alt: "Pet Sitting"
  },
  {
    url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    alt: "Cat Care"
  },
  {
    url: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c",
    alt: "Health Check-up"
  },
  {
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    alt: "Dog Training"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-primary-50" id="gallery">
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
