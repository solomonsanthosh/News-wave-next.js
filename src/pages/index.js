import styles from '../../styles/Home.module.css';
import { Toolbar } from '../../components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
      <div className={styles.card}>
        <h1>News Wave</h1>

        <h3>Your one stop shop for the latest tesla articles</h3>

      </div>
      </div>
    </div>
  );
}
