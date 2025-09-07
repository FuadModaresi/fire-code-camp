import { CodeSnippet } from './code-snippet';
import { Button } from './ui/button';

const exampleCode = `
# Welcome to Ember Programming!
# This is a Python example.
# Run this code to see what happens.

def greet(name):
  print(f"Hello, {name}! Ready to code?")

greet("Developer") 
`;

export function CodeEditorSection() {
  return (
    <section id="tutorials" className="w-full py-20 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Interactive Tutorials & Code Editor
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn by doing with our built-in code editor. Write, run, and get instant feedback on your code without leaving your browser. Copy our examples to get a quick start!
            </p>
            <Button size="lg">Try a Free Tutorial</Button>
          </div>
          <div className="w-full max-w-2xl mx-auto">
            <CodeSnippet code={exampleCode} />
          </div>
        </div>
      </div>
    </section>
  );
}
