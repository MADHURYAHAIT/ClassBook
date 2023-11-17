import {useState} from 'react' ;
import Data from "./dataApi.js";
import NavBarr from './NavBarr.js';
import LayoutCard from './LayoutCard.jsx';
import Footer from './Footer.js';

export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'

const Face = () => {

  const[Nv,setNav]=useState(0);

  const[studData,setstudData]=useState(Data);
  const filterItem=(cat)=>{
    const updatedList =Data.filter((curElem) =>{
      setNav(1);
      return curElem.sex === cat;
    });
    setstudData(updatedList);
  };

  const filterOthers=()=>{
    const updatedList =Data.filter((curElem) =>{
      setNav(1);
      return (curElem.sex !== 'Male' && curElem.sex !== 'Female');
    });
    setstudData(updatedList);
  };

  return (
  <div class="face">
  
    <NavBarr/>

    <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=>{ setstudData(Data);setNav(0);}}>All</ button>
          <button className="btn-group__item"onClick={()=>filterItem("Male")} >Male</ button>
          <button className="btn-group__item" onClick={()=>filterItem("Female")}>Female</ button>
          <button className="btn-group__item"onClick={()=>filterOthers()}>Others</ button>
        </div>
    </nav>

    <div class="StudentFaces">

    <LayoutCard Nv={Nv} studData={studData}  />
  {/* //Parent to child data passing  */}
    </div>
  <br/><br/>
  <Footer/>

</div>
  )
  
}

export default Face;











import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const App = () => (
  <div className='app'>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel>
  </div>
);

ReactDOM.render(
  <App/>,
  document.body
);