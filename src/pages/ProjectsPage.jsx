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
        const response = await axios.get(`https://api.github.com/users/bracej97/repos?per_page=1000`);

        // destructure the data from the response
        console.log(response.data);
        const fullArray = response.data;
        const filteredArray = fullArray.filter((project) => {
          const name = project.name;
          return name.includes("challenge");
        });
        console.log(filteredArray);

        setProjects(filteredArray);
      } catch (err) {
        setError("Could not retrieve information. Please check the status code.");
        //setStatusInfo(null);
      }
    };

    handleSearch();
  }, []);

  return (
    <div>
      <h2>Joe's Projects</h2>

      <div style={{ marginTop: '20px' }}>
          <div style={styles.container}>
            {projects.map((project) => (
              <div id={project.id} className="card" style= {{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{ project.name }</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{ project.language }</h6>
                  <p className="card-text">{ project.description }</p>
                  <div style={styles.container}>
                    <a href={ project.html_url } className="btn btn-primary mr-3" target="_blank">Repo link</a>
                    { project.has_pages  ? <a href={"https://bracej97.github.io/" + project.name} className="btn btn-secondary" target="_blank">Deployed link</a> : ''}
                  </div>
                </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    gap: '10px',
  }
}

export default ProjectsPage;
