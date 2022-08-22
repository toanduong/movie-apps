import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, session }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp;
