import { NavLink, Link } from 'react-router-dom' 
import { Users, Home, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import "./Header.css"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/"  className="flex items-center">
              <Users className="h-8 w-8 " aria-hidden="true" />
              <span className="ml-2 text-2xl font-bold ">EmployeeHub</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <NavLink to="/" className="flex items-center">
                <Home className="h-5 w-5 mr-2" aria-hidden="true" />
                <span className="hidden sm:inline">Home</span>
              </NavLink>
            </Button>
            <Button variant="ghost" asChild>
              <NavLink to="/adduser" className="flex items-center">
                <UserPlus className="h-5 w-5 mr-2" aria-hidden="true" />
                <span className="hidden sm:inline">Add User</span>
              </NavLink>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}