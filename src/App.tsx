import React from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
//import MouseTraker from './components/MouseTraker'
import './App.css';
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'
function App() {
  interface IdogMES {
    message:string,
    status:string
  }
  //hooks
  let position = useMousePosition() // 表示position来自usemousePositon这里 更好维护
  let [data , loading ] = useUrlLoader("https://dog.ceo/api/breeds/image/random")

  let dataRes  = data as IdogMES
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {!loading?<img src={dataRes.message} alt=""></img>:<p>加载中</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello mes="hello"></Hello>
        <LikeButton></LikeButton>
        <p>x:{position.x} Y : {position.y}</p>
      </header>
    </div>
  );
}

export default App;
