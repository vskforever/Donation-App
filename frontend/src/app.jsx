import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Donation App</h1>
      </header>
      <main style={styles.main}>
        <p>
          This is a simple donation processing app built with React and Vite.
        </p>
        <p>
          You can add more components and features to improve it!
        </p>
      </main>
      <footer style={styles.footer}>
        <p>© 2024 My Donation App. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles for the app
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
  },
  main: {
    margin: '20px auto',
    maxWidth: '600px',
    padding: '20px',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default App;
