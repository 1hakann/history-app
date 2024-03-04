import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error404 from './component/Error404';
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/eras' element={<Eras />}>
          <Route path='medieval' element={<MedievalEra />} />
          <Route path='digital' element={<DigitalEra />} />
          {/* Dynamic route */}
          <Route path=':type' element={<EraType />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>The Paradise of History</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero
        laudantium repella
      </p>
    </div>
  );
}

function Eras() {
  return (
    <div>
      <h1>The Eras of Time</h1>
      <ul>
        <li>
          <Link to="medieval">Medieval</Link>
        </li>
        <li>
          <Link to="digital">Digital</Link>
        </li>
      </ul>
 
      <Outlet />
    </div>
  );
}

function Nav() {
  return (
    <ul className='nav'>
     <li>
       <NavLink to='/'>Home</NavLink>
     </li>
     <li>
       <NavLink to='/eras'>Eras</NavLink>
     </li>
   </ul>
  );
}

function MedievalEra() {
  return (
    <div>
      <hr />
      <h3>The Medieval Era</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
 }
 
 function DigitalEra() {
  return (
    <div>
      <hr />
      <h3>The Digital Era</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
 }

 function EraType() {
  const { type } = useParams();
 
  return (
    <div>
      <hr />
      <h3>The {type} Era</h3>
    </div>
  );
 }

export default App;
