import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The product you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
            <FiArrowLeft />
            <span>Back to Products</span>
          </Link>
          <Link href="/" className="btn-secondary">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
