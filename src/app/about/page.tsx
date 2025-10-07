export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Hakkımda
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu sayfa hakkımda bilgilerinizi paylaşabileceğiniz alandır. 
              Kendinizi, deneyimlerinizi ve hedeflerinizi burada anlatabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
