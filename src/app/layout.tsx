import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Kanika Pitaliya | Data Scientist & ML/AI Engineer',
  description:
    'Portfolio of Kanika Pitaliya — Data Scientist and ML/AI Engineer working across statistical modeling, machine learning, RAG, NLP and agentic AI systems.',
  keywords: [
    'Kanika Pitaliya',
    'Data Scientist',
    'ML Engineer',
    'AI Engineer',
    'Statistics',
    'Machine Learning',
    'Generative AI',
    'RAG',
    'Agentic AI',
    'Python',
    'R',
  ],
  authors: [{ name: 'Kanika Pitaliya' }],
  creator: 'Kanika Pitaliya',
  metadataBase: new URL('https://kanikapitaliya.tech'),
  openGraph: {
    title: 'Kanika Pitaliya | Data Scientist & ML/AI Engineer',
    description:
      'Portfolio of Kanika Pitaliya — Data Scientist and ML/AI Engineer working across statistical modeling, machine learning, RAG, NLP and agentic AI systems.',
    url: 'https://kanikapitaliya.tech',
    siteName: 'Kanika Pitaliya Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanika Pitaliya | Data Scientist & ML/AI Engineer',
    description:
      'Portfolio of Kanika Pitaliya — Data Scientist and ML/AI Engineer working across statistical modeling, machine learning, RAG, NLP and agentic AI systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-zinc-950 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
