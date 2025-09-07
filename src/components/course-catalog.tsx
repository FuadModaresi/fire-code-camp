'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const courses = [
  {
    title: "Python for Beginners",
    description: "Master the fundamentals of Python, one of the world's most popular programming languages.",
    level: "Beginner",
    language: "Python",
    image: "https://picsum.photos/600/400?random=1",
    dataAiHint: "abstract code",
  },
  {
    title: "Web Dev 101: HTML, CSS, JS",
    description: "Build your first interactive website from scratch. No prior experience needed!",
    level: "Beginner",
    language: "JavaScript",
    image: "https://picsum.photos/600/400?random=2",
    dataAiHint: "website design",
  },
  {
    title: "Game Development with Pygame",
    description: "Learn to create your own 2D games using Python and the Pygame library.",
    level: "Intermediate",
    language: "Python",
    image: "https://picsum.photos/600/400?random=3",
    dataAiHint: "retro gaming",
  },
  {
    title: "React for Teens",
    description: "Dive into modern web development and build powerful single-page applications with React.",
    level: "Intermediate",
    language: "JavaScript",
    image: "https://picsum.photos/600/400?random=4",
    dataAiHint: "modern interface",
  },
  {
    title: "Introduction to Data Science",
    description: "Uncover insights from data using Python libraries like Pandas and Matplotlib.",
    level: "Advanced",
    language: "Python",
    image: "https://picsum.photos/600/400?random=5",
    dataAiHint: "data visualization",
  },
  {
    title: "Mobile App Development",
    description: "Learn to build cross-platform mobile apps for iOS and Android.",
    level: "Advanced",
    language: "JavaScript",
    image: "https://picsum.photos/600/400?random=6",
    dataAiHint: "mobile app",
  },
];

const languages = ["All", "Python", "JavaScript"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export function CourseCatalog() {
  const [filterLang, setFilterLang] = useState('All');
  const [filterLevel, setFilterLevel] = useState('All');

  const filteredCourses = courses.filter(course => {
    const langMatch = filterLang === 'All' || course.language === filterLang;
    const levelMatch = filterLevel === 'All' || course.level === filterLevel;
    return langMatch && levelMatch;
  });

  return (
    <section id="courses" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Courses</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find the perfect starting point or your next challenge in our course catalog.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-medium text-nowrap">Language:</span>
            {languages.map(lang => (
              <Button key={lang} variant={filterLang === lang ? 'default' : 'outline'} size="sm" onClick={() => setFilterLang(lang)}>{lang}</Button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-medium text-nowrap">Skill Level:</span>
            {levels.map(level => (
              <Button key={level} variant={filterLevel === level ? 'default' : 'outline'} size="sm" onClick={() => setFilterLevel(level)}>{level}</Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.title} className="flex flex-col hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  data-ai-hint={course.dataAiHint}
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'outline'} className="capitalize shrink-0 ml-2">{course.level}</Badge>
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Course</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No courses match your filters. Try a different combination!</p>
        )}
      </div>
    </section>
  );
}
