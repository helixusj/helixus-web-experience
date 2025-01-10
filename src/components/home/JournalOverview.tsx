export const JournalOverview = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Journal Overview</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center">
            Helixus - Intersections in Lifesciences is an international, interdisciplinary, peer-reviewed journal dedicated to publishing cutting-edge research at the convergence of biological sciences, biotechnology, and biomedical research.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Providing a multidisciplinary platform that bridges diverse fields within life sciences, fostering integrative research, innovative approaches, and transformative discoveries.
              </p>
            </div>
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Info</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Semi-annual Journal</li>
                <li>Interdisciplinary in Life sciences</li>
                <li>Peer Reviewed</li>
                <li>Open Access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};