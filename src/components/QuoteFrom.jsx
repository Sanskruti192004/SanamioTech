import { useState, useEffect } from "react";

const QuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show form on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeForm = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black bg-opacity-70 p-6 rounded-xl w-96 relative text-white">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              Get a Free Quote 🚀
            </h2>
            <p className="text-gray-300 mb-4">
              Fill in your details and our team will get back to you shortly.
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              />

              <select className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600">
                <option>Select Budget</option>
                <option>$500 - $1000</option>
                <option>$1000 - $5000</option>
                <option>$5000+</option>
              </select>

              <select className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600">
                <option>Select Category</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
              </select>

              <textarea
                placeholder="Tell us about your project..."
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteForm;
