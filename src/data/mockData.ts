// ─── SITE CONFIG ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Plan B",
  fullName: "Plan B – The Event Guide",
  tagline: "We think one step ahead and always have a Plan B",
  heroImage: "/assets/images/hero.png",
  heroDescription: "Plan B – The Eventguide stands for tailor-made events throughout Switzerland, from weddings and corporate events to cultural events and private celebrations. We combine creative ideas, precise organisation and a strong network of partners to create all-in-one packages that include planning, design, entertainment, exclusive discounts and complete on-site support, so you can enjoy your event to the fullest while we take care of every detail.",
  contact: {
    email: "info@planb-theeventguide.com",
    phone: "+41 78 704 76 25",
    address: "Baumschulweg 6, 3252 Worben, Switzerland",
    socials: {
      instagram: "https://instagram.com/planb_theeventguide",
      instagramFilmfactory: "https://instagram.com/planb_thefilmfactory",
      facebook: "https://facebook.com/planbtheeventguide",
      linkedin: "https://linkedin.com/company/planb-the-eventguide",
      youtube: "https://youtube.com/@planb_theeventguide",
      tiktok: "https://tiktok.com/@planb_theeventguide"
    }
  }
};

// Team Images
import abbyImg from '../assets/aboutTeam/abby.png';
import abinashImg from '../assets/aboutTeam/abinash.png';
import akeshaImg from '../assets/aboutTeam/akesha.png';
import banuImg from '../assets/aboutTeam/banu.png';
import prathikkaImg from '../assets/aboutTeam/prathikka.png';
import thanuImg from '../assets/aboutTeam/thanu.png';

// ─── NAV LINKS ──────────────────────────────────────────────────────────────
export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Vision & Mission", path: "/about/vision" },
      { name: "Our Team", path: "/about/team" }
    ]
  },
  { name: "Our Services", path: "/services" },
  { name: "The Filmfactory", path: "/filmfactory" },
  { name: "Partner", path: "/partner" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export const aboutContent = {
  intro: "Plan B - The Eventguide is a Switzerland-based event management company focused on delivering high-quality, culturally driven experiences. The company specializes in the planning, production, and execution of events that connect communities, creatives, and audiences in meaningful ways.",
  filmfactoryIntro: "With the growth, recognition, and continued success of First Take - Tamil Short Film Festival Switzerland, Plan B has expanded its structure by establishing a dedicated sub-brand: Plan B - The Filmfactory.",
  filmfactoryDescription: "This specialized division focuses on film-related initiatives, including the development, production, and promotion of cinematic projects and platforms. It serves as a strategic extension of Plan B's vision to support and elevate independent filmmakers, particularly within the Tamil creative community in Europe.",
  philosophy: "Through this evolution, Plan B is not only organizing events but actively building a sustainable ecosystem for film, storytelling, and creative talent - positioning itself at the intersection of culture, community, and cinema.",
  vision: "We dream of a future where Tamil filmmakers are a natural and powerful presence in the European creative scene. Our goal is to evolve into a recognized pan-European festival, moving across borders, partnering with film universities, and serving as a living archive for the history of the Tamil diaspora.",
  mission: "Our task is to build the structures where raw talent thrives. First Take is defined by three pillars: Talent Development, providing the stage and professional feedback to launch new careers; Cultural Identity, bringing authentic Tamil stories into the global cinematic context; and Networking, connecting creators to build a professional ecosystem that lasts.",
  pillars: [
    { title: "Talent Development", description: "Providing the stage and professional feedback to launch new careers." },
    { title: "Cultural Identity", description: "Bringing authentic Tamil stories into the global cinematic context." },
    { title: "Networking", description: "Connecting creators to build a professional ecosystem that lasts." }
  ],
  quote: "WE BELIEVE THAT FILMS CAN CHANGE SOCIETY — THEY CREATE A SENSE OF BELONGING, BUILD BRIDGES, AND CONNECT GENERATIONS."
};

export const teamMembers = [
  {
    id: 1,
    name: "Abishana P.",
    image: abbyImg,
    role: "CEO, HR, Head of Service",
    bio: "As the driving force behind the company, she ensures that every event meets the highest standards. With a strong commitment to perfection and client satisfaction, she leads the company with passion and dedication, making Plan B a standout in the competitive event management industry.",
    languages: "German, English & Tamil",
    skills: "Designing, Communication & Write, Read and Talk in Tamil fluently"
  },
  {
    id: 2,
    name: "Banushanthan P.",
    image: banuImg,
    role: "B2B Manager & Artist Manager",
    bio: "Responsible for managing and expanding business relationships, as well as representing and coordinating with artists. He works closely with corporate clients, vendors, and artists. His expertise in business development and talent management is key to expanding our client base and securing new opportunities in both the corporate and entertainment sectors.",
    languages: "English & Tamil",
    skills: "Connection in India, Event-Host"
  },
  {
    id: 3,
    name: "Abinash V.",
    image: abinashImg,
    role: "CAO & CFO",
    bio: "Manage the company's strategic direction and financial health. With a sharp eye for detail and business development, he plays a crucial role in shaping the company’s growth and long-term success. He ensures smooth operations, from financial management to operational processes.",
    languages: "German, English & Tamil",
    skills: "Photography & Dance"
  },
  {
    id: 4,
    name: "Thanushan R.",
    image: thanuImg,
    role: "Marketing Manager",
    bio: "He handles all aspects of marketing strategy and execution. From promotional campaigns to event-specific marketing, he ensures that our services reach the right audience. His expertise in digital and traditional marketing helps keep our company visible and top-of-mind for potential clients.",
    languages: "German, English & Tamil",
    skills: "Videography, Editing & Content Creation"
  },
  {
    id: 5,
    name: "Akesha T.",
    image: akeshaImg,
    role: "Allrounder",
    bio: "She provides versatile support across various aspects of the business. From event coordination to logistics, her role is essential in ensuring the seamless execution of each event. Her ability to adapt to different tasks and support her colleagues wherever needed makes her an indispensable part of the team.",
    languages: "French, English & Tamil",
    skills: "Write, Read and Talk in Tamil fluently"
  },
  {
    id: 6,
    name: "Prathikka Y.",
    image: prathikkaImg,
    role: "Allrounder",
    bio: "She provides versatile support across various aspects of the business. From event coordination to logistics, her role is essential in ensuring the seamless execution of each event. Her ability to adapt to different tasks and support her colleagues wherever needed makes her an indispensable part of the team.",
    languages: "German, English & Tamil",
    skills: "Dance, Read, Write and Talk in Tamil fluently"
  }
];

// ─── SERVICES ───────────────────────────────────────────────────────────────
export const servicesIntro = "From the initial idea to the last guest, we take care of every detail. Our service includes complete planning, organisation and coordination, creative design for invitations, flyers and logos, careful selection of the location, individual budget planning and exciting dance choreography. With our artist management and targeted promotion, we ensure that your event is unique and unforgettable.";

export const services = [
  {
    id: 1,
    title: "Planning, Organisation & Coordination",
    icon: "CalendarCheck",
    description: "From initial concepts to flawless execution, we handle every detail so you can focus on enjoying the experience.",
    details: [
      { subtitle: "Client Consultation and Meeting", text: "We start by carefully analyzing your ideas and goals, turning them into a concrete plan that reflects your vision." },
      { subtitle: "Budget Planning", text: "We provide transparent and efficient budgeting, ensuring that all costs are accounted for and kept within your financial parameters." },
      { subtitle: "Scheduling", text: "A detailed timeline is created to guarantee everything runs smoothly, from set-up to the final moments of your event." },
      { subtitle: "On-Site Coordination", text: "We ensure that everyone involved—from vendors to staff—is perfectly coordinated on the day of the event to ensure seamless execution." }
    ]
  },
  {
    id: 2,
    title: "Venue Management",
    icon: "MapPin",
    description: "The venue sets the stage for your event, and choosing the right location is essential to its success. We provide expert advice and support throughout the venue selection process.",
    details: [
      { subtitle: "Advice and Venue Selection", text: "We guide you in selecting the ideal location that fits your event's style and requirements." },
      { subtitle: "Coordination and Negotiation", text: "Our team liaises with venue operators, negotiating terms and conditions to secure the best deal for you." },
      { subtitle: "Booking and Utilisation Coordination", text: "Once a venue is selected, we handle all final bookings and coordinate the logistics to ensure the space is utilized effectively." }
    ]
  },
  {
    id: 3,
    title: "Designing",
    icon: "Palette",
    description: "From invitations to promotional materials, we create stunning designs that reflect the theme and atmosphere of your event.",
    details: [
      { subtitle: "Invitations", text: "Creative and detailed designs that offer personalization and enhance the event's narrative." },
      { subtitle: "Promotional Materials", text: "We design eye-catching flyers, posters, and other materials to promote your event, ensuring it catches the attention it deserves." },
      { subtitle: "Event Videos", text: "We offer professional video production to create memorable highlights and promotional videos for your event." }
    ]
  },
  {
    id: 4,
    title: "Choreography and Entertainment",
    icon: "Music",
    description: "Entertainment is a key element of any successful event, and we specialize in creating engaging, memorable experiences.",
    details: [
      { subtitle: "Customized Choreographies", text: "We design choreographies for all kind of events like weddings, corporate events, and shows, ensuring every performance is in line with your event's theme." },
      { subtitle: "Live Entertainment", text: "We coordinate performances with talented artists, musicians, and entertainers to add excitement and flair to your event." }
    ]
  },
  {
    id: 5,
    title: "Artist Management",
    icon: "Mic2",
    description: "As part of our comprehensive services, we offer professional artist management to ensure seamless integration of talent into your event.",
    details: [
      { subtitle: "Artist Representation", text: "We assist with managing talent, ensuring that their needs are met, and they are fully prepared for the event." },
      { subtitle: "Contract Negotiation", text: "Our team negotiates terms and manages contracts, ensuring a smooth and professional relationship between you and the artists." },
      { subtitle: "Logistics and Coordination", text: "From travel arrangements to technical requirements, we take care of all logistical details to ensure that the artist's participation in your event is flawless." }
    ]
  },
  {
    id: 6,
    title: "Helper Service",
    icon: "HeartHandshake",
    description: "Our experienced team provides on-the-day support to ensure everything runs smoothly.",
    details: [
      { subtitle: "Set-Up and Decoration", text: "We handle the complete setup, from arranging furniture to decorating the venue, ensuring it aligns with the theme and atmosphere of your event." },
      { subtitle: "Guest Service", text: "Our friendly staff provides impeccable service throughout the event, ensuring your guests feel welcome and taken care of." },
      { subtitle: "Additional Services", text: "Whether it's cleaning, dismantling, or managing last-minute changes, we are there to handle additional tasks, ensuring the event goes off without a hitch." }
    ]
  },
  {
    id: 7,
    title: "Event Marketing & Promotion",
    icon: "Megaphone",
    description: "To help your event reach a wider audience, we offer a comprehensive range of event marketing and promotional services.",
    details: [
      { subtitle: "Social Media Marketing", text: "We handle the promotion of your event on social media platforms through organic content, paid advertisements, and targeted campaigns." },
      { subtitle: "Email Campaigns", text: "We design and execute effective email marketing strategies, sending out invitations, reminders, and post-event thank you notes to your audience." },
      { subtitle: "Press & Media Relations", text: "Our team helps secure media coverage for your event by liaising with journalists, influencers, and bloggers." },
      { subtitle: "Event Branding", text: "We create a cohesive and impactful visual identity for your event, including logos, banners, and digital assets to enhance the overall event experience." }
    ]
  },
  {
    id: 8,
    title: "Post-Event Services",
    icon: "ClipboardCheck",
    description: "After the event, we offer post-event services to ensure everything is wrapped up professionally and your clients receive the best possible experience.",
    details: [
      { subtitle: "Feedback and Evaluation", text: "We collect feedback from attendees and clients to evaluate the success of the event and identify areas for improvement." },
      { subtitle: "Thank You Notes", text: "We coordinate and send personalized thank-you messages to guests, vendors, and stakeholders, keeping the positive momentum going." },
      { subtitle: "Event Debriefing", text: "We conduct a thorough debriefing with clients to review event outcomes, gather insights, and discuss future opportunities for improvement." }
    ]
  }
];

// ─── FILMFACTORY ────────────────────────────────────────────────────────────
export const filmfactoryContent = {
  firstTake: {
    title: "First Take",
    subtitle: "Tamil Short Film Festival",
    tagline: "Where Dreams Become Reality",
    description: "The first edition of First Take took place on 5th April 2025, at Cinema Claudia in Kloten. What began as a bold idea quickly became a milestone for the Tamil cultural scene in Europe. It was more than just a film screening; it was a vibrant space for connection. Over 300+ guests — including filmmakers, families, artists, and media professionals — filled the sold-out cinema to witness an event that had never existed in this form before.",
    highlights: [
      { title: "19 Stories, One Identity", description: "At the heart of the day were 19 short films capturing the broad spectrum of Tamil life: migration, generational conflicts, love, loss, and identity." },
      { title: "A Visit from South India", description: "Renowned director Mithran R. Jawahar served as our guest of honor and jury head, providing professional feedback to young filmmakers." }
    ],
    winners: [
      { category: "BEST SHORT FILM", winner: "Jenu K. Siva", film: "Kadanthu Sellavaa" },
      { category: "BEST DIRECTOR", winner: "Nirojan Karunakaran", film: "Loop of Death" },
      { category: "BEST SCREENPLAY", winner: "Prasshanna Selvarajah", film: "Arjun" },
      { category: "BEST CINEMATOGRAPHER", winner: "Kanish Uruthirasingam", film: "The Real Life" },
      { category: "BEST EDITOR", winner: "Parthipan Sivanantharajah", film: "Kathir" },
      { category: "BEST ORIGINAL SCORE", winner: "Pratheev Kanagalingam", film: "Rakshakar" },
      { category: "BEST SOUND DESIGNER", winner: "Parthipan Sivanantharajah", film: "Kathir" },
      { category: "BEST ACTOR", winner: "Nesan Yogeswaran", film: "Maiyal" },
      { category: "BEST ACTRESS", winner: "Reshmah Devadas / Shapena Kuganathan", film: "Vinai / Kadanthu Sellavaa" },
      { category: "AUDIENCE CHOICE AWARD", winner: "Jenu K. Siva", film: "Kadanthu Sellavaa" },
      { category: "BEST SOCIAL MESSAGE", winner: "Tharushanth Thayaskumar", film: "Adimai" },
      { category: "MOST PROMISING FILMMAKER", winner: "Prunthan Vadivel", film: "Maiyal" },
      { category: "BEST CREATIVE CONCEPT", winner: "Januthan Logathas", film: "Un Mugam Endrum Marayadhe" }
    ],
    stats: [
      { label: "Films Screened", value: "19" },
      { label: "Submissions", value: "26" },
      { label: "Attendees", value: "300+" }
    ]
  },
  myFrame: {
    title: "My Frame | My Story",
    tagline: "Let’s create powerful stories — together.",
    description: "A creative space for storytellers, filmmakers, and visionaries to collaborate and grow. This is where ideas are born, stories come to life, and new projects begin.",
    offerings: [
      { title: "Collaboration & Networking", description: "Finding crews and like-minded creatives for projects." },
      { title: "Creative Challenges", description: "Monthly film challenges and support for new ideas." },
      { title: "Workshops", description: "Craft development and feedback sessions from script to final cut." },
      { title: "Showcase", description: "Platform to present work and gather an audience." }
    ]
  }
};

// ─── PARTNERS ───────────────────────────────────────────────────────────────
export const partnersIntro = "We cooperate with carefully selected partners in the areas of catering, decoration, technology and entertainment. Thanks to these strong networks, you get access to exclusive benefits, attractive discounts and premium service that is reserved exclusively for our customers.";

export const partners = [
  { id: 1, name: "DJ Tharshan", service: "DJ" },
  { id: 2, name: "DJ Jene", service: "DJ" },
  { id: 3, name: "The Crown Entertainment - DJ Dondidi / DJ Jeythi", service: "DJ" },
  { id: 4, name: "Tom & Jerry Emcee - Banu / Nigitha", service: "Host" },
  { id: 5, name: "GD - Denieshia", service: "Host" },
  { id: 6, name: "Optimeye", service: "Photo- & Videography" },
  { id: 7, name: "2k Production", service: "Photo- & Videography" },
  { id: 8, name: "Alpha Studio", service: "Photo- & Videography" },
  { id: 9, name: "Skyline Studios", service: "Photo- & Videography" },
  { id: 10, name: "My Emotion", service: "Photo- & Videography" },
  { id: 11, name: "Dream To Creation", service: "Photo- & Videography" },
  { id: 12, name: "Black Dream Creation", service: "Photo- & Videography" },
  { id: 13, name: "Lets go Travel AG", service: "Travel, Visa, Transport & more" },
  { id: 14, name: "Air India", service: "Travel, Visa, Transport & more" },
  { id: 15, name: "Nallur Travels", service: "Travel, Visa, Transport & more" },
  { id: 16, name: "FlyJet India", service: "Travel, Visa, Transport & more" },
  { id: 17, name: "Sky Auto AG", service: "Travel, Visa, Transport & more" },
  { id: 18, name: "Infini Travel", service: "Travel, Visa, Transport & more" },
  { id: 19, name: "Tawiss", service: "Dance Shows / Choreography" },
  { id: 20, name: "TVS Entertainment", service: "Dance Shows / Choreography" },
  { id: 21, name: "Arathi GmbH", service: "Catering" },
  { id: 22, name: "Swiss Tamil Party Service", service: "Catering" },
  { id: 23, name: "Madras Dosa", service: "Catering" },
  { id: 24, name: "Ayesha Hair & Make Up", service: "Beauty, Textil & Jewels" },
  { id: 25, name: "Aara Traditional Collection", service: "Beauty, Textil & Jewels" },
  { id: 26, name: "Bijoux by Hemasinha", service: "Beauty, Textil & Jewels" },
  { id: 27, name: "Selvam Wedding Events", service: "Decoration" },
  { id: 28, name: "Mandram", service: "Decoration" },
  { id: 29, name: "Sakthi Wedding Service GmbH", service: "Decoration" },
  { id: 30, name: "Infinibooth", service: "Photobooth, 360 Video and more" },
  { id: 31, name: "Dreamspix", service: "Photobooth, 360 Video and more" },
  { id: 32, name: "Nola Me", service: "Special Effects" },
  { id: 33, name: "Sekar Swiss", service: "Print & Designs" },
  { id: 34, name: "Nine Unique Design", service: "Print & Designs" },
  { id: 35, name: "Chronize", service: "Ticket Sale" },
  { id: 36, name: "Queens Eventlocation", service: "Location" },
  { id: 37, name: "Eventfabrik Bern", service: "Location" },
  { id: 38, name: "Royal's Bar", service: "Cocktail- & Mocktail Bar" },
  { id: 39, name: "TVS Entertainment", service: "Cocktail- & Mocktail Bar" },
  { id: 40, name: "The Crown Entertainment", service: "Cocktail- & Mocktail Bar" },
  { id: 41, name: "Audiopetti", service: "Others" },
  { id: 42, name: "VFR Management", service: "Others" }
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────
export const projectCategories = ["Private Events", "Public Events", "Corporate Events"];

export const projects = [
  {
    id: 1,
    category: "Public Events",
    title: "MAYILEH - CLUBEVENT",
    date: "20th June 2024",
    client: "GR EVENTS",
    description: "Back-Office management, flyer design & comprehensive promotion.",
    partners: ["GR Events"]
  },
  {
    id: 2,
    category: "Public Events",
    title: "PREMGI - CONCERT",
    date: "9th August 2024",
    client: "GETAM ENTERTAINMENT",
    description: "Targeted promotion & professional artist support.",
    partners: ["Getam Entertainment"]
  },
  {
    id: 3,
    category: "Public Events",
    title: "WARRIORS BACK TO 90's",
    date: "7th September 2024",
    client: "The Crown Entertainment",
    description: "Effective media campaign & innovative promotion.",
    partners: ["The Crown Entertainment"]
  },
  {
    id: 4,
    category: "Public Events",
    title: "THE GOAT - CLUBEVENT",
    date: "28th September 2024",
    client: "GR EVENTS",
    description: "Comprehensively managed the event with organization, promotion and artist support.",
    partners: ["GR Events", "Alpha Studios", "DJ Jene"]
  },
  {
    id: 5,
    category: "Public Events",
    title: "MOVING ON - COMEDY SHOW",
    date: "18th & 19th October 2024",
    client: "OPTIMEYE GMBH",
    description: "Planned, coordinated and perfectly implemented.",
    partners: ["Optimeye"]
  },
  {
    id: 6,
    category: "Corporate Events",
    title: "VIVAHAA WEDDING SHOW",
    date: "1st & 2nd March 2025",
    client: "BUDGET EVENT x OPTIMEYE GMBH",
    description: "Trade fair with on-site coordination.",
    partners: ["Optimeye", "Budget Event"]
  },
  {
    id: 7,
    category: "Public Events",
    title: "ALT + TAB - COMEDY SHOW",
    date: "12th & 16th March 2025",
    client: "OPTIMEYE GMBH",
    description: "Thought-out planning and realization.",
    partners: ["Optimeye"]
  }
];

export const targetGroups = [
  {
    title: "Private Customers",
    description: "Our services cater to couples, families, and individuals looking to celebrate life's special moments. From intimate weddings to milestone birthdays, anniversaries, and family reunions, we ensure that each event is personalized and thoughtfully curated."
  },
  {
    title: "Companies",
    description: "We provide comprehensive event management solutions for businesses seeking to organize professional and impactful events. Whether it's corporate meetings, team-building exercises, product launches, or company anniversaries, we ensure a smooth and efficient event that aligns with the company's goals."
  },
  {
    title: "Event Organizers",
    description: "For large-scale event organizers, including those planning concerts, festivals, or public celebrations, Plan B - The Eventguide offers expert planning and logistical support. We handle venue management, vendor coordination, crowd control, and entertainment."
  }
];

// ─── CLIENT FEEDBACK / TESTIMONIALS ─────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    clientName: "GR Events",
    eventDate: "28.09.2024",
    eventType: "Club Concert",
    quote: "Hey Plan B Team, Wow, what a night! With 700+ guests, it was a massive success, and we seriously couldn't have done it without you guys! We were completely blown away by your planning, creative ideas, and marketing. Any problem that came up, you had a solution ready before we could even finish the sentence. And the way you took care of the artists was amazing. It was so genuine but also super professional. A huge thank you for everything! You're the best!"
  },
  {
    id: 2,
    clientName: "Subinthan & Vithuja",
    eventDate: "01.09.2024",
    eventType: "Proposal",
    quote: "Thank you Plan B Team. We're so happy that we chose Plan B for our proposal. The team was kind and patient, & delivered exactly what we wanted in a short time. The décor was stunning! Thank you for everything! We couldn't have done it without you. You went beyond our expectations. You're truly amazing!"
  },
  {
    id: 3,
    clientName: "Let's Go Travel AG",
    eventDate: "14.04.2025",
    eventType: "Grand Opening",
    quote: "Dear Plan B - The Eventguide. We are grateful to the entire team for organizing our Grand Opening at the new location. Every detail was handled with great care, professionalism, and passion. Our guests felt welcomed, enjoyed a delicious apéro, and had the chance to connect in a warm atmosphere. It was a memorable celebration that perfectly marked the start of this new chapter. Keep growing, keep shining!"
  }
];
