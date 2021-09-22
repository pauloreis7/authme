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
      <form onSubmit={handleSubmit}>
        <div className={styles.formContentS}>
          <h1>Login</h1>

          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
