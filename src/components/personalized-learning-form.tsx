'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateLearningPath } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  codingExperience: z.string().min(1, 'Please select your coding experience.'),
  interests: z.string().min(3, 'Please tell us your interests.'),
});

export function PersonalizedLearningForm() {
  const [isPending, startTransition] = useTransition();
  const [learningPath, setLearningPath] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      codingExperience: '',
      interests: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      setError(null);
      setLearningPath(null);
      try {
        const path = await generateLearningPath(values);
        setLearningPath(path);
      } catch (e) {
        setError('Failed to generate learning path. Please try again.');
      }
    });
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-3xl">
          <Sparkles className="h-8 w-8 text-accent" />
          Your Personalized Learning Path
        </CardTitle>
        <CardDescription className="text-lg">
          Not sure where to start? Answer two simple questions, and our AI will create a custom learning plan for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="codingExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your coding experience?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">None, I'm a total beginner!</SelectItem>
                        <SelectItem value="beginner">Beginner (I know some basics)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (I've built a few projects)</SelectItem>
                        <SelectItem value="advanced">Advanced (I'm a coding wizard)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you want to build?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., websites, games, apps" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text-center">
              <Button type="submit" disabled={isPending} size="lg">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate My Path'
                )}
              </Button>
            </div>
          </form>
        </Form>
        {isPending && (
          <div className="mt-8 text-center text-muted-foreground flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <p>Our AI is crafting your unique path... please wait a moment.</p>
          </div>
        )}
        {error && (
          <div className="mt-8 text-destructive text-center">{error}</div>
        )}
        {learningPath && (
          <div className="mt-8 rounded-lg border border-primary/50 bg-secondary/50 p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Here is your suggested path:</h3>
            <p className="whitespace-pre-wrap text-foreground/90">{learningPath}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
