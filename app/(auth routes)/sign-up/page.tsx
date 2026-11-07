'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {registration} from '@/lib/auth';
import css from './SignUp.module.css';
import {useUserStore} from '@/lib/store/userStore';

const SignUp = () => {
  const router = useRouter();

  const setUser = useUserStore(state => state.setUser);

  async function handleSubmit(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as 'customer' | 'seller';

    try {
      const newUser = await registration({username, password, email, role});
      setUser(newUser);
      router.push('/');
    } catch {}
  }
  return (
    <form action={handleSubmit} className={css.form}>
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
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Your Role:</legend>
        <div className={css['radio-group']}>
          <label className={css['radio-label']}>
            <input
              type="radio"
              name="role"
              value="customer"
              className={`${css['radio-input']} ${css['radio-customer']}`}
              defaultChecked
              required
            />
            <span className={css['radio-text']}>Customer</span>
          </label>

          <label className={css['radio-label']}>
            <input
              type="radio"
              name="role"
              value="seller"
              className={`${css['radio-input']}  ${css['radio-seller']}`}
            />
            <span className={css['radio-text']}>Seller</span>
          </label>
        </div>
      </fieldset>
      <button className={css['submit-button']}>Register</button>
      <p className={css['login-text']}>
        Already have an account? <Link href="/log-in">Log in</Link>
      </p>
    </form>
  );
};

export default SignUp;
