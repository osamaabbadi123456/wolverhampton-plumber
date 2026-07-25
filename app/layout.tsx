import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

const serviceLinks = [
  { href: "/emergency-plumber-wolverhampton", label: "Emergency Plumber" },
  { href: "/blocked-drains-wolverhampton", label: "Blocked Drains" },
  { href: "/blocked-toilet-wolverhampton", label: "Blocked Toilet" },
  { href: "/leak-repair-wolverhampton", label: "Leak Repair" },
  { href: "/tap-repair-wolverhampton", label: "Tap Repair" },
  { href: "/bathroom-plumber-wolverhampton", label: "Bathroom Plumber" },
  { href: "/kitchen-plumber-wolverhampton", label: "Kitchen Plumber" },
  { href: "/boiler-heating-plumber-wolverhampton", label: "Boiler & Heating" },
  { href: "/water-pressure-plumber-wolverhampton", label: "Water Pressure" },
];

const adviceLinks = [
  {
    href: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
    label: "Internal Stop Tap",
  },
  {
    href: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
    label: "Frozen & Burst Pipes",
  },
  {
    href: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
    label: "Gas Smell Safety",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://wolverhamptonplumber.co.uk"),

  title: {
    default: "Wolverhampton Plumber | Local Plumbing Enquiries & Help",
    template: "%s | Wolverhampton Plumber",
  },

  description:
    "Need plumbing help in Wolverhampton? Send a WhatsApp enquiry for leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing, kitchen plumbing and urgent plumbing issues.",

  keywords: [
    "Wolverhampton plumber",
    "plumber Wolverhampton",
    "plumbers in Wolverhampton",
    "local plumber Wolverhampton",
    "emergency plumber Wolverhampton",
    "blocked drains Wolverhampton",
    "blocked toilet Wolverhampton",
    "leak repair Wolverhampton",
    "tap repair Wolverhampton",
    "bathroom plumber Wolverhampton",
    "kitchen plumber Wolverhampton",
    "water pressure plumber Wolverhampton",
    "plumbing advice Wolverhampton",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wolverhamptonplumber.co.uk",
    siteName: "Wolverhampton Plumber",
    title: "Wolverhampton Plumber | Local Plumbing Enquiries & Help",
    description:
      "Send a WhatsApp plumbing enquiry in Wolverhampton for leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing and urgent plumbing issues.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wolverhampton Plumber | Local Plumbing Enquiries & Help",
    description:
      "Send a WhatsApp plumbing enquiry in Wolverhampton for leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing and urgent plumbing issues.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <header className="siteHeader">
          <div className="headerInner">
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

            <nav className="mainNav" aria-label="Main navigation">
              <Link href="/">Home</Link>

              <details className="navDropdown">
                <summary>Services</summary>
                <div className="dropdownMenu">
                  {serviceLinks.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/areas-covered">Areas</Link>
              <Link href="/plumbing-advice">Advice</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="navCta">
                Send Enquiry
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="siteFooter">
          <div className="footerInner">
            <div className="footerBrand">
              <Link href="/" className="footerLogo">
                Wolverhampton<span> Plumber</span>
              </Link>

              <p>
                A Wolverhampton-focused plumbing enquiry website helping
                visitors send clear WhatsApp enquiries for leaks, blocked
                toilets, drains, taps, bathroom plumbing, kitchen plumbing and
                heating pipework.
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
              <div>
                <h3>Plumbing Services</h3>
                {serviceLinks.slice(0, 5).map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <h3>More Services</h3>
                {serviceLinks.slice(5).map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <h3>Advice & Areas</h3>
                <Link href="/areas-covered">Areas Covered</Link>
                <Link href="/plumbing-advice">Plumbing Advice</Link>
                {adviceLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <h3>Website</h3>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact Page</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms</Link>
                <a href="mailto:info@wolverhamptonplumber.co.uk">
                  info@wolverhamptonplumber.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <p>
              © {new Date().getFullYear()} Wolverhampton Plumber. Response
              depends on availability, timing and enquiry details. Gas work must
              be handled by a Gas Safe registered engineer.
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
