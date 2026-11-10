export type NewsArticle = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  image: { src: string; alt: string };
  category: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "commemoration-1994-genocide-against-tutsis-mua-insurance-rwanda-ltd-visited-ntarama-and-nyanza",
    title:
      "In commemoration of the 1994 Genocide against the Tutsis, MUA Insurance Rwanda Ltd visited Ntarama and Nyanza",
    summary:
      "MUA Insurance Rwanda commemorated the 1994 Genocide against the Tutsis with visits to Ntarama and Nyanza.",
    body: [
      "MUA Insurance Rwanda Ltd marked the annual period of remembrance for the 1994 Genocide against the Tutsis with organised visits to Ntarama and Nyanza.",
      "The published news feature records the company’s participation in commemorative activity with colleagues and community partners.",
      "Full photo coverage and extended narrative remain on the original mua.rw article until richer media is migrated.",
    ],
    image: {
      src: "/images/news-3.jpg",
      alt: "MUA Rwanda community commemoration visit",
    },
    category: "Community",
  },
  {
    slug: "mua-agents-and-franchisee-loyalty-scheme-program",
    title: "MUA agents and Franchisee loyalty scheme program",
    summary:
      "Recognition programme for agents and franchisees who help customers access the right cover.",
    body: [
      "MUA works with agents and franchisees across Rwanda to bring insurance closer to customers.",
      "The Agents and Franchisee Loyalty Scheme programme recognises partners who support quoting, policy service and claims guidance.",
      "For partnership enquiries, contact MUA Rwanda Head Office or visit the Agents & partners page.",
    ],
    image: {
      src: "/images/news-1.jpg",
      alt: "MUA agents and franchisee programme",
    },
    category: "Partners",
  },
  {
    slug: "mua-insurance-rwanda-ltd-was-happy-be-part-indian-association-rwanda-inar-community-and",
    title:
      "MUA Insurance Rwanda Ltd was happy to be part of the Indian Association of Rwanda (INAR) community celebration",
    summary:
      "MUA Insurance Rwanda joined the Indian Association of Rwanda community celebration.",
    body: [
      "MUA Insurance Rwanda Ltd participated in a community celebration organised with the Indian Association of Rwanda (INAR).",
      "The feature highlights local partnership and community presence beyond day-to-day insurance service.",
    ],
    image: {
      src: "/images/news-2.jpg",
      alt: "MUA Rwanda at INAR community event",
    },
    category: "Community",
  },
  {
    slug: "mua-rwanda-was-happy-receive-new-group-ceo-and-bid-farewell-outgoing-group-ceo",
    title:
      "MUA Rwanda was happy to receive the new Group CEO and bid farewell to the outgoing Group CEO",
    summary:
      "MUA Rwanda hosted leadership transition moments with the Group Chief Executive Officer.",
    body: [
      "MUA Insurance Rwanda published a news feature covering the welcome of a new Group CEO and farewell to the outgoing Group CEO.",
      "The article is retained here as a verified news destination from the Rwanda site inventory. Extended remarks remain on the source article.",
    ],
    image: {
      src: "/images/news-1.jpg",
      alt: "MUA Rwanda leadership visit",
    },
    category: "Company",
  },
  {
    slug: "message-mua-shareholders",
    title: "Message to MUA shareholders",
    summary:
      "Shareholder communication published via the Rwanda newsroom (relevance to local audiences may vary).",
    body: [
      "A shareholder message was published through the mua.rw newsroom during the Phase 0 audit window.",
      "Confirm retention for the Rwanda audience, as some shareholder notices are primarily group-oriented.",
    ],
    image: {
      src: "/images/news-3.jpg",
      alt: "MUA company update",
    },
    category: "Investors",
  },
];

export function getNews(slug: string) {
  return newsArticles.find((item) => item.slug === slug);
}
