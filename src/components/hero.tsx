import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              Ignite Your Coding Journey
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Welcome to Fire Code Camp, the most engaging way for teens to learn to code.
              Explore our interactive courses and join a vibrant community of young developers.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#learning-path">
                <Code className="mr-2 h-5 w-5" />
                Find Your Path
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
