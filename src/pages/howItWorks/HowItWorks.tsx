import TattooImage from "../../assets/images/ArtistWorking.jpg";
import BlogHero from "../../components/howitWorks/HowItWorksHeroSection";
import RelatedBlogs from "../../components/howitWorks/blogs/RelatedBlog";

const HowItWorks = () => {
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
      <BlogHero />
      <RelatedBlogs posts={blogPosts} />
    </div>
  );
};

export default HowItWorks;
