import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Jerry Wang",
  handle: "@amyshieldsfake",
  socialProfiles,
  email: "c1495616@gmail.com",
  website: "https://www.jerrywang.dev",
  jobTitle: "Full-Stack Engineer",
  company: "EY Design Studio",
  availableForWork: true,
  location: {
    city: "Victoria",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/c1495616js/jerry-blog",
  // newsletterProvider: "mailerlite",
  // newsletterUrl: "https://developreneur.davidlevai.com",
  // analyticsProvider: "umami",
  defaultTheme: "dark",
  activeAnnouncement: false, // product hunt enable/disable
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
