const Values = () => {
  const testimonials = [
    {
      name: "Zayed",
      quote:
        "I am extremely satisfied with the fast and secure delivery of 50 kgs of gold to Dubai in less than a week!",
    },
    {
      name: "Alvaro",
      quote:
        "I am beyond impressed with the efficiency and professionalism of this service! Receiving 200 kgs of gold was seamless.",
    },
    {
      name: "Sam",
      quote:
        "The service is simply excellent! My order arrived quickly, and I highly recommend them to anyone seeking dore bars and gold nuggets.",
    },
  ];

  return (
    <section
      className="relative bg-white py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/background.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Testimonials</h2>
          <p className="text-white max-w-2xl mx-auto">
            This is what clients say about us
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white w-[15em] h-[22em] rounded-2xl shadow-xl p-6 text-center transform transition duration-300 ease-in-out hover:scale-105 ${
                index === 1 ? "scale-110 z-20" : "scale-100"
              }`}
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧔‍♂️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Light overlay for contrast if needed */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none" />
    </section>
  );
};

export default Values;
