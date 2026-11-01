import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profileData } from "@/data/profile";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishantsurve.dev"),
  title: `${profileData.name} | ${profileData.role}`,
  description: `${profileData.name} — ${profileData.headline} Specializing in Enterprise Automation, AI Agents, UiPath, and Automation Anywhere 360.`,
  keywords: [
    "Nishant Surve",
    "Software Engineer",
    "Enterprise Automation",
    "UiPath",
    "Automation Anywhere 360",
    "AI Agents",
    "Pune Software Engineer",
    "LeetCode Knight",
    "Next.js Portfolio",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishantsurve.dev",
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  jobTitle: profileData.role,
  worksFor: {
    "@type": "Organization",
    name: profileData.company,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "India",
  },
  url: "https://nishantsurve.dev",
  sameAs: [
    profileData.socials.github,
    profileData.socials.linkedin,
    profileData.socials.leetcode,
  ],
  description: profileData.bio,
  knowsAbout: [
    "Robotic Process Automation (RPA)",
    "Automation Anywhere 360",
    "UiPath",
    "Artificial Intelligence Agents",
    "LLM Integration",
    "Data Structures & Algorithms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="304325"
          async
          data-cfasync="false"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Vercel Speed Insights & Web Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
