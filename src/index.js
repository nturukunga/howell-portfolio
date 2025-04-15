import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Global error handling for React
const ErrorFallback = () => {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: '#00ff00',
      fontFamily: 'monospace',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{fontSize: '2rem', marginBottom: '20px'}}>Something went wrong</h1>
      <p>Please try refreshing the page or clearing your browser cache.</p>
      <button 
        onClick={() => window.location.reload()}
        style={{
          marginTop: '20px',
          backgroundColor: 'transparent',
          border: '1px solid #00ff00',
          color: '#00ff00',
          padding: '10px 20px',
          cursor: 'pointer',
          fontFamily: 'monospace'
        }}
      >
        Refresh Page
      </button>
    </div>
  );
};

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render React application:", error);
  document.getElementById('loading-fallback').style.display = 'none';
  ReactDOM.render(
    <ErrorFallback />,
    document.getElementById('root')
  );
}
