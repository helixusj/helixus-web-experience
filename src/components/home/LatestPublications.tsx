export const LatestPublications = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2472]">
          Latest Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for latest publications */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-sm text-gray-500 mb-2">Coming Soon</p>
            <h3 className="font-semibold mb-2">Latest research publications will be displayed here</h3>
          </div>
        </div>
      </div>
    </section>
  );
};