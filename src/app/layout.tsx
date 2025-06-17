import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { theme } from '@/styles/theme';
import Navigation from './components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata = {
  title: 'FGS School - Excellence in Education',
  description: 'Discover a world-class education that prepares you for success in today\'s rapidly evolving world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: theme.keyframes }} />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
