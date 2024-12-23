import { Bath, Dog, Cat, Heart, House, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Dog Walking",
    description: "Regular exercise and outdoor adventures for your canine companion",
    icon: Dog,
  },
  {
    title: "Pet Sitting",
    description: "In-home care and companionship while you're away",
    icon: House,
  },
  {
    title: "Grooming",
    description: "Professional grooming services to keep your pet clean and healthy",
    icon: Bath,
  },
  {
    title: "Cat Care",
    description: "Specialized care and attention for your feline friends",
    icon: Cat,
  },
  {
    title: "Health & Wellness",
    description: "Basic health monitoring and medication administration",
    icon: Heart,
  },
  {
    title: "Day Care",
    description: "Safe and fun environment for your pet during the day",
    icon: Clock,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-petgreen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <service.icon className="h-6 w-6 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;