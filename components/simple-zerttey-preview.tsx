// Simple preview component with minimal React features
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SimpleZertteyPreview() {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col">
        <div className="p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl mb-2">Data Science Job Market in Kazakhstan</CardTitle>
            <CardDescription className="text-lg">Research insights on data science development</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <div className="text-sm text-muted-foreground mb-4">
              <strong>Zerttey Research</strong> — Independent research platform
            </div>
            <p className="mb-4">
              In the "Data Science in Kazakhstan" research by Zerttey, Anuar Aymoldin, Head of Artificial Intelligence
              at BTS Digital, shared insights on the rapid development of the data science market in recent years. He
              highlighted the emergence of specialized programs at universities and anticipated increased competition
              for data analysis professionals, especially in the banking sector.
            </p>
            <Link href="/media" className="inline-block mb-8">
              <Button variant="outline">Read More</Button>
            </Link>
          </CardContent>
        </div>
        <div className="flex justify-center pb-6">
          <div className="relative w-full max-w-md aspect-video bg-muted">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5PxnGy7lO2v5x14ZQBX2IPszGdaJH9.png"
              alt="Portrait of Anuar Aimoldin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
