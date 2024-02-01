import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  const name = 'Andrew';
  const nameShowing = true;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
        <h1>Hello, {nameShowing ? name: 'World'}!</h1>
      </header>
    </div>
  );
}

export default App;
