import Link from 'next/link';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css['hero-wrapper']}>
      <div>
        <h1 className={css['hero-heading']}>Fresh from local hands</h1>
        <p className={css['hero-p']}>
          Bouquets, plants and homemade goods from florists and growers near
          you.
        </p>
        <div className={css['buttons-wrapper']}>
          <Link href="/catalogue/plants" className={css['hero-products-link']}>
            Browse products
          </Link>
          <Link href="/profile" className={css['hero-profile-link']}>
            Go to profile
          </Link>
        </div>
      </div>
    </section>
  );
}
