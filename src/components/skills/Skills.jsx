
export const Skills = () => {
  return (
    <>
    
    <div className="skills" >
     <h1>Skills<span>.</span></h1>
    <hr />
     <div className="skills-conteiner">
        <div>
            <h2>Frontend</h2>
            <div className="skills-order">
              <img src="/logoHTML5.png" alt="logoHTML5" className=" logo-skill" />
              <img src="/logoCSS3.png" alt="logoCSS3" className=" logo-skill" />
              <img src="/logoJS.png" alt="logoJavascript" className=" logo-skill" />
              <img src="/logoReact.png" alt="logoReact" className=" logo-skill" />
            </div>
        </div>

        <div>
            <h2>Backend</h2>
            <div className="skills-order">
              <img src="/logots.png" alt="logoTS" className="logo-skill" />
              <img src="/logoMongoDB.png" alt="logomongoDB" className="logo-mongo  logo-radius " />
              <img src="/logoNodeJs.png" alt="logoNodeJs" className=" logo-radius logo-express " />
              <img src="/logoExpressJs.png" alt="logoExpressJs" className="logo-radius   logo-express" />
            </div>
        </div>

        <div>
            <h2>Herramientas</h2>
            <div className="skills-order">
                <img src="/logoGIT.PNG" alt="logoGit" className="logo-radius logo-shadow logo-skill" />
                <img src="logoGitHub.png" alt="logoGitHub" className="logo-radius logo-shadow logo-skill" />
                <img src="powerbi.png" alt="logoPowerBI" className="logo-radius logo-shadow logo-skill" />
                <img src="logooffice.png" alt="logoOffice" className="logo-radius logo-shadow mongo logo-skill" />

            </div>
        </div>
    </div>
    </div>
    

    
    </>
  )
}
