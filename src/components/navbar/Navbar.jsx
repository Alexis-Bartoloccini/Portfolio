import { useState } from "react";


export const Navbar = () => {

  const [activeItem,setActiveItem] = useState(null)

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <nav className="navbarStyle">
      <ul className="navbarList">
        <li><a href="#home" onClick={()=> handleItemClick("link-home")}  className={`nav-item ${activeItem === 'link-home' ? 'active' : ''}`}>Inicio</a></li>
        <li><a href="#about" onClick={()=> handleItemClick("link-about")} className={`nav-item ${activeItem === 'link-about' ? 'active' : ''}`}>Acerca de mi</a></li>
        <li><a href="#portfolio" onClick={()=> handleItemClick("link-portfolio")}  className={`nav-item ${activeItem === 'link-portfolio' ? 'active' : ''}`}>Portfolio</a></li>
        <li><a href="#skills" onClick={()=> handleItemClick("link-skills")}  className={`nav-item ${activeItem === 'link-skills' ? 'active' : ''}`}>Habilidades</a></li>
        <li><a href="#contact" onClick={()=> handleItemClick("link-contact")}  className={`nav-item ${activeItem === 'link-contact' ? 'active' : ''}`}>Contacto</a></li>
      </ul>
    </nav>

  );
};

