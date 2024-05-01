import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div>
      <h1 className='text-center  font-bold p-2 text-purple-800'>Social Media Posts</h1>
      <div className='flex flex-wrap gap-10 items-start justify-center p-7'>
        <Comment
          url={
            'https://images.unsplash.com/photo-1662755852952-bf8ea1023c43?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
        <Comment
          url={
            'https://images.unsplash.com/photo-1543795343-31f8f535cc98?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
        <Comment
          url={
            'https://images.unsplash.com/photo-1678688036228-550cf49e0039?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
        <Comment
          url={
            'https://images.unsplash.com/photo-1683727610671-646dbf56aedf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </div>
    </div>
  );
}

export default App;
