export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About NextSpace',
    description: 'A simple MySpace clone built with Next.js 13 for the sake of nostalgia.'
}

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Do you remember MySpace? Here's a little clone for the sake of
        nostalgia!
      </p>
    </main>
  );
}
