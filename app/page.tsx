import Image from "next/image";
import styles from "./page.module.css";
import {ClientComponent} from "@/app/ClientComponent";
import {SubClientComponent} from "@/app/SubClientComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ClientComponent SubComponent={SubClientComponent} />
        </main>
    </div>
  );
}
