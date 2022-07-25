import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PageNotFound({ statusCode }) {
  const router = useRouter()

  return (
    <div className="flex justify-center text-center my-36">
      <div>
        <h1 className="mb-5">
          {statusCode === 404
            ? `404, Page not found`
            : statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>

        <Link href="/">
          <a className="mt-10 capitalize primary-btn">go back home</a>
        </Link>
      </div>
    </div>
  )
}
