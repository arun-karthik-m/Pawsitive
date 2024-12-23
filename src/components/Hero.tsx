import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleBookNow = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: "Scrolling to Pricing",
      description: "Check out our available packages!"
    });
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-primary-100">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1920&q=80')",
          opacity: "0.2"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-primary-900">
            Loving Care for Your Furry Family
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in text-primary-800">
            Professional pet care services tailored to your pet's needs. Because they deserve the very best.
          </p>
          <Button 
            size="lg"
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary-600 text-white px-8 py-6 rounded-full text-lg animate-fade-in"
          >
            <PawPrint className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;