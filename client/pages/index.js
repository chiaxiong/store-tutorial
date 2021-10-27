import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      My Page
      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  );
}
