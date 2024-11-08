'use client'

import CardNews from '@/components/CardNews'
import CategoryNav from '@/components/CategoryNav'
import RecentCard from '@/components/RecentCard'

export default function Home() {
  const featuredPosts = [
    {
      title: "The Road Ahead",
      content: "The road ahead might be perilous - it might not be.",
      imageUrl: "/images/northern-lights.jpg",
      category: "photography",
      author: "Matt Vogels",
      date: "September 25, 2023"
    },
    {
      title: "From Top Down",
      content: "Once a year, go someplace you've never been before.",
      imageUrl: "/images/lanterns.jpg",
      category: "adventure",
      author: "William Wong",
      date: "September 25, 2023"
    }
  ]

  const recentPosts = [
    {
      title: "Still Standing Tall",
      content: "Life begins at the end of your comfort zone.",
      imageUrl: "/images/balloons.jpg",
      category: "nature",
      author: "William Wong",
      date: "9/25/2023"
    },
    {
      title: "Sunny Side Up",
      content: "No place is ever as bad as they tell you it's going to be.",
      imageUrl: "/images/bridge.jpg",
      category: "photography",
      author: "Matt Vogels",
      date: "9/25/2023"
    },
    {
      title: "Water Falls",
      content: "We travel not to escape life, but for life not to escape us.",
      imageUrl: "/images/sunset.jpg",
      category: "adventure",
      author: "Matt Vogels",
      date: "9/25/2023"
    }
  ]

  return (
    <>
      <section className="hero-section flex flex-col items-center justify-center text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Let's do it together.</h1>
        <p className="text-xl mb-8">당신의 발자국이 새로운 이야기가 되는 곳, 함께 세상을 느껴보세요.</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded">
          View Latest Posts
        </button>
      </section>

      <CategoryNav />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <CardNews 
                key={index}
                slide={post}
                featured={true}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Recent Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <RecentCard 
                key={index}
                post={post}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}