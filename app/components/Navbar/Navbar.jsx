import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

function Navbar() {
  return (
    <>
        <div id="navbar_area" className="p-8 border-b border-[#0000003a]">
            <div className="container flex row-auto justify-between items-center">
                <a href="/" className="logo_area">
                    <Image src="/images/tech-gig-logo.png" width={130} height={50} alt="Logo"/>
                </a>
                <button className="navbar_toggler"><FontAwesomeIcon icon={faFacebook}/></button>
                <menu id="navbar_menu">
                    <ul className="flex row-auto justify-between items-center gap-10">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Products</a></li>
                    </ul>
                </menu>
            </div>
        </div>
    </>
  )
}

export default Navbar