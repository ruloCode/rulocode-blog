import Image from "next/image"

export  const  SkillsSection = () => {
  const skills = [
    {
      title: "Web Development",
      description: "I specialize in building responsive and scalable websites using React, JavaScript, and HTML/CSS to deliver exceptional user experiences.",
      color: "bg-pink-200",
      arrowDirection: "rotate-45",
      image: "/assets/skills_card_1.svg",
    },
    {
      title: "Top Performance",
      description: "I enhance web applications by optimizing load times, improving responsiveness, and ensuring efficient code, delivering a seamless user experience.",
      color: "bg-red-400",
      arrowDirection: "rotate-45",
      image: "/assets/skills_card_2.svg",

    },
    {
      title: "Interface Optimization",
      description: "I focus on improving web performance and interface usability through SEO techniques, accessibility standards, and modern web design practices.",
      color: "bg-emerald-500",
      arrowDirection: "-rotate-45",
      image: "/assets/skills_card_3.svg",

    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
              <Image src={skill.image} alt="skill image" width={120} height={120} />
            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection