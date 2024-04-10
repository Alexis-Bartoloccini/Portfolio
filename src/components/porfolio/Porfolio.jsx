import { PorfolioCard } from "../porfolioCard/PorfolioCard"

export const Porfolio = () => {
  return (
    <div className="porfolio-style"> 
      <h1>Portfolio<span>.</span></h1>
      <hr/>
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
        descripcion={"Explora una amplia variedad de opciones y encuentra el GIF ideal para cada ocasión. Añade un toque de diversión y expresión a tus conversaciones sin esfuerzo. ¡Descubre, disfruta y haz que tus mensajes destaquen con GifExpertApp"} />
        <PorfolioCard 
              titulo={"Single Page: Ponele Tu Onda"} 
              rutaimg={"app3.png"}
              website={"https://poneletuonda00.vercel.app/"}
              github={"https://github.com/Alexis-Bartoloccini/Poneletuonda"}
              techs={"Javascript, HTML5, CSS3"}
              descripcion={"Single Page de Ponele Tu Onda, tienda de indumentaria deportiva familiar, permite explorar el catálogo con imágenes cautivadoras, y accede a enlaces directos para contacto, visita y compra. Con métodos de pago seguros.¡Explora, elige y compra con facilidad!"} />
        <PorfolioCard 
      titulo={"Heroes App"} 
      rutaimg={"app4.png"}
      website={"https://he-roesapp.netlify.app/"}
      github={"https://github.com/Alexis-Bartoloccini/heroesapp"}
      techs={"ReactJs, HTML5, CSS3"}
      descripcion={"¡Descubre el fascinante mundo de los superhéroes con la aplicación 'Heroes App'! Desarrollada con la potente tecnología de React, esta aplicación te sumerge en la vasta información sobre tus héroes favoritos de Marvel y DC."} />
      <PorfolioCard 
      titulo={"Tic-Tac-Toe"} 
      rutaimg={"app6.jpg"}
      website={"https://tic-tac-toe-coral-eight.vercel.app/"}
      github={"https://github.com/Alexis-Bartoloccini/tic-tac-toe"}
      techs={"ReactJs, HTML5, CSS3"}
      descripcion={"Un juego de Tres en Raya en React que utiliza hooks para la gestión del estado y la lógica del juego. Permite a dos jugadores competir, mostrando el turno y al ganador. Interfaz minimalista y fácil de usar."} 
      styleImgCard={"styleImgCard"}/>
      <PorfolioCard 
      titulo={"Portfolio Web"} 
      rutaimg={"app7.jpg"}
      website={"https://alexisbartoloccinisite.netlify.app/"}
      github={"https://github.com/Alexis-Bartoloccini/Portfolio"}
      techs={"ReactJs, HTML5, CSS3"}
      descripcion={"Construido con React, CSS y JavaScript, mi portfolio es una vitrina digital que exhibe mi trabajo y habilidades. Destaca proyectos clave, demostrando mi enfoque en el diseño interactivo y la innovación tecnológica."} 
      styleImgCard={"styleImgCard"}/>
      <PorfolioCard 
      titulo={"API-REST-con-Node.js-y-Express"} 
      rutaimg={"app5.jpg"}
      website={"https://github.com/Alexis-Bartoloccini/API-REST-con-Node.js-y-Express"}
      github={"https://github.com/Alexis-Bartoloccini/API-REST-con-Node.js-y-Express"}
      techs={"Node.js, Express, TypeScript"}
      descripcion={"Esta es una API REST simple construida con Node.js y Express, diseñada para gestionar un diario digital. Utiliza TypeScript para agregar tipado estático a JavaScript, facilitando el desarrollo y el mantenimiento del código. La aplicación permite realizar operaciones como obtener entradas del diario, agregar nuevas entradas y eliminar entradas existentes."} 
      styleImgCard={"styleImgCard"}/>
     
      </div>
    </div>
    )
}
