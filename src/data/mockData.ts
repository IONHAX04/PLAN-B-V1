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
      instagram: "https://www.instagram.com/planb_theeventguide?igsh=MTRxNXNxMGx2czRocg==",
      instagramFilmfactory: "https://www.instagram.com/planb_thefilmfactory?igsh=MXNnZzNpZ2Q0am96OQ==",
      facebook: "https://www.facebook.com/share/18dazkuGhW/",
      linkedin: "https://www.linkedin.com/in/planb-theeventguide?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      youtube: "https://youtube.com/@planb_theeventguide?si=0eNODYii_Gjs-SyQ",
      tiktok: "https://www.tiktok.com/@planb_theeventguide?_r=1&_t=ZN-96NEMKcKkJ4",
      x: "https://x.com/planbeventguide?s=21"
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

// Event Category Images (from OneDrive)
import corpEvent from '../assets/events/corporate.jpg';
import privateEvent from '../assets/events/private.jpg';
import painteraImg from '../assets/events/paintera.jpg';
import ayeshaImg from '../assets/events/ayesha.jpg';
import anojanImg from '../assets/events/anojan.jpg';
import thasmijaImg from '../assets/events/thasmija.jpg';
import babuGowryImg from '../assets/events/babu_gowry.jpg';
import manojaMarkoImg from '../assets/events/manoja_marko.jpg';
import jaciImg from '../assets/events/jaci.jpg';
import avvvImg from '../assets/events/avvv.jpg';
import mayilehImgEvent from '../assets/events/mayileh.jpg';
import goatImg from '../assets/events/goat_2.jpg';
import mervynImg from '../assets/events/mervyn.jpg';
import monikaImg from '../assets/events/monika.png';
import premgiImgEvent from '../assets/events/premgi.jpg';
import witpImg from '../assets/events/witp.png';
import subinthanVithujaImg from '../assets/events/subinthan_vithuja.jpg';
import kathushanThenukaImg from '../assets/events/kathushan_thenuka.jpg';
import tharshanMaunikaImg from '../assets/events/tharshan_maunika.jpg';
import mehendiImg from '../assets/events/mehendi.jpg';
import vivaahaImg from '../assets/events/vivaaha.jpeg';



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
  hero: {
    title: "Where Vision Meets the Frame",
    description: "Plan B – The Filmfactory is the dedicated cinematic arm of Plan B – The Eventguide. Born out of a passion for visual storytelling, we were established to bridge the gap between aspiring creators and the professional film industry. We don’t just host events; we build a sanctuary for rising talents to refine their craft, share their voices, and see their stories come to life on the big screen.",
    pillarsIntro: "Through our two core pillars, we turn artistic potential into cinematic reality:",
    pillars: [
      { 
        id: "first-take", 
        title: "First Take", 
        subtitle: "Tamil Short Film Festival Switzerland",
        description: "A premier platform celebrating the depth and diversity of Tamil cinema. We provide a professional stage for filmmakers to showcase their work to a global audience."
      },
      { 
        id: "my-frame", 
        title: "My Frame | My Story", 
        subtitle: "Individual Creator Initiative",
        description: "An initiative focused on the individual creator. Through workshops and talent development, we empower the next generation to master the 'frame' and tell their unique 'story.'"
      }
    ]
  },
  aboutFirstTake: {
    title: "About First Take – Tamil Short Film Festival",
    tagline: "Empowering Voices. Celebrating Stories. Connecting Cultures.",
    description: "First Take is Switzerland’s premier platform dedicated to the art of Tamil filmmaking. Launched in 2025, our mission is to provide emerging creative talents across Europe with a professional stage to showcase their work, tell their unique stories, and connect with a global audience.\n\nWhat began as a local competition has rapidly evolved into a structured, high-energy film festival. By bridging the gap between local talent and the international film industry, First Take fosters a diverse and inclusive cinematic ecosystem. We believe that storytelling is a shared experience—one that strengthens identity, builds community, and inspires the next generation of filmmakers."
  },
  firstTake: {
    year2025: {
      title: "First Take 2025",
      description: "The first edition of First Take took place on 5th April 2025, at Cinema Claudia in Kloten. What began as a bold idea quickly became a milestone for the Tamil cultural scene in Europe. It was more than just a film screening; it was a vibrant space for connection. Over 300+ guests — including filmmakers, families, artists, and media professionals — filled the sold-out cinema to witness an event that had never existed in this form before.",
      stats: [
        { label: "Films Screened", value: "19" },
        { label: "Submissions", value: "26" },
        { label: "Attendees", value: "300+" }
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
      jury: [
        {
          name: "Director Mithran R Jawahar",
          credits: "Director of Thiruchitrambalam, Yaaradi Nee Mohini, & Uthamaputhiran, Kutty and more",
          description: "A veteran filmmaker with a golden touch for family dramas and romantic comedies, Mithran R Jawahar is celebrated for his ability to capture the pulse of the general audience. His record-breaking success with Thiruchitrambalam (2022) solidified his position as a director who balances star power with grounded, relatable storytelling. His presence on our jury provided our filmmakers with insights into large-scale production, audience relatability, and the art of crafting evergreen cinema."
        }
      ]
    },
    year2026: {
      title: "First Take 2026",
      tagline: "Expanding Horizons & Elevating Tamil Cinema in Switzerland",
      description: "Building on the incredible momentum of our debut, First Take 2026 marked a major milestone in our journey. Moving to the city of Bern, the event evolved from a single-day competition into a comprehensive two-day Tamil Short Film Festival, doubling our impact and reach.\n\nA Growing Community: We welcomed over 750 attendees, creating a vibrant atmosphere of cultural exchange and cinematic passion.\n\nCurated Excellence: The program showcased 15 officially selected short films on the opening day, followed by an expanded second day featuring a total of 20 films.",
      stats: [
        { label: "Films screened", value: "20" },
        { label: "Submissions", value: "40" },
        { label: "Attendees", value: "750+" }
      ],
      winners: [
        { category: "BEST SCREENPLAY", winner: "Abilash Selvakumaran", film: "Nizhal" },
        { category: "BEST CINEMATOGRAPHER", winner: "K M Agash", film: "Blacksheep" },
        { category: "BEST EDITOR", winner: "Nirojan Karunakaran", film: "Demon" },
        { category: "BEST MUSIC DIRECTOR", winner: "Divith Mukilarasan", film: "Blacksheep" },
        { category: "BEST COSTUME DESIGNER", winner: "Adian Ramanathas", film: "Saagavaram" },
        { category: "BEST CREATIVE CONCEPT", winner: "Franjan Sathananthasivam", film: "The Capitalism" },
        { category: "BEST ACTOR", winner: "Adian Ramanathas", film: "Saagavaram" },
        { category: "BEST ACTRESS", winner: "Kalaivani Anpalagan", film: "Kaathiruppen" },
        { category: "BEST SOCIAL MESSAGE", winner: "Mithulan Sithamparanathan", film: "Thidam" },
        { category: "MOST ENTERTAINMENT FILM", winner: "Mathirran Gunalingam", film: "Soulmate" },
        { category: "BEST CHILD ARTIST", winner: "Jathursan Vijeyanantha", film: "Unakkul Oruvan" },
        { category: "JURY AWARD", winner: "Aathish Srikaran", film: "Unakkul Oruvan" },
        { category: "AUDIENCE CHOICE AWARD", winner: "Abiram Kalaventhan", film: "En Vaeli Thani Vali" },
        { category: "MOST PROMISING FILMMAKER", winner: "Tharushan Thayaskumar", film: "Verulee" },
        { category: "BEST DIRECTOR", winner: "Nirojan Karunakaran", film: "Demon" },
        { category: "BEST SHORT FILM", winner: "Abiram Kalaventhan", film: "En Vaeli Thani Vaeli" }
      ],
      jury: [
        {
          name: "Director Tamizh",
          credits: "Director of Taanakkaran, Marshall & Writer of Sirai",
          description: "A former police officer turned filmmaker, Director Tamizh took the industry by storm with his critically acclaimed debut, Taanakkaran. Known for his raw, authentic storytelling and uncompromising realism, he brought a deep understanding of narrative grit and character depth to our jury panel."
        },
        {
          name: "Director Ganesh K Babu",
          credits: "Director of Dada & Karate Babu",
          description: "With the blockbuster success of Dada, Ganesh K Babu established himself as a master of modern emotions and soulful storytelling. His ability to blend humor with heart and his keen eye for performances provided our participants with invaluable perspective on commercial viability and emotional resonance."
        }
      ]
    }
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
  },
  links: {
    joinCommunity: "https://form.jotform.com/251186328795367"
  }
};

// ─── PARTNERS ───────────────────────────────────────────────────────────────
export const partnersIntro = "We cooperate with carefully selected partners in the areas of catering, decoration, technology and entertainment. Thanks to these strong networks, you get access to exclusive benefits, attractive discounts and premium service that is reserved exclusively for our customers.";

export const partners = [
  // Beauty, Textil & Jewels
  { 
    id: 25, 
    name: "Aara Traditional Collection", 
    service: "Beauty, Textil & Jewels",
    description: "Aara specializes in authentic traditional attire, offering a stunning range of Sarees, Lehengas, and Salwar suits. With dedicated collections for men and children, they are a one-stop shop for family ethnic wear. Through our partnership, Plan B customers enjoy exclusive discounts and a premium shopping experience across their entire traditional range."
  },
  { 
    id: 24, 
    name: "Ayesha Hair & Make Up", 
    service: "Beauty, Textil & Jewels",
    description: "With years of mastery in the industry, Ayesha specializes in high-end hair and makeup artistry. Known for her attention to detail, she also offers a curated selection of premium textiles and jewelry to provide a complete styling experience. Through our partnership, Plan B clients receive exclusive VIP service, attractive discounts, and the highest standard of beauty care."
  },
  { 
    id: 26, 
    name: "Bijoux by Hemasinha", 
    service: "Beauty, Textil & Jewels",
    description: "Discover the beauty of artisan craftsmanship with Bijoux by Hemasinha. Offering a stunning array of handmade and customizable designer jewelry, this partner specializes in creating one-of-a-kind pieces tailored to your vision. Through our partnership, Plan B customers gain exclusive access to these designer collections, enjoying premium service and attractive benefits on every custom creation."
  },

  // Catering
  { 
    id: 21, 
    name: "Arathi GmbH", 
    service: "Catering",
    description: "Arathi GmbH is a premier catering specialist dedicated to delivering authentic flavors and high-quality service for any event. With a focus on excellence and professional hospitality, they ensure every occasion is catered to perfection. Through our partnership, Plan B customers enjoy premium service, exclusive benefits, and attractive discounts on their full range of catering solutions."
  },
  { 
    id: 23, 
    name: "Madras Dosa", 
    service: "Catering",
    description: "Madras Dosa specializes in the art of South Indian cuisine, bringing the authentic taste of crispy, flavorful dosas and traditional accompaniments to your event. Known for their live catering and fresh preparation, they add a unique culinary touch to any gathering. Through our partnership, Plan B customers receive VIP service, exclusive benefits, and attractive discounts on all catering packages."
  },
  { 
    id: 22, 
    name: "Swiss Tamil Party Service", 
    service: "Catering",
    description: "Swiss Tamil Party Service brings the rich, vibrant culinary heritage of Tamil culture to your special events. Specializing in traditional flavors and festive spreads, they provide a professional catering experience tailored to your guest list. As a Plan B partner, they offer our clients exclusive access to specialized menus, premium service, and member-only discounts."
  },

  // Cocktail- & Mocktail Bar
  { 
    id: 38, 
    name: "Royal's Bar", 
    service: "Cocktail- & Mocktail Bar",
    description: "Royal's Bar sets the standard for sophisticated event mixology. Specializing in a wide array of premium cocktails and creative mocktails, they bring a touch of class and high-energy service to any celebration. As a Plan B partner, Royal's Bar provides our clients with exclusive benefits, attractive discounts, and the premium service required to make your event truly royal."
  },
  { 
    id: 40, 
    name: "The Crown Entertainment", 
    service: "Cocktail- & Mocktail Bar",
    description: "The Crown Entertainment delivers a luxury bar experience, focusing on high-quality ingredients and artisanal cocktails and mocktails. Their team is dedicated to creating a vibrant atmosphere with a focus on premium presentation and guest satisfaction. As a Plan B member, you enjoy exclusive pricing and VIP service reserved for our elite community."
  },
  { 
    id: 39, 
    name: "TVS Entertainment", 
    service: "Cocktail- & Mocktail Bar",
    description: "TVS Entertainment offers a dynamic mobile bar experience, blending expert mixology with professional entertainment flair. Their extensive menu of cocktails and alcohol-free mocktails is designed to cater to every palate and event theme. Through our partnership, Plan B customers gain access to specialized packages, member-only discounts, and a dedicated level of service."
  },

  // Dance Shows / Choreography
  { 
    id: 19, 
    name: "Tawiss", 
    service: "Dance Shows / Choreography",
    description: "Tawiss is a premier dance collective known for high-energy performances and artistic storytelling. Specializing in vibrant dance shows, they bring a professional stage presence to any event. Beyond their performances, they offer bespoke choreography services for clients looking to add a personalized touch to their special day. As a Plan B partner, Tawiss provides our members with exclusive booking benefits, specialized rates, and premium service."
  },
  { 
    id: 20, 
    name: "TVS Entertainment", 
    service: "Dance Shows / Choreography",
    description: "TVS Entertainment delivers world-class dance entertainment tailored to captivate any audience. From spectacular live shows to professional choreography sessions for weddings and private events, their team ensures a flawless execution of movement and style. Through our partnership, Plan B customers enjoy priority access to their performers, attractive discounts, and the premium service that defines the TVS experience."
  },

  // Decoration
  { 
    id: 28, 
    name: "Mandram", 
    service: "Decoration",
    description: "Mandram offers bespoke decoration services that blend tradition with contemporary style. Known for their artistic approach and flawless execution, they specialize in creating immersive environments that capture the essence of your event. As a Plan B partner, Mandram provides our community with specialized pricing, priority consultations, and a dedicated level of service for all your decor needs."
  },
  { 
    id: 29, 
    name: "Sakthi Wedding Service GmbH", 
    service: "Decoration",
    description: "Sakthi Wedding Service GmbH is a leader in full-scale event styling and high-quality decor solutions. From intricate stage setups to comprehensive venue transformations, they bring years of experience and professional craftsmanship to every project. Through our partnership, Plan B customers enjoy exclusive access to premium decor packages, member-only discounts, and top-tier service."
  },
  { 
    id: 27, 
    name: "Selvam Wedding Events", 
    service: "Decoration",
    description: "Selvam Wedding Events is a specialist in creating breathtaking atmospheres for your most cherished moments. With an eye for detail and a passion for grand design, they transform venues into elegant spaces tailored to your unique vision. Through our partnership, Plan B clients receive exclusive benefits, attractive discounts, and the premium decoration service required for a truly memorable celebration."
  },

  // DJ
  { 
    id: 2, 
    name: "DJ Jene", 
    service: "DJ",
    description: "DJ Jene combines technical skill with a deep passion for music to create unforgettable event soundtracks. Specializing in high-end celebrations, he provides a sophisticated and energetic audio experience tailored to your specific taste. Through our partnership, Plan B members enjoy priority booking, specialized rates, and the premium professional service reserved for our exclusive community."
  },
  { 
    id: 1, 
    name: "DJ Tharshan", 
    service: "DJ",
    description: "DJ Tharshan is a master of atmosphere, known for his ability to read the crowd and deliver a seamless musical journey. With an extensive library spanning multiple genres, he brings professional sound and high-energy mixing to every event. As a Plan B partner, DJ Tharshan offers our clients exclusive booking benefits, attractive discounts, and a premium level of service to ensure your dance floor stays packed all night long."
  },
  { 
    id: 3, 
    name: "The Crown Entertainment - DJ Dondidi / DJ Jeythi", 
    service: "DJ",
    description: "The Crown Entertainment features the dynamic talents of DJ Dondidi and DJ Jeythi, offering a versatile and elite DJ experience. Whether you are looking for contemporary hits or traditional favorites, their team delivers a high-performance audio setup with flawless execution. As a Plan B partner, The Crown Entertainment provides our clients with exclusive member-only discounts and the highest standard of entertainment service."
  },

  // Host
  { 
    id: 5, 
    name: "GD – Denieshia", 
    service: "Host",
    description: "Denieshia (GD) is a highly skilled emcee specializing in sophisticated and high-impact event hosting. With a natural talent for storytelling and crowd management, she brings a polished and professional touch to every stage she commands. Through our partnership, Plan B members enjoy priority consultations, specialized member rates, and the premium level of service that ensures your event remains organized and unforgettable."
  },
  { 
    id: 4, 
    name: "Tom & Jerry Emcee - Banu / Nigitha", 
    service: "Host",
    description: "Tom & Jerry Emcee, featuring the charismatic Banu and Nigitha, brings a perfect blend of energy, humor, and professional coordination to your event. Known for their engaging stage presence and ability to connect with diverse audiences, they ensure your celebration flows seamlessly from start to finish. As a Plan B partner, they offer our clients exclusive booking benefits, attractive discounts, and the premium hosting service required for a truly lively atmosphere."
  },

  // Location
  { 
    id: 37, 
    name: "Eventfabrik Bern", 
    service: "Location",
    description: "Eventfabrik Bern is a premier venue known for its unique character and professional event facilities. Combining industrial charm with contemporary comfort, it offers a flexible space that can be tailored to any theme or guest list. As a Plan B partner, Eventfabrik Bern provides our members with exclusive venue perks, member-only pricing, and the high-standard service required to bring your vision to life in the heart of Bern."
  },
  { 
    id: 36, 
    name: "Queens Eventlocation", 
    service: "Location",
    description: "Queens Eventlocation offers a grand and versatile setting designed to host unforgettable celebrations. With its modern infrastructure and elegant ambiance, it provides the perfect backdrop for weddings, galas, and corporate events. Through our exclusive partnership, Plan B customers gain access to specialized booking benefits, attractive discounts, and a premium level of support from their dedicated venue team to ensure your event runs flawlessly."
  },

  // Photo- & Videography
  { 
    id: 7, 
    name: "2k Production", 
    service: "Photo- & Videography",
    description: "2k Production is synonymous with high-quality visual content, offering professional photography and videography tailored to modern events. With a focus on crisp imagery and creative angles, they bring your vision to life with technical excellence. Through our partnership, Plan B members enjoy specialized rates, priority scheduling, and a dedicated level of professional service."
  },
  { 
    id: 8, 
    name: "Alpha Studio", 
    service: "Photo- & Videography",
    description: "Alpha Studio provides a comprehensive approach to event documentation, blending artistic photography with cinematic video production. Their team excels at capturing the atmosphere and emotions of a wedding or gala with timeless elegance. As a Plan B partner, Alpha Studio grants our community exclusive access to premium service benefits and member-only discounts."
  },
  { 
    id: 12, 
    name: "Black Dream Creation", 
    service: "Photo- & Videography",
    description: "Black Dream Creation offers a bold and artistic approach to event photography and film. Specializing in high-contrast, high-impact visuals, they provide a unique aesthetic for clients looking for something truly extraordinary. As a Plan B partner, Black Dream Creation provides our members with exclusive discounts and the premium service required to capture your \"dream\" event."
  },
  { 
    id: 11, 
    name: "Dream To Creation", 
    service: "Photo- & Videography",
    description: "Dream To Creation turns your event vision into a visual masterpiece. With an emphasis on creativity and professional production standards, they handle everything from photography to cinematic storytelling. Through our exclusive partnership, Plan B clients gain access to premium benefits, specialized packages, and the highest quality of creative service."
  },
  { 
    id: 10, 
    name: "My Emotion", 
    service: "Photo- & Videography",
    description: "My Emotion focuses on the heart of the event, specializing in candid photography and emotive videography that tells a personal story. They go beyond simple recording to capture the feelings that make your day unique. As a Plan B member, you benefit from exclusive service perks, attractive discounts, and a personalized approach to your event’s visual legacy."
  },
  { 
    id: 6, 
    name: "Optimeye", 
    service: "Photo- & Videography",
    description: "Optimeye specializes in capturing life’s most precious moments with a sharp eye for detail and cinematic flair. Their team is dedicated to visual storytelling, ensuring that every frame reflects the true essence of your celebration. As a Plan B partner, Optimeye offers our clients exclusive booking packages, attractive discounts, and premium service from first shoot to final edit."
  },
  { 
    id: 9, 
    name: "Skyline Studios", 
    service: "Photo- & Videography",
    description: "Skyline Studios brings a fresh and contemporary perspective to photography and videography. Known for their ability to capture grand perspectives and intimate moments alike, they ensure your memories are preserved in stunning high-definition. Through our partnership, Plan B customers receive exclusive advantages, specialized pricing, and top-tier artistic support."
  },

  // Photobooth, 360 Video and more
  { 
    id: 31, 
    name: "Dreamspix", 
    service: "Photobooth, 360 Video and more",
    description: "Dreamspix specializes in premium photobooth solutions and creative event captures that turn moments into lasting memories. With high-quality prints, fun props, and professional setups, they offer a personalized entertainment experience for guests of all ages. As a Plan B partner, Dreamspix provides our members with specialized rates, priority service, and exclusive perks tailored specifically for our community."
  },
  { 
    id: 30, 
    name: "Infinibooth", 
    service: "Photobooth, 360 Video and more",
    description: "Infinibooth brings the ultimate interactive experience to your event with cutting-edge 360 Video and modern photobooth technology. Designed to capture high-energy moments from every angle, their setups provide instant digital keepsakes that guests love to share. Through our partnership, Plan B customers enjoy exclusive booking benefits, attractive discounts, and a premium, seamless service that adds a \"wow\" factor to any celebration."
  },

  // Special Effects
  { 
    id: 32, 
    name: "Nola Me", 
    service: "Special Effects",
    description: "Nola Me specializes in high-impact Special Effects designed to turn your event’s biggest moments into cinematic experiences. From the elegance of Cold Spark machines and low-lying smoke for first dances to vibrant confetti blasts, they bring the \"wow\" factor to every stage. They are also experts in creating spectacular Gender Reveals, providing creative and professional setups for your most personal celebrations. Through our exclusive partnership, Plan B customers receive premium service, specialized effect packages, and attractive discounts to light up their event."
  },

  // Print & Designs
  { 
    id: 34, 
    name: "Nine Unique Design", 
    service: "Print & Designs",
    description: "Nine Unique Design specializes in artisanal and contemporary graphic design, bringing a \"unique\" aesthetic to every project. Whether you need custom digital assets or elegant physical stationery, their team focuses on creating one-of-a-kind designs that reflect your personal style. As a Plan B member, you gain access to specialized design packages, priority consultations, and member-only pricing for a truly personalized experience."
  },
  { 
    id: 33, 
    name: "Sekar Swiss", 
    service: "Print & Designs",
    description: "Sekar Swiss is a leader in high-quality print solutions and professional event branding. From bespoke invitation suites to large-scale event signage, they combine precision Swiss quality with creative design to ensure your event’s visual identity is flawless. Through our partnership, Plan B customers enjoy premium production service, exclusive benefits, and attractive discounts on all their printing needs."
  },

  // Ticket Sale
  { 
    id: 35, 
    name: "Chronize", 
    service: "Ticket Sale",
    description: "Chronize is your expert partner for seamless online ticket sales and digital event management. Their platform provides a secure and user-friendly experience for organizers and guests alike, ensuring a smooth entry process for events of any size. Through our partnership, Plan B clients benefit from a professional ticketing infrastructure, exclusive service advantages, and attractive member-only conditions to streamline their event planning."
  },

  // Travel, Visa, Transport & more
  { 
    id: 14, 
    name: "Air India", 
    service: "Travel, Visa, Transport & more",
    description: "Air India provides world-class connectivity with a specialized focus on premium flight services. As a global carrier, they offer reliable and comfortable travel options to destinations worldwide. Through our partnership, Plan B customers enjoy exclusive advantages and special conditions on flight tickets, ensuring a high-quality travel experience at a member-only rate."
  },
  { 
    id: 16, 
    name: "FlyJet India", 
    service: "Travel, Visa, Transport & more",
    description: "FlyJet India offers niche expertise in Artist Management and the Visa process in India. They are the go-to specialists for navigating international logistics for performers and professional travelers. As a Plan B partner, FlyJet India provides our clients with priority processing, expert consultation, and specialized rates for a smooth and efficient experience."
  },
  { 
    id: 18, 
    name: "Infini Travel", 
    service: "Travel, Visa, Transport & more",
    description: "Infini Travel is the specialist for Van Rentals and group transport solutions. Perfect for event crews, large families, or corporate groups, they provide spacious, high-quality vehicles for any distance. As a Plan B partner, Infini Travel offers our members exclusive rental benefits, attractive discounts, and a premium service to keep your group moving comfortably."
  },
  { 
    id: 13, 
    name: "Lets go Travel AG", 
    service: "Travel, Visa, Transport & more",
    description: "Lets go Travel AG is your comprehensive partner for all-inclusive travel solutions. From dream vacations to complex corporate itineraries, they handle every detail including flights, accommodation, and global logistics. As a Plan B partner, Lets go Travel AG offers our members exclusive travel benefits, attractive discounts, and the premium service needed for a stress-free journey."
  },
  { 
    id: 15, 
    name: "Nallur Travels", 
    service: "Travel, Visa, Transport & more",
    description: "Nallur Travels specializes in curated travel experiences with professional tour guide services. They focus on cultural immersion and expert-led journeys, ensuring that every trip is both educational and unforgettable. Through our partnership, Plan B members receive exclusive access to specialized tour packages, premium guidance, and attractive member discounts."
  },
  { 
    id: 17, 
    name: "Sky Auto AG", 
    service: "Travel, Visa, Transport & more",
    description: "Sky Auto AG sets the standard for luxury transport and automotive solutions. Whether you require premium pick-up/drop-off services for VIP guests, luxury car leasing, or high-end event transportation, they deliver elegance and reliability. Through our partnership, Plan B customers enjoy exclusive access to their luxury fleet, member-only leasing conditions, and VIP service."
  },

  // Others
  { 
    id: 41, 
    name: "Audiopetti", 
    service: "Others",
    description: "Audiopetti is a YouTube and Content Creator specializing in engaging digital storytelling and creative media production. Known for their unique voice and high-quality production, they help bring brands and events to life in the digital space. Through our exclusive partnership, Plan B customers enjoy specialized content packages, creative consultations, and premium digital service to elevate their online presence."
  },
  { 
    id: 42, 
    name: "VFR Management", 
    service: "Others",
    description: "VFR Management is your professional partner for comprehensive Insurance solutions. They provide expert guidance and tailored coverage to ensure that you, your business, and your events are fully protected against the unexpected. As a Plan B partner, VFR Management offers our members exclusive consultations, attractive member-only conditions, and the premium security required for total peace of mind."
  }
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
    partners: ["Plan B", "Mandram", "Royals Bar"]
  },
  {
    id: 2,
    category: "Private Events",
    title: "60th Birthday - Anojan",
    date: "14.07.2024",
    client: "Anojan",
    description: "True luxury lies in the details. For this landmark 60th birthday, we balanced the intimacy of a close-knit gathering with the complexity of a deep cultural and traditional affair. Executing a surprise requires absolute precision; we ensured every element was in place for the \"big reveal,\" delivering a seamless, stress-free celebration that honored tradition while providing a modern, premium experience.",
    image: anojanImg,
    partners: ["Plan B", "Sakthi Wedding Services GmbH"]
  },
  {
    id: 3,
    category: "Private Events",
    title: "21st Birthday - Thasmija",
    date: "10.08.2024",
    client: "Thasmija",
    description: "For this 21st milestone, we took \"themed parties\" to the next level. Featuring a premium red carpet entry and a luxury photo corner, the atmosphere was pure gold. The highlight of the evening was a personalized \"Oscar\" award ceremony, celebrating the guest of honor’s circle with humor and heart. Executed with our signature agility, this event proved that high-end production and genuine fun go hand-in-hand.",
    image: thasmijaImg,
    partners: ["Plan B", "Mandram"]
  },
  {
    id: 4,
    category: "Private Events",
    title: "Proposal - Subinthan & Vithuja",
    date: "01.09.2024",
    client: "Subinthan & Vithuja",
    description: "We scouted the perfect lake-view location, balancing the grandeur of the Swiss mountains with an intimate, private setup. To elevate the experience, we coordinated a private boat excursion to the center of the lake for the proposal itself. The moment was captured through a bespoke, cinematic video shoot, ensuring the transition from the UK to the Swiss peaks was as seamless as it was breathtaking.",
    image: subinthanVithujaImg,
    partners: ["Plan B", "Sakthi Wedding Service", "Attlee Gravity"]
  },
  {
    id: 5,
    category: "Private Events",
    title: "Proposal - Kathushan & Thenuka",
    date: "28.12.2024",
    client: "Kathushan & Thenuka",
    description: "Planned to perfection amidst the snow. For this proposal, we took advantage of the breathtaking \"fully white\" landscape of Blausee to create a scene that felt like a movie set. Mountains, snow-covered pines, and the deep blue of the lake provided the backdrop; we provided the seamless execution. Whether it’s sun or snow, we ensure the environment is harnessed to tell your unique love story.",
    image: kathushanThenukaImg,
    partners: ["Plan B", "Selvam Wedding Events", "TM Pictures"]
  },
  {
    id: 6,
    category: "Private Events",
    title: "Proposal - Tharshan & Maunika",
    date: "14.02.2025",
    client: "Tharshan & Maunika",
    description: "For this Valentine’s Day proposal, we turned the night into a cinematic dream. With a blindfolded entry, a pathway of red roses, the glow of candles, a series of beautifully styled photo frames showcasing the couple’s most cherished moments, we created an atmosphere of pure premium romance. Every detail—from the background music to the final \"Yes\"—was managed with our signature precision. We don't just set the stage; we create the memory.",
    image: tharshanMaunikaImg,
    partners: ["Plan B", "Atlee Gravity"]
  },
  {
    id: 7,
    category: "Private Events",
    title: "30th Wedding Anniversary - Babu & Gowry",
    date: "22.02.2025",
    client: "Babu & Gowry",
    description: "Managing a 30th Anniversary of this size requires more than just planning; it requires a masterclass in logistics. We oversaw the entire lifecycle of the event—including catering, bar services, and entertainment—while handling all on-site coordination and the complete setup/teardown process. This project highlights our ability to manage large crowds and complex vendor teams while ensuring the atmosphere remains personal, warm, and expertly polished.",
    image: babuGowryImg,
    partners: ["Plan B", "Selvam Wedding", "Swiss Tamil Party Service", "Alpha Studios", "Royals Bar", "DJ Gautham", "Fotoböxli", "TVS Entertainment", "Tom&Jerry Emcee"]
  },
  {
    id: 8,
    category: "Private Events",
    title: "Wedding Reception - Manoja & Marko",
    date: "03.05.2025",
    client: "Manoja & Marko",
    description: "Cultural fusion requires a delicate balance and a sharp eye for elegance. For this intimate wedding, we bridged the gap between Swiss and Tamil traditions, creating a smooth and respectful flow from start to finish. We provided a total A–Z service, including bespoke decoration, DJ, premium catering, and a professional service team. By handling everything—from the initial setup to the final teardown—we ensured that the only thing our clients had to focus on was their new life together.",
    image: manojaMarkoImg,
    partners: ["Plan B", "Arathi GmbH", "Mass Entertainment", "Sakthi Wedding Service GmbH", "GD - Denieshia", "Infinibooth"]
  },
  {
    id: 9,
    category: "Private Events",
    title: "Mehendi - Pritthiya",
    date: "23.05.2025",
    client: "Pritthiya",
    description: "For Pritthiya’s Mehendi function, we focused on the nuances that make traditional events so special. We provided a complete setup that balanced vibrant aesthetics with functional coordination. By managing the timeline and the \"small details\" on-site, we ensured a flawless execution that honored the beauty of the ceremony. Another beautiful chapter in our journey with Pritthiya, delivered with the signature Plan B touch.",
    image: mehendiImg,
    partners: ["Plan B", "Sakthi Wedding Service", "Optimeye"]
  },
  {
    id: 10,
    category: "Private Events",
    title: "30th Birthday - Jaci",
    date: "09.08.2025",
    client: "Jaci",
    description: "A successful surprise starts long before the guests arrive. We began by designing a bespoke digital invitation to set the tone and manage the secret guest list. For the event itself, we transformed the space with custom decoration and managed a full-service bar, photo booth, and premium catering. By providing dedicated on-site coordination, we ensured the \"big reveal\" was perfectly timed and the rest of the night flowed seamlessly.",
    image: jaciImg,
    partners: ["Plan B", "Royals Bar", "DJ Neezy", "Infinibooth", "Mandram"]
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
    partners: ["Plan B", "GR Events", "Optimeye", "Tom & Jerry Emcee", "Dream To Creation"]
  },
  {
    id: 12,
    category: "Public Events",
    title: "Premgi - Concert",
    date: "09.08.2024",
    client: "Premgi",
    description: "This event was a true game changer for Plan B, as we took the lead on the digital promotion strategy. We produced three bespoke concept videos designed to build momentum and \"hype\" across social platforms. To convert views into attendance, we launched a high-engagement giveaway campaign that attracted a massive audience and expanded the event's reach exponentially. This project demonstrated our ability to blend creative content with strategic marketing to fill seats and create a buzz that lasts.",
    image: premgiImgEvent,
    partners: ["Getam Cine World", "Spicy Events"]
  },
  {
    id: 13,
    category: "Public Events",
    title: "The GOAT x Thean Kudikka Tour",
    date: "28.09.2024",
    client: "The GOAT",
    description: "The Goat was a showcase of Plan B’s ability to handle high-level complexity. We were responsible for the complete lifecycle of the event—starting with creative flyer design and ending with the final staffing and on-site coordination. Most importantly, we led the Artist Management, providing a personal touch that included everything from airport transfers to local guiding. When we say \"fully organized,\" we mean every single detail is covered.",
    image: goatImg,
    partners: ["Plan B", "GR Events", "Queens Eventlocation", "Tom & Jerry Emcee", "Dream To Creation"]
  },
  {
    id: 14,
    category: "Public Events",
    title: "Merviyn Moving On - StandUp Comedy",
    date: "18.10.2024 & 19.10.2024",
    client: "Merviyn",
    description: "Success in comedy is all about timing, and that applies to the logistics as much as the jokes. Plan B managed the complex movement of this two-day event across different locations. We provided a seamless Artist Concierge service, including specialized pick-up and drop-off schedules to ensure the talent arrived fresh for every set. From providing a dedicated event-day staff to maintaining rigorous on-site coordination at both venues, we ensured that the transition between cities was invisible to the audience.",
    image: mervynImg,
    partners: ["Plan B", "Optimeye", "Tom & Jerry Emcee"]
  },
  {
    id: 15,
    category: "Public Events",
    title: "Vivaaha - South Asian Wedding Expo",
    date: "01.03.2025 & 02.03.2025",
    client: "Vivaaha",
    description: "For Switzerland’s branded South Asian wedding exhibition, Plan B provided comprehensive on-site coordination across two high-energy days. Managing a project of this scale requires precision, quick thinking, and a deep understanding of the wedding industry. We ensured that every vendor, speaker, and guest experienced a perfectly organized event.",
    image: vivaahaImg,
    partners: ["Plan B", "Eventbudget", "Optimeye", "Tom & Jerry Emcee"]
  },
  {
    id: 16,
    category: "Public Events",
    title: "Anna Varar Vali Vidu - Movie Night x Clubevent",
    date: "07.06.2025",
    client: "Anna Varar Vali Vidu",
    description: "From Cinema to Celebration. For this dedicated Vijay fans' tribute, Plan B provided a complete event package. Starting with creative flyer design and promotion, we mobilized the community. Our on-site team then coordinated the 360° experience: a curated screening of \"Friends,\" followed by a smooth transition into an all-night party. Our dedicated staffing ensured a high-vibe, safe, and memorable experience that honored the culture and the fans.",
    image: avvvImg,
    partners: ["Plan B", "The Crown Entertainment", "Queens Eventlocation"]
  },
  {
    id: 17,
    category: "Public Events",
    title: "Monika - Clubevent",
    date: "09.08.2025",
    client: "Monika",
    description: "In the world of high-end nightlife, success is built on collaboration. For the Monika club event, Plan B operated alongside top-tier presenters including The Crown Entertainment, TLS Events, and JK Events. This project was a testament to our ability to integrate seamlessly into a large-scale production team. We brought our signature precision and on-site expertise to a fast-paced environment, working in synergy with the best in the business to deliver a premium, high-energy clubbing experience.",
    image: monikaImg,
    partners: ["Plan B", "The Crown Entertainment", "TLS Events", "JK Events", "Queen Eventlocation", "Tom & Jerry Emcee", "Dream To Creation"]
  },
  {
    id: 18,
    category: "Public Events",
    title: "Where is the Party - Clubevent",
    date: "30.08.2025",
    client: "Where is the Party",
    description: "Speed meets style. For this collaboration with The Crown and JK Events, Plan B handled everything from the flyer design to the live coordination. Despite the short planning window, we created a visual buzz and a physical atmosphere that kept the crowd partying all night.",
    image: witpImg,
    partners: ["Plan B", "The Crown Entertainment", "JK Events", "Queen Eventlocation", "Tom & Jerry Emcee", "Dream To Creation"]
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
    partners: ["Plan B", "Mandram"]
  },
  {
    id: 20,
    category: "Corporate Events",
    title: "Ayesha MUAH - Workshop",
    date: "27.04.2024",
    client: "Ayesha MUAH",
    description: "For Ayesha MUAH’s masterclass, Plan B specialized in the student experience. We designed, organized, and delivered bespoke Goodie Bags that served as a premium highlight for the attendees. This project demonstrates our ability to support educators and artists by managing the essential details that make a workshop feel professional and complete.",
    image: ayeshaImg,
    partners: ["Plan B", "Selvam Wedding Events"]
  },
  {
    id: 21,
    category: "Corporate Events",
    title: "Let's go Travel AG - Grand Opening",
    date: "14.04.2025",
    client: "Let's go Travel AG",
    description: "For the grand opening of Lets go Travel AG, we provided a complete hospitality and coordination package. Our team managed a premium buffet apéro and minimalist decor to create a sophisticated atmosphere for the agency's new chapter. With Plan B handling the on-site logistics, the launch was as smooth as a well-planned itinerary.",
    image: corpEvent,
    partners: ["Plan B", "Sakthi Wedding Service", "Dream To Creation"]
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
    image: goatImg,
    quote: "Hey Plan B Team, Wow, what a night! With 700+ guests, it was a massive success, and we seriously couldn't have done it without you guys! We were completely blown away by your planning, creative ideas, and marketing. Any problem that came up, you had a solution ready before we could even finish the sentence. And the way you took care of the artists was amazing. It was so genuine but also super professional. A huge thank you for everything! You're the best!"
  },
  {
    id: 3,
    clientName: "GR EVENTS",
    eventDate: "29.06.2024",
    eventType: "CLUB PARTY",
    image: mayilehImgEvent,
    quote: "Dear Plan B Team, We are truly grateful for your support during the preparations for the \"MAYILEH\" event! Your expertise and professionalism made the entire process so much smoother, and we were thrilled with the final result. Thank you for guiding us and designing our flyers. We look forward to working with you again for our upcoming events. This cooperation will surely continue!"
  },
  {
    id: 4,
    clientName: "MARCO & MANOJA",
    eventDate: "03.05.2025",
    eventType: "WEDDING PARTY",
    image: manojaMarkoImg,
    quote: "We booked Plan B for our wedding party. They handled the complete organization of the party. A young team full of energy. Everything went perfectly and nothing was missing. The Plan B team is very flexible and took all of our wishes into account during the planning and execution, and they skillfully implemented even our last-minute requests. Our guests were very satisfied. We are happy to recommend Plan B - The Eventguide!"
  },
  {
    id: 5,
    clientName: "THILA & PRITTHI",
    eventDate: "23.05.2025",
    eventType: "MEHENDI",
    image: mehendiImg,
    quote: "Hey, I just wanted to thank you again for your amazing organization at my Mehendi. You put so much effort into making sure my wishes were implemented exactly as I had envisioned and I truly appreciate that. Especially the great setup and the fact that everything was ready right on time as I wanted, it was wonderful. Your outstanding commitment during the Mehendi also stood out to me, it was so kind and absolutely commendable. So keep it up and always stay this amazing."
  },
  {
    id: 6,
    clientName: "JACI & RUBA",
    eventDate: "09.08.2025",
    eventType: "30TH BIRTHDAY",
    image: jaciImg,
    quote: "Dear Plan B, I can't thank you enough for everything you did. From the beautiful decoration to organizing the bar and taking care of all the little details. The whole process was so easy with you, and for a surprise party, I truly couldn't have wished for a better planner. What I appreciated the most was that you didn't just act as a planner in a professional sense. You were also personally very helpful and supportive. Everything turned out even more perfect than I had imagined, and I'm so grateful for the care you put into making this day so special."
  },
  {
    id: 7,
    clientName: "BABU & GOWRY",
    eventDate: "22.02.2025",
    eventType: "30TH WEDDING ANNIVERSARY",
    image: babuGowryImg,
    quote: "Dear Plan B, Plan B planned, organized, and coordinated the event with passion and precision. Every decision was made with care and attention to detail. From welcoming our guests to providing entertainment, everything was perfectly timed and seamlessly executed. Thanks Fam!"
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
    image: thasmijaImg,
    quote: "A big thank you to the Plan B Team for organizing my 21st birthday party! You picked the perfect theme and took care of everything – from the decorations to the food – so I didn't have to worry about a thing. I could just enjoy and celebrate with my loved ones. Thanks Fam, You're amazing!"
  }
];
