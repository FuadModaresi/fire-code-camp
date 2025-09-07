import Link from 'next/link';
import { Flame } from 'lucide-react';

function TwitterIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1-2.8.8-4.2 0-1.2 1.5-2.8 2.5-4.5 3-2 .5-4.3.3-6-1.5-2-2.2-2.8-5-2-7.5.8-1.2 2-2 3.5-2.2.8-.2 1.7-.2 2.5 0-2.2 2.3-1.2 5.3 1.5 6.5" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary" />
              <span className="font-bold">Ember Programming</span>
            </Link>
            <p className="text-muted-foreground">Igniting the next generation of coders.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/fire_code_camp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><InstagramIcon className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><TwitterIcon className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
                <li><Link href="#community" className="text-muted-foreground hover:text-primary">Community</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {year} Ember Programming. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
