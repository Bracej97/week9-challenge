// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [page, setPage] = useState('home');


  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'projects' && <ProjectsPage />}

    </Layout>
  );
}

export default App;
