'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './buttons.module.css';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? '/mememan.webp'}
          width={32}
          height={32}
          alt='Profile picture'
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()} className={styles.btn}>Sign in</button>;
};

export function SignOutButton() {
  return (
    <button onClick={() => signOut()} className={styles.btn}>
      Sign out
    </button>
  );
};
