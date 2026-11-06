'use client';
import {registration} from '@/lib/auth';
import css from './SignUp.module.css';
import Link from 'next/link';

const SignUp = async () => {
  // function handleSubmit(formData: FormData) {
  //   const username = formData.get("username") as string;
  //   const password = formData.get("password") as string;
  //   const email = formData.get("email") as string;

  //   try{
  //     const user = await registration({username?, email, password})
  //   }
  // }
  return (
    <form className={css.form}>
      <h1 className={css.heading}>Registration</h1>
      <label htmlFor="username-input" className={css.label}>
        Username:
        <input
          type="text"
          id="username-input"
          name="username"
          minLength={5}
          className={css.input}
          placeholder="Your username"
        />
      </label>
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
      <label htmlFor="">Your Role:</label>
      <button className={css['submit-button']}>Register</button>
      <p className={css['login-text']}>
        Already have an account? <Link href="/sign-in">Log in</Link>
      </p>
    </form>
  );
};

export default SignUp;
