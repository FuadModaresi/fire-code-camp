import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function ProgressTracking() {
  return (
    <section id="progress" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Track Your Learning Journey
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our dashboard helps you visualize your progress, celebrate milestones, and stay motivated. See how far you've come and what's next on your path to becoming a coding pro.
            </p>
            <ul className="grid gap-2 text-lg">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> View completed lessons and projects.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Earn badges for achievements.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Resume your work from where you left off.</li>
            </ul>
            <Button size="lg" className="mt-4">Start Learning Now</Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/500"
              alt="Progress Dashboard"
              width={600}
              height={500}
              data-ai-hint="dashboard analytics"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
