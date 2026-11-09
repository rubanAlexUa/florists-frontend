'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useUserStore} from '@/lib/store/userStore';
import {login} from '@/lib/auth';
import css from './SignIn.module.css';
const LogInPage = () => {
  const router = useRouter();

  const setUser = useUserStore(state => state.setUser);

  async function handleSubmit(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as 'customer' | 'seller';

    try {
      const newUser = await login({password, email});
      setUser({
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      });
      router.push('/');
    } catch {}
  }
  return (
    <form action={handleSubmit} className={css.form}>
      <h1 className={css.heading}>Authorization</h1>

      <label htmlFor="email-input" className={css.label}>
        Email:
        <input
          type="email"
          name="email"
          id="email-input"
          className={css.input}
          placeholder="Your email"
          required
        />
      </label>
      <label htmlFor="password-input" className={css.label}>
        Password:
        <input
          type="password"
          name="password"
          minLength={8}
          id="password-input"
          className={css.input}
          placeholder="Your password"
          required
        />
      </label>
      <button className={css['submit-button']}>Log in</button>
      <p className={css['login-text']}>
        Don't have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </form>
  );
};

export default LogInPage;
