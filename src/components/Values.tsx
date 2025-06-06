const Values = () => {
    {/* Values Section */}
     return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This is what clients say about us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧔‍♂️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Zayed</h3>
              <p className="text-gray-600">
                I am extremely satisfied with the fast and secure delivery of 50 kgs of gold to Dubai in less than a week! The process was smooth, 
                with excellent communication and top-notch service from start to finish. 
                
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧔‍♂️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Alvaro</h3>
              <p className="text-gray-600">
                I am beyond impressed with the efficiency and professionalism of this service! Receiving 200 kgs of gold in 
                less than two weeks to Dubai was seamless, with perfect communication and security throughout the process. 
                
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧔‍♂️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sam</h3>
              <p className="text-gray-600">
                The service is simply excellent! My order arrived quickly, and the package looks even better. I highly recommend them to anyone looking for a reliable gold seller offering dore bars and gold nuggets at below premium prices.
              </p>
            </div>
          </div>
        </div>
      </section>
   );
};

export default Values;