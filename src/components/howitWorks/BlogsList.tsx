import TattooImage from "../../assets/images/ArtistWorking.jpg";
import BlogHero from "./HowItWorksHeroSection";
import RelatedBlogs from "./blogs/RelatedBlog";
import Seo from "../seo/Seo";

const BlogsList = () => {
  const blogPosts = [
    {
      id: 1,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance",
    },
    {
      id: 2,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance-2",
    },
    {
      id: 3,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance-3",
    },
    {
      id: 4,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance-4",
    },
    {
      id: 5,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance-5",
    },
    {
      id: 6,
      image: TattooImage,
      date: "April 2, 2025",
      author: "PMU Forms Team",
      title: "Why Consent Forms Are More Than Just Paperwork",
      excerpt:
        "As a PMU (Permanent Makeup) artist, you're not just an artist — you're also a service provider operating in a highly regulated beauty and aesthetics space. That means protecting yourself legally is just as important as delivering flawless brows, lips, or eyeliner.",
      slug: "consent-forms-importance-6",
    },
  ];

  return (
    <div>
      <Seo
        title="PMU Forms Blog - Tips, Trends & Industry Insights"
        description="Read the latest PMU Forms blog posts about permanent makeup consent forms, aftercare tips, industry trends, and best practices for PMU artists."
        keywords="PMU blog, permanent makeup tips, consent forms, aftercare, PMU trends, beauty industry"
        canonical="https://pmuforms.com/blogs"
        ogTitle="PMU Forms Blog"
        ogDescription="Industry insights and tips for permanent makeup artists"
        ogUrl="https://pmuforms.com/blogs"
      />
      <BlogHero />
      <RelatedBlogs posts={blogPosts} />
    </div>
  );
};

export default BlogsList;
