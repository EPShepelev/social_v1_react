import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  {id:1, name:"Vasya"},
  {id:2, name:"Olya"},
  {id:3, name:"Dasha"},
  {id:4, name:"Kathreen"},
  {id:5, name:"Michael"},
  {id:6, name:"Alex"},
]

const messagesData = [
  {id:1, text: "Hi!"},
  {id:2, text: "Whats up"},
  {id:3, text: "Hello"},
  {id:4, text: "Some text"},
  {id:5, text: "New content"},
]

const postsData = [
  {id: 1, likes: 3, text: "post one"},
  {id: 2, likes: 7, text: "post two"},
  {id: 3, likes: 42, text: "post three"},
  {id: 4, likes: 11, text: "post four"},
  {id: 5, likes: 2, text: "someting strange"},
  {id: 6, likes: 42, text: "it works!"},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();