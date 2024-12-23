import { Bath, Dog, Cat, Heart, House, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    title: "Dog Walking",
    description: "Regular exercise and outdoor adventures for your canine companion",
    icon: Dog,
    price: "From $20/hour"
  },
  {
    title: "Pet Sitting",
    description: "In-home care and companionship while you're away",
    icon: House,
    price: "From $45/day"
  },
  {
    title: "Grooming",
    description: "Professional grooming services to keep your pet clean and healthy",
    icon: Bath,
    price: "From $35/session"
  },
  {
    title: "Cat Care",
    description: "Specialized care and attention for your feline friends",
    icon: Cat,
    price: "From $25/visit"
  },
  {
    title: "Health & Wellness",
    description: "Basic health monitoring and medication administration",
    icon: Heart,
    price: "From $30/visit"
  },
  {
    title: "Day Care",
    description: "Safe and fun environment for your pet during the day",
    icon: Clock,
    price: "From $40/day"
  },
];

const Services = () => {
  const { toast } = useToast();

  const handleBookService = (serviceName: string) => {
    toast({
      title: "Service Booking Request",
      description: `Thank you for booking ${serviceName}. We'll contact you shortly!`
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">Our Services</h2>
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
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary-600 font-semibold mb-4">{service.price}</p>
                <Button
                  className="w-full"
                  onClick={() => handleBookService(service.title)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;