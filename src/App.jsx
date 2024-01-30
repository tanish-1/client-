// import './App.css'
import { Route, Routes } from 'react-router-dom';

import Footer from './footer/Footer';
import MainPage from './main/MainPage';
import Dalle from './dalle/Dalle';

const App = () => {
  return (
    <>
   
   <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dalle/*" element={<Dalle />} />
      </Routes>
    </>
  );
}

export default App;
{/* <MainPage/> */}
{/* <BrowserRouter>

<Routes>
       <Route path='/' element={<MainPage/>}/>
       <Route path='/create-post' element={<CreatePost/>}/>
     </Routes>
</BrowserRouter> */}


 {/* <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain' />
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>
        <main className='sm:p-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
          </Routes>
        </main>
    </BrowserRouter> */}