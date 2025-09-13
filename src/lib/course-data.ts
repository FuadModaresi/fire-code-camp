import { slugify } from '@/lib/utils';

const courses = [
  {
    title: "Python for Beginners",
    description: "Master the fundamentals of Python, one of the world's most popular programming languages. This course covers variables, data types, loops, functions, and basic data structures. You'll build a simple calculator and a text-based adventure game.",
    level: "Beginner",
    language: "Python",
    image: "/community-post-1.jpg",
    dataAiHint: "abstract code",
  },
  {
    title: "Web Dev 101: HTML, CSS, JS",
    description: "Build your first interactive website from scratch. No prior experience needed! Learn the core technologies of the web and create a multi-page personal portfolio site.",
    level: "Beginner",
    language: "JavaScript",
    image: "/community-post-1.jpg",
    dataAiHint: "website design",
  },
  {
    title: "Intro to Python: First Steps",
    description: "A fun, project-based introduction to Python. Learn variables, loops, and functions by building a cool text-based game. This course is perfect for absolute beginners who want to see results quickly.",
    level: "Beginner",
    language: "Python",
    image: "/community-post-1.jpg",
    dataAiHint: "snake python",
  },
    {
    title: "JavaScript Fundamentals",
    description: "An introduction to JavaScript, covering variables, data types, and functions. By the end, you'll be able to add interactivity to your web pages.",
    level: "Beginner",ht
    language: "JavaScript",
    image: "/community-post-1.jpg",
    dataAiHint: "code on screen",
  },
  {
    title: "Game Development with Pygame",
    description: "Learn to create your own 2D games using Python and the Pygame library. This course covers game loops, sprites, collision detection, and sound effects. You'll build a classic arcade-style shooter.",
    level: "Intermediate",
    language: "Python",
    image: "/community-post-1.jpg",
    dataAiHint: "retro gaming",
  },
  {
    title: "React for Teens",
    description: "Dive into modern web development and build powerful single-page applications with React. Learn about components, state, props, and hooks while building a social media dashboard.",
    level: "Intermediate",
    language: "JavaScript",
    image: "/community-post-1.jpg",
    dataAiHint: "modern interface",
  },
  {
    title: "Introduction to Data Science",
    description: "Uncover insights from data using Python libraries like Pandas and Matplotlib. This course will teach you data cleaning, analysis, and visualization techniques with real-world datasets.",
    level: "Advanced",
    language: "Python",
    image: "/community-post-1.jpg",
    dataAiHint: "data visualization",
  },
  {
    title: "Mobile App Development",
    description: "Learn to build cross-platform mobile apps for iOS and Android. Using React Native, you'll create a fully functional weather app that pulls data from a live API.",
    level: "Advanced",
    language: "JavaScript",
    image: "/community-post-1.jpg",
    dataAiHint: "mobile app",
  },
];

export const courseData = courses.map(course => ({
    ...course,
    slug: slugify(course.title)
}));
