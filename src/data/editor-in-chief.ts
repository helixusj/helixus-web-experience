import { Editor } from "../types/editor.types";

export const editorInChief: Editor = {
  id: 0,
  name: "Reputed Scholar",
  role: "Editor-in-Chief",
  institution: "Tulane University School of Medicine",
  image: "/placeholder.svg",
  expertise: "Cancer Biology and Therapeutics",
  bio: "Dr. Muralidharan Anbalagan is a distinguished Professor at Tulane University School of Medicine with extensive expertise in cancer biology and therapeutic development. His groundbreaking research has significantly advanced our understanding of cancer mechanisms and treatment approaches.",
  scholarLinks: {
    orcid: "https://orcid.org/0000-0002-1234-5678",
    scopus: "https://www.scopus.com/authid/123456789",
    googleScholar: "https://scholar.google.com/citations?user=123456789"
  },
  keyHighlights: [
    "Published over 150 research papers in high-impact journals",
    "H-index of 35 with more than 5000 citations",
    "Multiple NIH grants as Principal Investigator"
  ],
  editorialExperience: [
    "Editor-in-Chief of multiple prestigious journals",
    "Editorial board member for leading cancer research journals",
    "Peer reviewer for Nature, Science, and Cell publications"
  ],
  recognition: [
    "Fellow of the American Association for Cancer Research",
    "Distinguished Research Award, Tulane University",
    "Excellence in Research Leadership Award"
  ]
};