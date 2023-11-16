import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Notification from '../components/notification/notification'
import { NotificationContextProvider } from '../store/notification-context'

function MyApp({ Component, pageProps }) {
  return <NotificationContextProvider>
    <Layout>
      <Head>
        <meta
          name='Main page events'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      <Component {...pageProps} />
     {/* <Notification title='test' message='test' status='success' /> */}
    </Layout>
    </NotificationContextProvider>
}

export default MyApp
