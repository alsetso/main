import { Metadata } from 'next';
import { generatePageMetadata } from '@alset/config/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Login — Alset Solutions',
  description: 'Login to your Alset Solutions account.',
  path: '/login',
  keywords: ['login', 'account', 'alset solutions'],
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

