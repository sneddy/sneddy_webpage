import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Published research in top-tier medical and AI journals
              </p>
            </div>
          </div>
          <div className="gap-6 py-12 space-y-8">
            <div className="relative h-full rounded-lg p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
              <Card className="relative bg-card overflow-hidden">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Effect of a comprehensive deep-learning model on the accuracy of chest x-ray interpretation by
                      radiologists
                    </CardTitle>
                    <CardDescription className="text-lg">
                      The Lancet Digital Health (Impact Factor: 98.4) - August 2021
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Authors:</strong> Jarrel CY Seah, Cyril H M Tang, Quinlan D Buchheit, Xavier G Holt,
                      Jeffrey B Wardman, <span className="text-primary font-medium">Anuar Aimoldin</span>, et al.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">130</div>
                        <div className="text-sm text-muted-foreground">Citations</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">233</div>
                        <div className="text-sm text-muted-foreground">Captures</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">168</div>
                        <div className="text-sm text-muted-foreground">Mentions</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">328</div>
                        <div className="text-sm text-muted-foreground">Social Media</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Background</h4>
                      <p className="text-sm">
                        Chest x-rays are widely used in clinical practice; however, interpretation can be hindered by
                        human error and a lack of experienced thoracic radiologists. Deep learning has the potential to
                        improve the accuracy of chest x-ray interpretation. We therefore aimed to assess the accuracy of
                        radiologists with and without the assistance of a deep-learning model.
                      </p>
                      <h4 className="font-semibold">Findings</h4>
                      <p className="text-sm">
                        Unassisted radiologists had a macroaveraged AUC of 0.713 across the 127 clinical findings,
                        compared with 0.808 when assisted by the model. The deep-learning model statistically
                        significantly improved the classification accuracy of radiologists for 102 (80%) of 127 clinical
                        findings, was statistically non-inferior for 19 (15%) findings, and no findings showed a
                        decrease in accuracy when radiologists used the deep-learning model.
                      </p>
                      <h4 className="font-semibold">Interpretation</h4>
                      <p className="text-sm">
                        This study shows the potential of a comprehensive deep-learning model to improve chest x-ray
                        interpretation across a large breadth of clinical practice.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        href="https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00106-0/fulltext"
                        target="_blank"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Read Full Paper
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                      <Button asChild variant="outline" className="gap-2">
                        <a
                          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lancet_paper-9XroxcVRnj1E99qobrtBdfhxva0YV4.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div className="relative h-full rounded-lg p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
              <Card className="relative bg-card overflow-hidden">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Efficiency Analysis of First-Order Stochastic Optimization Algorithms for Image Registration
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Norwegian Journal of Development of the International Science - 2020
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Authors:</strong> Voronov S., Amir M., Kozlov A., Zinollayev A.,{" "}
                      <span className="text-primary font-medium">Aimoldin A.</span>
                    </p>

                    <div className="space-y-4">
                      <p className="text-sm">
                        This work presents a comparative experimental analysis of different first-order stochastic
                        optimization algorithms for image registration in spatial domain: stochastic gradient descent,
                        Momentum, Nesterov momentum, Adagrad, RMSprop, Adam. Correlation coefficient is considered as
                        the objective function. Experiments are performed on synthetic data generated via wave model
                        with different noise-to-signal ratio and real-world images.
                      </p>
                      <h4 className="font-semibold">Key Findings</h4>
                      <p className="text-sm">
                        The comparative analysis shows that in each case "classical" stochastic gradient descent shows
                        the worst result in terms of the convergence rate. The best results are provided by Adam and
                        RMSprop optimizations, with Adam algorithm being almost always preferable as it has less
                        variance than RMSprop.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        href="https://nor-ijournal.com/wp-content/uploads/2023/09/NJD_49_1.pdf"
                        target="_blank"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Read Full Paper
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                      <Button asChild variant="outline" className="gap-2">
                        <a
                          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NJD_49_1-ebbEKK44bK8v3ryQ4nI0WJ4ig5DzFl.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
