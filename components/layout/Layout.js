
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import FilterBtn from "../elements/FilterBtn"
import LoginPopup from "../elements/LoginPopup"
import RegisterPopup from "../elements/RegisterPopup"
import ShowSearch from "../elements/ShowSearch"
import UpdateProgressBars from "../elements/UpdateProgressBars"
import WidgetTab from "../elements/WidgetTab"
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header10 from "./header/Header10"
import Header11 from "./header/Header11"
import Header12 from "./header/Header12"
import Header13 from "./header/Header13"
import Header2 from "./header/Header2"
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Header6 from "./header/Header6"
import Header7 from "./header/Header7"
import Header8 from "./header/Header8"
import Header9 from "./header/Header9"
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Footer5 from "./footer/Footer5"
import Footer6 from "./footer/Footer6"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, mainContentCls, footerCls }) {
	const [scroll, setScroll] = useState(0)
	// Moblile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
	}
	// Moblile Menu
	const [isLogin, setLogin] = useState(false)
	const handleLogin = () => {
		setLogin(!isLogin)
		!isLogin ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}
	// Moblile Menu
	const [isRegister, setRegister] = useState(false)
	const handleRegister = () => {
		setRegister(!isRegister)
		!isRegister ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<><div id="top" />
			<AddClassBody />
			<WidgetTab />
			<FilterBtn />
			<ShowSearch />
			<UpdateProgressBars />

			<div id="wrapper">
				<div id="page">
					{/* {!headerStyle && <Header12 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />} */}
					{headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 6 ? <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 7 ? <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 8 ? <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 9 ? <Header9 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 10 ? <Header10 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 11 ? <Header11 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 12 ? <Header12 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}
					{headerStyle == 13 ? <Header13 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} /> : null}

					<div className={`main-content ${mainContentCls ? mainContentCls : ""}`}>
						{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

						{children}
					</div>
					{/* {!footerStyle && < Footer1 />} */}
					{footerStyle == 1 ? < Footer1 footerCls={footerCls} /> : null}
					{footerStyle == 2 ? < Footer2 footerCls={footerCls} /> : null}
					{footerStyle == 3 ? < Footer3 footerCls={footerCls} /> : null}
					{footerStyle == 4 ? < Footer4 footerCls={footerCls} /> : null}
					{footerStyle == 5 ? < Footer5 footerCls={footerCls} /> : null}
					{footerStyle == 6 ? < Footer6 footerCls={footerCls} /> : null}
				</div>
			</div>
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<BackToTop target="#top" />
			<LoginPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
			<RegisterPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
		</>
	)
}
