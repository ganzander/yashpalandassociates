const LocationSection = () => {
  return (
    <section id="location" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Location
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Visit Our Office
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center items-center w-full aspect-[2/1] lg:w-1/2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261.9462243940076!2d77.06049111653506!3d28.36252976451676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2346be145b3b%3A0x4930218ec0826108!2sShivansh%20Old%20Furniture%20%26%20Electronics!5e0!3m2!1sen!2sin!4v1739427931752!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-[100%] sm:w-[80%] aspect-[2/1] md:w-[70%] h-full object-cover object-center"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yash Law & Associates
            </h3>
            <p className="text-gray-600 mb-4">
              Our office is conveniently located near to Maruti Kunj Mour
              Bhondsi Sohna Road, Delhi-Mumbai Expressway, Gurugram, easily
              accessible by public transportation and with ample parking
              available.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Office Hours:</strong>
              <br />
              Monday - Saturday: 10:00 AM to 8:00 PM
              <br />
              Sunday: 11:00 AM to 5:00 PM
            </p>
            <p className="text-gray-600">
              For appointments outside of regular business hours, please contact
              us to arrange a meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
