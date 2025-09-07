import { PersonalizedLearningForm } from './personalized-learning-form';

export function PersonalizedLearningPath() {
  return (
    <section id="learning-path" className="w-full py-20 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <PersonalizedLearningForm />
      </div>
    </section>
  );
}
