'use client'

import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute -top-4 -left-3 text-primary text-6xl font-mono font-black opacity-30 select-none -z-10">&lt;</div>
      <div className="absolute -bottom-7 -right-3 text-primary text-6xl font-mono font-black opacity-30 select-none -z-10">&gt;</div>
      <div className="bg-muted/50 rounded-md p-4 border border-border overflow-x-auto">
        <pre><code className="font-code text-sm text-foreground">{code.trim()}</code></pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
