import { useAuth } from '../../contexts/AuthContext'

import styles from './dashboard.module.scss'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className={styles.container}>
      <h1>Dashboard: {user?.email}</h1>
    </div>
  )
}