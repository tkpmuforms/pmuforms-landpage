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
  /** when the page went up, if after TEMPLATES_PUBLISHED */
  published?: string;
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
  },  {
    slug: "lip-blush-consent-form",
    published: "2026-11-26",
    title: "Lip Blush Consent Form Template",
    seoTitle: "Free Lip Blush Consent Form Template (Printable) | PMU Forms",
    description:
      "A free, printable lip blush consent form template: client details, health questions including cold sore history, risks and acknowledgements to initial, photo release and signatures.",
    keywords:
      "lip blush consent form, lip blush consent form template, lip tattoo consent form, lip neutralization consent, permanent lip color waiver",
    summary:
      "Cold sore screening, lip-specific risks to initial, photo release and signatures.",
    intro: [
      "Lips heal differently from brows: they swell more, peel more, and can trigger a cold sore outbreak in clients who carry the virus. A good lip blush consent form screens for that before the appointment, not on the day.",
      "Use the sections below as a starting point and adjust them for your techniques (full lip blush, lip liner, lip neutralization) and your studio's policies.",
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
              "Service (lip blush, lip liner, lip neutralization, touch-up)",
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
              "Have you ever had cold sores or fever blisters? If yes, have you spoken to your doctor about taking an antiviral before your appointment?",
              "Do you have a cold sore, cut, chapped or irritated skin on or around your lips right now?",
              "Are you pregnant, trying to become pregnant, or breastfeeding?",
              "Do you have diabetes, a heart condition, or a bleeding or clotting disorder?",
              "Do you take blood thinners, aspirin, fish oil, or other medication or supplements that affect bleeding?",
              "Have you taken isotretinoin (e.g. Accutane) in the past 12 months?",
              "Have you had lip fillers or other injections in or near your lips? If yes, when?",
              "Have you had lip tattooing or permanent makeup before? If yes, when and where?",
              "Do you have a history of keloids or raised scarring?",
              "Are you receiving chemotherapy or radiation, or do you have an autoimmune condition?",
              "Do you have allergies (numbing creams, lidocaine, latex, pigments, metals, petroleum jelly)?",
              "Do you smoke or vape?",
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
              "I understand lip blush places pigment in the skin of my lips. It is semi-permanent and fades over time; how it fades depends on my skin, lifestyle, sun exposure and aftercare.",
              "I understand my lips will likely be swollen, tender and much brighter or darker right after the procedure, and that color softens a lot as they heal.",
              "I understand healed color can look patchy or lighter than expected after the first session, and that a touch-up appointment is usually recommended.",
              "I understand lip procedures can trigger a cold sore outbreak, especially if I have had cold sores before, and that I am responsible for speaking to my doctor about prevention.",
              "I understand possible side effects include swelling, bruising, dryness, peeling, uneven color, pigment migration, infection, allergic reaction and, rarely, scarring.",
              "I approved the lip shape and color before the procedure started.",
              "I have answered the health questions truthfully and will tell my artist about any changes before my appointment.",
              "I received aftercare instructions and understand that following them affects my results.",
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
              "I agree to before and after photos of my lips being used in the artist's portfolio and social media, without my name.",
              "I do not agree to my photos being shared.",
            ],
          },
        ],
      },
      {
        heading: "Artist use only",
        note: "Look at the client's photo ID in person. Don't photocopy or photograph it.",
        blocks: [{ kind: "fields", items: ["Photo ID checked (type of ID)", "Checked by", "Pigment brand and color"] }],
      },
      {
        heading: "Signatures",
        blocks: [{ kind: "signatures", items: ["Client signature", "Date", "Artist signature", "Date"] }],
      },
    ],
    inApp:
      "Send this form when the client books, so cold sore history comes in days before the appointment. Clients answer and sign on their phone, and the signed form is kept with the appointment.",
  },
  {
    slug: "scalp-micropigmentation-consent-form",
    published: "2026-11-26",
    title: "Scalp Micropigmentation (SMP) Consent Form Template",
    seoTitle: "Free Scalp Micropigmentation (SMP) Consent Form Template | PMU Forms",
    description:
      "A free, printable scalp micropigmentation (SMP) and hairline consent form template: client details, health and hair-loss questions, risks to initial, photo release and signatures.",
    keywords:
      "scalp micropigmentation consent form, SMP consent form template, hairline tattoo consent form, SMP waiver, scalp pigmentation release form",
    summary:
      "Hair-loss history, scalp health questions, SMP risks to initial and signatures for hairline work.",
    intro: [
      "Scalp micropigmentation clients often come to you after trying other hair-loss treatments, so their history matters: medications, transplants and scalp conditions can all change how the pigment settles.",
      "Use this as a starting point for SMP, hairline restoration, density work and scar camouflage, and adjust it to your own process and number of sessions.",
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
              "Service (hairline, full scalp, density, scar camouflage, touch-up)",
            ],
          },
        ],
      },
      {
        heading: "Hair and scalp history",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Are you currently using hair-loss treatments (e.g. minoxidil, finasteride) or planning to start or stop them?",
              "Have you had a hair transplant? If yes, when?",
              "Do you have scars on your scalp from surgery, injury or a transplant?",
              "Do you have a scalp condition (psoriasis, eczema, dermatitis, folliculitis, alopecia areata, acne)?",
              "Do you plan to shave your head for this look, or keep some length?",
            ],
          },
          { kind: "fields", items: ["How long have you been losing hair, and what have you tried?"] },
        ],
      },
      {
        heading: "Health questions",
        note: "Ask the client to answer every question and add details for any “Yes”.",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Do you have diabetes, a heart condition, or a bleeding or clotting disorder?",
              "Do you take blood thinners, aspirin, fish oil, or other medication or supplements that affect bleeding?",
              "Have you taken isotretinoin (e.g. Accutane) in the past 12 months?",
              "Do you have a history of keloids or raised scarring?",
              "Are you receiving chemotherapy or radiation, or do you have an autoimmune condition?",
              "Do you have allergies (numbing creams, lidocaine, latex, pigments, metals)?",
              "Do you currently have a sunburn on your scalp?",
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
              "I understand scalp micropigmentation places small dots of pigment in my scalp to look like hair follicles. It does not grow hair, and it fades over time and needs touch-ups.",
              "I understand SMP usually takes more than one session, and that the result builds up over the sessions.",
              "I understand the dots look darker and larger right after each session and soften as they heal.",
              "I understand that sun, sweating, swimming and some scalp products can affect how the pigment heals and fades.",
              "I understand possible side effects include redness, tenderness, scabbing, uneven dots, pigment blurring or spreading, color shift, infection, allergic reaction and, rarely, scarring.",
              "I approved the hairline design and shade before the procedure started.",
              "I have answered the questions truthfully and will tell my artist about any changes, including new hair-loss medication, before my sessions.",
              "I received aftercare instructions and understand that following them affects my results.",
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
              "I agree to before and after photos of my scalp being used in the artist's portfolio and social media, without my name or face.",
              "I do not agree to my photos being shared.",
            ],
          },
        ],
      },
      {
        heading: "Artist use only",
        note: "Look at the client's photo ID in person. Don't photocopy or photograph it.",
        blocks: [{ kind: "fields", items: ["Photo ID checked (type of ID)", "Checked by", "Pigment and needle used"] }],
      },
      {
        heading: "Signatures",
        blocks: [{ kind: "signatures", items: ["Client signature", "Date", "Artist signature", "Date"] }],
      },
    ],
    inApp:
      "Send this form before the first session and keep every session's signed form with the client. Clients answer and sign on their phone, and you can track which session each form belongs to.",
  },
  {
    slug: "brow-lamination-consent-form",
    published: "2026-11-26",
    title: "Brow Lamination Consent Form Template",
    seoTitle: "Free Brow Lamination Consent Form Template (Printable) | PMU Forms",
    description:
      "A free, printable brow lamination and tint consent form template: client details, sensitivity and patch test questions, risks to initial, aftercare acknowledgement and signatures.",
    keywords:
      "brow lamination consent form, brow lamination consent form template, brow lamination waiver, brow tint consent form, eyebrow lamination release",
    summary:
      "Patch test, skin sensitivity questions, lamination and tint risks to initial, and signatures.",
    intro: [
      "Brow lamination uses chemical solutions to reshape the brow hairs, often with a tint on top. Most reactions come from sensitive skin or recent skincare, so the form should ask about both and record the patch test.",
      "Adjust the sections to the products you use and whether you include tinting, waxing or trimming in the service.",
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
              "Appointment date",
              "Service (lamination, lamination and tint, tint only)",
            ],
          },
        ],
      },
      {
        heading: "Health and skin questions",
        note: "Ask the client to answer every question and add details for any “Yes”.",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Have you had a reaction to a brow or lash lamination, perm, tint or hair dye before?",
              "Do you have sensitive skin, or a skin condition near your brows (eczema, psoriasis, dermatitis, rosacea, active acne)?",
              "Do you use retinol, retinoids, acids or other exfoliating products on or near your brows?",
              "Have you taken isotretinoin (e.g. Accutane) in the past 12 months?",
              "Have you had brow tattooing, microblading, Botox or a facial treatment near your brows recently? If yes, when?",
              "Are you pregnant or breastfeeding?",
              "Do you have allergies (hair dye, PPD, ammonia, latex, adhesives, fragrance)?",
              "Do you have cuts, irritation or a sunburn near your brows right now?",
            ],
          },
          { kind: "fields", items: ["Current medications and skincare", "Anything else your artist should know"] },
        ],
      },
      {
        heading: "Patch test",
        blocks: [
          {
            kind: "checklist",
            items: [
              "A patch test was done on (date): ________ with no reaction.",
              "I chose not to have a patch test and accept the risk of a reaction.",
            ],
          },
        ],
      },
      {
        heading: "About the treatment",
        note: "The client initials each statement.",
        blocks: [
          {
            kind: "initials",
            items: [
              "I understand brow lamination uses chemical solutions to change the shape and direction of my brow hairs, and that results usually last several weeks.",
              "I understand possible side effects include redness, itching, stinging, dryness, brittle or frizzy hairs, hair breakage, uneven results and allergic reaction.",
              "I understand tint color can look different on my hair than expected and fades over time.",
              "I will tell my artist right away if I feel burning or discomfort during the treatment.",
              "I have answered the questions truthfully.",
              "I received aftercare instructions (for example keeping brows dry and avoiding makeup and heat for the first 24 hours) and understand that following them affects my results.",
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
        blocks: [{ kind: "signatures", items: ["Client signature", "Date", "Artist signature", "Date"] }],
      },
    ],
    inApp:
      "Send this form with the booking confirmation, record the patch test, and keep the signed form with the appointment. Clients answer and sign on their phone.",
  },
  {
    slug: "lash-lift-consent-form",
    published: "2026-11-26",
    title: "Lash Lift and Tint Consent Form Template",
    seoTitle: "Free Lash Lift and Tint Consent Form Template (Printable) | PMU Forms",
    description:
      "A free, printable lash lift and lash tint consent form template: client details, eye health and sensitivity questions, patch test, risks to initial and signatures.",
    keywords:
      "lash lift consent form, lash lift consent form template, lash lift and tint waiver, lash tint consent form, eyelash perm release form",
    summary:
      "Eye health and contact lens questions, patch test, lift and tint risks to initial, and signatures.",
    intro: [
      "Lash lifts work right next to the eye, so the questions that matter most are about eye health, contact lenses and past reactions to lash or brow products.",
      "Adjust the form to the products you use and whether the service includes a tint.",
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
              "Appointment date",
              "Service (lash lift, lash lift and tint, tint only)",
            ],
          },
        ],
      },
      {
        heading: "Eye and health questions",
        note: "Ask the client to answer every question and add details for any “Yes”.",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Do you wear contact lenses? (Please remove them before the treatment.)",
              "Do you have an eye condition, infection, dry eye, watery eyes, conjunctivitis or a stye right now?",
              "Have you had eye surgery (including LASIK) in the past 6 months?",
              "Have you had a reaction to a lash or brow lift, perm, tint, extension glue or hair dye before?",
              "Do you have sensitive skin or a skin condition around your eyes?",
              "Are you pregnant or breastfeeding?",
              "Do you use lash growth serums or prescription eye drops?",
              "Do you have allergies (hair dye, PPD, latex, adhesives, fragrance)?",
              "Do you have lash extensions on now, or did you have them removed recently?",
            ],
          },
          { kind: "fields", items: ["Current medications", "Anything else your artist should know"] },
        ],
      },
      {
        heading: "Patch test",
        blocks: [
          {
            kind: "checklist",
            items: [
              "A patch test was done on (date): ________ with no reaction.",
              "I chose not to have a patch test and accept the risk of a reaction.",
            ],
          },
        ],
      },
      {
        heading: "About the treatment",
        note: "The client initials each statement.",
        blocks: [
          {
            kind: "initials",
            items: [
              "I understand a lash lift uses chemical solutions to curl my natural lashes, and that results usually last several weeks as lashes grow out.",
              "I understand I need to keep my eyes closed during the treatment and tell my artist right away if I feel stinging or burning.",
              "I understand possible side effects include eye irritation, watering, redness, swelling, dry or brittle lashes, over- or under-curled lashes, lash breakage and allergic reaction.",
              "I understand tint color can look different on my lashes than expected and fades over time.",
              "I have answered the questions truthfully.",
              "I received aftercare instructions (for example keeping lashes dry and avoiding mascara and steam for the first 24 hours) and understand that following them affects my results.",
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
              "I agree to before and after photos of my lashes being used in the artist's portfolio and social media, without my name.",
              "I do not agree to my photos being shared.",
            ],
          },
        ],
      },
      {
        heading: "Signatures",
        blocks: [{ kind: "signatures", items: ["Client signature", "Date", "Artist signature", "Date"] }],
      },
    ],
    inApp:
      "Send this form with the booking confirmation so eye health questions are answered before the client sits down. Clients answer and sign on their phone, and the signed form is kept with the appointment.",
  },
  {
    slug: "chemical-peel-consent-form",
    published: "2026-11-26",
    title: "Chemical Peel Consent Form Template",
    seoTitle: "Free Chemical Peel Consent Form Template (Printable) | PMU Forms",
    description:
      "A free, printable chemical peel consent form template: client details, skin history and medication questions, risks to initial, pre- and post-peel acknowledgements and signatures.",
    keywords:
      "chemical peel consent form, chemical peel consent form template, facial peel waiver, chemical peel release form, esthetician consent form",
    summary:
      "Skin history, medication and sun questions, peel risks to initial, and signatures.",
    intro: [
      "Most problems with chemical peels come from what the client did before the appointment: retinoids, recent waxing or laser, a tan, or a cold sore history. Ask about all of it in writing.",
      "This template is written for superficial, in-studio peels. Deeper peels usually involve medical supervision; check what your license and local rules allow before offering them.",
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
              "Peel type and strength (artist to fill in)",
            ],
          },
        ],
      },
      {
        heading: "Skin and health questions",
        note: "Ask the client to answer every question and add details for any “Yes”.",
        blocks: [
          {
            kind: "yesno",
            items: [
              "Have you taken isotretinoin (e.g. Accutane) in the past 12 months?",
              "Have you used retinol, tretinoin, retinoids, acids or exfoliating products in the past 7 days?",
              "Have you had waxing, threading, laser, microneedling, dermaplaning or another peel on your face in the past 2 weeks?",
              "Have you had Botox or fillers in the past 2 weeks?",
              "Do you have a sunburn, recent tan, or plan significant sun exposure in the next 2 weeks?",
              "Have you ever had cold sores or fever blisters?",
              "Do you have a skin condition (eczema, psoriasis, rosacea, dermatitis, active acne, open wounds)?",
              "Do you tend to get dark spots or scars after skin irritation or injury?",
              "Are you pregnant, trying to become pregnant, or breastfeeding?",
              "Do you have an autoimmune condition, or are you receiving chemotherapy or radiation?",
              "Do you have allergies (aspirin or salicylates, fragrance, any skincare ingredients)?",
            ],
          },
          {
            kind: "fields",
            items: ["Current medications, skincare and supplements", "Anything else your provider should know"],
          },
        ],
      },
      {
        heading: "About the treatment",
        note: "The client initials each statement.",
        blocks: [
          {
            kind: "initials",
            items: [
              "I understand a chemical peel applies an acid solution to remove the outer layers of skin, and that results vary from person to person and may take more than one treatment.",
              "I understand I may feel tingling, warmth or stinging during the peel, and that my skin may be red, tight, dry and peel or flake for several days afterwards.",
              "I understand possible side effects include prolonged redness, irritation, darker or lighter patches of skin, a cold sore outbreak, infection, allergic reaction and, rarely, scarring.",
              "I understand I must protect my skin from the sun and use sunscreen every day after the peel, and not pick or peel flaking skin.",
              "I will stop retinoids and exfoliating products before and after the peel for as long as my provider tells me.",
              "I have answered the questions truthfully and will tell my provider about any changes before my appointment.",
              "I received aftercare instructions and understand that following them affects my results.",
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
              "I agree to before and after photos of my skin being used in the provider's portfolio and social media, without my name.",
              "I do not agree to my photos being shared.",
            ],
          },
        ],
      },
      {
        heading: "Signatures",
        blocks: [{ kind: "signatures", items: ["Client signature", "Date", "Provider signature", "Date"] }],
      },
    ],
    inApp:
      "Send this form when the client books so you can spot retinoid use or a recent tan before the appointment. Clients answer and sign on their phone, and the signed form is kept with the appointment.",
  },
];

export const findTemplate = (slug: string | undefined) =>
  FORM_TEMPLATES.find((t) => t.slug === slug);

export const templatePath = (slug: string) => `/templates/${slug}`;
