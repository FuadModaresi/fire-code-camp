'use server';

/**
 * @fileOverview Generates a personalized learning path for a new user based on their coding knowledge and interests.
 *
 * - personalizedLearningPath - A function that generates a personalized learning path.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  codingExperience: z
    .string()
    .describe('The user\'s prior coding experience (e.g., none, beginner, intermediate, advanced).'),
  interests: z
    .string()
    .describe('The user\'s interests in programming (e.g., web development, game development, data science).'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z
    .string()
    .describe('A suggested learning path tailored to the user\'s coding knowledge and interests.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an expert learning path generator.

You will generate a learning path tailored to the user\'s coding knowledge and interests.

Coding Experience: {{{codingExperience}}}
Interests: {{{interests}}}

Based on their coding experience and interests, suggest a tailored learning path.`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
