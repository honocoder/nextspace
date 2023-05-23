import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export const dynamic = 'force-dynamic';

const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Dolor Sit Amet',
    slug: 'dolor-sit-amet',
    content:
      'Dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Consectetur Adipisicing',
    slug: 'consectetur-adipisicing',
    content: 'Consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Adipisicing Elit',
    slug: 'adipisicing-elit',
    content: 'Adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Quisquam Voluptatum',
    slug: 'quisquam-voluptatum',
    content: 'Quisquam, voluptatum.',
  },
];

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
