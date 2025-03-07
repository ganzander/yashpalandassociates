import { Shield, Scale, FileText } from "lucide-react";

const features = [
  {
    name: "Criminal Defense",
    description:
      "Expert representation in criminal cases, protecting your rights and freedom.",
    icon: Shield,
  },
  {
    name: "Civil Litigation",
    description:
      "Resolving disputes and representing your interests in civil matters.",
    icon: Scale,
  },
  {
    name: "Contract Law",
    description:
      "Drafting, reviewing, and negotiating contracts to protect your business interests.",
    icon: FileText,
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-black font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Legal Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of legal services to meet your needs, with
            expertise in various areas of law.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
