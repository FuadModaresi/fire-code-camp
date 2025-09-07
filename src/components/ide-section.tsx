
'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Code, File, FileJson, Folder, Play, Terminal } from 'lucide-react';
import { Textarea } from './ui/textarea';

const files = {
  'src': {
    'app': {
      'page.tsx': `// src/app/page.tsx
export default function Home() {
  return <h1>Hello, Fire Code Camp!</h1>
}`,
    },
    'components': {
      'header.tsx': '// Header component code',
    },
    'layout.tsx': '// Root layout code',
  },
  'package.json': '{ "name": "fire-code-camp" }',
};

export function IdeSection() {
  const [activeFile, setActiveFile] = useState('src/app/page.tsx');
  const [code, setCode] = useState(files.src.app['page.tsx']);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleFileClick = (path: string, content: string) => {
    setActiveFile(path);
    setCode(content);
    setOutput('');
  }

  const handleRun = () => {
    setIsRunning(true);
    setOutput(`> Running ${activeFile}...\n> Build successful.\n> Hello, Fire Code Camp!`);
    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
  };

  const renderFileTree = (tree: any, path = '') => {
    return Object.entries(tree).map(([name, content]) => {
      const currentPath = path ? `${path}/${name}` : name;
      if (typeof content === 'string') {
        return (
          <div key={currentPath}
               className={`flex items-center gap-2 cursor-pointer p-1 rounded-md text-sm ${activeFile === currentPath ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
               onClick={() => handleFileClick(currentPath, content)}>
            {name.endsWith('.json') ? <FileJson className="h-4 w-4 shrink-0" /> : <File className="h-4 w-4 shrink-0" />}
            <span>{name}</span>
          </div>
        )
      }
      return (
        <div key={currentPath}>
          <div className="flex items-center gap-2 p-1 text-sm">
            <Folder className="h-4 w-4 shrink-0" />
            <span>{name}</span>
          </div>
          <div className="pl-4 border-l border-border ml-2">
            {renderFileTree(content, currentPath)}
          </div>
        </div>
      )
    })
  }

  return (
    <section id="ide" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Powerful In-Browser IDE
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Experience a professional development environment without leaving your browser. Our IDE is packed with features to help you code faster.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <div className="rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden">
            <div className="h-12 flex items-center justify-between px-4 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-muted-foreground">
                    Fire Code Camp IDE
                </div>
                <Button size="sm" onClick={handleRun} disabled={isRunning}>
                  <Play className="mr-2 h-4 w-4" />
                  {isRunning ? 'Running...' : 'Run'}
                </Button>
            </div>
            <div className="flex min-h-[500px]">
              <div className="w-1/4 bg-muted/30 p-4 border-r overflow-y-auto">
                <h3 className="text-sm font-semibold mb-4">File Explorer</h3>
                {renderFileTree(files)}
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="flex border-b">
                    <div className="flex items-center gap-2 px-4 py-2 border-r bg-background text-sm">
                        <Code className="h-4 w-4" />
                        <span>{activeFile}</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="font-code text-sm bg-transparent border-0 focus-visible:ring-0 resize-none h-full"
                        placeholder="Write your code here..."
                    />
                </div>
                <div className="border-t">
                    <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/30 text-sm">
                        <Terminal className="h-4 w-4" />
                        <span>Output</span>
                    </div>
                    {output && (
                        <div className="p-4 bg-background">
                            <pre className="font-code text-sm text-foreground/80 whitespace-pre-wrap">{output}</pre>
                        </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
