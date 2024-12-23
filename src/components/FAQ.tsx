import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of pet care services including dog walking, pet sitting, grooming, day care, and basic health monitoring."
  },
  {
    question: "Are your staff members certified?",
    answer: "Yes, all our staff members are professionally certified and undergo regular training to ensure the highest quality of care for your pets."
  },
  {
    question: "What are your operating hours?",
    answer: "We operate 24/7 for most services, with our main facility open from 7 AM to 8 PM daily. Emergency services are available around the clock."
  },
  {
    question: "Do you provide emergency services?",
    answer: "Yes, we offer 24/7 emergency services for our registered clients. You can reach our emergency hotline at any time."
  },
  {
    question: "Are you insured?",
    answer: "Yes, we are fully insured and bonded for your peace of mind. Our insurance covers all aspects of pet care services we provide."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;