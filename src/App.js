import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactPlayer controls width= '480px' height= '240px' 
      url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
      onReady={() => console.log('onReady callback')}
      onStart={() => console.log('onStart callback')}
      onPause={() => console.log('onPause callback')}
      onEnded={() => console.log('onEnded callback')}
      onError={() => console.log('onError callback')}
      />
    </div>
  );
}

export default App;
