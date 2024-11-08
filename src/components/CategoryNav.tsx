export default function CategoryNav() {
  const categories = ['Nature', 'Photography', 'Relaxation', 'Vacation', 'Travel', 'Adventure']
  
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className="text-gray-600 hover:text-primary">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 