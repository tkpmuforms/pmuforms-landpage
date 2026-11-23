/**
 * Free, printable form templates for PMU artists (SEO pages under /templates).
 *
 * Wording rules: general guidance only. No claims that a template is
 * approved, certified or compliant with any law or agency; artists are told
 * to check their own state's rules and have forms reviewed.
 */

export type TemplateBlock =
  /** blank lines to fill in, e.g. "Full name" */
  | { kind: "fields"; items: string[] }
  /** questions answered Yes / No, with room for details */
  | { kind: "yesno"; items: string[] }
  /** statements the client initials one by one */
  | { kind: "initials"; items: string[] }
  /** tick boxes, e.g. a list of conditions */
  | { kind: "checklist"; items: string[] }
  /** plain bullet points, e.g. aftercare steps */
  | { kind: "list"; items: string[] }
  /** signature and date lines */
  | { kind: "signatures"; items: string[] };

export interface TemplateSection {
  heading: string;
  note?: string;
  blocks: TemplateBlock[];
}

export interface FormTemplate {
  slug: string;
  /** shown on the page and the hub card */
  title: string;
  /** <title> */
  seoTitle: string;
  description: string;
  keywords: string;
  /** one-line summary for the hub card */
  summary: string;
  intro: string[];
  sections: TemplateSection[];
  /** what PMU Forms does with this kind of form, for the call to action */
  inApp: string;
}

export const TEMPLATES_PUBLISHED = "2026-11-22";

export const TEMPLATE_DISCLAIMER =
  "This template is general information, not legal or medical advice. Rules for permanent makeup differ by state and county, so check your local requirements and have your forms reviewed by a qualified professional before you use them with clients.";

export const FORM_TEMPLATES: FormTemplate[] = [
  {
    slug: "microblading-consent-form",
    title: "Microblading Consent Form Template",
    seoTitle: "Free Microblading Consent Form Template (Printable) | PMU Forms",
    description:
      "A free, printable microblading consent form template: client details, health questions, risks and acknowledgements to initial, photo release and signatures. Use it on paper or send it digitally with PMU Forms.",
    keywords:
      "microblading consent form, microblading consent form template, microblading waiver, eyebrow microblading release form, PMU consent form template",
    summary:
      "Health questions, risks to initial, photo release and signatures for brow procedures.",
    intro: [
      "A microblading consent form records that your client understood the procedure, told you about their health, and agreed to go ahead. It is also where you spot clients who should wait or see their doctor first.",
      "Use the sections below as a starting point. Add anything specific to your techniques (powder or combo brows, nano brows) and your studio's policies.",
    ],
    sections: [
      {
        heading: "Client information",
        blocks: [
          {
            kind: "fields",
            items: [
              "Full name",
              "Date of birth",
              "Phone",
              "Email",
              "Emergency contact (name and phone)",
              "Appointment date",
              "Service (microblading, powder brows, combo brows, touch-up)",
            ],
          },
        ],
      },
      {
        heading: "Health questions",
        note: "Ask the client to answer every question and add details for any “Yes”.",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Are you pregnant, trying to become pregnant, or breastfeeding?",
              "Do you have diabetes, a heart condition, or a bleeding or clotting disorder?",
              "Do you take blood thinners, aspirin, fish oil, or other medication or supplements that affect bleeding?",
              "Have you taken isotretinoin (e.g. Accutane) in the past 12 months?",
              "Do you use retinol, retinoids, acids or other exfoliating products on or near your brows?",
              "Have you had Botox, fillers or a facial treatment near your brows in the past 4 weeks?",
              "Do you have a history of keloids or raised scarring?",
              "Do you have a skin condition in the brow area (eczema, psoriasis, rosacea, active acne, moles or irritation)?",
              "Are you receiving chemotherapy or radiation, or do you have an autoimmune condition?",
              "Do you have allergies (numbing creams, lidocaine, latex, pigments, metals, adhesives)?",
              "Have you had permanent makeup on your brows before? If yes, when and where?",
              "Do you currently have a sunburn or tan on your face?",
            ],
          },
          {
            kind: "fields",
            items: ["Current medications and supplements", "Anything else your artist should know"],
          },
        ],
      },
      {
        heading: "About the procedure",
        note: "The client initials each statement.",
        blocks: [
          {
            kind: "initials",
            items: [
              "I understand microblading places pigment in the upper layers of the skin with a hand tool. It is semi-permanent and fades over time; how it fades depends on my skin, age, sun exposure and aftercare.",
              "I understand a touch-up appointment is usually recommended to perfect the shape and color, and that both brows may not heal exactly the same.",
              "I understand the color looks darker right after the procedure, and that healed color can look different from the color I chose and may change over time.",
              "I understand possible side effects include redness, swelling, tenderness, itching, flaking, uneven healing, pigment spreading or blurring, infection, allergic reaction and, rarely, scarring.",
              "I have answered the health questions truthfully and will tell my artist about any changes before my appointment.",
              "I approved the brow shape and color before the procedure started.",
              "I received aftercare instructions and understand that following them affects my results.",
              "I understand that correcting or removing permanent makeup can be difficult and may need additional treatments at extra cost.",
            ],
          },
        ],
      },
      {
        heading: "Photo release (optional)",
        blocks: [
          {
            kind: "checklist",
            items: [
              "I agree to before and after photos of my brows being used in the artist's portfolio and social media, without my name.",
              "I do not agree to my photos being shared.",
            ],
          },
        ],
      },
      {
        heading: "Signatures",
        blocks: [
          {
            kind: "signatures",
            items: ["Client signature", "Date", "Artist signature", "Date"],
          },
        ],
      },
    ],
    inApp:
      "Send this form before the appointment. Clients answer the health questions and sign on their phone, you're notified when it comes in, and the signed form is kept with the client's appointment.",
  },
  {
    slug: "pmu-aftercare-instructions",
    title: "Permanent Makeup Aftercare Instructions Template",
    seoTitle: "Free PMU Aftercare Instructions Template for Brows & Lips | PMU Forms",
    description:
      "A free, printable permanent makeup aftercare template for brows and lips: the first 24 hours, the first 10 days, what's normal while healing, when to get in touch, and long-term care.",
    keywords:
      "PMU aftercare instructions, permanent makeup aftercare, microblading aftercare template, lip blush aftercare, brow aftercare sheet",
    summary:
      "Day-by-day healing steps for brows and lips, what's normal, and when to call you.",
    intro: [
      "Good aftercare is half of a good result. Clients who know what to expect pick less, panic less about the “faded” stage, and come back for their touch-up.",
      "Adjust the steps to your own method: some artists use a dry heal, others a thin layer of ointment. Your instructions should always match what you do in the studio.",
    ],
    sections: [
      {
        heading: "The first 24 hours",
        blocks: [
          {
            kind: "list",
            items: [
              "Wash your hands before touching the area.",
              "Gently blot any fluid with a clean, damp cotton pad as your artist showed you. Don't rub.",
              "Expect some tightness, swelling and color that looks darker or bolder than it will heal.",
              "Avoid alcohol and heavy exercise today; they can increase swelling.",
            ],
          },
        ],
      },
      {
        heading: "Days 1 to 10",
        blocks: [
          {
            kind: "list",
            items: [
              "Keep the area clean and follow your artist's washing instructions.",
              "Apply aftercare ointment only if your artist told you to, and only a very thin layer.",
              "Don't pick, peel or scratch. Let flakes fall off on their own.",
              "No makeup, skincare, serums or sunscreen on the treated area until it has healed.",
              "Avoid sweating heavily, saunas, steam rooms, hot yoga, swimming and long hot showers on the area.",
              "Stay out of direct sun and tanning beds; wear a hat outside.",
              "Sleep on your back if you can, on a clean pillowcase.",
              "Skip facials, peels, retinol and exfoliating products near the area.",
            ],
          },
        ],
      },
      {
        heading: "Extra steps for lips",
        blocks: [
          {
            kind: "list",
            items: [
              "Drink through a straw and avoid very hot, spicy or salty food for the first few days.",
              "Keep lips moist with the balm your artist recommends.",
              "If you get cold sores and your doctor prescribed antiviral medication, take it as directed.",
            ],
          },
        ],
      },
      {
        heading: "What's normal while healing",
        blocks: [
          {
            kind: "list",
            items: [
              "Color looks darker or sharper for the first week.",
              "Flaking or light scabbing around days 5 to 10.",
              "After flaking, color can look light or patchy. It usually comes back over the next few weeks as the skin settles.",
              "Final healed results show at around 4 to 6 weeks.",
            ],
          },
        ],
      },
      {
        heading: "When to contact your artist or a doctor",
        blocks: [
          {
            kind: "list",
            items: [
              "Redness, heat or swelling that gets worse instead of better after the first two days.",
              "Pus, a bad smell, fever or feeling unwell.",
              "Itching, rash or blistering that could be an allergic reaction.",
              "Anything that worries you. Your artist would rather hear from you early.",
            ],
          },
        ],
      },
      {
        heading: "Long-term care",
        blocks: [
          {
            kind: "list",
            items: [
              "Once healed, use sunscreen on the area; sun fades pigment.",
              "Retinol, acids, peels and laser treatments near the area can fade or change color, so tell those providers about your permanent makeup.",
              "Tell your doctor or MRI technician that you have permanent makeup before a scan.",
              "Book your touch-up, usually 6 to 8 weeks after your first appointment.",
            ],
          },
        ],
      },
    ],
    inApp:
      "Email these instructions when you mark the appointment complete, and schedule a healing check-in for a few weeks later, so clients have them when they need them instead of on a lost sheet of paper.",
  },
  {
    slug: "pmu-client-intake-form",
    title: "PMU Client Intake Form Template",
    seoTitle: "Free PMU Client Intake Form Template (Printable) | PMU Forms",
    description:
      "A free, printable client intake form for permanent makeup artists: contact details, goals, previous PMU, medical history checklist, medications, allergies, lifestyle and communication preferences.",
    keywords:
      "PMU client intake form, permanent makeup intake form, beauty client intake template, microblading client questionnaire, PMU health questionnaire",
    summary:
      "Contact details, goals, medical history checklist and preferences for new clients.",
    intro: [
      "An intake form gathers everything you need before a client's first appointment: how to reach them, what they want, and anything in their health history that affects the procedure.",
      "Send it ahead of the consultation so you have time to read it, ask follow-up questions, or suggest they check with their doctor first.",
    ],
    sections: [
      {
        heading: "Contact details",
        blocks: [
          {
            kind: "fields",
            items: [
              "Full name",
              "Date of birth",
              "Phone",
              "Email",
              "Mailing address",
              "Emergency contact (name and phone)",
              "How did you hear about us?",
            ],
          },
        ],
      },
      {
        heading: "Your goals",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Brows (microblading, powder or combo)",
              "Lips (lip blush or liner)",
              "Eyeliner",
              "Touch-up or color refresh",
              "Correction of previous work",
              "Other",
            ],
          },
          {
            kind: "fields",
            items: [
              "What would you like to change or achieve?",
              "Previous permanent makeup (what, when and where)",
            ],
          },
        ],
      },
      {
        heading: "Medical history",
        note: "Tick anything that applies to you now or in the past.",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Pregnant or breastfeeding",
              "Diabetes",
              "Heart condition or pacemaker",
              "High blood pressure",
              "Bleeding or clotting disorder",
              "Autoimmune condition",
              "Cancer treatment (current or recent)",
              "Hepatitis, HIV or other bloodborne condition",
              "Epilepsy or seizures",
              "Keloids or raised scarring",
              "Eczema, psoriasis or rosacea",
              "Cold sores (for lip procedures)",
              "Recent Botox, fillers or cosmetic surgery",
              "Isotretinoin (e.g. Accutane) in the past 12 months",
            ],
          },
          {
            kind: "fields",
            items: [
              "Medications and supplements you take",
              "Allergies (medications, numbing creams, latex, metals, pigments)",
            ],
          },
        ],
      },
      {
        heading: "Skin and lifestyle",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Do you use retinol, acids or other exfoliating skincare on your face?",
              "Do you spend a lot of time in the sun or use tanning beds?",
              "Do you swim, sauna or exercise heavily most days?",
              "Do you smoke?",
            ],
          },
        ],
      },
      {
        heading: "Communication",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Email me appointment reminders and aftercare instructions.",
              "Text me appointment reminders.",
              "Send me occasional news and offers.",
            ],
          },
        ],
      },
      {
        heading: "Signature",
        note: "I confirm the information above is true and complete, and I will tell my artist about any changes before my appointment.",
        blocks: [{ kind: "signatures", items: ["Client signature", "Date"] }],
      },
    ],
    inApp:
      "Clients fill in their intake and sign on their phone before they arrive, and you're notified as soon as it comes in.",
  },
];

export const findTemplate = (slug: string | undefined) =>
  FORM_TEMPLATES.find((t) => t.slug === slug);

export const templatePath = (slug: string) => `/templates/${slug}`;
