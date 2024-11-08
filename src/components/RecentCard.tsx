import { FC } from 'react'

interface Post {
  title: string
  content: string
  imageUrl: string
  category: string
  author: string
  date: string
}

interface RecentCardProps {
  post: Post
}

const RecentCard: FC<RecentCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <span className={`category-tag category-${post.category} absolute top-4 left-4`}>
          {post.category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.content}</p>
        
        <div className="flex items-center">
          <img
            src={`/images/authors/${post.author.toLowerCase().replace(' ', '-')}.jpg`}
            alt={post.author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-sm">{post.author}</p>
            <p className="text-gray-500 text-xs">{post.date}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RecentCard 