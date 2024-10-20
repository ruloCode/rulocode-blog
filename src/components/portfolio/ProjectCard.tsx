import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  imageUrl: string
  title: string
  description: string
}

export const ProjectCard = ({ 
  imageUrl = "/placeholder.svg?height=300&width=300", 
  title = "Project title", 
  description = "UI, Art direction" 
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}


export default ProjectCard