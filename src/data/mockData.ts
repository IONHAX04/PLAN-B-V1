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
  intro: "Plan B – The Eventguide is far more than an event management company. We are a premier agency dedicated to crafting extraordinary and unforgettable events throughout Switzerland. Whether it's an intimate wedding, a high-energy club night, or a complex corporate function, we bring creative vision, meticulous organization, and a wide network of partners to the table. Our 'Plan B' philosophy means we are always one step ahead, anticipating needs and ensuring a seamless execution so our clients can fully enjoy their special moments.",
  founderNote: "Founded by Abishana, Plan B – The Eventguide stands for forward-thinking planning and absolute reliability. Our aim is to have a Plan B ready for every challenge before it even arises. This means you can sit back, relax and enjoy the moment while we work behind the scenes to ensure that everything runs perfectly.",
  extended: "Plan B – The Eventguide is a premier event management company dedicated to crafting extraordinary and unforgettable events. Specializing in both private and corporate celebrations, our expertise spans a wide array of events including elegant weddings, corporate functions, high-energy club events, and spectacular concerts. At the heart of our work is a commitment to turning each event into a unique experience tailored to the individual needs of our clients. With an extensive network of trusted partners and service providers, we offer comprehensive all-in-one event solutions that ensure flawless execution from start to finish. Our attention to detail, passion for perfection, and unwavering dedication to quality set us apart in the event planning industry.",
  vision: "Our vision is to revolutionize event planning by delivering seamless, stress-free experiences for our clients. We are committed to transforming your ideas into reality with creative, innovative solutions that reflect your unique style. Our team works closely with each client, blending professionalism with a personal touch to exceed expectations and create lasting memories. We approach every event with empathy and foresight, ensuring that no detail is overlooked, and always aim to stay one step ahead to deliver exceptional results. We aspire to be the go-to partner for event planning, trusted by clients to bring their dreams to life, time and time again.",
  mission: "Our mission is to transform every event into a unique and memorable experience. We are dedicated to providing exceptional event planning and management services that cater to the diverse needs of our clients. By blending creativity, professionalism, and attention to detail, we ensure that every event runs seamlessly, from the initial concept to the final moments. Our mission is to make event planning stress-free, allowing our clients to enjoy their special moments with peace of mind. Through innovation, collaboration, and a commitment to excellence, we aim to set new standards in the event industry, creating lasting memories for our clients and their guests.",
  teamIntro: "We pride ourselves on being a versatile, young, and dynamic team, each bringing valuable experience and fresh perspectives to the table. Our team is spread across Switzerland, ensuring that we have a perfect balance to reach every corner of the country. This national presence allows us to cater to a wide range of clients, no matter their location, while maintaining the high standards and personalized service that define us. Together, we are united by our passion for creating unforgettable events, and we work seamlessly to deliver exceptional experiences from the heart of Switzerland to its furthest edges."
};

export const teamMembers = [
  {
    id: 1,
    name: "Abyy P",
    image: abbyImg,
    role: "CEO, HR, Designer & Head of Service",
    bio: "Hi, I'm Abyy. As the founder of Plan B, I am the driving force behind everything we do. With passion, love for detail, and the highest level of precision, I ensure that every event meets the highest standards. My commitment to perfection and genuine client satisfaction shapes every decision and every execution.",
    extendedBio: "Plan B is far more than a business to me. It is a big part of who I am. I pour my vision, heart, and dedication into every project. Your event is in safe hands with me, as I guide it with responsibility, passion, and excellence from the very first idea to the flawless final execution."
  },
  {
    id: 2,
    name: "Banu P",
    image: banuImg,
    role: "B2B Manager, Artist Manager & Head of Filmfactory",
    bio: "Hey, I am Banu. I am responsible for building, managing, and expanding strong B2B relationships while representing and coordinating with artists across various projects. As the B2B Manager, Artist Manager, and CEO of Plan B The Filmfactory, I work closely with corporate clients, vendors, and creative talents to create sustainable partnerships and meaningful collaborations.",
    extendedBio: "With a strong focus on business development and talent management, I play a key role in growing our client base and securing new opportunities in both the corporate and entertainment sectors. I am the brain behind First Take and the driving force of our film community, where strategy, creativity, and vision come together to build platforms with long term impact."
  },
  {
    id: 3,
    name: "Abinash V",
    image: abinashImg,
    role: "CAO & CFO",
    bio: "Hello, I am Abinash. As the co-founder of Plan B, I am responsible for managing the company's strategic direction and financial health. With a sharp eye for detail and a strong focus on business development, I play a crucial role in shaping the company's growth and long-term success.",
    extendedBio: "I ensure smooth and efficient operations across all areas, from financial management to internal and operational processes. My goal is to build a stable, scalable foundation that allows Plan B to grow sustainably while maintaining the highest standards of professionalism and performance."
  },
  {
    id: 4,
    name: "Thanu R",
    image: thanuImg,
    role: "Marketing Manager & Content Creator",
    bio: "Hey, I'm Thanu. As the Marketing Manager at Plan B, I lead the planning and execution of our marketing efforts across all channels. I focus on creating impactful campaigns that align with each event and strengthen our overall brand presence.",
    extendedBio: "Alongside my role in marketing, I am also responsible for video editing and content creation. By combining creative visuals with strategic thinking in both digital and traditional marketing, I help ensure that Plan B remains visible, relevant, and engaging for our target audience."
  },
  {
    id: 5,
    name: "Akesha T",
    image: akeshaImg,
    role: "Allrounder",
    bio: "Hey, I'm Akesha. As an Allrounder at Plan B, I support various areas of the business, from event coordination and logistics to on site assistance, ensuring that every event runs smoothly and seamlessly.",
    extendedBio: "I handle every customer with care, empathy, and full attention because your needs truly matter to me. I take the time to understand what you want and what you need, so I can support you in the best possible way. My goal is to make you feel heard, comfortable, and confident, knowing that your event is being handled with dedication, understanding, and genuine care from start to finish."
  },
  {
    id: 6,
    name: "Prathikka Y",
    image: prathikkaImg,
    role: "Allrounder",
    bio: "Hey, I'm Prathikka. As an Allrounder at Plan B, I'm involved wherever support is needed, from coordinating event details and handling logistics to assisting on site to ensure everything flows smoothly.",
    extendedBio: "For me, taking care of you as a customer comes first. I listen closely, ask the right questions, and make sure your wishes and expectations are clearly understood. My focus is on creating a positive and reassuring experience, so you feel supported, respected, and confident that your event is being handled with attention, reliability, and genuine commitment."
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
    description: "The venue sets the stage for your event, and choosing the right location is essential to its success.",
    details: [
      { subtitle: "Advice and Venue Selection", text: "We guide you in selecting the ideal location that fits your event's style and requirements." },
      { subtitle: "Coordination and Negotiation", text: "Our team liaises with venue operators, negotiating terms and conditions to secure the best deal for you." },
      { subtitle: "Booking and Utilisation Coordination", text: "We handle all final bookings and coordinate the logistics to ensure the space is utilized effectively." }
    ]
  },
  {
    id: 3,
    title: "Design",
    icon: "Palette",
    description: "Our creative team transforms your vision into reality with stunning designs that set the tone for your event.",
    details: [
      { subtitle: "Invitations, Flyers, and Printed Materials", text: "We create custom designs that reflect the style and theme of your event." },
      { subtitle: "Event Branding and Logo Design", text: "For corporate events, we offer branding solutions that align with your company's identity." },
      { subtitle: "Table and Seating Arrangements", text: "We carefully plan layouts to maximize guest interaction and comfort." }
    ]
  },
  {
    id: 4,
    title: "Entertainment",
    icon: "Music",
    description: "Entertainment is the heartbeat of any event, and we specialize in curating experiences that captivate and inspire.",
    details: [
      { subtitle: "Artist & DJ Booking", text: "We source and book top-tier talent, from live musicians and DJs to performers." },
      { subtitle: "Show Choreography", text: "Our team designs custom entertainment sequences, including dance choreography and show acts." },
      { subtitle: "Technical Setup", text: "We handle all technical requirements, including sound systems, lighting, and staging." }
    ]
  },
  {
    id: 5,
    title: "Dance Choreography",
    icon: "HeartHandshake",
    description: "Whether it's a traditional wedding dance or a high-energy performance, we create memorable dance moments.",
    details: [
      { subtitle: "Choreography for Couples and Groups", text: "We design unique and personalized dance routines tailored to your event." },
      { subtitle: "Rehearsal Coordination", text: "We schedule and manage rehearsal sessions to ensure that performers are fully prepared." }
    ]
  },
  {
    id: 6,
    title: "Artist Management & Promotion",
    icon: "Mic2",
    description: "We take care of your talent, from booking to performance, ensuring a seamless experience for both artists and clients.",
    details: [
      { subtitle: "Talent Scouting and Booking", text: "We source the best artists and performers that align with the event's theme." },
      { subtitle: "Contract Negotiation and Logistics", text: "We handle all the logistics, from contracts and travel to technical requirements." },
      { subtitle: "Marketing and Promotion", text: "We develop targeted marketing strategies to promote both the event and the featured artists." }
    ]
  }
];

// ─── FILMFACTORY ────────────────────────────────────────────────────────────
export const filmfactoryContent = {
  firstTake: {
    title: "First Take",
    subtitle: "Tamil Short Film Festival",
    tagline: "Where Dreams Become Reality",
    description: "An international platform dedicated to showcasing Tamil short films and empowering independent filmmakers across Europe. What started as a one-day competition in 2025 has grown into a multi-day festival, reflecting the strong demand in the Tamil film community. It serves as a bridge between filmmakers and audiences, offering recognition through awards and visibility.",
    mission: "To discover, showcase, and celebrate independent Tamil cinema, creating a global platform for storytelling and cultural expression.",
    vision: "A curated experience where storytelling, culture, and creativity intersect, providing a professional stage for underrepresented voices.",
    coreValues: "Focuses on authentic storytelling—socially driven, experimental, or entertaining—that reflects identity and lived experiences.",
    stats: [
      { label: "Films Screened", value: "19+" },
      { label: "Awards Given", value: "10" },
      { label: "Attendees", value: "300+" }
    ]
  },
  myFrame: {
    title: "My Frame | My Story",
    tagline: "Let’s create powerful stories — together.",
    description: "A creative space for storytellers, filmmakers, and visionaries (directors, actors, editors, etc.) to collaborate and grow. This is where ideas are born, stories come to life, and new projects begin.",
    offerings: [
      { title: "Collaboration & Networking", description: "Finding crews and like-minded creatives for projects." },
      { title: "Creative Challenges", description: "Monthly film challenges and support for new ideas." },
      { title: "Workshops", description: "Craft development and feedback sessions from script to final cut." },
      { title: "Showcase", description: "Platform to present work and gather an audience." }
    ],
    workshops: [
      { title: "Cinematography Workshop", date: "May 15, 2026" },
      { title: "Screenwriting Basics", date: "June 02, 2026" }
    ]
  }
};

// ─── PARTNERS ───────────────────────────────────────────────────────────────
export const partnersIntro = "We cooperate with carefully selected partners in the areas of catering, decoration, technology and entertainment. Thanks to these strong networks, you get access to exclusive benefits, attractive discounts and premium service that is reserved exclusively for our customers.";

export const partners = [
  { id: 1, name: "Dreamspix", service: "Photography" },
  { id: 2, name: "The Royal's Bar", service: "Catering" },
  { id: 3, name: "Alpha Studios", service: "Photography" },
  { id: 4, name: "Skyline Studio", service: "Photography" },
  { id: 5, name: "DJ Jene", service: "Entertainment" },
  { id: 6, name: "Selvam Wedding Event", service: "Wedding Services" },
  { id: 7, name: "The Crown Entertainment", service: "Entertainment" },
  { id: 8, name: "Infini Booth", service: "Photo Booth" },
  { id: 9, name: "MyEmotion", service: "Videography" },
  { id: 10, name: "Let's Go Travel", service: "Travel" },
  { id: 11, name: "Tom & Jerry Emcee", service: "Hosting / Emcee" },
  { id: 12, name: "Agathi GmbH", service: "Corporate Services" },
  { id: 13, name: "Nine", service: "Creative" },
  { id: 14, name: "Nolame", service: "Creative" }
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────
export const projectCategories = ["Private Events", "Public Events", "Corporate Events"];

export const projects = [
  {
    id: 1,
    category: "Private Events",
    title: "Manoja & Marko",
    image: "/assets/images/wedding.png",
    description: "For an intimate wedding in a small, lovingly decorated hall, we created a warm and festive atmosphere with atmospheric lighting and elegant floral details. Every moment, from the arrival of the bride and groom to the last dance, was characterised by closeness, emotion and perfect coordination.",
    details: "An intimate wedding celebration that showcased our ability to transform a small venue into a magical experience with atmospheric lighting and elegant floral details.",
    partners: ["Dreamspix", "The Royal's Bar", "Selvam Wedding Event"],
    feedback: "Every detail was handled with such care and elegance."
  },
  {
    id: 2,
    category: "Public Events",
    title: "The Goat",
    image: "/assets/images/club.png",
    description: "At an energetic club event with more than 700 guests, we transformed the evening into a spectacle of music, light and pure atmosphere. From the DJ line-up to the perfectly timed show interlude, every minute was a highlight that kept the crowd in a boisterous party mood.",
    details: "A high-energy club event with 700+ guests, featuring a curated DJ line-up, spectacular lighting, and perfectly timed show interludes.",
    partners: ["DJ Jene", "The Crown Entertainment", "Alpha Studios"],
    feedback: "The vibe was absolutely electric from start to finish!"
  },
  {
    id: 3,
    category: "Corporate Events",
    title: "Neueröffnung Let's Go Travel",
    image: "/assets/images/corporate.png",
    description: "To mark the reopening of a travel agency at its new location, we organised an inviting event that awakened wanderlust and a spirit of discovery. With elegant decorations, culinary highlights and smooth organisation, we created the perfect setting to inspire guests and make the launch at the new location unforgettable.",
    details: "A grand reopening event for a travel agency at its new location, featuring elegant décor, culinary highlights, and an atmosphere of wanderlust.",
    partners: ["Let's Go Travel", "The Royal's Bar", "Infini Booth"],
    feedback: "Professionalism and passion in every detail."
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
