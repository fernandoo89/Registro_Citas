import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Productos from './data/productos.json'

const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);
const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/detalle/" + slug);
  }

  return <main>
    
  </main >;
}
export default Main;
