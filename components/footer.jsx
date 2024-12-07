import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/icon.png" alt="Zeal" className="h-8 w-auto mb-4" />
            <p className="text-gray-600">
              Your complete congregation assistant app. Available for free.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-600 hover:text-gray-900">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/delete-data" className="text-gray-600 hover:text-gray-900">
                  Delete User Data
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Download</h3>
            <div className="space-y-2">
              <a
                href="https://apps.apple.com/us/app/zeal-congregation-assisstant/id6737194361"
                className="block"
              >
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.zeal.congregation" className="block">
                <img
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zeal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

