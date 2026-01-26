import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Navaneeth",
  lastName: "Joshi",
  name: `Navaneeth Joshi`,
  role: "AI Educator & Full Stack Developer | Exploring how technology can empower people",
  avatar: "/images/avatar.png",
  email: "neeth35@gmail.com",
  location: "Europe/London", // IANA time zone identifier
  locationDisplay: "London, UK", // Human-readable location for display
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about AI, full-stack development, and scaling businesses with technology</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/neethj",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/neethj",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `${person.role}`,
  headline: <>AI Educator & Full Stack Developer</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Navaneeth, a technologist based in <Text as="span" size="xl" weight="strong">London, UK</Text>, Helping businesses scale with AI Solutions
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in London, UK`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/navaneeth-joshi",
  },
  intro: {
    display: true,
    title: "",
    description: (
      <>
        I'm Navaneeth, a developer and educator based in London who's fascinated by how AI can make life easier for people. My journey has taken me from building chatbots in college to teaching hundreds of students, and I'm constantly learning how to bridge the gap between technology and real human needs.
      </>
    ),
  },
  work: {
    display: true,
    title: "My Journey",
    experiences: [
      {
        company: "Finding My Path Through Teaching",
        timeframe: "Impact Academies & Camps | January 2025 - Present",
        role: "",
        achievements: [
          <>Teaching AI, web development, Data Science and more bootcamps style sessions</>,
          <>Figuring out better ways to make coding and AI feel less intimidating</>,
        ],
        images: [],
      },
      {
        company: "Building in Public",
        timeframe: "Build Mode AI | August 2025 - Present",
        role: "",
        achievements: [
          <>Experimenting with AI-powered productivity tools to solve real problems</>,
          <>Using Cursor and Claude to build faster and iterate based on user feedback</>,
          <>Still learning what people actually need versus what's technically cool</>,
        ],
        images: [],
      },
      {
        company: "Consulting & Supporting Growth",
        timeframe: "Multiverse | April 2025 - August 2025",
        role: "",
        achievements: [
          <>Helped assess apprenticeship programs, learning how people develop skills in real workplace settings</>,
          <>Gave feedback to support learners on their journey—reminded me why clear communication matters</>,
        ],
        images: [],
      },
      {
        company: "Working with Clients",
        timeframe: "Self-Employed | 2023 - Present",
        role: "",
        achievements: [
          <>Helping businesses understand what AI can actually do for them (versus the hype)</>,
          <>Building websites and content strategies, learning that good tech needs good storytelling</>,
          <>Working with clients taught me that impact matters more than impressive code</>,
        ],
        images: [],
      },
      {
        company: "Where It Started",
        timeframe: "Code Ninjas | July 2022 - January 2025",
        role: "",
        achievements: [
          <>My first teaching role—mentoring kids in game development using javascript, unity engine, c# and more</>,
          <>Learned to break down complex ideas and discovered I genuinely enjoy helping others build things</>,
        ],
        images: [],
      },
      {
        company: "Before It All Started",
        timeframe: "2017 - 2021",
        role: "",
        achievements: [
          <>Travelled all over india, passionate about photography/videography and created content for social media</>,
          <>Developed NLP Chatbots, learned python and web development</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "MSc Data Science and Analytics with Advanced Research",
        description: (
          <>Data Visualisation, Machine learning, Deep Learning, Data Gathering, Data Cleaning, Applied Data Science, Research Methodologies</>
        ),
      },
      {
        name: "BTech Computer Science and Engineering",
        description: (
          <>Database design, System Architecture, Operating System, Web Development, Data Structure & Algorithms, Data Communication, Cryptography</>
        ),
      },
    ],
  },
  technical: {
    display: false,
    title: "What I'm Working With",
    skills: [
      {
        title: "Current Tools",
        description: (
          <>I work with ChatGPT, Claude, Cursor, and other AI tools—understanding how they can genuinely help people. I build with React, Next.js, and Python, always trying to write cleaner code than my last project.</>
        ),
        tags: [
          { name: "ChatGPT", icon: "openai" },
          { name: "Claude", icon: "openai" },
          { name: "Cursor", icon: "rocket" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "What Drives Me",
        description: (
          <>AI shouldn't feel like magic or intimidation—it should feel like a helpful tool anyone can pick up. I'm working on making that a reality, one project and one student at a time.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
