const CartSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1376/4293/products/IMG_1118_ef9533ea-996d-43ef-a5c3-f2f3029395ef.jpg?v=1638464167"
                alt="Product"
                className="w-20 h-20 rounded"
              />
              <div>
                <h4 className="font-medium">Stylish Kurta</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Size: L</p>
              </div>
            </div>
            <div>
              <input
                type="number"
                value="1"
                min="1"
                className="w-16 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-900 text-black dark:text-white"
              />
              <p className="mt-2 text-right font-semibold">₹1,499</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹1,499</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="text-green-700 dark:text-green-400">Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-gray-300 dark:border-gray-600 pt-2">
            <span>Total</span>
            <span>₹1,499</span>
          </div>
          <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;


