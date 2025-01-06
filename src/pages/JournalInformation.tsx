import Navigation from '../components/Navigation';
import { Card, CardContent } from "@/components/ui/card";

const JournalInformation = () => {
  const sections = [
    { id: "objectives", title: "Objectives and Scope" },
    { id: "frequency", title: "Publication Frequency" },
    { id: "review", title: "Editorial and Peer Review Process" },
    { id: "copyright", title: "Copyright and License" },
    { id: "plagiarism", title: "Plagiarism Policy" },
    { id: "charges", title: "Processing and Publication Charges" },
    { id: "ethics", title: "Publication Ethics" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* TOC Sidebar */}
          <div className="col-span-12 md:col-span-3">
            <Card className="sticky top-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 prose prose-lg max-w-none">
            <section id="objectives" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Objectives and Scope</h2>
              <p className="mb-4">
                Helixus - Intersections in Lifesciences (Helixus) is an international, interdisciplinary, peer-reviewed journal dedicated to publishing cutting-edge research at the convergence of biological sciences, biotechnology, and biomedical research. Founded in 2024, Helixus has established itself as a digital-first, fully open access journal with eISSN [pending].
              </p>
              <h3 className="text-xl font-semibold mb-3">Aims</h3>
              <p className="mb-4">
                "Helixus Intersections in Life Sciences" aims to provide a multidisciplinary platform that bridges diverse fields within life sciences, fostering integrative research, innovative approaches, and transformative discoveries.
              </p>
              <h3 className="text-xl font-semibold mb-3">Scope</h3>
              <p>The journal welcomes original research articles, reviews, perspectives, and short communications in the following areas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Molecular and Cellular Biology</li>
                <li>Biotechnology and Bioengineering</li>
                <li>Environmental and Ecological Intersections</li>
                <li>Computational and Systems Biology</li>
                <li>Translational and Clinical Applications</li>
                <li>Interdisciplinary Research</li>
                <li>Emerging Technologies and Trends</li>
              </ul>
            </section>

            <section id="frequency" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Publication Frequency</h2>
              <p>Helixus publishes semi-annually, with issues released in June, and December of each year.</p>
            </section>

            <section id="review" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Editorial and Peer Review Process</h2>
              <div className="bg-accent/30 p-6 rounded-lg">
                <ol className="list-decimal pl-6 space-y-4">
                  <li><strong>Initial Screening:</strong> Editor-in-chief review for scope alignment and quality</li>
                  <li><strong>Peer Review:</strong> Single-blind review by at least two expert reviewers</li>
                  <li><strong>Revision and Decision:</strong> Authors address feedback through revision</li>
                  <li><strong>Production:</strong> Copyediting and typesetting before publication</li>
                </ol>
              </div>
            </section>

            <section id="copyright" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Copyright and License</h2>
              <p>Helixus Research adopts the CC BY license (Creative Commons Attribution v4.0 International License)</p>
            </section>

            <section id="plagiarism" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Plagiarism Policy</h2>
              <p>Helixus employs industry-standard plagiarism detection software to screen all submissions.</p>
            </section>

            <section id="charges" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Processing and Publication Charges</h2>
              <div className="bg-accent/30 p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-2">
                  <li>No submission fees</li>
                  <li>APCs apply post-acceptance only</li>
                  <li>Maximum 5 authors per paper</li>
                  <li>All APCs are non-refundable upon acceptance</li>
                </ul>
              </div>
            </section>

            <section id="ethics" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Publication Ethics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Research Integrity</h3>
                  <ul className="list-disc pl-6">
                    <li>Ethical conduct of research</li>
                    <li>Accurate reporting</li>
                    <li>Proper data analysis</li>
                  </ul>
                </div>
                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Authorship</h3>
                  <ul className="list-disc pl-6">
                    <li>Significant contribution requirement</li>
                    <li>No honorary authorship</li>
                    <li>Written approval from all authors</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalInformation;
