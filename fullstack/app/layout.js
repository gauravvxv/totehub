import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'The Tote Hub',
  description: 'Eco-friendly tote bags for everyone.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
