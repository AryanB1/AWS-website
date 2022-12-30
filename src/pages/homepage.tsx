// Import
import React from "react"; 
// Start HomePage
function HomePage() {
  return(
      <div style={{textAlign: "center"}}>
          <h1>Aryan Bhardwaj</h1>
          <hr />
          <h2>Projects</h2>
          <hr />
          <a href="./edge-extension"><button>Edge Extension</button></a>
          <a href="./encryption-algorithm"><button>Encryption Algorithm</button></a>
          <a href="./pong-game"><button>Pong Game</button></a>
          <a href="./investment-data-collector"><button>Investment Data Collector</button></a>
          <hr />
          <h2>About Me</h2>
          <hr />
          <a href="./resume.tsx"><button>Resume</button></a>
          <a href="https://www.linkedin.com/in/-aryan-bhardwaj-/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
          <a href="https://github.com/AryanB1" target="_blank" rel="noreferrer"><button>Github</button></a>
          <a href="mailto:aryan.bhardwaj@uwaterloo.ca" target="_blank" rel="noreferrer"><button>Contact Me</button></a>
      </div>
    );
  }
  // End HomePage
  // Export
export default HomePage;