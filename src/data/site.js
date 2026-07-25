// ---------------------------------------------------------------------------
// CoreFlex Physiotherapy Clinic — central content file.
// Edit this file to update phone numbers, prices, reviews, blog posts, etc.
// Every page pulls its copy from here so there's one place to make changes.
// ---------------------------------------------------------------------------

export const clinic = {
  name: "CoreFlex Physiotherapy Clinic",
  tagline: "Move Better. Live Pain Free.",
  phoneDisplay: "+91 86688 16379",
  phoneRaw: "918668816379",
  whatsappRaw: "918668816379",
  email: "hello@coreflexphysio.in",
  instagram: "https://www.instagram.com/coreflexphysio09/",
  instagramHandle: "@coreflexphysio09",
  addressLines: [
    "Shop No. G17, Ashoka Plaza, Sakore Nagar,",
    "Beside Hyatt Residency, Sakore Nagar Road,",
    "Viman Nagar, Pune – 411014, Maharashtra",
  ],
  addressShort: "Beside Hyatt Residency, Viman Nagar, Pune",
  mapEmbedUrl:
    "https://www.google.com/maps?q=CoreFlex+Physio+Ashoka+Plaza+Sakore+Nagar+Viman+Nagar+Pune&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=CoreFlex+Physio+Ashoka+Plaza+Sakore+Nagar+Viman+Nagar+Pune",
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
    { day: "Sunday", time: "By appointment (home visits only)" },
  ],
};

export const whatsappLink = (message) =>
  `https://wa.me/${clinic.whatsappRaw}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Hi CoreFlex Physiotherapy, I'd like to book an appointment.";

export const doctor = {
  name: "Dr. Vaishnavi Shimpi",
  suffix: "(PT), MPT (Orthopaedics)",
  photo: "/assets/dr-vaishnavi.webp",
  bio: [
    "Dr. Vaishnavi Shimpi founded CoreFlex Physiotherapy Clinic with a simple belief: recovery should be personal, not procedural. As a Master's-qualified orthopaedic physiotherapist (MPT – Orthopaedics), she has spent her career treating pain and movement disorders the way she'd want them treated for her own family — with a thorough assessment first, and a plan second.",
    "Every patient at CoreFlex starts with a detailed clinical evaluation, not a generic protocol. Dr. Vaishnavi combines hands-on manual therapy with targeted exercise prescription, modern electrotherapy modalities, and clear at-home guidance, so progress continues long after you leave the clinic.",
    "Her practice spans orthopaedic conditions, sports injuries, post-surgical rehabilitation and neurological recovery — with a particular focus on getting people back to the specific movements that matter to them, whether that's climbing stairs pain-free, returning to the field, or simply sleeping through the night without a stiff shoulder.",
  ],
  credentials: [
    "MPT (Orthopaedics)",
    "Registered Physiotherapist",
    "One-to-one, patient-centred treatment",
    "Home visit & in-clinic care",
  ],
  philosophy:
    "\u201cI don't treat reports, I treat people. Every plan is built around what you need to get back to \u2014 not a textbook timeline.\u201d",
};

export const stats = [
  { label: "Patients treated", value: "1,200+" },
  { label: "Average clinic rating", value: "5.0" },
  { label: "Years of clinical practice", value: "5+" },
  { label: "Home visits completed", value: "300+" },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const serviceCategories = [
  {
    slug: "orthopaedic-physiotherapy",
    title: "Orthopaedic Physiotherapy",
    short: "Pain, joints & posture — treated at the root cause.",
    icon: "Bone",
    items: [
      "Back Pain",
      "Neck Pain",
      "Sciatica",
      "Frozen Shoulder",
      "Tennis Elbow",
      "Heel Pain",
      "Arthritis",
      "Posture Correction",
    ],
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    short: "Return-to-play programmes built around your sport.",
    icon: "Activity",
    items: [
      "ACL Rehabilitation",
      "PCL Rehabilitation",
      "Ankle Injuries",
      "Shoulder Injuries",
      "Runner's Knee",
      "Sports Massage",
    ],
  },
  {
    slug: "post-surgery-rehab",
    title: "Post-Surgery Rehabilitation",
    short: "Structured recovery from day one after surgery.",
    icon: "HeartPulse",
    items: [
      "Total Knee Replacement",
      "Hip Replacement",
      "Spine Surgery",
      "Fracture Rehabilitation",
      "Ligament Reconstruction",
    ],
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    short: "Regaining movement, balance and independence.",
    icon: "Brain",
    items: ["Stroke", "Parkinson's", "Balance Training", "Gait Training"],
  },
  {
    slug: "home-physiotherapy",
    title: "Home Physiotherapy",
    short: "Expert care delivered to your doorstep.",
    icon: "Home",
    items: [
      "Senior Citizens",
      "Post Surgery",
      "Bedridden Patients",
      "Stroke Patients",
      "Orthopaedic Conditions",
    ],
  },
  {
    slug: "corporate-physiotherapy",
    title: "Corporate Physiotherapy",
    short: "Ergonomics & injury prevention for teams.",
    icon: "Briefcase",
    items: [
      "Desk Posture Screening",
      "On-site Ergonomic Assessment",
      "Workplace Stretch Sessions",
      "Injury Prevention Workshops",
    ],
  },
];

export const advancedTreatments = [
  { name: "Ultrasound Therapy", icon: "Waves" },
  { name: "IFT", icon: "Zap" },
  { name: "TENS", icon: "Zap" },
  { name: "Muscle Stimulation", icon: "Activity" },
  { name: "Shockwave Therapy", icon: "Radio" },
  { name: "Traction", icon: "Move" },
  { name: "Dry Needling", icon: "Syringe" },
  { name: "Cupping Therapy", icon: "CircleDot" },
  { name: "Manual Therapy", icon: "Hand" },
  { name: "Exercise Therapy", icon: "Dumbbell" },
];

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const consultation = {
  price: 600,
  includes: [
    "Detailed Assessment",
    "Pain Evaluation",
    "Clinical Diagnosis",
    "Treatment Planning",
    "Exercise Prescription",
  ],
};

export const packages = [
  { sessions: 10, price: 5500 },
  { sessions: 15, price: 8200 },
  { sessions: 20, price: 11000 },
];

// ---------------------------------------------------------------------------
// Why CoreFlex
// ---------------------------------------------------------------------------

export const whyChooseUs = [
  "MPT Orthopaedic Physiotherapist",
  "One-to-One Treatment",
  "Modern Equipment",
  "Personalized Exercise Programs",
  "Home Visits",
  "Corporate Physiotherapy",
  "Evidence-Based Practice",
  "Patient-Centered Care",
];

// ---------------------------------------------------------------------------
// Patient journey
// ---------------------------------------------------------------------------

export const journey = [
  { title: "Book Appointment", desc: "Call, WhatsApp or fill the enquiry form — we confirm a slot within hours." },
  { title: "Assessment", desc: "A thorough clinical evaluation of your pain, posture and movement." },
  { title: "Diagnosis", desc: "A clear explanation of what's actually causing the problem." },
  { title: "Treatment", desc: "Hands-on manual therapy paired with the right modalities." },
  { title: "Exercise Program", desc: "A home programme designed around your daily routine." },
  { title: "Recovery", desc: "Progress tracked and adjusted, session by session, until you're pain-free." },
];

// ---------------------------------------------------------------------------
// Gallery — replace src with real clinic photos when available
// ---------------------------------------------------------------------------

export const gallery = [
  { id: 1, title: "Clinic Reception", tag: "Facility" },
  { id: 2, title: "Treatment Room", tag: "Facility" },
  { id: 3, title: "Exercise Area", tag: "Facility" },
  { id: 4, title: "Electrotherapy Setup", tag: "Equipment" },
  { id: 5, title: "Patient Rehabilitation", tag: "In session" },
  { id: 6, title: "Home Visit Care", tag: "Home visit" },
];

// ---------------------------------------------------------------------------
// Testimonials
// Note: pulled from the clinic's own supplied copy. Swap in verbatim
// Google/JustDial reviews (with names) any time by editing this array —
// see the note left for the team about wiring up a live reviews widget.
// ---------------------------------------------------------------------------

export const testimonials = [
  {
    quote:
      "I recovered from my frozen shoulder in just a few weeks. Excellent care and the exercises were easy to follow at home.",
    author: "Verified Patient",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Professional treatment with clear exercise guidance. Dr. Vaishnavi took the time to explain exactly what was going wrong.",
    author: "Verified Patient",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Highly recommended for knee replacement rehabilitation. Structured sessions and real progress every week.",
    author: "Verified Patient",
    source: "JustDial Review",
    rating: 5,
  },
  {
    quote:
      "Home visits made all the difference for my father after his stroke. Patient, kind and genuinely skilled.",
    author: "Verified Patient",
    source: "Google Review",
    rating: 5,
  },
];

export const reviewSummary = { rating: 5.0, count: 20, source: "JustDial" };

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export const faqs = [
  {
    q: "How long is each session?",
    a: "Most sessions run 40–45 minutes, including hands-on treatment and guided exercise. Your first assessment visit may take slightly longer as we build your treatment plan.",
  },
  {
    q: "Do you provide home visits?",
    a: "Yes. We offer home physiotherapy across Viman Nagar and surrounding areas for senior citizens, post-surgery patients, bedridden patients and anyone who finds travel difficult.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required to book a physiotherapy consultation. If you're recovering from a recent surgery, it helps to bring your discharge summary or surgeon's notes to your first visit.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your condition, its severity and how long you've had it. After your assessment, Dr. Vaishnavi will give you a realistic session estimate — most orthopaedic conditions respond well within 10–15 sessions.",
  },
  {
    q: "What conditions do you treat?",
    a: "Orthopaedic pain (back, neck, shoulder, knee), sports injuries, post-surgical rehabilitation (joint replacements, ligament reconstruction, fractures) and neurological conditions like stroke and Parkinson's.",
  },
];

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export const blogPosts = [
  {
    slug: "frozen-shoulder-recovery-timeline",
    title: "Frozen Shoulder: What a Realistic Recovery Timeline Looks Like",
    excerpt:
      "Frozen shoulder rarely resolves overnight — but it does resolve. Here's what each stage of treatment actually looks like, and what you can do at home in between sessions.",
    date: "2026-06-14",
    category: "Orthopaedic Care",
    readTime: "5 min read",
    content: [
      "Frozen shoulder (adhesive capsulitis) tends to move through three distinct phases: freezing, frozen and thawing. Understanding which phase you're in changes what treatment should focus on — and how patient you need to be with yourself.",
      "In the freezing phase, pain is often the dominant symptom and range of motion is only mildly reduced. Treatment here is gentle: pain-relieving modalities, light mobility work, and avoiding aggressive stretching that can flare things up further.",
      "The frozen phase is where stiffness peaks and pain often eases. This is when manual therapy — joint mobilisation, capsular stretching, targeted strengthening — does the most work. Consistency matters more than intensity here.",
      "The thawing phase is where most of the visible progress happens, as range of motion gradually returns. A structured home exercise programme between sessions is what separates a 3-month recovery from a 9-month one.",
      "Most patients we see at CoreFlex regain functional, pain-free range of motion within 8–14 weeks of consistent treatment, though every shoulder — and every patient's biology — is different. If you're dealing with shoulder stiffness that isn't improving, an early assessment makes a real difference to how long recovery takes.",
    ],
  },
  {
    slug: "post-knee-replacement-first-6-weeks",
    title: "The First 6 Weeks After a Total Knee Replacement",
    excerpt:
      "The first six weeks after knee replacement surgery set the tone for your entire recovery. Here's what to expect, week by week.",
    date: "2026-05-22",
    category: "Post-Surgery Rehab",
    readTime: "6 min read",
    content: [
      "The work of recovering from a total knee replacement really begins the day after surgery, not weeks later. Early, gentle movement is what prevents stiffness from setting in around new hardware.",
      "Weeks 1–2 focus on swelling control, safe walking with support, and restoring basic bend and straighten range. Ice, elevation and short, frequent walks matter more here than any single exercise.",
      "Weeks 3–4 shift toward strengthening the quadriceps and hamstrings, since a stronger thigh directly protects the new joint and improves walking pattern. Balance work usually begins here too.",
      "By weeks 5–6, most patients are walking without a support indoors and working on functional movements — stairs, getting in and out of a car, longer walks outdoors.",
      "Every timeline shifts based on age, pre-surgery strength and how the surgery itself went — which is why a personalised, hands-on plan (not a generic handout) makes the biggest difference to how confidently you're walking by week six.",
    ],
  },
  {
    slug: "desk-posture-back-pain",
    title: "Desk Posture and Back Pain: What Actually Helps",
    excerpt:
      "\"Sit up straight\" isn't the fix everyone thinks it is. Here's what actually reduces desk-related back and neck pain.",
    date: "2026-04-30",
    category: "Corporate Wellness",
    readTime: "4 min read",
    content: [
      "The biggest driver of desk-related pain usually isn't bad posture in a single moment — it's staying in any one position for too long. Static posture, even a 'good' one, overloads the same tissues hour after hour.",
      "Chair height, monitor position and keyboard placement matter, but movement breaks matter more. Standing, walking or simply changing position every 30–45 minutes measurably reduces stiffness and pain over a workday.",
      "Neck and upper back pain in particular is often linked to forward head posture from looking down at phones and laptops. Simple strengthening for the deep neck flexors and upper back, done consistently, changes this over a few weeks.",
      "For teams, an on-site ergonomic assessment usually finds the same two or three fixable issues repeated across many desks — which is exactly what our corporate physiotherapy sessions are built to identify and correct.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All Services", to: "/services" },
      { label: "Home Physiotherapy", to: "/services/home-physiotherapy" },
      { label: "Sports Rehabilitation", to: "/services/sports-rehabilitation" },
      { label: "Post-Surgery Rehab", to: "/services/post-surgery-rehab" },
      { label: "Corporate Physiotherapy", to: "/services/corporate-physiotherapy" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
