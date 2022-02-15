import './App.css';

function App() {
  function createNumbers () {
    const numbers = [];

    for(let i=9; i>=0; i--) {
      numbers.push(
        <button key={i}>{i}</button>
      )
    }
    return numbers
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='display'>
          123
        </div>
        <div className='inputs'>
          <div className='numbers'>
            {createNumbers()}
            <button>.</button>
            <button>=</button>
          </div>
          <div className='operations'>
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button>%</button>
            <button>^</button>
            <button>(</button>
            <button>)</button>
            <button>DEL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
