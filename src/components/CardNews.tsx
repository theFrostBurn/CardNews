interface CardNewsProps {
  slide: {
    title: string
    content: string
    imageUrl: string
    category: string
    author: string
    date: string
  }
  featured?: boolean
}

export default function CardNews({ slide, featured = false }: CardNewsProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className={`w-full object-cover ${featured ? 'h-80' : 'h-64'}`}
        />
        <span className={`category-tag category-${slide.category} absolute top-4 left-4`}>
          {slide.category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className={`font-bold mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>{slide.title}</h3>
        <p className="text-gray-600 mb-4">{slide.content}</p>
        
        <div className="flex items-center">
          <img
            src={`/images/authors/${slide.author.toLowerCase().replace(' ', '-')}.jpg`}
            alt={slide.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium">{slide.author}</p>
            <p className="text-gray-500 text-sm">{slide.date}</p>
          </div>
        </div>
      </div>
    </article>
  )
}