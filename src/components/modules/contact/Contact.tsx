const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-24 py-16 md:py-32 gap-12">
      <div className="w-full md:w-1/3 bg-gradient-to-b from-[#00786f] to-[#4cb9b3] text-white p-8 rounded-lg space-y-6">
        <h2 className="text-2xl font-semibold">Get in touch</h2>

        <div>
          <h3 className="font-medium">Visit us</h3>
          <p className="text-sm">
            Come say hello at our office HQ.
            <br />
            213 Lane, London, United Kingdom
          </p>
        </div>

        <div>
          <h3 className="font-medium">Chat to us</h3>
          <p className="text-sm">
            Our friendly team is here to help.
            <br />
            <a href="mailto:hello@paysphere.com" className="underline">
              hello@runner.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-medium">Call us</h3>
          <p className="text-sm">
            Mon–Fri from 8am to 5pm
            <br />
            (+995) 555-65-55-55
          </p>
        </div>

        <div>
          <h3 className="font-medium">Social media</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#">🌐</a>
            <a href="#">💼</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>

      {/* <!-- Right Side - Contact Form --> */}
      <div className="w-full md:w-2/3 space-y-6 bg-white dark:bg-slate-900 border-0 dark:border-2 p-5 rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <input
          type="text"
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value="(+995) 555-55-55-55"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          rows={4}
          placeholder="Tell us what we can help you with"
          className="w-full border border-gray-300 rounded px-4 py-2"
        ></textarea>

        <div className="flex items-start space-x-2">
          <input type="checkbox" id="privacy" className="mt-1" />
          <label htmlFor="privacy" className="text-sm">
            Id like to receive more information about the company. I understand
            and agree to the
            <a href="#" className="underline text-[#00786f]">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <button className="w-full bg-[#00786f] hover:bg-[#005e57] text-white py-3 rounded">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
