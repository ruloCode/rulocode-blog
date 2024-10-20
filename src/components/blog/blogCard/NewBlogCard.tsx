import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  imageUrl: string
  category: string
  readTime: string
  title: string
  description: string
}

export default function BlogCard({
  imageUrl = "/placeholder.svg?height=200&width=400",
  category = "Blockchain",
  readTime = "5 min read",
  title = "A beginner's guide to blockchain for engineers",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
}: BlogCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-white text-black transition-shadow duration-300 hover:shadow-lg flex flex-col">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-black text-white hover:bg-black/80">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            {readTime}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant={"outline"}   className="w-full text-black border-black bg-white">
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}
