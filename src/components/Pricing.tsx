import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Basic Care",
    price: 29,
    features: [
      "1 Walk per Day",
      "Basic Grooming",
      "Feeding Service",
      "Photo Updates"
    ]
  },
  {
    name: "Premium Care",
    price: 49,
    features: [
      "2 Walks per Day",
      "Full Grooming",
      "Feeding Service",
      "Photo & Video Updates",
      "Vet Visit Assistance",
      "24/7 Support"
    ]
  },
  {
    name: "Ultimate Care",
    price: 79,
    features: [
      "3 Walks per Day",
      "Premium Grooming",
      "Custom Meal Plans",
      "Live Video Updates",
      "Priority Vet Visits",
      "24/7 VIP Support",
      "Holiday Care"
    ]
  }
];

const Pricing = () => {
  const { toast } = useToast();

  const handleSubscribe = (planName: string) => {
    toast({
      title: "Subscription Request Received",
      description: `Thank you for choosing the ${planName} plan. We'll contact you shortly!`
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <p className="text-4xl font-bold text-center text-primary">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600">/month</span>
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;