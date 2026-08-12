import type { Metadata } from "next";
import ServiceLandingPage from "@/app/_components/ServiceLandingPage";
import { getService, siteUrl } from "@/app/_data/siteContent";

const service = getService("radiator-plumber-wolverhampton");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: service.href },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteUrl}${service.href}`,
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return <ServiceLandingPage service={service} />;
}



