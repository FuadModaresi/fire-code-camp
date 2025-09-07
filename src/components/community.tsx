import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Community() {
  return (
    <section id="community" className="w-full py-20 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Join Our Fiery Community</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            You're not alone on this journey. Connect with other teen coders, get help, and share what you've built.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Ask Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Stuck on a problem? Our community and mentors are here to help you get unstuck.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Share2 className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Share Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Show off your amazing creations, get feedback, and get inspired by others.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <MessageSquare className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Collaborate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Find a partner for your next big project or join a team in our coding challenges.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Button size="lg">Join the Conversation</Button>
        </div>
      </div>
    </section>
  );
}
