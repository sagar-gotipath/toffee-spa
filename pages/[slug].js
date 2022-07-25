import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CenterWrapper from '../components/shared/CenterWrapper'
import VerticalContainer from '../components/shared/VerticalContainer'

export default function SubPage() {
  const router = useRouter()
  const { slug } = router.query
  const title = slug?.split('-').join(' ')
  return (
    <Layout>
      <main className="mt-14">
        <VerticalContainer>
          <CenterWrapper>
            <h1 className="mb-10 text-center capitalize">{title} page</h1>
            <p className="mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita
              molestiae officiis rerum ratione molestias quasi vitae quisquam ullam tempore provident. Expedita, vitae?
              Harum, mollitia autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem quam
              ea earum expedita molestiae officiis rerum ratione molestias quasi vitae quisquam ullam tempore provident.
              Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              voluptatem quam ea earum expedita molestiae officiis rerum ratione molestias quasi vitae quisquam ullam
              tempore provident. Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores, voluptatem quam ea earum expedita molestiae officiis rerum ratione molestias
              quasi vitae quisquam ullam tempore provident. Expedita, vitae? Harum, mollitia autem! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita molestiae officiis rerum
              ratione molestias quasi vitae quisquam ullam tempore provident. Expedita, vitae? Harum, mollitia autem!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem quam ea earum expedita
              molestiae officiis rerum ratione molestias quasi vitae quisquam ullam tempore provident. Expedita, vitae?
              Harum, mollitia autem!
            </p>
            <Link href="/">
              <a className="capitalize primary-btn">return to home</a>
            </Link>
          </CenterWrapper>
        </VerticalContainer>
      </main>
    </Layout>
  )
}
