import { MotionBoot } from "./_components/MotionBoot";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import {
  adviceLinks,
  areaLinks,
  serviceLinks,
  siteUrl,
  whatsappLink,
} from "./siteLinks";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wolverhampton Plumber | Plumbing Enquiries by WhatsApp",
    template: "%s | Wolverhampton Plumber",
  },
  description:
    "Send clear Wolverhampton plumbing enquiries by WhatsApp for leaks, blocked toilets, blocked drains, tap repairs, kitchen plumbing, bathroom plumbing and water pressure issues.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Wolverhampton Plumber | Plumbing Enquiries by WhatsApp",
    description:
      "Wolverhampton plumbing enquiry website for leaks, blocked toilets, drains, taps, kitchens, bathrooms and water pressure issues.",
    url: siteUrl,
    siteName: "Wolverhampton Plumber",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Wolverhampton Plumber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolverhampton Plumber | Plumbing Enquiries by WhatsApp",
    description:
      "Wolverhampton plumbing enquiry website for leaks, drains, taps, toilets and water pressure guidance.",
    images: ["/brand/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
  verification: {
    google: "h72gJUkOntRWM_Q3TBz4N3T7fqkXUevB3WKmeKRCckU",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wolverhampton Plumber",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer enquiries",
      availableLanguage: "English",
      url: whatsappLink,
    },
  };

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <SiteHeader />

        {children}
        <MotionBoot />

        <footer className="siteFooter">
          <div className="footerInner">
            <div className="footerBrand">
              <Link
                href="/"
                className="footerLogoImage"
                aria-label="Wolverhampton Plumber home"
              >
                <img src="/brand/logo.png" alt="Wolverhampton Plumber" />{" "}
              </Link>

              <p>
                Wolverhampton-focused plumbing enquiry pages for leaks, blocked
                toilets, drains, taps, kitchen plumbing, bathroom plumbing and
                water pressure issues.
              </p>

              <div className="footerActions">
                <Link href="/contact">Send Enquiry</Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="footerColumns">
              <div className="footerColumn">
                <h3>Services</h3>
                {serviceLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="footerColumn">
                <h3>Areas</h3>
                {areaLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="footerColumn footerWideColumn">
                <h3>Advice</h3>
                {adviceLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="footerColumn">
                <h3>Company</h3>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <p>
              © {new Date().getFullYear()} Wolverhampton Plumber. Plumbing
              enquiry routing by WhatsApp. Gas work must be handled by a Gas
              Safe registered engineer.
            </p>
          </div>
        </footer>

        <div className="mobileBottomActions">
          <Link href="/contact" className="mobileFormAction">
            Send Enquiry
          </Link>

          <a
            href={whatsappLink}
            className="mobileWhatsAppAction"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
