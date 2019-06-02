import React from 'react'
import Spotlight from './Spotlight'
import Header from './Header'
import Seccion from './Seccion'
import Major from './Major'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
            <Header/>
            <Seccion id="one" clases="wrapper style2 special">
                <Major titulo="Desarrollamos Laliana para
					darle un mejor futuro a las nuevas generaciones.">
                </Major>
			</Seccion>
            <Seccion id="two" clases="wrapper">
                <div class="inner alt">
                <Spotlight imgSrc="images/pic01.jpg" titulo="Open Source">
                    Laliana es un software Open Source, que quiere decir que cuando descargas este programa, lo haces de forma totalmente gratuita, y además con el permiso de modificarla a tu gusto.
                </Spotlight>
                <Spotlight imgSrc="images/pic02.jpg" titulo="Fácil, sencillo">
                    Programamos Laliana para usuarios de entre 7-13 años, con el propósito de fomentar la educación a través de métodos más "modernos" para que estudiar sea divertido, y sano.
                </Spotlight>
                <Spotlight imgSrc="images/pic03.jpg" titulo="Divertido y constante">
                    Somos muchas personas desarrollando Laliana hasta ahora, y lo hacemos desde el corazón, cada juego, cada cálculo matemático se hace con el plan de que sea divertido, jugar aprendiendo, es nuestro objetivo.
                </Spotlight>
                </div>
            </Seccion>
            <Seccion id="three" clases="wrapper style2 special">
            <Major titulo="Descarga Laliana">
			    Puedes descargar la versión beta de este programa utilizando nuestros<br />
				servidores locales, para una descarga sencilla y segura.
			</Major>
            <ul class="actions special">
					<li><a href="#" class="button primary icon fa-download">Download</a></li>
					<li><a href="#" class="button">Learn More</a></li>
				</ul>
            </Seccion>
            <footer id="footer">
				<ul class="icons">
					<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
					<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
				</ul>
				<p class="copyright">&copy; Robaina, asociados.</p>
			</footer>
            </React.Fragment>
        )
    }
}
export default Home