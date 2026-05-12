// ─── SITE CONFIG ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Plan B",
  fullName: "Plan B – The Eventguide",
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

// Project Images
import goatImg from '../assets/homeProjects/Goat.jpg';
import mayilehImg from '../assets/homeProjects/Mayieh.jpg';
import premgiImg from '../assets/homeProjects/Premji.jpg';
import ffImg from '../assets/homeProjects/The-film-factory.jpg';
import othersImg from '../assets/homeProjects/Others.jpg';

// Event Category Images (from OneDrive)
import corpEvent from '../assets/events/corporate.jpg';
import privateEvent from '../assets/events/private.jpg';
import publicEvent from '../assets/events/public.jpg';
import painteraImg from '../assets/events/paintera.jpg';
import ayeshaImg from '../assets/events/ayesha.jpg';
import anojanImg from '../assets/events/anojan.jpg';
import thasmijaImg from '../assets/events/thasmija.jpg';
import babuGowryImg from '../assets/events/babu_gowry.jpg';
import manojaMarkoImg from '../assets/events/manoja_marko.jpg';
import jaciImg from '../assets/events/jaci.jpg';
import avvvImg from '../assets/events/avvv.jpg';
import mayilehImgEvent from '../assets/events/mayileh.jpg';
import mervynImg from '../assets/events/mervyn.jpg';
import monikaImg from '../assets/events/monika.png';
import premgiImgEvent from '../assets/events/premgi.jpg';
import witpImg from '../assets/events/witp.png';
import subinthanVithujaImg from '../assets/events/subinthan_vithuja.jpg';
import kathushanThenukaImg from '../assets/events/kathushan_thenuka.jpg';
import tharshanMaunikaImg from '../assets/events/tharshan_maunika.jpg';

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
  {
    name: "Projects",
    path: "/projects",
    dropdown: [
      { name: "Private Events", path: "/projects?category=Private Events" },
      { name: "Public Events", path: "/projects?category=Public Events" },
      { name: "Corporate Events", path: "/projects?category=Corporate Events" }
    ]
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export const aboutContent = {
  intro: "Plan B – The Eventguide is a Switzerland-based event management company focused on delivering high-quality, culturally driven experiences. The company specializes in the planning, production, and execution of events that connect communities, creatives, and audiences in meaningful ways.",
  extended: "Plan B – The Eventguide stands for tailor-made events throughout Switzerland, from weddings and corporate events to cultural events and private celebrations. We combine creative ideas, precise organisation and a strong network of partners to create all-in-one packages.",
  founderNote: "As the founder, my vision was always to create more than just an event agency. I wanted to build a bridge between creative vision and flawless execution, especially for the Tamil community in Europe. Every project we take on is a commitment to excellence.",
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
  quote: "To be the guiding star in the universe of events, where every detail is a masterpiece of precision and every moment a legacy of excellence.",
  filmfactoryQuote: "WE BELIEVE THAT FILMS CAN CHANGE SOCIETY — THEY CREATE A SENSE OF BELONGING, BUILD BRIDGES, AND CONNECT GENERATIONS."
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
    ],
    workshops: [
      { title: "Cinematography Masterclass", date: "TBA 2025" },
      { title: "Screenwriting Workshop", date: "TBA 2025" },
      { title: "Editing & Post-Production", date: "TBA 2025" }
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
  // Private Events
  {
    id: 1,
    category: "Private Events",
    title: "25th Birthday - Pritthiya",
    date: "15.06.2024",
    client: "Pritthiya",
    description: "Planned to perfection and executed with agility. For this milestone celebration, the focus was on blending meticulous \"small-detail\" aesthetics with the high-energy demands of a 25th birthday. Even with last-minute adjustments, the execution remained flawless—proving that a stress-free experience for the client is always the priority, no matter how the plan evolves.",
    image: privateEvent,
    partners: ["Plan B Team"]
  },
  {
    id: 2,
    category: "Private Events",
    title: "60th Birthday - Anojan",
    date: "14.07.2024",
    client: "Anojan",
    description: "True luxury lies in the details. For this landmark 60th birthday, we balanced the intimacy of a close-knit gathering with the complexity of a deep cultural and traditional affair. Executing a surprise requires absolute precision; we ensured every element was in place for the \"big reveal,\" delivering a seamless, stress-free celebration that honored tradition while providing a modern, premium experience.",
    image: anojanImg,
    partners: ["Plan B Team"]
  },
  {
    id: 3,
    category: "Private Events",
    title: "21st Birthday - Thasmija",
    date: "10.08.2024",
    client: "Thasmija",
    description: "For this 21st milestone, we took \"themed parties\" to the next level. Featuring a premium red carpet entry and a luxury photo corner, the atmosphere was pure gold. The highlight of the evening was a personalized \"Oscar\" award ceremony, celebrating the guest of honor’s circle with humor and heart. Executed with our signature agility, this event proved that high-end production and genuine fun go hand-in-hand.",
    image: thasmijaImg,
    partners: ["Plan B Team"]
  },
  {
    id: 4,
    category: "Private Events",
    title: "Proposal - Subinthan & Vithuja",
    date: "01.09.2024",
    client: "Subinthan & Vithuja",
    description: "We scouted the perfect lake-view location, balancing the grandeur of the Swiss mountains with an intimate, private setup. To elevate the experience, we coordinated a private boat excursion to the center of the lake for the proposal itself. The moment was captured through a bespoke, cinematic video shoot, ensuring the transition from the UK to the Swiss peaks was as seamless as it was breathtaking.",
    image: subinthanVithujaImg,
    partners: ["Plan B Team", "Optimeye"]
  },
  {
    id: 5,
    category: "Private Events",
    title: "Proposal - Kathushan & Thenuka",
    date: "28.12.2024",
    client: "Kathushan & Thenuka",
    description: "Planned to perfection amidst the snow. For this proposal, we took advantage of the breathtaking \"fully white\" landscape of Blausee to create a scene that felt like a movie set. Mountains, snow-covered pines, and the deep blue of the lake provided the backdrop; we provided the seamless execution. Whether it’s sun or snow, we ensure the environment is harnessed to tell your unique love story.",
    image: kathushanThenukaImg,
    partners: ["Plan B Team"]
  },
  {
    id: 6,
    category: "Private Events",
    title: "Proposal - Tharshan & Maunika",
    date: "14.02.2025",
    client: "Tharshan & Maunika",
    description: "For this Valentine’s Day proposal, we turned the night into a cinematic dream. With a blindfolded entry, a pathway of red roses, the glow of candles, a series of beautifully styled photo frames showcasing the couple’s most cherished moments, we created an atmosphere of pure premium romance. Every detail—from the background music to the final \"Yes\"—was managed with our signature precision. We don't just set the stage; we create the memory.",
    image: tharshanMaunikaImg,
    partners: ["Plan B Team"]
  },
  {
    id: 7,
    category: "Private Events",
    title: "30th Wedding Anniversary - Babu & Gowry",
    date: "22.02.2025",
    client: "Babu & Gowry",
    description: "Managing a 30th Anniversary of this size requires more than just planning; it requires a masterclass in logistics. We oversaw the entire lifecycle of the event—including catering, bar services, and entertainment—while handling all on-site coordination and the complete setup/teardown process. This project highlights our ability to manage large crowds and complex vendor teams while ensuring the atmosphere remains personal, warm, and expertly polished.",
    image: babuGowryImg,
    partners: ["Plan B Team", "Arathi GmbH", "Royal's Bar"]
  },
  {
    id: 8,
    category: "Private Events",
    title: "Wedding Reception - Manoja & Marko",
    date: "03.05.2025",
    client: "Manoja & Marko",
    description: "Cultural fusion requires a delicate balance and a sharp eye for elegance. For this intimate wedding, we bridged the gap between Swiss and Tamil traditions, creating a smooth and respectful flow from start to finish. We provided a total A–Z service, including bespoke decoration, DJ, premium catering, and a professional service team. By handling everything—from the initial setup to the final teardown—we ensured that the only thing our clients had to focus on was their new life together.",
    image: manojaMarkoImg,
    partners: ["Plan B Team", "DJ Tharshan", "Arathi GmbH"]
  },
  {
    id: 9,
    category: "Private Events",
    title: "Mehendi - Pritthiya",
    date: "23.05.2025",
    client: "Pritthiya",
    description: "For Pritthiya’s Mehendi function, we focused on the nuances that make traditional events so special. We provided a complete setup that balanced vibrant aesthetics with functional coordination. By managing the timeline and the \"small details\" on-site, we ensured a flawless execution that honored the beauty of the ceremony. Another beautiful chapter in our journey with Pritthiya, delivered with the signature Plan B touch.",
    partners: ["Plan B Team"]
  },
  {
    id: 10,
    category: "Private Events",
    title: "30th Birthday - Jaci",
    date: "09.08.2025",
    client: "Jaci",
    description: "A successful surprise starts long before the guests arrive. We began by designing a bespoke digital invitation to set the tone and manage the secret guest list. For the event itself, we transformed the space with custom decoration and managed a full-service bar, photo booth, and premium catering. By providing dedicated on-site coordination, we ensured the \"big reveal\" was perfectly timed and the rest of the night flowed seamlessly.",
    image: jaciImg,
    partners: ["Plan B Team", "Infinibooth", "Arathi GmbH"]
  },

  // Public Events
  {
    id: 11,
    category: "Public Events",
    title: "Mayileh - Club Event",
    date: "28.06.2024",
    client: "Mayileh",
    description: "When the scale gets bigger, the details matter even more. For Mayileh, we provided a complete management package. Starting with the flyer design and moving through Artist Management and Staffing, our team was responsible for the full lifecycle of the event. On the day of the show, our on-site coordination ensured a flawless experience for both the artists and the audience.",
    image: mayilehImgEvent,
    partners: ["Plan B Team"]
  },
  {
    id: 12,
    category: "Public Events",
    title: "Premgi - Concert",
    date: "09.08.2024",
    client: "Premgi",
    description: "This event was a true game changer for Plan B, as we took the lead on the digital promotion strategy. We produced three bespoke concept videos designed to build momentum and \"hype\" across social platforms. To convert views into attendance, we launched a high-engagement giveaway campaign that attracted a massive audience and expanded the event's reach exponentially. This project demonstrated our ability to blend creative content with strategic marketing to fill seats and create a buzz that lasts.",
    image: premgiImgEvent,
    partners: ["Plan B Team"]
  },
  {
    id: 13,
    category: "Public Events",
    title: "The GOAT x Thean Kudikka Tour",
    date: "29.09.2024",
    client: "The GOAT",
    description: "The Goat was a showcase of Plan B’s ability to handle high-level complexity. We were responsible for the complete lifecycle of the event—starting with creative flyer design and ending with the final staffing and on-site coordination. Most importantly, we led the Artist Management, providing a personal touch that included everything from airport transfers to local guiding. When we say \"fully organized,\" we mean every single detail is covered.",
    image: publicEvent,
    partners: ["Plan B Team", "The Crown Entertainment"]
  },
  {
    id: 14,
    category: "Public Events",
    title: "Merviyn Moving On - StandUp Comedy",
    date: "18.10.2024 & 19.10.2024",
    client: "Merviyn",
    description: "Success in comedy is all about timing, and that applies to the logistics as much as the jokes. Plan B managed the complex movement of this two-day event across different locations. We provided a seamless Artist Concierge service, including specialized pick-up and drop-off schedules to ensure the talent arrived fresh for every set. From providing a dedicated event-day staff to maintaining rigorous on-site coordination at both venues, we ensured that the transition between cities was invisible to the audience.",
    image: mervynImg,
    partners: ["Plan B Team", "Optimeye"]
  },
  {
    id: 15,
    category: "Public Events",
    title: "Vivaaha - South Asian Wedding Expo",
    date: "01.03.2025 & 02.03.2025",
    client: "Vivaaha",
    description: "For Switzerland’s branded South Asian wedding exhibition, Plan B provided comprehensive on-site coordination across two high-energy days. Managing a project of this scale requires precision, quick thinking, and a deep understanding of the wedding industry. We ensured that every vendor, speaker, and guest experienced a perfectly organized event.",
    partners: ["Plan B Team", "Optimeye"]
  },
  {
    id: 16,
    category: "Public Events",
    title: "Anna Varar Vali Vidu - Movie Night x Clubevent",
    date: "07.06.2025",
    client: "Anna Varar Vali Vidu",
    description: "From Cinema to Celebration. For this dedicated Vijay fans' tribute, Plan B provided a complete event package. Starting with creative flyer design and promotion, we mobilized the community. Our on-site team then coordinated the 360° experience: a curated screening of \"Friends,\" followed by a smooth transition into an all-night party. Our dedicated staffing ensured a high-vibe, safe, and memorable experience that honored the culture and the fans.",
    image: avvvImg,
    partners: ["Plan B Team"]
  },
  {
    id: 17,
    category: "Public Events",
    title: "Monika - Clubevent",
    date: "09.08.2025",
    client: "Monika",
    description: "In the world of high-end nightlife, success is built on collaboration. For the Monika club event, Plan B operated alongside top-tier presenters including The Crown Entertainment, TLS Events, and JK Events. This project was a testament to our ability to integrate seamlessly into a large-scale production team. We brought our signature precision and on-site expertise to a fast-paced environment, working in synergy with the best in the business to deliver a premium, high-energy clubbing experience.",
    image: monikaImg,
    partners: ["Plan B Team", "The Crown Entertainment", "TLS Events", "JK Events"]
  },
  {
    id: 18,
    category: "Public Events",
    title: "Where is the Party - Clubevent",
    date: "30.08.2025",
    client: "Where is the Party",
    description: "Speed meets style. For this collaboration with The Crown and JK Events, Plan B handled everything from the flyer design to the live coordination. Despite the short planning window, we created a visual buzz and a physical atmosphere that kept the crowd partying all night.",
    image: witpImg,
    partners: ["Plan B Team", "The Crown Entertainment", "JK Events"]
  },

  // Corporate Events
  {
    id: 19,
    category: "Corporate Events",
    title: "PaintEra - Grand Opening",
    date: "02.11.2024",
    client: "PaintEra",
    description: "For the grand opening of PaintEra, we focused on translating the studio’s artistic identity into a physical experience. We curated a premium, minimalist atmosphere that reflected the precision and clean lines of the tattoo industry. Every detail—from the sleek decoration to the high-end catering—was selected to elevate the brand’s image. Our goal was to create a space where guests felt the studio’s professionalism the moment they walked through the door.",
    image: painteraImg,
    partners: ["Plan B Team"]
  },
  {
    id: 20,
    category: "Corporate Events",
    title: "Ayesha MUAH - Workshop",
    date: "27.04.2024",
    client: "Ayesha MUAH",
    description: "For Ayesha MUAH’s masterclass, Plan B specialized in the student experience. We designed, organized, and delivered bespoke Goodie Bags that served as a premium highlight for the attendees. This project demonstrates our ability to support educators and artists by managing the essential details that make a workshop feel professional and complete.",
    image: ayeshaImg,
    partners: ["Plan B Team"]
  },
  {
    id: 21,
    category: "Corporate Events",
    title: "Let's go Travel AG - Grand Opening",
    date: "14.04.2025",
    client: "Let's go Travel AG",
    description: "For the grand opening of Lets go Travel AG, we provided a complete hospitality and coordination package. Our team managed a premium buffet apéro and minimalist decor to create a sophisticated atmosphere for the agency's new chapter. With Plan B handling the on-site logistics, the launch was as smooth as a well-planned itinerary.",
    image: corpEvent,
    partners: ["Plan B Team", "Lets go Travel AG"]
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
    clientName: "LETS GO TRAVEL AG",
    eventDate: "14.04.2025",
    eventType: "GRAND OPENING",
    image: corpEvent,
    quote: "Dear Plan B - The Eventguide We are grateful to the entire team for organizing our Grand Opening at the new location. Every detail was handled with great care, professionalism, and passion. Our guests felt welcomed, enjoyed a delicious apéro, and had the chance to connect in a warm atmosphere. It was a memorable celebration that perfectly marked the start of this new chapter. Keep growing, keep shining!"
  },
  {
    id: 2,
    clientName: "GR EVENTS",
    eventDate: "28.09.2024",
    eventType: "CLUB CONCERT",
    image: publicEvent,
    quote: "Hey Plan B Team, Wow, what a night! With 700+ guests, it was a massive success, and we seriously couldn't have done it without you guys! We were completely blown away by your planning, creative ideas, and marketing. Any problem that came up, you had a solution ready before we could even finish the sentence. And the way you took care of the artists was amazing. It was so genuine but also super professional. A huge thank you for everything! You're the best!"
  },
  {
    id: 3,
    clientName: "GR EVENTS",
    eventDate: "29.06.2024",
    eventType: "CLUB PARTY",
    image: "/src/assets/partnerlogo/Partners1.jpg",
    quote: "Dear Plan B Team, We are truly grateful for your support during the preparations for the \"MAYILEH\" event! Your expertise and professionalism made the entire process so much smoother, and we were thrilled with the final result. Thank you for guiding us and designing our flyers. We look forward to working with you again for our upcoming events. This cooperation will surely continue!"
  },
  {
    id: 4,
    clientName: "MARCO & MANOJA",
    eventDate: "03.05.2025",
    eventType: "WEDDING PARTY",
    image: "/src/assets/projects/Projects1.jpg",
    quote: "We booked Plan B for our wedding party. They handled the complete organization of the party. A young team full of energy. Everything went perfectly and nothing was missing. The Plan B team is very flexible and took all of our wishes into account during the planning and execution, and they skillfully implemented even our last-minute requests. Our guests were very satisfied. We are happy to recommend Plan B - The Eventguide!"
  },
  {
    id: 5,
    clientName: "THILA & PRITTHI",
    eventDate: "23.05.2025",
    eventType: "MEHENDI",
    image: "/src/assets/projects/Projects2.jpg",
    quote: "Hey, I just wanted to thank you again for your amazing organization at my Mehendi. You put so much effort into making sure my wishes were implemented exactly as I had envisioned and I truly appreciate that. Especially the great setup and the fact that everything was ready right on time as I wanted, it was wonderful. Your outstanding commitment during the Mehendi also stood out to me, it was so kind and absolutely commendable. So keep it up and always stay this amazing."
  },
  {
    id: 6,
    clientName: "JACI & RUBA",
    eventDate: "09.08.2025",
    eventType: "30TH BIRTHDAY",
    image: "/src/assets/projects/Projects3.jpg",
    quote: "Dear Plan B, I can't thank you enough for everything you did. From the beautiful decoration to organizing the bar and taking care of all the little details. The whole process was so easy with you, and for a surprise party, I truly couldn't have wished for a better planner. What I appreciated the most was that you didn't just act as a planner in a professional sense. You were also personally very helpful and supportive. Everything turned out even more perfect than I had imagined, and I'm so grateful for the care you put into making this day so special."
  },
  {
    id: 7,
    clientName: "BABU & GOWRY",
    eventDate: "22.02.2025",
    eventType: "30TH WEDDING ANNIVERSARY",
    image: "/src/assets/projects/Projects4.jpg",
    quote: "Deaf Plan B, Plan B planned, organized, and coordinated the event with passion and precision. Every decision was made with care and attention to detail. From welcoming our guests to providing entertainment, everything was perfectly timed and seamlessly executed. Thanks Fam!"
  },
  {
    id: 8,
    clientName: "PRITTHIYA",
    eventDate: "15.06.2024",
    eventType: "25TH BIRTHDAY",
    image: privateEvent,
    quote: "Dear Plan B Team! Thank you so much for your great engagement!!!! Everything was set up exactly how I wanted it & you exceeded my expectations! It looked simple & subtle, and I've received great feedback about the décor and everything around it. Thank you so much, especially for all your time, being on site and delegating everything smoothly. I definitely won't be booking you for the last time"
  },
  {
    id: 9,
    clientName: "THASMIJA",
    eventDate: "10.08.2024",
    eventType: "21ST BIRTHDAY",
    image: "/src/assets/projects/Projects6.jpg",
    quote: "A big thank you to the Plan B Team for organizing my 21st birthday party! You picked the perfect theme and took care of everything – from the decorations to the food – so I didn't have to worry about a thing. I could just enjoy and celebrate with my loved ones. Thanks Fam, You're amazing!"
  }
];
