// import theme style scss file
import "styles/theme.scss";
// export const metadata = {
//     title: 'App - BackOffice BussKM',
//     description: 'UI Interface app backoffice BussKM NextJs13',
//     keywords: 'BussKM UI, Next.js 13, Admin dashboard, web apps, bootstrap 5, admin theme'
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light">{children}</body>
    </html>
  );
}
