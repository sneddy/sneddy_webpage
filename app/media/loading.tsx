export default function MediaLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 bg-muted rounded-lg mb-6 animate-pulse" />
          <div className="h-6 bg-muted rounded-lg mb-12 max-w-3xl mx-auto animate-pulse" />
        </div>

        {/* Media Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card border rounded-lg overflow-hidden">
              <div className="h-48 bg-muted animate-pulse" />
              <div className="p-6">
                <div className="h-6 bg-muted rounded mb-3 animate-pulse" />
                <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-4 bg-muted rounded mb-4 w-2/3 animate-pulse" />
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-muted rounded w-20 animate-pulse" />
                  <div className="h-8 w-24 bg-muted rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
