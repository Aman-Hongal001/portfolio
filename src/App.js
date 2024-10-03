
import './App.css';
import RoundOne from './components/round_designs/RoundOne';
import RoundTwo from './components/round_designs/RoundTwo';
import RoundThree from './components/round_designs/RoundThree';
import RoundFive from './components/round_designs/RoundFive';
import RoundFour from './components/round_designs/RoundFour';
import Home from './Home';

function App() {
  return (
    <div className='w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden'>
      <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
        <Home/>
      </div>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <RoundOne/>
        <RoundTwo/>
        <RoundThree/>
        <RoundFour/>
        <RoundFive/>
      </div>
    </div>
  );
}

export default App;
