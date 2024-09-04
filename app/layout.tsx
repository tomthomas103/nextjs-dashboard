import '@/app/ui/global.css';
import { inter,lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased`}>{children}
      <h1 className={`${inter.className} text-blue-500`}  >I'm blue!</h1>
      </body>
    </html>
  );
}
