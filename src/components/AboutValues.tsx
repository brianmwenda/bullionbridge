const AboutValues = () => {
  const values = [
    {
      icon: "🔒",
      title: "Integrity",
      description:
        "We uphold honest business practices and maintain transparent communication in every transaction. At XicoTrading, integrity is the foundation of our role as trusted intermediaries, ensuring both gold buyers and sellers can engage with confidence, knowing every deal is handled with professionalism, ethics, and full disclosure.",
    },
    {
      icon: "✅",
      title: "Quality",
      description:
        "At XicoTrading, quality is non-negotiable. Every gold product we facilitate undergoes rigorous testing and is backed by trusted certification to ensure authenticity and purity. Our commitment to high standards guarantees that buyers receive only verified, investment-grade gold from reliable sources across Kenya’s gold-producing regions.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Trust is at the heart of XicoTrading. We build lasting relationships by delivering consistent, reliable service and dedicated support. Through verified partnerships and transparent processes, we ensure that every gold transaction is secure, compliant, and backed by the confidence our global clients depend on.",
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/background.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-white max-w-2xl mx-auto">
            At XicoTrading, our commitment to trust, transparency, and authenticity is unwavering. These core
            principles guide every transaction we undertake, ensuring that our clients and partners can rely on us to
            deliver consistent results. We connect verified gold sellers with global buyers, ensuring certified quality
            and secure dealings. This dedication to our values makes us a trusted partner in sourcing gold and
            investment-grade precious metals worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white w-[15em] h-[27em] rounded-2xl shadow-2xl p-6 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:z-30 ${
                index === 1 ? "scale-110 z-20" : "scale-100"
              }`}
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
