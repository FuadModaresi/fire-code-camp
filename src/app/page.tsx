import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { PersonalizedLearningPath } from '@/components/personalized-learning-path';
import { CourseCatalog } from '@/components/course-catalog';
import { Community } from '@/components/community';
import { ProgressTracking } from '@/components/progress-tracking';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PersonalizedLearningPath />
        {/* <CourseCatalog /> */}
        <ProgressTracking />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
