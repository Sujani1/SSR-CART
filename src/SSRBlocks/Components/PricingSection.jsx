const PricingSection = () => {
  const categories = [
    {
      title: "Sportswear",
      description: "Push your limits in breathable, high-performance activewear.",
      price: "₹399",
    },
    {
      title: "Ethnic Wear",
      description: "Celebrate tradition with trendy sarees, kurtas, and more.",
      price: "₹499",
    },
    {
      title: "T-Shirts",
      description: "Stay comfy and stylish with casual everyday tees.",
      price: "₹199",
    },
    {
      title: "Western Wear",
      description: "Modern silhouettes and trendsetting styles made for you.",
      price: "₹299",
    },
    {
      title: "Pants & Trousers",
      description: "From formals to relaxed fits, find your perfect pair.",
      price: "₹299",
    },
    {
      title: "New Season",
      description: "Fresh arrivals you don’t want to miss.",
      price: "₹199",
    },
  ];

  return (
    <div className="py-12 px-6 bg-white ">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 ">
        Explore by Category
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="border border-gray-200  rounded-xl p-6 shadow hover:shadow-lg transition duration-300 text-center bg-white  text-gray-900 "
          >
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 2L3 6v13a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600 ">{cat.description}</p>
            <p className="text-indigo-600 font-bold text-lg mb-4">
              Starting at {cat.price}
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
