import { Link } from 'react-router-dom' 
import { Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-">
        <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-lg font-semibold text-primary">EmployeeHub</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EmployeeHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}