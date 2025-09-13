'use client';

import { personalizedLearningPath } from '@/ai/flows/personalized-learning-path';
import type { PersonalizedLearningPathInput } from '@/ai/flows/personalized-learning-path';

export async function generateLearningPath(input: PersonalizedLearningPathInput) {
  // Basic validation on server
  if (!input.codingExperience || !input.interests) {
    throw new Error('Coding experience and interests are required.');
  }

  const result = await personalizedLearningPath(input);
  if (!result.learningPath) {
    throw new Error('Failed to generate a learning path.');
  }
  return result.learningPath;
}
