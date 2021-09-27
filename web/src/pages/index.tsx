import { FormEvent, useState } from "react"

import { useAuth } from "../contexts/AuthContext"
import { withSSRGuest } from '../utils/withSSRGuest'

import styles from './login.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {email, password}

    await signIn(data)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1>Login</h1>

          <label htmlFor="emailInput">Email</label>
          <input 
            id="emailInput" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />

          <label htmlFor="passwordInput">Password</label>
          <input 
            id="passwordInput" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />

          <footer>Login credentials - email: paulo@authme.team / password: 123456</footer>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})