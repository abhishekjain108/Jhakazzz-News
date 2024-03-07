
import './App.css';
import { useState } from 'react';
import FetchingNewsApi from './Component/FetchingNewsApi';
import NavbarNews from './Component/NavbarNews';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App() {

    const [mode, setMode] = useState('light')

    function handleMode() {

        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'black'   
            setText(' light-mode')
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            setText(' dark-mode')
        }
    }

    const [text, setText] = useState('dark-mode')
    return (
        <>
            {/* <NavbarNews mode={mode} handleMode={handleMode} text={text}/>
            <FetchingNewsApi  mode={mode} country="in" category='business'/> */}

            <BrowserRouter>
                <NavbarNews mode={mode} handleMode={handleMode} text={text} />
                <Routes>
                    <Route path='/' exact  element={<FetchingNewsApi mode={mode} key='general' country="in" category='general' />}>
                        
                    </Route>
                    <Route path='/general' exact  element={<FetchingNewsApi mode={mode} key='general' country="in" category='general' />}>
                        
                    </Route>
                    <Route path='/business' exact  element={<FetchingNewsApi mode={mode} key='business' country="in" category='business' />}>
                        
                    </Route>
                    <Route path='/entertainment' exact  element={<FetchingNewsApi mode={mode} key='entertainment' country="in" category='entertainment' />}>
                        
                    </Route>
                    <Route path='/health' exact  element={<FetchingNewsApi mode={mode} key="health" country="in" category='health' />}>
                        
                    </Route>
                    <Route path='/science' exact  element={<FetchingNewsApi mode={mode} key='science' country="in" category='science' />}>
                        
                    </Route>
                    <Route path='/sports' exact  element={<FetchingNewsApi mode={mode} key='sports' country="in" category='sports' />}>
                        
                    </Route>
                    <Route path='/technology' exact  element={<FetchingNewsApi mode={mode} key='technology' country="in" category='technology' />}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>




        </>
    );
}

export default App;
