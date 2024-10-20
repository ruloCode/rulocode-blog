import BlogList from "@/components/blog/blogList/BlogList";
import ContactSection from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import PortfolioList from "@/components/portfolio/PortfolioList";
import SkillsSection from "@/components/skillsSection/SkillsSection";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <Hero />
      <SkillsSection />
      <PortfolioList />
      <BlogList />
      <ContactSection />
    </MaxWidthWrapper>
  );
}
