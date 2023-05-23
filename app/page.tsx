import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
  <main>
    <h1>Hello user.</h1>
    <h2>This app is just a sandbox to play around with Next 13, Next Auth and Prisma.</h2>
    <h3>You can hit the sign in button and sign in with your GitHub account. You'll see a list of users by going to <a href="/users">users</a> and you can follow them.</h3>
    <h3>Thanks for visiting!</h3>
  </main>
  );
}
