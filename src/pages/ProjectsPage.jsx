// AboutPage.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { motion } from "motion/react"

const ProjectsPage = () => {
  // Setup projects and error variables
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // API request when the page renders
  useEffect(() => {
    const handleSearch = async () => {

      try {
        const response = await axios.get(`https://api.github.com/users/bracej97/repos?per_page=1000`);

        // destructure the data from the response
        console.log(response.data);
        const fullArray = response.data;
        // Filter the array to only include the weekly challenges
        const filteredArray = fullArray.filter((project) => {
          const name = project.name;
          return name.includes("challenge");
        });
        console.log(filteredArray);

        setProjects(filteredArray);
      } catch (err) {
        setError("Could not retrieve information. Please check the status code.");
      }
    };

    handleSearch();
  }, []);

  // return the page including a map funtion to go through the projects array and create a card for each project including the name, language and description
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
                  <div style={styles.buttons}>
                    <motion.a href={ project.html_url } className="btn btn-primary mr-3" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Repo link</motion.a>
                    { project.has_pages  ? <motion.a href={"https://bracej97.github.io/" + project.name} className="btn btn-secondary" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Deployed link</motion.a> : ''}
                  </div>
                </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

// inline styles for simplicity
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
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: '10px',
  }
}

export default ProjectsPage;
