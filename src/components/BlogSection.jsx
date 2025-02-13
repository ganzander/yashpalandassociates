import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Your Rights in a Criminal Case",
    excerpt:
      "Learn about the key rights you have when facing criminal charges and how to protect yourself.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date: "June 1, 2023",
  },
  {
    title: "The Importance of Contracts in Business",
    excerpt:
      "Discover why well-drafted contracts are crucial for protecting your business interests.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date: "May 15, 2023",
  },
  {
    title: "Navigating the Complexities of Divorce Law",
    excerpt:
      "A guide to understanding the legal aspects of divorce and how to protect your interests.",
    imageUrl: "/placeholder.svg?height=200&width=300",
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
