import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How easy is it to customize the career pages?",
    answer: "No coding skills are required, and you can create stunning career pages that reflect your brand in just a few clicks.",
    value: "item-1",
  },
  {
    question: "Can I integrate the applicant tracking system with my existing HR software?",
    answer:
      "At the moment no but we are working on it. We will be adding more integrations in the future and you can contact us for customized solutions.",
    value: "item-2",
  },
  {
    question:
      "Is the platform mobile-friendly for candidates?",
    answer:
      "Absolutely! Our platform ensures that career pages and application forms are fully responsive, providing a seamless experience for candidates on any device, including smartphones and tablets.",
    value: "item-3",
  },
  {
    question:
      "Can I post job openings to multiple job boards through your platform?",
    answer: "We are working on a way to integrate multiple organizations. Stay tuned for updates.",
    value: "item-4",
  },
  {
    question:
      "Is there customer support available if I need help with the platform?",
    answer: "Yes, we offer dedicated customer support to assist you with any questions or issues you may encounter. Our support team is available via email, please refer footer for contact details.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
