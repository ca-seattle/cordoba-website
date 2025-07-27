import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us", // This will use the template from layout.tsx and become "About Us | Cordoba Academy"
  description: "Learn about Cordoba Academy's mission, values, and commitment to providing excellence in Islamic education in the Seattle area.",
  openGraph: {
    title: "About Cordoba Academy | Islamic School in Seattle Area",
    description: "Discover Cordoba Academy's mission of combining academic excellence with Islamic values in Seattle, Lynnwood, Shoreline, Edmonds, Bothell & Mountlake Terrace.",
    images: ['/students_cover.jpg']
  }
};
