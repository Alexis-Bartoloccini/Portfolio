
export const PorfolioCard = ({rutaimg,titulo,descripcion,website,github,techs,}) => {
  return (
    <div className="porfolio-card-style">
        <img src={rutaimg} alt="Img" className="style-img-card" />
        <div className="title-portfolio-card">{titulo}</div>
        <div className="desciption2-style"><div className="desciption-style">Descripción:</div> {descripcion}  </div>
        <hr className="hr-portfolio" />
        <div>
            <a href={website}  target="_blank"  rel="noopener noreferrer" className="link-portfolio">Sitio Web</a>
            <a href={github}  target="_blank" rel="noopener noreferrer" className="link-portfolio">Github</a>
        </div>
        <div className="tech-style">Tecnologías:</div>
        <div className="tech-style2">{techs}</div>
    </div> 
  )
}
