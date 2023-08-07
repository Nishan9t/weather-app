import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';

function App() {
  return (
    <div className='max-w-[1240px] mx-auto mt-2 p-3'>
      <Search/>
      <Result/>
    </div>

  );
}

export default App;
