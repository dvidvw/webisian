export default function PriceList() {
  const prices = [
    { amount: "2k", price: "500p" },
    { amount: "3k", price: "1k" },
    { amount: "5k", price: "2k" },
  ]

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Daftar Isian</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400">{item.amount}</span>
                <span className="block text-gray-600 dark:text-gray-300 mt-2">Admin: {item.price}</span>
                <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Pilih
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
