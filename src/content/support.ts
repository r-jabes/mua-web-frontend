export const claimsPage = {
  title: "Make a claim",
  lead: "For all claims and related queries, call +250 782 544 020 or email claims@mua.rw. You can also start a claim using the existing MUA claim form.",
  phone: "+250 782 544 020",
  phoneHref: "tel:+250782544020",
  email: "claims@mua.rw",
  emailHref: "mailto:claims@mua.rw",
  formHref: "https://www.mua.rw/make-a-claim",
  steps: [
    {
      title: "Gather what happened",
      body: "Note the date, location and circumstances of the loss or incident, and keep any supporting evidence you already have.",
    },
    {
      title: "Contact claims",
      body: "Call +250 782 544 020 or email claims@mua.rw for guidance, or complete the online claim form on mua.rw.",
    },
    {
      title: "Share policy and contact details",
      body: "The published form asks for title, claim type (Motor / Domestic Package / Personal Accident / Other), name, phone, email and document uploads.",
    },
    {
      title: "Follow up with the claims team",
      body: "MUA’s claims team will follow up promptly after submission. Keep your policy number and correspondence available.",
    },
  ],
  uploadNote:
    "Published upload guidance allows txt/pdf/doc/docx/odt/odp/xls/xlsx/ods files up to 2 MB each.",
  note: "No detailed product-by-product claims checklist was published on the source page. Additional documentation requirements should be confirmed with MUA before being presented as authoritative.",
};

export const customerCare = {
  title: "Customer Care",
  lead: "Feedback and complaints are handled under the principles of MUA’s Customer Charter.",
  feedbackEmail: "info@mua.rw",
  complaintEmail: "customercare@mua.rw",
  phone: "0788 125 024",
  phoneHref: "tel:+250788125024",
  philosophy: "Complaints are handled fairly and objectively.",
  checklist: [
    "Nature of the complaint",
    "Facts and dates",
    "Policy number",
    "Insured name",
    "Complainant name",
    "Address and contact details",
    "Supporting documents",
  ],
  note: "Customer Charter is referenced on the source site; confirm the current downloadable document before linking a PDF.",
};

export const contactPage = {
  title: "Contact and locations",
  lead: "Whether you want to enquire about a product, update your details, make a claim or ask a question, there are many ways to reach our team.",
  hq: {
    name: "Head Office",
    address: [
      "Avenue de la Paix, Grand Pension Plaza",
      "Ground & 8th Floor",
      "KN 4th Avenue, Kigali, Rwanda",
    ],
    phone: "+250 788 125 024",
    phoneHref: "tel:+250788125024",
    email: "info@mua.rw",
    emailHref: "mailto:info@mua.rw",
  },
  locations: [
    {
      name: "Head Office",
      address: "Avenue de la Paix, Grand Pension Plaza, Ground & 8th Floor",
      phone: "+250 788 125 024",
    },
    {
      name: "Kisimenti",
      address: "Kisimenti, KG1 Ave",
      phone: "+250 784 692 672",
    },
    {
      name: "Nyabugogo",
      address: "Nyabugogo, KN 91 st",
      phone: "+250 782 843 187",
    },
    {
      name: "Magerwa",
      address: "Kicukiro-Magerwa, KK 6 Ave",
      phone: "+250 788 887 108",
    },
    {
      name: "Gatuna",
      address: "Gatuna Border",
      phone: "+250 784 928 433",
    },
    {
      name: "Rusumo",
      address: "Rusumo Border",
      phone: "+250 783 016 925",
    },
    {
      name: "Rusizi",
      address: "GV5V+872, Kamembe",
      phone: "Email only — info@mua.rw",
    },
    {
      name: "Muhanga",
      address: "WQ82+9XC, Muhanga",
      phone: "+250 788 459 278",
    },
    {
      name: "Musanze",
      address: "Musanze Town",
      phone: "+250 788 351 415",
    },
    {
      name: "Rubavu",
      address: "Rubavu town",
      phone: "+250 788 266 265",
    },
    {
      name: "Muhima",
      address: "Nyarugenge, Muhima",
      phone: "+250 788 456 441",
    },
  ],
  note: "Confirm which listed points are full branches versus outlets or accredited agents. Muhanga phone was published without a leading + and has been normalised here for dialling.",
};

export const legal = {
  dataProtection: {
    title: "Data protection",
    lead: "Data subject rights presented on mua.rw with reference to the Data Protection Act (Articles 18–26).",
    rights: [
      "Access personal data",
      "Object to processing",
      "Data portability",
      "Rights regarding automated processing",
      "Restriction of processing",
      "Erasure",
      "Rectification",
      "Heir designation",
      "Representation for under-16s",
    ],
    note: "Confirm article citations against the current Rwanda Data Protection Law text used by MUA counsel.",
  },
  cookies: {
    title: "Cookie policy",
    lead: "Session cookies and Google Analytics tracking cookies, with browser-level control guidance as published on mua.rw.",
    body: "The published cookie policy explains that session cookies support site operation and that Google Analytics cookies may be used for traffic measurement. Visitors can control cookies through browser settings.",
  },
  privacy: {
    title: "Privacy notice",
    lead: "A dedicated Rwanda privacy notice was not accessible on mua.rw during Phase 0 (footer Privacy mislinked to Claim / 404).",
    body: "This page is a placeholder until MUA supplies an approved Rwanda privacy notice. Do not treat this as a legal privacy policy.",
  },
};
