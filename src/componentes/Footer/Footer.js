import estilos from './footer.module.css'

const Footer = () => {
return ( 

    <footer className={estilos.footer}>
    
    <div className="link-fot">
        <h3> Sitio Web Oficial</h3>
    <a  className="webAflorar" href="http://aflorar.com.ar"> Visita nuestro WEB OFICIAL AFLORAR</a>
    <p className="textoWebAflorar"> Floreria en linea, venta de flores en Ramos / Floreros / Desayunos y Meriendas /
        Chocolates / Peluches / Vinos y más</p>
    </div>

    
    <div className="contacto">
        <h3>Contactanos</h3>
        <a href="tel:+54 9 11 4788 9185" className="contacto-tel"><i class="fa-solid fa-phone"></i> +54 9 11 4788 9185</a>
        
        <a href="mailto:regalosflores25@gmail.com" className="contacto-mail"><i class="fa-solid fa-envelope"></i>Regalosflores25@gmail.com </a>

    </div>
    
    <div className="social-bar-footer"> 
        <h3 > Redes Sociales</h3>
        <a href="http://facebook.com/flores.aflorar" className="fb-foot"><i class="fa-brands fa-facebook-square"></i>  Facebook</a>
        <a href="http://instagram.com/aflorar.arg" className="inst-foot"><i class="fa-brands fa-instagram"></i> Instagram</a>
    </div>

    </footer>

 );
};

export default Footer;