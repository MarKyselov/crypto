import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>oops, The page you are looking for doesnt exist</p>
      <Link to="/" style={styles.link}>Return Home</Link>
    </div>
  );
};
const styles = {
  container: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff',
  },
  title: {
    fontSize: '52px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px'
  },
  link: {
    textDecoration:"none",
    color:"#007bff",
    fontWeight:"bold"
  },
};
export default NotFound;
