import Navigation from '../components/Navigation';
import { Card, CardContent } from "@/components/ui/card";

const InstructionsToAuthors = () => {
  const sections = [
    { id: "general", title: "General Guidelines" },
    { id: "article-types", title: "Article Types" },
    { id: "structure", title: "Manuscript Structure" },
    { id: "formatting", title: "Formatting Requirements" },
    { id: "ethical", title: "Ethical Considerations" },
    { id: "supplementary", title: "Supplementary Materials" },
    { id: "review", title: "Review Process" },
    { id: "post-acceptance", title: "Post-Acceptance" },
    { id: "contact", title: "Contact Information" }
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
            <h1 className="text-3xl font-bold text-primary mb-8">Author Guidelines for Manuscript Preparation</h1>
            
            <section id="general" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">1. General Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Originality:</strong> Manuscripts must be original, unpublished, and not under review elsewhere.</li>
                <li><strong>Ethics:</strong> Submissions must adhere to the journal's ethical policies.</li>
                <li><strong>Language:</strong> All submissions should be in clear, concise English.</li>
                <li><strong>Submission System:</strong> Manuscripts must be submitted via the journal's online portal in Microsoft Word format.</li>
              </ul>
            </section>

            <section id="article-types" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Article Types</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Research Articles</h4>
                  <p>5,000–8,000 words, excluding references</p>
                </div>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Reviews</h4>
                  <p>6,000–10,000 words, excluding references</p>
                </div>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Short Communications</h4>
                  <p>2,000–3,000 words</p>
                </div>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Case Studies</h4>
                  <p>3,000–5,000 words</p>
                </div>
              </div>
            </section>

            <section id="structure" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Manuscript Structure</h2>
              
              <div className="space-y-6">
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">3.1 Title Page</h3>
                  <ul className="list-disc pl-6">
                    <li>Title: Maximum 20 words, concise and descriptive</li>
                    <li>Author Information: Full names, affiliations, ORCID IDs</li>
                    <li>Corresponding Author: Detailed contact information</li>
                  </ul>
                </div>

                <div className="bg-accent/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">3.2 Abstract & Keywords</h3>
                  <ul className="list-disc pl-6">
                    <li>Structured abstract (300 words max)</li>
                    <li>4–6 relevant keywords</li>
                  </ul>
                </div>

                <div className="bg-accent/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">3.3 Main Text Structure</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Research Articles</h5>
                      <ul className="list-disc pl-6">
                        <li>Introduction</li>
                        <li>Materials and Methods</li>
                        <li>Results</li>
                        <li>Discussion</li>
                        <li>Conclusion</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Reviews</h5>
                      <ul className="list-disc pl-6">
                        <li>Introduction</li>
                        <li>Thematic Sections</li>
                        <li>Future Directions</li>
                        <li>Conclusion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="formatting" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Formatting Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Font: 12-point Times New Roman</li>
                <li>Margins: 1-inch on all sides</li>
                <li>Spacing: Double-space all text</li>
                <li>Page Numbers: Consecutive numbering</li>
                <li>Headings: Clear hierarchy (bold for main, italics for sub)</li>
              </ul>
            </section>

            <section id="ethical" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Ethical Considerations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Human and Animal Studies: Include details of ethical approvals</li>
                <li>Conflict of Interest: Declare any conflicts</li>
                <li>Plagiarism: Manuscripts will be screened</li>
              </ul>
            </section>

            <section id="supplementary" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Supplementary Materials</h2>
              <p>Supplementary data such as datasets, additional figures, or multimedia can be submitted. These materials will be published online.</p>
            </section>

            <section id="review" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Review Process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All submissions undergo double-blind peer review</li>
                <li>Initial feedback within 4–6 weeks of submission</li>
              </ul>
            </section>

            <section id="post-acceptance" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Post-Acceptance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authors will receive page proofs for review</li>
                <li>Corrections must be returned within 48 hours</li>
                <li>Open access publication for global dissemination</li>
              </ul>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
              <div className="bg-accent/30 p-4 rounded-lg">
                <p className="mb-2">For queries, contact:</p>
                <p>Email: helixusjournal@gmail.com</p>
                <p>Phone: +1-848-248-0450</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsToAuthors;