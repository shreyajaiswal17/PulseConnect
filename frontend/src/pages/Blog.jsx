const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
        Our Blog
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Latest news and updates about blood donation
      </p>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700">
            Blog posts will be displayed here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
