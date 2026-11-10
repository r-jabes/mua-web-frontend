/**
 * Verified product copy from Phase 0 content inventory (mua.rw).
 * Do not invent premiums, exclusions, or unconfirmed products.
 */

export type ProductCover = {
  title: string;
  body?: string;
  items?: string[];
};

export type ProductPage = {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  designedFor?: string;
  crumbs: { label: string; href?: string }[];
  image?: { src: string; alt: string };
  covers: ProductCover[];
  benefits?: string[];
  howToObtain: string[];
  notes?: { kind: "verify" | "info"; text: string }[];
  related?: { label: string; href: string }[];
};

const quoteHow = [
  "Request a quote through Get a quote on this site or speak with an MUA branch, agent or franchisee.",
  "Provide vehicle, property or travel details as requested by the underwriting team.",
  "Our team will follow up with available cover options based on the information you share.",
];

export const personalHub = [
  {
    title: "Private Vehicle",
    description:
      "Comprehensive, TPF&T and TPO cover for private cars used for social, domestic and pleasure purposes and own business.",
    href: "/personal/motor/private-vehicle",
  },
  {
    title: "Commercial Vehicle",
    description:
      "Motor cover for vehicles carrying own goods, goods for hire and reward, or passengers.",
    href: "/personal/motor/commercial-vehicle",
  },
  {
    title: "Motorcycle",
    description:
      "Cover against loss or damage to motorcycle and accessories, plus third party liability options.",
    href: "/personal/motor/motorcycle",
  },
  {
    title: "Domestic Package",
    description:
      "Household protection for buildings, contents, specified all-risks items, servants and personal liability.",
    href: "/personal/domestic-package",
  },
  {
    title: "Travel Insurance",
    description:
      "24-hour worldwide travel protection for medical expenses, delays, baggage, passport and related risks.",
    href: "/leisure",
  },
] as const;

export const businessHub = [
  {
    title: "Liability",
    description:
      "Public, product, professional indemnity, work injury, employer’s liability and directors & officers covers.",
    href: "/business/liability",
  },
  {
    title: "Property",
    description:
      "Fire and allied perils, all risks, electronic equipment, money and burglary for businesses.",
    href: "/business/property",
  },
  {
    title: "Property additional covers",
    description:
      "Fidelity guarantee, machinery breakdown, loss of profit and erection all risks.",
    href: "/business/property/additional-covers",
  },
  {
    title: "Commercial Vehicle",
    description: "Business motor cover for commercial vehicle use cases.",
    href: "/business/commercial-vehicle",
  },
  {
    title: "Transport",
    description: "Marine hull, cargo and freight exposures, and aviation cover.",
    href: "/business/transport",
  },
  {
    title: "People, travel & construction",
    description:
      "Group personal accident, business travel and contractor’s all risks.",
    href: "/business/more",
  },
  {
    title: "Special & Financial Risks",
    description: "Bonds and political violence & terrorism property damage cover.",
    href: "/business/more/special-financial-risks",
  },
  {
    title: "Corporate Health",
    description:
      "Published corporate medical expense cover — confirm Rwanda underwriting before relying on this journey.",
    href: "/business/corporate-health-insurance",
  },
] as const;

export const products: Record<string, ProductPage> = {
  "personal-private-vehicle": {
    path: "/personal/motor/private-vehicle",
    eyebrow: "Personal · Motor",
    title: "Private Vehicle Insurance",
    summary:
      "Cover for a private motor car used solely for social, domestic and pleasure purposes and for own business and profession.",
    designedFor:
      "Private car owners who need Comprehensive, Third Party Fire and Theft, or Third Party Only protection.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Personal", href: "/personal" },
      { label: "Private Vehicle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Private vehicle on the road",
    },
    covers: [
      {
        title: "Scopes of cover",
        items: [
          "Comprehensive (COMP)",
          "Third Party Fire and Theft (TPF&T)",
          "Third Party Only (TPO)",
        ],
      },
      {
        title: "Comprehensive includes",
        items: [
          "Accidental damage (including fire)",
          "Theft",
          "Third party property damage (TPPD)",
          "Passenger injury/death (private cars)",
          "Third party personal injury (TPPI)",
          "Access to accident rescue via MyResque",
        ],
      },
      {
        title: "Extensions (nominal additional cost)",
        items: [
          "Riot / strike / civil commotion",
          "Flood / typhoon / hurricane / volcanic eruption / earthquake",
          "Windscreen",
          "Non-standard accessories",
        ],
      },
      {
        title: "TPF&T and TPO",
        body: "TPF&T follows comprehensive features excluding own accident damage and is noted as appropriate for vehicles not used on the road. TPO provides unlimited liability for third party personal injuries/death and is described as the minimum cover required by the Motor Insurance Act, with no cover for the policyholder’s vehicle damage.",
      },
    ],
    benefits: [
      "Choice of COMP, TPF&T or TPO",
      "MyResque accident rescue access on Comprehensive private motor",
      "Optional peril and accessory extensions",
    ],
    howToObtain: quoteHow,
    notes: [
      {
        kind: "verify",
        text: "Statutory references (Motor Insurance Act) should be confirmed for Rwanda legal framing before customer-facing policy marketing is finalised.",
      },
    ],
    related: [
      { label: "Commercial Vehicle", href: "/personal/motor/commercial-vehicle" },
      { label: "Motorcycle", href: "/personal/motor/motorcycle" },
      { label: "Domestic Package", href: "/personal/domestic-package" },
    ],
  },

  "personal-commercial-vehicle": {
    path: "/personal/motor/commercial-vehicle",
    eyebrow: "Personal · Motor",
    title: "Commercial Vehicle Insurance",
    summary:
      "Cover for a commercial motor vehicle carrying own goods, goods for hire and reward, or passengers — with Comprehensive, TPF&T and TPO options.",
    designedFor:
      "Owners and operators of commercial vehicles used for goods or passenger carrying.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Personal", href: "/personal" },
      { label: "Commercial Vehicle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Commercial vehicles on the highway",
    },
    covers: [
      {
        title: "Scopes of cover",
        items: [
          "Comprehensive (COMP)",
          "Third Party Fire and Theft (TPF&T)",
          "Third Party Only (TPO)",
        ],
      },
      {
        title: "What it addresses",
        body: "Commercial nuances of motor cover for vehicles used in business logistics and passenger operations, structured similarly to private motor scopes.",
      },
    ],
    howToObtain: quoteHow,
    notes: [
      {
        kind: "info",
        text: "Published page copy included a stray editorial fragment (“PVT?”). It has been omitted here.",
      },
      {
        kind: "verify",
        text: "TPO wording references the Road Traffic Act on the source page — confirm correct Rwanda statute naming with MUA legal.",
      },
    ],
    related: [
      { label: "Private Vehicle", href: "/personal/motor/private-vehicle" },
      { label: "Business Commercial Vehicle", href: "/business/commercial-vehicle" },
    ],
  },

  "personal-motorcycle": {
    path: "/personal/motor/motorcycle",
    eyebrow: "Personal · Motor",
    title: "Motorcycle Insurance",
    summary:
      "Cover against loss or damage to motorcycle and accessories or spare parts by accident, collision, overturning, fire or theft, plus third party liability options.",
    designedFor: "Motorcycle owners seeking COMP, TPF&T or TPO protection.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Personal", href: "/personal" },
      { label: "Motorcycle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Motorcycle insurance cover",
    },
    covers: [
      {
        title: "Scopes of cover",
        items: ["Comprehensive", "Third Party Fire and Theft", "Third Party Only"],
      },
      {
        title: "Perils described",
        items: [
          "Accident, collision and overturning",
          "Fire and theft",
          "Third party liability",
        ],
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Private Vehicle", href: "/personal/motor/private-vehicle" },
      { label: "Business Motorcycle", href: "/business/motorcycle" },
    ],
  },

  "domestic-package": {
    path: "/personal/domestic-package",
    eyebrow: "Personal · Home",
    title: "Domestic Package",
    summary:
      "Financial protection against loss of or damage to almost everything you have worked hard for in your household.",
    designedFor:
      "Home owners and occupiers seeking combined buildings, contents and liability protection.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Personal", href: "/personal" },
      { label: "Domestic Package" },
    ],
    image: {
      src: "/images/hero-alt.jpg",
      alt: "Household and home protection",
    },
    covers: [
      {
        title: "Core sections",
        items: [
          "Buildings",
          "Contents (furniture, clothing, kitchen equipment, and similar)",
          "All Risks for specified items such as cameras, phones, watches, music systems and jewellery",
          "Domestic servants (indoor and outdoor)",
          "Personal liability as owner or occupier to third parties",
        ],
      },
      {
        title: "Examples of protected risks",
        items: [
          "Fire and theft",
          "Accidental damage by falling trees, earthquake and other natural perils",
          "Flood from water tanks or pipes",
          "Damage by road vehicles",
          "Alternative accommodation when the home is made uninhabitable by an insured risk",
        ],
      },
    ],
    howToObtain: quoteHow,
    notes: [
      {
        kind: "verify",
        text: "Domestic servants wording references Workmen’s Compensation Act / employer common-law liability — confirm correct Rwanda legal framing before final publication.",
      },
    ],
    related: [
      { label: "Travel Insurance", href: "/leisure" },
      { label: "Private Vehicle", href: "/personal/motor/private-vehicle" },
    ],
  },

  leisure: {
    path: "/leisure",
    eyebrow: "Personal · Travel",
    title: "Travel Insurance",
    summary:
      "Cover taken by a traveller anywhere in the world, providing 24-hour protection for the unexpected.",
    designedFor: "Travellers needing medical, delay, baggage and related travel protections.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Personal", href: "/personal" },
      { label: "Travel" },
    ],
    image: {
      src: "/images/news-2.jpg",
      alt: "Travel and journey protection",
    },
    covers: [
      {
        title: "24-hour worldwide cover includes",
        items: [
          "Medical expenses and assistance",
          "Travel delay or flight cancellation",
          "Hospital allowance",
          "Personal accident",
          "Loss of passport",
          "Total loss of checked-in baggage (international airline)",
          "Loss of money",
          "Personal civil liability",
          "Hijacking",
        ],
      },
    ],
    howToObtain: quoteHow,
    notes: [
      {
        kind: "info",
        text: "Source page SEO/title referenced golf and watercraft, but no golf/watercraft product body was published. Those claims are omitted until MUA confirms them.",
      },
    ],
    related: [
      { label: "Domestic Package", href: "/personal/domestic-package" },
      { label: "Business Travel", href: "/business/more" },
    ],
  },

  "business-liability": {
    path: "/business/liability",
    eyebrow: "Business · Liability",
    title: "Liability Insurance",
    summary:
      "Liability covers for enterprises facing third-party injury, product risk, professional negligence, workplace injury and directors’ exposure.",
    designedFor:
      "Businesses with public premises, product supply chains, professional services, employees or board-level exposure.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Liability" },
    ],
    image: {
      src: "/images/hero-alt.jpg",
      alt: "Business liability protection",
    },
    covers: [
      {
        title: "Public Liability",
        body: "Claims by the public or third parties for personal injuries, death, and loss or damage to third party property connected with business activities. Recommended where the public is on premises, including home-based businesses.",
      },
      {
        title: "Product Liability",
        body: "Indemnity for legal liability for accidental death or bodily injury and accidental loss or damage to material property caused by goods or products after they leave the insured’s possession or control. Territorial limits: Rwanda only.",
      },
      {
        title: "Professional Indemnity",
        body: "Protection against claims of professional negligence or breach of professional duty; tailor-made limits and excess; can be arranged for one-off project duration.",
      },
      {
        title: "Work injury / employer covers",
        body: "Published workmen compensation content describes benefits such as death, permanent disability, temporary total/partial disablement, medical expenses and funeral expenses. Employer’s Liability covers suits beyond those settlements, including defence and legal expenses.",
      },
      {
        title: "Directors and Officers Liability",
        body: "Company cover for loss or damage arising from wrongful acts of directors, officers or employees, subject to exclusions.",
      },
    ],
    howToObtain: quoteHow,
    notes: [
      {
        kind: "verify",
        text: "Work injury wording on the live site uses Work Injury Benefit Act (WIBA) language typical of Kenya. Confirm the correct Rwanda statute and product naming with MUA legal before final copy lock.",
      },
    ],
    related: [
      { label: "Property", href: "/business/property" },
      { label: "Special & Financial Risks", href: "/business/more/special-financial-risks" },
    ],
  },

  "business-property": {
    path: "/business/property",
    eyebrow: "Business · Property",
    title: "Property Insurance",
    summary:
      "Property covers for buildings, stock, plant, valuables, electronic equipment, money and burglary exposures.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Property" },
    ],
    image: {
      src: "/images/hero-alt.jpg",
      alt: "Business property protection",
    },
    covers: [
      {
        title: "Fire and Allied Perils",
        body: "Buildings/outbuildings, stock, plant/machinery, fixtures and fittings against fire and lightning; domestic gas/boiler explosion; earthquake, landslip, storm, tempest, tsunami and floods; impact; aircraft; riots, strikes and malicious damage; water from tanks/pipes; plus bush fires, explosions, aerial devices, impact by vehicles/animals and subterranean fires.",
      },
      {
        title: "All Risks",
        body: "Accidental loss or damage to insured items except exclusions; typically valuables, electronics, jewellery, photographic/video and laboratory equipment.",
      },
      {
        title: "Electronic Equipment",
        body: "Physical loss or damage to electronic equipment and data media; increased cost of working; system software included subject to conditions.",
      },
      {
        title: "Money",
        body: "Estimated annual cash transfers against accidental loss, theft or housebreaking (coins, notes, cheques, postal orders, postage stamps) with transit and premises limits and defined custody scenarios.",
      },
      {
        title: "Burglary",
        body: "Loss or damage due to theft or burglary via violent or forcible entry or exit; first-loss basis available.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      {
        label: "Additional covers",
        href: "/business/property/additional-covers",
      },
      { label: "Liability", href: "/business/liability" },
    ],
  },

  "business-property-additional": {
    path: "/business/property/additional-covers",
    eyebrow: "Business · Property",
    title: "Property — Additional Covers",
    summary:
      "Extensions beyond core property insurance for fidelity, machinery and erection risks.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Property", href: "/business/property" },
      { label: "Additional covers" },
    ],
    covers: [
      {
        title: "Fidelity Guarantee",
        body: "Loss of money or stock from forgery, embezzlement, larceny or fraudulent conversion by employees; optional defence costs, judgements and settlements.",
      },
      {
        title: "Machinery Breakdown",
        body: "Electrical or mechanical breakdown of machinery, distinct from fire or burglary covers.",
      },
      {
        title: "Machinery breakdown loss of profit",
        body: "Income interruption and expenses incurred to reduce loss following machinery breakdown.",
      },
      {
        title: "Erection All Risks",
        body: "Erection, testing and commissioning of machinery, plant and equipment; accidental loss or damage including fire, natural perils and theft; third party injury/property; coverage from commencement/unload to handover/expiry, including testing, commissioning and maintenance periods.",
      },
    ],
    howToObtain: quoteHow,
    related: [{ label: "Property", href: "/business/property" }],
  },

  "business-commercial-vehicle": {
    path: "/business/commercial-vehicle",
    eyebrow: "Business · Motor",
    title: "Business Commercial Vehicle",
    summary:
      "Commercial motor cover for business vehicle use, aligned with the commercial motor family published by MUA Rwanda.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Commercial Vehicle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Business commercial motor cover",
    },
    covers: [
      {
        title: "Cover family",
        body: "Business commercial vehicle insurance mirrors the commercial motor scopes published on the personal commercial vehicle journey (COMP / TPF&T / TPO), applied in a business context.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Business Private Vehicle", href: "/business/private-vehicle" },
      { label: "Business Motorcycle", href: "/business/motorcycle" },
    ],
  },

  "business-private-vehicle": {
    path: "/business/private-vehicle",
    eyebrow: "Business · Motor",
    title: "Business Private Vehicle",
    summary:
      "Private vehicle cover offered within the business motor family published by MUA Rwanda.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Private Vehicle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Business private vehicle cover",
    },
    covers: [
      {
        title: "Cover family",
        body: "Content mirrors the private motor family structure (COMP / TPF&T / TPO) for business-related private vehicle needs.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Personal Private Vehicle", href: "/personal/motor/private-vehicle" },
      { label: "Commercial Vehicle", href: "/business/commercial-vehicle" },
    ],
  },

  "business-motorcycle": {
    path: "/business/motorcycle",
    eyebrow: "Business · Motor",
    title: "Business Motorcycle",
    summary:
      "Motorcycle cover within the business motor family published by MUA Rwanda.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Motorcycle" },
    ],
    image: {
      src: "/images/hero-motor.jpg",
      alt: "Business motorcycle cover",
    },
    covers: [
      {
        title: "Cover family",
        body: "Business motorcycle insurance follows the motorcycle COMP / TPF&T / TPO structure published on the personal motorcycle page.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Personal Motorcycle", href: "/personal/motor/motorcycle" },
      { label: "Commercial Vehicle", href: "/business/commercial-vehicle" },
    ],
  },

  "business-transport": {
    path: "/business/transport",
    eyebrow: "Business · Transport",
    title: "Transport Insurance",
    summary:
      "Marine and aviation covers for hull, cargo, freight and related liabilities.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Transport" },
    ],
    covers: [
      {
        title: "Marine (Hull)",
        body: "Ship body, machinery and stores; certain liabilities; cargo and freight; perils such as fire, collision and stranding; additional perils such as latent machinery defect and loading/discharging accidents; construction risks from keel laying to delivery; third party property and injury.",
      },
      {
        title: "Aviation",
        body: "Accidental loss, damage or disappearance of aircraft; cargo and freight; liability for property damage and passenger injury or baggage arising from aircraft accident.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Property", href: "/business/property" },
      { label: "Special & Financial Risks", href: "/business/more/special-financial-risks" },
    ],
  },

  "business-more": {
    path: "/business/more",
    eyebrow: "Business · More",
    title: "People, Travel & Construction",
    summary:
      "Group personal accident, business travel and contractor’s all risks covers published under Business More.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "More" },
    ],
    covers: [
      {
        title: "Group Personal Accident",
        body: "Single policy for executives or employees with optional death, permanent disability, temporary total disability and medical expenses (accident). 24-hour worldwide cover available.",
      },
      {
        title: "Business Travel",
        items: [
          "Emergency medical (including outpatient)",
          "Death / permanent disability from accident abroad",
          "Medical transport and repatriation",
          "Mortal remains repatriation and coffin expenses",
          "Emergency return; cancellation / curtailment",
          "Checked-in baggage loss; travel / luggage delay",
          "Travel documents loss; concierge and luggage assistance",
          "Personal / public liability",
        ],
      },
      {
        title: "Contractor’s All Risks",
        body: "Civil engineering works versus fire, lightning, flood, storm, cyclone and accidental damage; third party injury, death or property; testing and maintenance periods; sum insured equals project value including materials, wages, freights, customs duty and owner-supplied items.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      {
        label: "Special & Financial Risks",
        href: "/business/more/special-financial-risks",
      },
    ],
  },

  "business-special": {
    path: "/business/more/special-financial-risks",
    eyebrow: "Business · Special risks",
    title: "Special & Financial Risks",
    summary:
      "Bonds and political violence & terrorism property damage cover for institutional and commercial clients.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Special & Financial Risks" },
    ],
    covers: [
      {
        title: "Bonds",
        body: "Customs, bid, tender, advance payment, performance, immigration and similar bonds guaranteeing financial obligations to a principal.",
      },
      {
        title: "Political Violence and Terrorism — Property Damage",
        body: "Indemnifies physical loss or damage to buildings and contents from terrorism; sabotage; riot, strikes and civil commotion; malicious damage; insurrection, revolution or rebellion; mutiny and/or coup d’état, up to the policy limit per occurrence.",
      },
    ],
    howToObtain: quoteHow,
    related: [
      { label: "Liability", href: "/business/liability" },
      { label: "Property", href: "/business/property" },
    ],
  },

  "corporate-health": {
    path: "/business/corporate-health-insurance",
    eyebrow: "Business · Health",
    title: "Corporate Health Insurance",
    summary:
      "Published cover protecting employees and directors of corporate organisations and declared nuclear family dependants against valid medical expenses from illness and accident during employment.",
    designedFor:
      "Commercial enterprises, government, education, religious institutions and NGOs seeking inpatient medical cover with optional riders.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Business", href: "/business" },
      { label: "Corporate Health" },
    ],
    covers: [
      {
        title: "Main cover and riders",
        items: [
          "Main: Inpatient",
          "Optional riders: Outpatient, Maternity, Dental, Optical, Excess of loss (annual limits per family/person)",
          "Credit access via MUA panel of medical providers",
          "Overseas treatment subject to policy terms",
        ],
      },
      {
        title: "Quotation requirements published",
        items: [
          "Organisation name",
          "Desired limits by staff category",
          "Employee population",
          "Quotation within 24 hours after interest (as published)",
        ],
      },
    ],
    howToObtain: [
      "Contact MUA using the contacts MUA confirms for Rwanda corporate health quoting.",
      "Until confirmation, treat Kenya underwriting contacts published on the source page as unverified for Rwanda customers.",
    ],
    notes: [
      {
        kind: "verify",
        text: "GCR (Feb 2025) states MUA Insurance Rwanda underwrites general insurance except health. Source page also publishes Kenya medical-underwriting contacts (+254 / @mua.co.ke). Confirm whether Rwanda underwrites medical/health today and which contacts customers should use.",
      },
    ],
    related: [{ label: "Business hub", href: "/business" }],
  },
};
