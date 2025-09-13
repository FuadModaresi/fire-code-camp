import Image from "next/image";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";

// TODO: Replace with your actual Instagram posts.
// You would typically fetch this data from the Instagram API.
const posts = [
  {
    id: 1,
    imageUrl: "/community-post-1.jpg",
    dataAiHint: "code abstract",
    caption: "Coding our future, one line at a time. #FireCodeCamp #TeenCoders",
  },
  {
    id: 2,
    imageUrl: "/community-post-1.jpg",
    dataAiHint: "students learning",
    caption:
      "Collaboration makes the dream work! Our students tackling a group project. #CodingCommunity",
  },
  {
    id: 3,
    imageUrl: "/community-post-1.jpg",
    dataAiHint: "gaming retro",
    caption:
      "From player to creator. Our game dev course is on fire! #GameDev #Python",
  },
  {
    id: 4,
    imageUrl: "/community-post-1.jpg",
    dataAiHint: "laptop lifestyle",
    caption:
      "Weekend vibes: Learn to code from anywhere. #LearnToCode #FireCodeCamp",
  },
];

export function Community() {
  return (
    <section id="community" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Join Our Fiery Community
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            See what our students are creating and get a glimpse of life at Fire
            Code Camp on our Instagram.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.slice(0, 4).map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/fire_code_camp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg"
            >
              <Image
                src={post.imageUrl}
                alt="Instagram Post"
                width={400}
                height={400}
                data-ai-hint={post.dataAiHint}
                className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm p-4">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a
              href="https://www.instagram.com/fire_code_camp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
