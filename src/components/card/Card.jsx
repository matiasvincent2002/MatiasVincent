import React from 'react'
import Style from './Card.module.css'


const Card = () => {
  return (
    <div>
        <section>
            <div className={Style.cardContainer}>
                <div className={Style.cardBody}>     <p>¡Hola! Soy <strong>Matías Vincent</strong>, un apasionado programador 
                        fullstack de 21 años. <br></br> Vivo en Buenos Aires, Argentina. Desde que era un niño,
                        siempre me ha fascinado el mundo de la tecnología y el desarrollo. Esta pasión me
                        ha llevado a explorar y aprender constantemente en el campo tech.
                        Mi enfoque se centra en la <strong>creación de soluciones innovadoras y funcionales </strong> 
                         utilizando una amplia gama de tecnologías, incluyendo <strong>JavaScript,
                        HTML, CSS, Bootstrap, React, Vite, Axios, AJAX, PostgreSQL y Sequelize.</strong>
                        No solo me gusta desarrollar, sino que también considero el aprendizaje
                        continuo como una parte fundamental de mi viaje en el mundo tech.
                        Desde proyectos tempranos hasta mi formación técnica en la Escuela Técnica N°2,
                        Glew, he estado cultivando mi pasión por el desarrollo y aumentando mis conocimientos
                        en el área tech. Ahora, estoy emocionado por la oportunidad de compartir mi experiencia y
                        proyectos contigo. ¡Bienvenido a mi portafolio!</p>
                    </div>

            </div>
        </section>
    </div>
  )
}

export default Card
