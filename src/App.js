import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import Header from './components/common/Header';

function App() {
  // Starting point for our app
  // To make code readable, you create starting points for someone else to read

  // As this is a function you can usn a function in a function
  const getPage = () => {
    const route = window.location.pathname;
    if (route === '/about') return <AboutPage />;
    return <HomePage />;
  };

  return (
    <div className="App">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
