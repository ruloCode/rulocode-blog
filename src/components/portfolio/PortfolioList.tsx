import ProjectCard from './ProjectCard'

interface Project {
  imageUrl: string
  title: string
  description: string
}

const projects: Project[] = [
  {
    imageUrl: '/assets/project_1.jpg',
    title: 'Blood Orange',
    description: 'UI, Art direction'
  },
  {
    imageUrl: '/assets/project_2.jpg',
    title: 'Abstract Package',
    description: 'UI, Art direction'
  },
  {
    imageUrl: '/assets/project_3.jpg',
    title: 'Design Portfolio',
    description: 'UI, Art direction'
  },
  {
    imageUrl: '/assets/project_4.jpg',
    title: 'Isaiah Book',
    description: 'UI, Art direction'
  },
  {
    imageUrl: '/assets/project_5.jpg',
    title: 'Typography Book',
    description: 'UI, Art direction'
  },
  {
    imageUrl: '/assets/project_6.jpg',
    title: 'Design Job',
    description: 'UI, Art direction'
  }
]

export const PortfolioList = () => {
  return (
   <div className='flex flex-col gap-4 py-4'>
    <div className='w-full flex justify-center items-center'>
        <h2 className='text-3xl font-bold'>Latest work</h2>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {projects.map((project, index) => (
         <ProjectCard
           key={index}
           imageUrl={project.imageUrl}
           title={project.title}
           description={project.description}
         />
       ))}
     </div>
   </div>
  )
}

export default PortfolioList
