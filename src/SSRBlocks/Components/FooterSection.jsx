const FooterSection = () => {
  return (
    <footer className="bg-gray-100  mt-10 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700 ">
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 ">FashionKart</h4>
          <p>Your one-stop fashion destination for every season & every style.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 ">Support</h4>
          <ul>
            <li className="hover:text-indigo-600">Contact Us</li>
            <li className="hover:text-indigo-600">Returns</li>
            <li className="hover:text-indigo-600">FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 ">Company</h4>
          <ul>
            <li className="hover:text-indigo-600">About Us</li>
            <li className="hover:text-indigo-600">Careers</li>
            <li className="hover:text-indigo-600">Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 ">Stay Updated</h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300  bg-white  text-black  rounded px-3 py-2 mb-2"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
