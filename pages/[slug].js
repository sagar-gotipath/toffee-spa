import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CenterWrapper from '../components/shared/CenterWrapper'
import VerticalContainer from '../components/shared/VerticalContainer'

export default function SubPage() {
  const router = useRouter()
  const { slug } = router.query
  const title = slug?.split('-').join(' ')

  return (
    <>
      <Head>
        <title>TOFFEE</title>
        <link rel="icon" href="/assets/images/favicon_io/favicon.ico" />
      </Head>
      <Layout>
        <main className="mt-14">
          <VerticalContainer>
            <CenterWrapper>
              {title === 'download' ? (
                <div className="flex flex-col items-center justify-center space-x-3 h-96">
                  <h1 className="mb-10 text-center capitalize">{title} toffee app</h1>
                  <div className="flex space-x-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.banglalink.toffee"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/google_play.png" alt="google play image" />
                    </a>

                    <a
                      href="https://apps.apple.com/us/app/toffee-tv-sports-and-drama/id1499048052"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/app_store.png" alt="google play image" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96 mt-14">
                  <h1 className="mb-10 text-center capitalize">{title} page</h1>
                  <p className="mb-16 mt-14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita
                    molestiae officiis rerum ratione molestias quasi vitae quisquam ullam tempore provident. Expedita,
                    vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                    voluptatem quam ea earum expedita molestiae officiis rerum ratione molestias quasi vitae quisquam
                    ullam tempore provident. Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita molestiae officiis rerum
                    ratione molestias quasi vitae quisquam ullam tempore provident. Expedita, vitae? Harum, mollitia
                    autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem quam ea earum
                    expedita molestiae officiis rerum ratione molestias quasi vitae quisquam ullam tempore provident.
                    Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, voluptatem quam ea earum expedita molestiae officiis rerum ratione molestias quasi vitae
                    quisquam ullam tempore provident. Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita molestiae officiis rerum
                    ratione molestias quasi vitae quisquam ullam tempore provident. Expedita, vitae? Harum, mollitia
                    autem!
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <Link href="/">
                  <a className="mt-10 capitalize primary-btn">return to home</a>
                </Link>
              </div>
            </CenterWrapper>
          </VerticalContainer>
        </main>
      </Layout>
    </>
  )
}
