
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import DeleteButton from "../elements/DeleteButton"
import LoginPopup from "../elements/LoginPopup"
import RegisterPopup from "../elements/RegisterPopup"
import BreadcrumbAdmin from "./BreadcrumbAdmin"
import Sidebar from "./Sidebar"
import Header11 from "./header/Header11"

export default function LayoutAdmin({ headerStyle, footerStyle, breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(0)
	// Moblile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

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

			<DeleteButton />

			<div id="wrapper">
				<div id="page" className="layout-wrap background-F9F9F9">
					<Header11 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

					<div className="main-content spacing-20">
						<div className="layout-wrap-inner">
							<Sidebar />
							<div className="section-content-right">
								{breadcrumbTitle && <BreadcrumbAdmin breadcrumbTitle={breadcrumbTitle} />}
								{children}
								<div className="bottom-page">
									<p>Copyright © 2024. JustHome</p>
								</div>
							</div>
							<div className="btn-canvas active">
								<span />
								<div className="text-content"> Dashboard Navigation</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<BackToTop target="#top" />
			<LoginPopup />
			<RegisterPopup />
		</>
	)
}
