export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 bg-muted rounded-lg mb-6 animate-pulse" />
          <div className="h-6 bg-muted rounded-lg mb-12 max-w-3xl mx-auto animate-pulse" />

          {/* Stats Grid Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card/50 border rounded-xl p-6">
                <div className="h-8 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Resume Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-48 bg-muted rounded-lg animate-pulse" />
            <div className="h-12 w-48 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Tab Navigation Skeleton */}
        <div className="flex justify-center mb-8">
          <div className="bg-card/50 border rounded-xl p-1 flex">
            <div className="h-12 w-48 bg-muted rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-muted rounded-lg animate-pulse ml-1" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="h-6 bg-muted rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-muted rounded mb-2 animate-pulse w-2/3" />
                </div>
                <div className="h-6 w-20 bg-muted rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                <div className="h-4 bg-muted rounded animate-pulse w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
