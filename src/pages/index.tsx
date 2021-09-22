import { FormEvent, useState } from "react"

import styles from './login.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {email, password}

    console.log(data)
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
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
