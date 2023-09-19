import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Muse.ai</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}