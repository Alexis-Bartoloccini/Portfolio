import emailjs from "@emailjs/browser"
import { useRef } from "react"

export const Contact = () => {


  const refForm= useRef();
  const handleSubmit=(event)=>{
  event.preventDefault();

  const serviceId="service_nbh96a9";
  const templateId="template_gjgn5bg";
  const apiKey="LW3NFnhHW1cMvkP51";
  emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
  .then(result => console.log(result.text))
  .catch(error=> console.log(error))
    refForm.current.reset();
 }
  return (
  <div className="contact">     
      <div>
        <h1 >Contáctame<span>.</span></h1>
        <hr />
      </div>
        <div className="contactStyle">
            <div>
                <form ref={refForm} onSubmit={handleSubmit} className="form-style">
                    <div className="form-group">
                      <label className="label-style" htmlFor="user_name">
                        Nombre
                      </label>
                      <input type="text" name="user_name" id="user_name" placeholder="Ingrese su nombre" className="input-style" />
                    </div>

                    <div >
                      <label className="label-style" htmlFor="user_email">
                        Correo Electrónico
                      </label>
                      <input type="email" name="user_email" id="user_email" placeholder="Ingrese su correo electrónico" className="input-style" />
                    </div>

                    <div className="form-group">
                      <label className="label-style" htmlFor="user_message">
                        Mensaje
                      </label>
                      <textarea name="user_message" id="user_message" cols="30" rows="10" placeholder="Ingrese su mensaje" className="input-style"></textarea>
                    </div>

                    <button className="style-buttom">Enviar</button>
                </form>
            </div>
           
            <div>
              <div className="reds-styles">
                    <a href="https://www.linkedin.com/in/alexis-bartoloccini-a82915162/" target="_blank" rel="noreferrer">
                      <img src="/logolinkedin.png" alt="Logo Linkd" className="logo-linkedin"/>
                    </a>
                    <a href="https://wa.me/+542634849529" target="_blank" rel="noreferrer">
                      <img src="/logowsp.png" alt="Logo Linkd" className="logo-wsp"/>
                    </a>
              </div> 
              <div className="email-styles">
                
                  <p>Email 
                    
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                      </svg></p>
                
                <hr></hr>
                <p>bartoloccini.a@gmail.com</p>
              </div>    
           </div>
        </div>
        </div>
  )
}
