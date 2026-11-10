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
      "The company participated in commemorative activity with colleagues and community partners.",
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
      "MUA Insurance Rwanda welcomed the new Group CEO and bid farewell to the outgoing Group CEO.",
      "The occasion marked continuity and shared ambition across the MUA group.",
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
    summary: "A message shared with MUA shareholders through the company newsroom.",
    body: [
      "MUA shared an update with shareholders through its newsroom channels.",
      "For investor materials, visit the Investors page for group reports and related resources.",
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
