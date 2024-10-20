import { Github, Linkedin,  Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    href: "https://github.com/ruloCode",
    label: "Github",
    icon: Github,
    size: "h-16 w-16"
  },
  {
    href: "https://www.linkedin.com/in/rulocode/",
    label: "Linkedin",
    icon: Linkedin,
    size: "h-10 w-10"
  },

  {
    href: "https://www.instagram.com/rulocode/",
    label: "Instagram",
    icon: Instagram,
    size: "h-10 w-10"
  },

]

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-4xl font-bold mb-4">{`Let's get in touch`}</h2>
            <p className="text-gray-600 max-w-xl">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com 
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Button variant="ghost" size="icon">
                  <social.icon className={social.size} />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
