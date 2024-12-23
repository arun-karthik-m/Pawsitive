import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <Card className="bg-petbeige/50">
            <CardContent className="pt-6">
              <p className="text-lg mb-6">
                With over 10 years of experience in pet care, we understand that your pets are family. 
                Our mission is to provide the highest quality care while giving you peace of mind.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Pets</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-gray-600">Care Available</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;