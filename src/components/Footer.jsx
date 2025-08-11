import React from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold">МедАнализ</span>
          </div>
          <p className="text-gray-300">
            © 2024 МедАнализ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
