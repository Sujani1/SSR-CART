const TestimonialSection = () => {
  const reviews = [
    {
      name:"Harika N",
      comment: "Loved the quality and fit! Arrived on time.",
    },
    {
      name: "Suji S.",
      comment: "Great styles and customer service. Highly recommend!",
    },
    {
      name: "Niha H",
      comment: "Product was exactly as shown. Very happy with the purchase!",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <div key={i} className="border rounded-lg p-6 shadow">
            <p className="text-gray-700 mb-4">"{review.comment}"</p>
            <p className="text-sm font-semibold text-indigo-600">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection