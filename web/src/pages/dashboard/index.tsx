import { useAuth } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { withSSRAuth } from '../../utils/withSSRAuth'
import { Can } from '../../components/Can'

import styles from './dashboard.module.scss'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className={styles.container}>
      <h1>Dashboard: {user?.email}</h1>

      <Can permissions={['metrics.list']}>
        <p>Permissions</p>
      </Can>
    </div>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)

  const response = await apiClient.get('/me')
  
  return {
    props: {}
  }
})