// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');


  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
