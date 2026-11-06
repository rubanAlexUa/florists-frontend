'use client';
import Link from 'next/link';
import css from './SignIn.module.css';
const SignInPage = () => {
  return (
    <form className={css.form}>
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

export default SignInPage;
