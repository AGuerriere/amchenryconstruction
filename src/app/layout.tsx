import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'A McHenry Construction',
  description: 'A McHenry Construction, is a construction company based in Ballycastle. Building outstanding new developments for over 40 years.',
  keywords: [
    'House Builders', 'Home Builders','Construction Company', 'Building Services', 'Construction Services', 'Residential Construction', 'Commercial Construction',
    'Property Development', 'Construction Projects', 'Ballycastle Construction', 'Northern Ireland Builders', 'Construction Management',
    'Renovation Services', 'Building Renovation', 'Home Extensions', 'New Build Homes', 'New Builds Ballycastle', 'Civil Engineering', 'Architectural Services',
    'Project Management', 'Sustainable Construction', 'Construction Consultancy', 'Ballycastle', 'North Coast', 'Causeway Coast',
    'Antrim Coast', 'Northern Ireland', 'NI Construction', 'Construction Expertise', 'Property Maintenance', 'Custom Builds',
    'Eco-Friendly Building', 'Land Development', 'Construction Planning', 'Building Regulations', 'Construction Safety'
  ],
  metadataBase: new URL('https://amchenryconstruction.com'),
  icons: {
    icon: './favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/images/logo.webp',
    title: 'A McHenry Construction',
    description: 'A McHenry Construction, is a construction company based in Ballycastle. Building outstanding new developments for over 40 years.',
    url: 'https://amchenryconstruction.com/',
    siteName: 'A McHenry Construction',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
