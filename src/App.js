import logo from './logo.svg';
import './App.css';

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('worker.js').then(function(registration) {
          console.log('Worker registration successful', registration.scope);
      }, function(err) {
          console.log('Worker registration failed', err);
      }).catch(function(err) {
          console.log(err);
      });
    });
  } else {
    console.log('Service Worker is not supported by browser.');
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
