import { Shield, Clock, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full protection and peace of mind for you and your pets"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock care whenever you need us"
  },
  {
    icon: Heart,
    title: "Passionate Care",
    description: "Treating your pets like our own family members"
  },
  {
    icon: Award,
    title: "Certified Team",
    description: "Experienced and professionally trained staff"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;