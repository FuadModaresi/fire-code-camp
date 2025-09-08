import { courseData } from '@/components/course-catalog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  return courseData.map((course) => ({
    slug: course.slug,
  }));
}

function getCourseFromSlug(slug: string) {
  return courseData.find((course) => course.slug === slug);
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseFromSlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={600}
                data-ai-hint={course.dataAiHint}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'outline'} className="capitalize shrink-0">{course.level}</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                {course.title}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {course.description}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/ide">Start Coding</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#courses">Back to Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
