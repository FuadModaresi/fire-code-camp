import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Alex J.",
        age: 15,
        quote: "Ember Programming made coding feel like a game! I built my first website in a week and it was so much fun.",
        avatar: "https://picsum.photos/100/100?random=7",
        dataAiHint: "teenager portrait"
    },
    {
        name: "Samantha P.",
        age: 17,
        quote: "The personalized path was a game-changer. It showed me exactly what to learn to pursue my interest in game development.",
        avatar: "https://picsum.photos/100/100?random=8",
        dataAiHint: "teenager portrait"
    },
    {
        name: "Leo K.",
        age: 14,
        quote: "I love the community. Whenever I get stuck, there's always someone friendly to help me out. It's way better than learning alone.",
        avatar: "https://picsum.photos/100/100?random=9",
        dataAiHint: "teenager portrait"
    }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Students Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Real stories from teens who ignited their passion for code with us.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4 text-lg">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 pt-4 border-t">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
