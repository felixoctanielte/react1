import React from 'react';
import './App.css';  // Styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Felix Octaniel</h1>
        <p>Web Developer | Passionate About Coding</p>
      </header>

      <section id="about" className="section">
        <h2>Tentang Saya</h2>
        <p>
          Saya seorang pengembang web dengan pengalaman dalam React JS dan pengembangan frontend lainnya. Saya suka membangun aplikasi yang membantu orang dan memecahkan masalah.
        </p>
      </section>

      <section id="social-media" className="section">
        <h2>Sosial Media</h2>
        <div className="social-links">
          <a href="https://github.com/felixoctanielte" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/felixoctanielte" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn" />
            LinkedIn
          </a>
          <a href="https://twitter.com/felixoctanielte" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="Twitter" />
            Twitter
          </a>
          <a href="https://www.facebook.com/felixoctanielte" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/50/000000/facebook.png" alt="Facebook" />
            Facebook
          </a>
          <a href="https://www.instagram.com/felixoctanielte" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/50/000000/instagram.png" alt="Instagram" />
            Instagram
          </a>
        </div>
      </section>


      <footer className="App-footer">
        <p>&copy; 2025 Felix Octaniel</p>
      </footer>
    </div>
  );
}

export default App;
