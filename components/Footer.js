import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">
            <h3>shreyansh software </h3>
            <p>This site is future eccomerce site stay waiting for it.</p>
            <ul classname="socials">
                <li><a href="#"><i classname="fa fa-facebook"></i></a></li>
                <li><a href="#"><i classname="fa fa-twitter"></i></a></li>
                <li><a href="#"><i classname="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i classname="fa fa-youtube"></i></a></li>
                <li><a href="#"><i classname="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div classname="footer-bottom">
            <p>copyright &copy; <a href="#">Foolish Developer</a>  </p>
                    <div classname="footer-menu">
                      <ul classname="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    </>
  )
}
