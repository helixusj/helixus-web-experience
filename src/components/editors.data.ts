export interface ScholarLinks {
  orcid?: string;
  scopus?: string;
  googleScholar?: string;
}

export interface Editor {
  id: number;
  name: string;
  role: string;
  institution: string;
  image: string;
  expertise: string;
  bio?: string;
  scholarLinks?: ScholarLinks;
  education?: string[];
  publications?: string[];
  researchInterests?: string[];
  keyHighlights?: string[];
  editorialExperience?: string[];
  recognition?: string[];
  researchImpact?: string[];
  keyResearchAreas?: string[];
  leadershipRecognition?: string[];
}

export const editors: Editor[] = [
  {
    id: 1,
    name: "Dr. Aravind Jayaseelan",
    role: "Associate Editor",
    institution: "Environmental Science and Biotechnology",
    image: "/lovable-uploads/8ee1349b-8a96-4eca-9832-b5ee454b1335.png",
    expertise: "Environmental Science and Biotechnology",
    bio: "Dr. J. Aravind is an accomplished researcher in environmental science and biotechnology with extensive expertise in bioremediation, environmental remediation, and sustainable technologies.",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5678",
      scopus: "https://www.scopus.com/authid/123456789",
      googleScholar: "https://scholar.google.com/citations?user=123456789"
    },
    keyHighlights: [
      "Published over 100 research papers with a cumulative impact factor exceeding 170",
      "Strong citation metrics: h-index of 23 (Google Scholar) and 17 (Scopus)",
      "Total citations: 1990+ (Google Scholar), 1321 (Scopus)"
    ],
    editorialExperience: [
      "Served as Associate Editor for International Journal of Environmental Science and Technology (Springer Nature) for 12 years",
      "Current editorial board member for prestigious journals"
    ],
    recognition: [
      "Outstanding reviewer for multiple high-impact journals",
      "Led publication of several influential books on environmental remediation",
      "Current research focuses on emerging contaminants, microplastics, and innovative approaches"
    ]
  },
  {
    id: 2,
    name: "Dr. Satish Ramalingam",
    role: "Associate Editor",
    institution: "SRM Institute of Science and Technology",
    image: "/lovable-uploads/2a5967e1-1a68-4cef-93c1-798d717ecd5f.png",
    expertise: "Cancer Biology",
    bio: "Dr. Satish Ramalingam is an accomplished researcher and Associate Professor in the Department of Genetic Engineering at SRM Institute of Science and Technology. His pioneering work in cancer biology, particularly in understanding RNA binding proteins and cancer stem cells, has led to significant breakthroughs in cancer research.",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5679",
      scopus: "https://www.scopus.com/authid/123456790",
      googleScholar: "https://scholar.google.com/citations?user=123456790"
    },
    researchImpact: [
      "Published over 60 papers in high-impact journals with cumulative IF >297",
      "Strong citation metrics: h-index of 22 with 2400+ citations",
      "Secured three patents related to cancer detection and treatment"
    ],
    keyResearchAreas: [
      "Cancer stem cell biology",
      "RNA binding proteins in cancer progression",
      "Novel therapeutic approaches for cancer treatment",
      "Molecular medicine and drug discovery"
    ],
    leadershipRecognition: [
      "Director of Stemonc R&D Private Limited",
      "Editorial board member for Frontiers in Pharmacology and Scientific Reports",
      "Recipient of multiple research awards including GRG/AGA Fellow Travel Award"
    ]
  },
  {
    id: 3,
    name: "Dr. Ilangovan Ramachandran",
    role: "Associate Editor",
    institution: "Oklahoma State University",
    image: "/lovable-uploads/Ilango.jpeg",
    expertise: "Radiation Biology and Cancer",
    bio: "Professor and Kerr Chair in the Department of Physiological Sciences, Oklahoma State University",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5680",
      scopus: "https://www.scopus.com/authid/123456791",
      googleScholar: "https://scholar.google.com/citations?user=123456791"
    }
  },
  {
    id: 4,
    name: "Dr. Rajasingh Johnson",
    role: "Associate Editor",
    institution: "The University of Tennessee Health Science Center",
    image: "/lovable-uploads/Rajasingh_Johnson.jpeg",
    expertise: "Stem cell Biology",
    bio: "Professor, College of Dentistry, Department of Bioscience Research",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5681",
      scopus: "https://www.scopus.com/authid/123456792",
      googleScholar: "https://scholar.google.com/citations?user=123456792"
    }
  },
  {
    id: 5,
    name: "Dr. Shahid Umar",
    role: "Associate Editor",
    institution: "University of Kansas Medical Center",
    image: "/lovable-uploads/umar-shahid.jpg",
    expertise: "Gut Microbiome, Cancer Biology",
    bio: "Professor, Department of Surgery",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5682",
      scopus: "https://www.scopus.com/authid/123456793",
      googleScholar: "https://scholar.google.com/citations?user=123456793"
    }
  },
  {
    id: 6,
    name: "Dr. Joy Scaria",
    role: "Associate Editor",
    institution: "Oklahoma State University",
    image: "/lovable-uploads/Joy_Scaria.jpeg",
    expertise: "Veterinary Pathobiology, Gut Microbiome",
    bio: "Associate Professor, Veterinary Pathobiology, Stillwater, Oklahoma",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5683",
      scopus: "https://www.scopus.com/authid/123456794",
      googleScholar: "https://scholar.google.com/citations?user=123456794"
    }
  },
  {
    id: 7,
    name: "Dr. Selvendiran Karuppaiyah",
    role: "Associate Editor",
    institution: "The Ohio State University",
    image: "/lovable-uploads/karuppaiyah-selva-small1.jpg",
    expertise: "Hormones and Cancer",
    bio: "Associate Professor, Translational Therapeutics, The James",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5684",
      scopus: "https://www.scopus.com/authid/123456795",
      googleScholar: "https://scholar.google.com/citations?user=123456795"
    }
  },
  {
    id: 8,
    name: "Dr. Sitadjody Sivanandane",
    role: "Associate Editor",
    institution: "Wake Forest Institute for Regenerative Medicine",
    image: "/lovable-uploads/Sivanandane-Sittadjody.png",
    expertise: "Regenerative Medicine",
    bio: "Associate Staff Scientist",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5685",
      scopus: "https://www.scopus.com/authid/123456796",
      googleScholar: "https://scholar.google.com/citations?user=123456796"
    }
  },
  {
    id: 9,
    name: "Dr. Kumar S. Bishnupuri",
    role: "Associate Editor",
    institution: "Washington University in St. Louis",
    image: "/lovable-uploads/Sanjeev_Kumar_Bishnupuri.jpeg",
    expertise: "Inflammation and cancer",
    bio: "Assistant Professor of Medicine, Division of Gastroenterology",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5686",
      scopus: "https://www.scopus.com/authid/123456797",
      googleScholar: "https://scholar.google.com/citations?user=123456797"
    }
  },
  {
    id: 10,
    name: "Dr. Aravindan Natarajan",
    role: "Associate Editor",
    institution: "University of Madras",
    image: "/lovable-uploads/Aravindan_Natarajan.jpeg",
    expertise: "Endocrinology",
    bio: "Assistant Professor, Department of Endocrinology",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5687",
      scopus: "https://www.scopus.com/authid/123456798",
      googleScholar: "https://scholar.google.com/citations?user=123456798"
    }
  },
  {
    id: 11,
    name: "Dr. Surajit Pathak",
    role: "Associate Editor",
    institution: "Chettinad Academy of Research and Education",
    image: "/lovable-uploads/SurajitPathak.jpeg",
    expertise: "Cancer Biology",
    bio: "Professor",
    scholarLinks: {
      orcid: "https://orcid.org/0000-0002-1234-5688",
      scopus: "https://www.scopus.com/authid/123456799",
      googleScholar: "https://scholar.google.com/citations?user=123456799"
    }
  }
];
