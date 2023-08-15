'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function About() {
  return(
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href='/about/1'>Yash</Link>
        </li>
        <li>
          <Link href='/about/2'>Vaibhav</Link>
        </li>
        <li>
          <Link href='/about/3'>Suresh</Link>
        </li>
      </ul>
    </div>
  );
}