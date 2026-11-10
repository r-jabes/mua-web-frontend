/**
 * Homepage content sourced from Phase 0 inventory (mua.rw).
 * Do not invent products, stats, or claims.
 */

export const site = {
  name: "MUA Insurance Rwanda",
  tagline: "Insurance that moves you forward",
  url: "https://www.mua.rw",
} as const;

export const nav = {
  primary: [
    {
      label: "Personal",
      href: "/personal",
      children: [
        { label: "Private Vehicle", href: "/personal/motor/private-vehicle" },
        { label: "Commercial Vehicle", href: "/personal/motor/commercial-vehicle" },
        { label: "Motorcycle", href: "/personal/motor/motorcycle" },
        { label: "Domestic Package", href: "/personal/domestic-package" },
        { label: "Travel Insurance", href: "/leisure" },
      ],
    },
    {
      label: "Business",
      href: "/business",
      children: [
        { label: "Liability", href: "/business/liability" },
        { label: "Property", href: "/business/property" },
        { label: "Commercial Vehicle", href: "/business/commercial-vehicle" },
        { label: "Transport", href: "/business/transport" },
        {
          label: "Special & Financial Risks",
          href: "/business/more/special-financial-risks",
        },
      ],
    },
    { label: "Claims", href: "/make-a-claim" },
    {
      label: "Support",
      href: "/#support",
      children: [
        { label: "Contact us", href: "/contact-us" },
        { label: "Customer Care", href: "/customer-care" },
        { label: "Make a claim", href: "/make-a-claim" },
      ],
    },
    {
      label: "Company",
      href: "/about-us",
      children: [
        { label: "About us", href: "/about-us" },
        { label: "Values & purpose", href: "/our-vision-and-purpose" },
        { label: "Leadership", href: "/leadership" },
        { label: "MUA in Africa", href: "/mua-in-africa" },
        { label: "News", href: "/news/blog" },
        { label: "Agents & partners", href: "/agents" },
      ],
    },
    { label: "Careers", href: "/career" },
  ],
  utility: {
    quote: { label: "Get a quote", href: "/#quote" },
    contact: { label: "Contact", href: "/contact-us" },
  },
} as const;

export const hero = {
  headline: "Insurance that moves you forward",
  support:
    "Protect what matters with trusted short-term insurance for individuals and businesses across Rwanda.",
  primaryCta: { label: "Get a quote", href: "/#quote" },
  secondaryCta: { label: "Explore personal cover", href: "/#personal" },
  image: {
    src: "/images/hero-motor.jpg",
    alt: "Motor insurance on the road — MUA Insurance Rwanda",
  },
} as const;

export const tasks = [
  {
    title: "Get a quote",
    help: "Tell us what you need to protect and our team will follow up.",
    href: "/#quote",
  },
  {
    title: "Make a claim",
    help: "Start a claim online or speak to our claims team.",
    href: "/make-a-claim",
  },
  {
    title: "Find a branch",
    help: "Locate MUA offices and points of presence across Rwanda.",
    href: "/contact-us",
  },
] as const;

export const personalProducts = [
  {
    id: "motor",
    title: "Motor insurance",
    summary:
      "Cover for a private motor car used for social, domestic and pleasure purposes and for own business and profession — plus commercial vehicles and motorcycles.",
    points: [
      "Comprehensive (COMP)",
      "Third Party Fire and Theft (TPF&T)",
      "Third Party Only (TPO)",
      "Access to accident rescue service through our partnership with MyResque on Comprehensive private motor cover",
    ],
    links: [
      { label: "Private Vehicle", href: "/personal/motor/private-vehicle" },
      { label: "Commercial Vehicle", href: "/personal/motor/commercial-vehicle" },
      { label: "Motorcycle", href: "/personal/motor/motorcycle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Vehicle on the road representing motor insurance",
    },
  },
  {
    id: "domestic",
    title: "Domestic Package",
    summary:
      "Financial protection against loss of or damage to almost everything you have worked hard for in your household.",
    points: [
      "Buildings and contents",
      "All Risks for specified items such as cameras, phones, watches, music systems and jewellery",
      "Domestic servants (indoor and outdoor)",
      "Personal liability as owner or occupier",
      "Alternative accommodation when your home is made uninhabitable by an insured risk",
    ],
    links: [{ label: "Domestic Package", href: "/personal/domestic-package" }],
    image: {
      src: "/images/hero-alt.jpg",
      alt: "Home and household protection",
    },
  },
  {
    id: "travel",
    title: "Travel insurance",
    summary:
      "Cover taken by a traveller anywhere in the world, providing 24-hour protection for the unexpected.",
    points: [
      "Medical expenses and assistance",
      "Travel delay or flight cancellation",
      "Hospital allowance and personal accident",
      "Loss of passport, money and checked-in baggage",
      "Personal civil liability and hijacking",
    ],
    links: [{ label: "Travel Insurance", href: "/leisure" }],
    image: {
      src: "/images/news-2.jpg",
      alt: "Travel and journey protection",
    },
  },
] as const;

export const businessFamilies = [
  {
    title: "Liability",
    description:
      "Public liability, product liability, professional indemnity, work injury covers, employer’s liability, and directors and officers liability.",
    href: "/business/liability",
  },
  {
    title: "Property",
    description:
      "Fire and allied perils, all risks, electronic equipment, money, burglary and additional covers for machinery and erection risks.",
    href: "/business/property",
  },
  {
    title: "Motor",
    description:
      "Commercial motor vehicles carrying own goods, goods for hire and reward or passengers — plus private vehicle and motorcycle options for business.",
    href: "/business/commercial-vehicle",
  },
  {
    title: "Transport",
    description:
      "Marine hull, cargo and freight exposures, and aviation cover for accidental loss of or damage to aircraft.",
    href: "/business/transport",
  },
  {
    title: "Special & Financial Risks",
    description:
      "Bonds including bid, performance and advance payment bonds, and political violence and terrorism property damage cover.",
    href: "/business/more/special-financial-risks",
  },
] as const;

export const whyMua = {
  overview:
    "Rwanda, previously known as Phoenix of Rwanda Assurance Company Ltd, has been offering short-term insurance to the Rwandan market since 2006, with the insurer well established in the East Africa region since 1912. MUA has significantly developed its insurance activities in Rwanda, Kenya, Tanzania and Uganda since 2014, with the support of its parent company in Mauritius. MUA Rwanda is strongly focused on digital innovation and increasing access to insurance solutions in this market.",
  strengths: [
    "Market relevant experience",
    "Financial strength",
    "Digital innovation",
  ],
  timeline: [
    {
      year: "1912",
      text: "Phoenix Assurance represented in East Africa — the start of a long regional insurance heritage.",
    },
    {
      year: "2006",
      text: "Phoenix of Rwanda Assurance Company Ltd was licensed and began operating.",
    },
    {
      year: "2014",
      text: "Shares sold to Mauritius Union (now MUA), strengthening regional capability.",
    },
    {
      year: "2018",
      text: "Subsidiaries came together under a single regional brand — MUA.",
    },
  ],
} as const;

export const claims = {
  title: "When something happens, we are here to help",
  body: "For all claims and related queries, you can call us or email our claims team. You can also complete the claim form and our team will follow up promptly.",
  phone: "+250 782 544 020",
  phoneHref: "tel:+250782544020",
  email: "claims@mua.rw",
  emailHref: "mailto:claims@mua.rw",
  primaryCta: { label: "Make a claim", href: "/make-a-claim" },
  careNote:
    "Feedback and complaints can be directed to Customer Care at customercare@mua.rw. Our Customer Care service is guided by the principles of our Customer Charter.",
  careHref: "/customer-care",
  rescueNote:
    "Private motor Comprehensive cover includes access to accident rescue service through our partnership with MyResque.",
} as const;

export const agentsPartners = {
  title: "Agents, franchisees and distribution partners",
  body: "MUA works with agents and franchisees across Rwanda to bring insurance closer to customers. Our Agents and Franchisee Loyalty Scheme programme recognises partners who help clients access the right cover.",
  points: [
    "Grow with a regional insurance brand present across East Africa and the Indian Ocean",
    "Support customers through quoting, policy service and claims guidance",
    "Stay connected through MUA’s partner programmes and local presence",
  ],
  primaryCta: { label: "Contact our team", href: "/contact-us" },
  secondaryCta: {
    label: "Agents & partners",
    href: "/agents",
  },
} as const;

export const news = [
  {
    title:
      "In commemoration of the 1994 Genocide against the Tutsis, MUA Insurance Rwanda Ltd visited Ntarama and Nyanza",
    href: "/news/commemoration-1994-genocide-against-tutsis-mua-insurance-rwanda-ltd-visited-ntarama-and-nyanza",
    image: { src: "/images/news-3.jpg", alt: "MUA Rwanda community commemoration visit" },
  },
  {
    title: "MUA agents and Franchisee loyalty scheme program",
    href: "/news/mua-agents-and-franchisee-loyalty-scheme-program",
    image: { src: "/images/news-1.jpg", alt: "MUA agents and franchisee programme" },
  },
  {
    title:
      "MUA Insurance Rwanda Ltd was happy to be part of the Indian Association of Rwanda (INAR) community celebration",
    href: "/news/mua-insurance-rwanda-ltd-was-happy-be-part-indian-association-rwanda-inar-community-and",
    image: { src: "/images/news-2.jpg", alt: "MUA Rwanda at INAR community event" },
  },
] as const;

export const hq = {
  name: "Head Office",
  addressLines: [
    "Avenue de la Paix, Grand Pension Plaza",
    "Ground & 8th Floor",
    "KN 4th Avenue, Kigali, Rwanda",
  ],
  phone: "+250 788 125 024",
  phoneHref: "tel:+250788125024",
  email: "info@mua.rw",
  emailHref: "mailto:info@mua.rw",
  otherLocationsNote:
    "Additional locations include Kisimenti, Nyabugogo, Magerwa, Gatuna, Rusumo, Rusizi, Muhanga, Musanze, Rubavu and Muhima.",
} as const;

export const quoteOptions = [
  { id: "motor", label: "Motor", href: "/personal/motor/private-vehicle" },
  { id: "domestic", label: "Domestic Package", href: "/personal/domestic-package" },
  { id: "travel", label: "Travel", href: "/leisure" },
  { id: "business", label: "Business", href: "/business" },
] as const;

export const footer = {
  support: [
    { label: "Contact us", href: "/contact-us" },
    { label: "Make a claim", href: "/make-a-claim" },
    { label: "Customer Care", href: "/customer-care" },
  ],
  company: [
    { label: "About us", href: "/about-us" },
    { label: "MUA in Africa", href: "/mua-in-africa" },
    { label: "Investors", href: "/investors" },
    { label: "Careers", href: "/career" },
    { label: "News", href: "/news/blog" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Data Protection", href: "/data-protection" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/muarwanda/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mua-mauritius-east-africa/",
    },
    { label: "X", href: "https://mobile.twitter.com/MUARwanda" },
  ],
} as const;
