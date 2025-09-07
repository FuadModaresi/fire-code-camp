
'use client';

import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Play, Code } from 'lucide-react';

const exampleCode = `
# Welcome to Fire Code Camp!
# This is a Python example.
# Click "Run" to see what happens.

def greet(name):
  return f"Hello, {name}! Ready to code?"

print(greet("Developer"))
`.trim();

export function CodeEditorSection() {
  const [code, setCode] = useState(exampleCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');
    // Simulate running the code and getting output
    setTimeout(() => {
        // A simple "simulation" of python execution for the example code
        if (code.includes('print(greet("Developer"))')) {
            setOutput('> Hello, Developer! Ready to code?');
        } else if (code.includes('print(')) {
            try {
                // Warning: This is a very simple and insecure way to "run" code.
                // For a real app, you would need a secure backend sandbox.
                const result = new Function(`
                    const logs = [];
                    const print = (...args) => logs.push(args.join(' '));
                    ${code.replace(/def.*|return.*/g, '')}
                    return logs.join('\\n');
                `)();
                setOutput(`> ${result}`);
            } catch (e: any) {
                setOutput(`> Error: ${e.message}`);
            }
        } else {
            setOutput('> Code ran successfully, but produced no output.');
        }
      setIsRunning(false);
    }, 1000);
  };

  return (
    <section id="tutorials" className="w-full py-20 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Interactive Tutorials & Code Editor
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn by doing with our built-in code editor. Write, run, and get instant feedback on your code without leaving your browser. Modify the example and run it!
            </p>
            <div className="flex gap-4">
                <Button size="lg" onClick={handleRun} disabled={isRunning}>
                  <Play className="mr-2 h-5 w-5" />
                  {isRunning ? 'Running...' : 'Run Code'}
                </Button>
                <Button size="lg" variant="outline">
                    <Code className="mr-2 h-5 w-5" />
                    Explore Tutorials
                </Button>
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto">
            <div className="rounded-lg border bg-background shadow-lg">
                <div className="p-4 border-b">
                    <span className="text-sm text-muted-foreground">example.py</span>
                </div>
                <div className="p-4">
                    <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="font-code text-sm bg-transparent border-0 focus-visible:ring-0 resize-none h-48"
                        placeholder="Write your code here..."
                    />
                </div>
                {output && (
                    <div className="p-4 border-t bg-muted/50">
                        <h4 className="font-semibold mb-2 text-sm">Output:</h4>
                        <pre className="font-code text-sm text-foreground/80 whitespace-pre-wrap">{output}</pre>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
