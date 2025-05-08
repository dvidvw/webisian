import Image from "next/image"

export default function Hero() {
  return (
    <section className="space-y-8">
      {/* Original EPEP! Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Kasming</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">gatau gua</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow">
                Order
              </button>
            </div>
            <div className="md:flex-1 flex justify-center">
              <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Admin Kasming"
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Juan's Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Dapit</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">bujang</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow">
                Order
              </button>
            </div>
            <div className="md:flex-1 flex justify-center">
              <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://pbs.twimg.com/media/GarzF08aAAEnTw_.png"
                  alt="Admin Dapit"
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wibi's Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Wibay</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">sekolah scam</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow">
                Order
              </button>
            </div>
            <div className="md:flex-1 flex justify-center">
              <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/ea/56/af/ea56af3c45db2a9bea14bf9cec3a01ff.jpg"
                  alt="Admin Wibay"
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
