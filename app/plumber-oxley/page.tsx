import type { Metadata } from "next";
import AreaLandingPage from "../_components/AreaLandingPage";
import { getArea, siteUrl } from "../_data/siteContent";

const area = getArea("oxley");

export const metadata: Metadata = {
  title: `Plumber ${area.name} | Wolverhampton Plumbing Enquiries`,
  description: `Plumbing enquiry page for ${area.name} covering leaks, blocked toilets, blocked drains, taps, kitchens, bathrooms and water pressure issues.`,
  alternates: { canonical: area.href },
  openGraph: {
    title: `Plumber ${area.name} | Wolverhampton Plumbing Enquiries`,
    description: `Clear plumbing enquiry support for ${area.name} and nearby areas.`,
    url: `${siteUrl}${area.href}`,
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return <AreaLandingPage area={area} />;
}
