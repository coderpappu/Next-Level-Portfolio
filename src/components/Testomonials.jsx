import { InfiniteMovingCards } from "./infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Pappu built our entire HRM SaaS platform from scratch. His understanding of multi-tenant architecture and clean code practices made the system highly scalable. He delivers on time and communicates clearly throughout the process.",
    name: "Md. Rafiqul Islam",
    title: "CTO, Xceed Bangladesh LTD",
  },
  {
    quote:
      "The E-Clearance system Pappu developed transformed our entire clearance process. What used to take students 2 weeks of running between departments now happens in 2 days digitally. Exceptional technical skill and problem-solving ability.",
    name: "Mohammad Kamal Hossain",
    title: "Principal, Chattogram Polytechnic Institute",
  },
  {
    quote:
      "Working with Pappu on our e-commerce platform was a great experience. He understood our multi-vendor requirements quickly and built a robust solution. His React and Node.js expertise is top-notch.",
    name: "Ariful Haque",
    title: "Founder, Mini Dokan",
  },
  {
    quote:
      "Pappu developed our Learning Management System with great attention to detail. The user registration flow, course management, and payment integration all work seamlessly. Highly recommended for any full-stack project.",
    name: "Tanvir Ahmed",
    title: "Project Manager, Codex LMS",
  },
  {
    quote:
      "I've collaborated with Pappu on several freelance projects. His ability to architect clean backend APIs with Node.js and create polished React frontends is impressive. Always meets deadlines and writes maintainable code.",
    name: "Saiful Islam",
    title: "Senior Developer, Research Lab Chattogram",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden my-20">
      <div className="text-center">
        <h3
          className="text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Testimonials
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base">
          What colleagues and clients say about working with me
        </p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
