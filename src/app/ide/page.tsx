import { Header } from '@/components/header';
import { IdeSection } from '@/components/ide-section';
import { Footer } from '@/components/footer';

export default function IdePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <IdeSection />
      </main>
      <Footer />
    </div>
  );
}
