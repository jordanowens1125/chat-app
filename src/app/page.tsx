"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default function Home() {
  const session = getServerSession(options);

  console.log(session);

  const revalidate = 0;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a href="chats">Chats</a>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
