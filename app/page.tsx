import Link from "next/link";

export default function Home() {
  return (
   <main>
     THIS IS MAIN HOME PAGE, GO TO <Link href="/nested">NESTED PAGE</Link> and do a hard refresh to check which loader is used.
   </main>
  );
}
