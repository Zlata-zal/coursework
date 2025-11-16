import { useNavigate} from "react-router-dom"
import Layout from "../../Layout"
import styles from '../home/Home.module.scss'



function Home() {
  return (
    <Layout bgImage=''>
      <Button clickHandler={() => navigate()}>
        {}
      </Button>

      <h1 className={styles.heading}>Habity</h1>
      <Statistics />
    </Layout>
  )
}
export default Home;