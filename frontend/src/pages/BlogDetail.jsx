import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Blog
          </p>

          <h1 className="mt-6 text-4xl font-bold">
            Article Not Found
          </h1>

          <Link
            to="/blog"
            className="mt-8 inline-block text-[#D4AF37] hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white">

      {/* Article Hero */}
      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            {blog.category}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            {blog.title}
          </h1>

          <p className="mt-6 text-sm text-gray-500">
            {blog.date}
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {blog.excerpt}
          </p>

        </div>
      </section>

      {/* Article */}
      <article className="border-y border-white/10 bg-[#050505] px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="space-y-8 text-lg leading-9 text-gray-300">
            <p>
              {blog.content}
            </p>

            <p>
              Businesses can approach digital transformation by first
              understanding their goals, identifying opportunities for
              improvement, and selecting technologies that support their
              long-term objectives.
            </p>

            <p>
              A user-focused approach combined with modern technology can
              help create digital products that are useful, accessible,
              and engaging.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-14 border-t border-white/10 pt-8">

            <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
              Tags
            </p>

            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-4 py-2 text-sm text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Have A Project?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's turn your ideas
            <span className="block text-[#D4AF37]">
              into reality.
            </span>
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}

export default BlogDetail;