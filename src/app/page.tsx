import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { PersonalizedLearningPath } from '@/components/personalized-learning-path';
import { CourseCatalog } from '@/components/course-catalog';
import { CodeEditorSection } from '@/components/code-editor-section';
import { Community } from '@/components/community';
import { ProgressTracking } from '@/components/progress-tracking';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';
import { IdeSection } from '@/components/ide-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PersonalizedLearningPath />
        <CourseCatalog />
        <CodeEditorSection />
        <IdeSection />
        <ProgressTracking />
        <Community />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
