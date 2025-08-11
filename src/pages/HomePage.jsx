import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Расшифровка анализов
            <span className="text-medical-600 block">с рекомендациями</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Загрузите результаты анализов и получите профессиональную расшифровку 
            с персональными рекомендациями по питанию и биологически активным добавкам
          </p>
          <Link to="/analysis" className="btn-primary text-lg px-8 py-3">
            Загрузить анализы
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
