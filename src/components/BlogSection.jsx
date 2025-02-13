import Image from "next/image";
import Link from "next/link";
const blogPosts = [
  {
    title: "Justice in India: Understanding Your Legal Rights",
    excerpt:
      "Explore the fundamental rights and legal protections available in India's justice system to ensure fair treatment under the law.",
    imageUrl: "/india.png",
    date: "June 1, 2023",
  },
  {
    title: "The Role of Justice in Modern Legal Systems",
    excerpt:
      "Justice is the foundation of a fair society. Learn how legal frameworks ensure fairness, accountability, and equality before the law.",
    imageUrl: "/justice-main.png",
    date: "May 15, 2023",
  },
  {
    title: "Pillars of Justice: Law and Order in Society",
    excerpt:
      "Understanding the principles of justice helps maintain social order and protect individual rights in legal systems worldwide.",
    imageUrl: "/justice.png",
    date: "April 30, 2023",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Blog
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Legal Insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full object-cover h-48"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-indigo-600 mb-1">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-base text-gray-500 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
