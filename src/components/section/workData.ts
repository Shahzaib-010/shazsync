export type WorkItem = {
  title: string;
  tags: string[];
  primaryImage: string;
  hoverImage: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Bloom",
    tags: ["Design", "Development"],
    primaryImage: "/images/card1.jpg",
    hoverImage: "/images/card2.jpg",
  },
  {
    title: "Emberly",
    tags: ["Design", "Marketing"],
    primaryImage: "/images/card2.jpg",
    hoverImage: "/images/card3.jpg",
  },
  {
    title: "Hive",
    tags: ["Development"],
    primaryImage: "/images/card3.jpg",
    hoverImage: "/images/card4.jpg",
  },
  {
    title: "Signal",
    tags: ["Marketing", "SEO"],
    primaryImage: "/images/card4.jpg",
    hoverImage: "/images/card1.jpg",
  },
];
