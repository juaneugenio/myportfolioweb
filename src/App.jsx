/** @format */
import { updateCursorPosition } from './utils/cursorShape';
import {Outlet} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import './styles/variables.css'
import './App.css';

function App() {
  useEffect(()=>{
    // For the application toggle theme on page load or when prefers-color-scheme changes
    const savedTheme =
       localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
       // Add theme validation
    const validThemes = ['light', 'dark'];
    document.documentElement.setAttribute('data-theme', validThemes.includes(savedTheme) ? savedTheme : 'dark');
    
    // Cursor tracking
    const updateCursor = (e)=>{
      updateCursorPosition(e);
    };
    
    // Global Cursor hover handling
    const handleHover = (e)=>{
      if(e.target.closest('.hoverable')) {
        document.body.classList.add('cursor-circle');
      } else {
        document.body.classList.remove('cursor-circle');
      }
    };
    
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleHover);
    
    return ()=>{
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleHover);
    };
    
    
  }, []);
  
  return (
     <>
       <div className='horizontal-border-top'/>
       <div className='app-container'>
         <header>
           <Navbar/>
         </header>
         <main className='content'>
           <Outlet/>
         </main>
       </div>
       <div className='horizontal-border-bottom'/>
     </>
  );
}

export default App;
