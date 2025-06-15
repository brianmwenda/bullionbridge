import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const FAQ = () => {
  const faqs = [
    {
      question: "What types of precious metals do you sell?",
      answer: "We specialize in investment-grade gold bars, gold nuggets and Powder products. All our products are certified for purity and authenticity."
    },
    {
      question: "How do you ensure the authenticity of your products?",
      answer: "Every product comes with a certificate of authenticity from recognized refineries. We work only with LBMA-approved refineries and conduct regular quality checks."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major USDT, wire transfers, and cash & carry options. All payments are processed securely through encrypted channels."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically ship within 1-2 business days and arrive within 3-5 business days. International orders may take 7-14 business days depending on customs processing."
    },
    {
      question: "Is my shipment insured?",
      answer: "Yes, all shipments are fully insured for their full value. We use discreet packaging and require signature confirmation for delivery to ensure your precious metals arrive safely."
    },
    {
      question: "Can I return products if I'm not satisfied?",
      answer: "We offer a 30-day return policy for products in their original condition. Return shipping fees may apply, and refunds are processed within 5-7 business days."
    },
    {
      question: "Do you offer storage services?",
      answer: "Yes, we partner with secure vault facilities to offer storage solutions. Contact us for information about our storage programs and fees."
    },
    {
      question: "How are your prices determined?",
      answer: "Our prices are based on current spot metal prices plus a small premium to cover handling, storage, and authentication. Prices update regularly throughout the trading day."
    },
    {
      question: "Do you buy back precious metals?",
      answer: "Yes, we offer competitive buyback prices for products purchased from us. Contact our us for current buyback rates and procedures."
    },
    {
      question: "What if the price changes after I place an order?",
      answer: "Prices are locked in when you complete your purchase and payment is processed. Market fluctuations after order confirmation do not affect your locked-in price."
    }
  ];

  return (
    <PageWrapper>
    <div className="min-h-screen">
      
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our precious metals, shipping, and services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-4">
              Our customer service channel is here to help. Contact us for personalized assistance with your precious metals investment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+254735389953" 
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center"
              >
                Whatsapp: +(254) 770 012 574
              </a>
              <a 
                href="mailto:xicotradinglimited@gmail.com" 
                className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors text-center"
              >
                Email: xicotradinglimited@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </PageWrapper>
  );
};

export default FAQ;
