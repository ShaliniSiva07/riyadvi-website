import { Link } from "react-router-dom";
import blogs from "../data/blogs";

function Blog() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Insights & Ideas
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Technology
            <span className="block text-[#D4AF37]">
              & Digital Insights
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Explore ideas, trends, and insights around technology,
            digital transformation, design, and immersive experiences.
          </p>

        </div>
      </section>

      {/* Blog Cards */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog, index) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                className="group flex flex-col border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60"
              >

                {/* Number + Category */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-gray-500">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-12 text-2xl font-semibold leading-tight transition duration-300 group-hover:text-[#D4AF37]">
                  {blog.title}
                </h2>

                {/* Date */}
                <p className="mt-4 text-sm text-gray-600">
                  {blog.date}
                </p>

                {/* Excerpt */}
                <p className="mt-6 flex-1 leading-7 text-gray-500">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-3 py-2 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-8 text-sm font-semibold text-[#D4AF37]">
                  Read Article →
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Let's Build
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Have a digital idea?
            <span className="block text-[#D4AF37]">
              Let's bring it to life.
            </span>
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Start a Conversation
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Blog;