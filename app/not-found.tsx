import Link from 'next/link';
import { Container } from '@alset/ui/atoms';
import { Button } from '@alset/ui';
import { siteConfig } from '@alset/config/metadata';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center space-y-8 py-20">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-black/10">404</h1>
          <h2 className="text-4xl font-semibold text-black">
            Page Not Found
          </h2>
          <p className="text-lg text-black/60 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-black/10">
          <p className="text-sm text-black/40">
            {siteConfig.name} — {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </div>
  );
}

