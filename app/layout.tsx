import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wolverhampton Plumber | Local Plumbing Enquiries",
  description:
    "Send a plumbing enquiry in Wolverhampton for leaks, blocked toilets, tap repairs, bathroom plumbing, blocked drains, heating plumbing and general plumbing help.",
  metadataBase: new URL("https://wolverhamptonplumber.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wolverhampton Plumber | Local Plumbing Enquiries",
    description:
      "Local plumbing enquiry website for Wolverhampton residents needing help with leaks, blocked toilets, tap repairs, blocked drains and general plumbing issues.",
    url: "https://wolverhamptonplumber.co.uk",
    siteName: "Wolverhampton Plumber",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappLink =
    "https://wa.me/447448632279?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="container nav">
            <Link
              href="/"
              className="logoImage"
              aria-label="Wolverhampton Plumber home"
            >
              <Image
                src="/brand/logo.svg"
                alt="Wolverhampton Plumber"
                width={460}
                height={104}
                priority
              />
            </Link>

            <nav aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/emergency-plumber-wolverhampton">Emergency</Link>
              <Link href="/blocked-drains-wolverhampton">Blocked Drains</Link>
              <Link href="/boiler-heating-plumber-wolverhampton">Heating</Link>
              <Link href="/areas-covered">Areas</Link>
              <Link href="/plumbing-advice">Advice</Link>
              <Link href="/contact" className="navCta">
                Send Enquiry
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container footerGrid">
            <div>
              <h3>Wolverhampton Plumber</h3>
              <p>
                A Wolverhampton-focused plumbing enquiry website helping local
                residents send clear plumbing enquiries for common home plumbing
                issues.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footerWhatsApp"
              >
                WhatsApp Plumbing Enquiry
              </a>
            </div>

            <div>
              <h4>Services</h4>
              <Link href="/emergency-plumber-wolverhampton">
                Emergency plumbing enquiries
              </Link>
              <Link href="/blocked-drains-wolverhampton">
                Blocked drains and toilets
              </Link>
              <Link href="/boiler-heating-plumber-wolverhampton">
                Boiler and heating plumbing help
              </Link>
              <Link href="/areas-covered">Areas covered</Link>
            </div>

            <div>
              <h4>Website</h4>
              <Link href="/contact">Send Plumbing Enquiry</Link>
              <Link href="/about">About</Link>
              <Link href="/plumbing-advice">Plumbing Advice</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Disclaimer</Link>
              <a href="mailto:info@wolverhamptonplumber.co.uk">
                info@wolverhamptonplumber.co.uk
              </a>
            </div>
          </div>

          <div className="container disclaimer">
            Wolverhampton Plumber is a local plumbing enquiry website. We do not
            claim to be a plumbing company, emergency service or Gas Safe
            registered company. Gas work must be handled by a Gas Safe
            registered engineer.
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
