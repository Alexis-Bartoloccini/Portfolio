import { PorfolioCard } from "../porfolioCard/PorfolioCard"

export const Porfolio = () => {
  return (
    <div className="porfolio-style"> 
      <h1>Porfolio<span>.</span></h1>
      <hr />
      <div className="porfolio-org">
        <PorfolioCard 
        titulo={"Aplicación Presupuesto"} 
        rutaimg={"app1.png"}
        website={"https://aplicacion-presupuesto-tau.vercel.app/"}
        github={"https://github.com/Alexis-Bartoloccini/AplicacionPresupuesto"}
        techs={"Javascript, HTML5, CSS3"}
        descripcion={"Registra fácilmente ingresos y gastos, asigna valores a cada transacción, y observa cómo tu presupuesto se ajusta en tiempo real. Con una interfaz intuitiva, categorización inteligente y acceso a un historial de transacciones."} />
         <PorfolioCard 
        titulo={"Gif Expert App"} 
        rutaimg={"app2.png"}
        website={"https://gif-expert-app-indol.vercel.app/"}
        github={"https://github.com/Alexis-Bartoloccini/GifExpertApp"}
        techs={"HTML5, CSS3, React JS"}
        descripcion={"Explora una amplia variedad de opciones y encuentra el GIF ideal para cada ocasión. Añade un toque de diversión y expresión a tus conversaciones sin esfuerzo. ¡Descubre, disfruta y haz que tus mensajes destaquen con GifEspertApp"} />
   
        <PorfolioCard 
              titulo={"Single Page: Ponele Tu Onda"} 
              rutaimg={"app3.png"}
              website={"https://poneletuonda00.vercel.app/"}
              github={"https://github.com/Alexis-Bartoloccini/Poneletuonda"}
              techs={"Javascript, HTML5, CSS3"}
              descripcion={"Single Page de Ponele Tu Onda,tienda de indumentaria deportiva familiar, permite explorar el catálogo con imágenes cautivadoras, y accede a enlaces directos para contacto, visita y compra. Con métodos de pago seguros.¡Explora, elige y compra con facilidad!"} />
   
   
      </div>
      
      

    </div>
    )
}
