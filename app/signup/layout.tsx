import { Metadata } from 'next';
import { generatePageMetadata } from '@alset/config/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sign Up — Alset Solutions',
  description: 'Create your Alset Solutions account.',
  path: '/signup',
  keywords: ['sign up', 'register', 'create account', 'alset solutions'],
});

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

