import { Button, Container } from '@mui/material';
import './App.css';
import Layout from './components/Layout';
import Totals from './components/Totals/TotalCard';
import Home from './pages/Home/Home';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
