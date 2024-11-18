// AboutPage.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {

      try {
        const response = await axios.get(`https://api.github.com/users/bracej97/repos`);

        // destructure the data from the response
        console.log(response.data);

        setProjects(response.data);
      } catch (err) {
        setError("Could not retrieve information. Please check the status code.");
        //setStatusInfo(null);
      }
    };

    handleSearch();
  }, []);

  return (
    <div>
      <h2>Welcome to Joe's Projects Page</h2>
      <p>This is the main content of the about page.</p>

      <div style={{ marginTop: '20px' }}>
          <h2>Here are Joe's projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                {project.full_name}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default ProjectsPage;
