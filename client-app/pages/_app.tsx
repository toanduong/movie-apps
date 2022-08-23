import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps }  }: AppProps) {
  return (
    <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp;
