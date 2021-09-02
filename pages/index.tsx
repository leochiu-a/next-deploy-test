import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, Next.js</p>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
    </div>
  );
}
