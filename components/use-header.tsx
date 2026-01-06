import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, ChevronUp } from "lucide-react"
import { Button } from "./ui/button"

export function UserHeader() {
  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-blue-200">
            <AvatarFallback className="bg-blue text-blue-500 font-semibold">Q</AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">Quick360</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className="h-4 w-4 text-yellow-400" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronUp className="h-4 w-4 text-blue-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}
