import { SongsProvider } from "../shared/context/songs.context"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SongsProvider>
      <Component {...pageProps} />
    </SongsProvider>
  )
}