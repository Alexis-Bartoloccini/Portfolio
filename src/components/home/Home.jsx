
export const Home = () => {
  return (
    <div className="style-home mouseStyle'">

      <img 
      src="/img.jpg"
      alt="imgAlexis" 
      className="rounded-circle style-img"
      />
      
      <div className="style-welcome">
          <h1 className="style-title">Alexis Bartoloccini</h1>
          <h2 className="style-title">Desarrollador Web</h2>
          <a href="/CV.pdf" download="CV.pdf" className="style-buttom">
            Descargar mi CV
          </a>
      </div>
    </div>
  )
}
  