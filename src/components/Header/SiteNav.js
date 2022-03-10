import React from "react"
import { Navbar } from "react-bootstrap"
import Menu from "./Menu"
import siteBrandLight  from "../../assets/image/landing-1/bunny.png"
import siteBrandDark  from "../../assets/image/landing-1/bunny.png"
const SiteNavbar = ({buttonBlock,darkLogo,siteLogoUrl}) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">
          {siteLogoUrl ? (
            <img src={siteLogoUrl} alt="site-brand"/>
          ) : (
            <img src={darkLogo ? siteBrandDark : siteBrandLight} alt="site-brand"/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu />
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
