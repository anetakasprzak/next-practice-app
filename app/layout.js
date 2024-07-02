export const metadata = {
  title: "Practice",
  description: "Exercising with React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
