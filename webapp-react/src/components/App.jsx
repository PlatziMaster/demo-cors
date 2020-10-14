import React from 'react';
import '../styles/components/App.styl';

const App = () => {

  const getDjango = async () => {
    const request = await fetch('http://localhost:8000/polls');
    const data = await request.json();
    console.log(data);
  }

  const getFlask = async () => {
    const request = await fetch('http://localhost:8888/polls');
    const data = await request.json();
    console.log(data);
  }

  const getExpress = async () => {
    const request = await fetch('http://localhost:3000');
    const data = await request.json();
    console.log(data);
  }

  const getNestJs = async () => {
    const request = await fetch('http://localhost:3001');
    const data = await request.json();
    console.log(data);
  }

  return (
    <div>
      <p>
        <button onClick={getDjango}>Get Django</button>
      </p>
      <p>
        <button onClick={getFlask}>Get Flask</button>
      </p>
      <p>
        <button onClick={getExpress}>Get Express</button>
      </p>
      <p>
        <button onClick={getNestJs}>Get NestJs</button>
      </p>
    </div>
  )
};

export default App;
