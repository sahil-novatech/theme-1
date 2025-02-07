'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	return (
		<>
			{/* <ul className="menu">
				<li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
					<Link href="/#">Home</Link>
					<ul className="sub-menu">
						<li className={`item ${checkCurrentMenuItem("/")}`}>
							<Link href="//">Home 1</Link>
						</li>
						<li className={`item ${checkCurrentMenuItem("/home-02")}`}>
							<Link href="//home-02">Home 2</Link>
						</li>
					</ul>
				</li>
				<li className={`item ${pathname === "/about" ? "active" : ""}`}>
					<Link href="//about">about</Link>
				</li>
			</ul> */}
			<ul className="navigation">
				<li className={`${checkCurrentMenuItem("/")}`}>
					<Link href='/'>Home</Link>
				</li>
				{/* <li className={`has-children ${checkParentActive(["/home-02",
					"/home-03",
					"/home-04",
					"/home-05",
					"/home-06",
					"/home-07",
					"/home-08",
					"/home-09",
					"/home-10",
				])}`}><a>Home</a>
					<ul>
						<li><Link href="/">Home Page 01</Link></li>
						<li><Link href="/home-02" className={`${checkCurrentMenuItem("/home-02")}`}>Home Page 02</Link></li>
						<li><Link href="/home-03" className={`${checkCurrentMenuItem("/home-03")}`}>Home Page 03</Link></li>
						<li><Link href="/home-04" className={`${checkCurrentMenuItem("/home-04")}`}>Home Page 04</Link></li>
						<li><Link href="/home-05" className={`${checkCurrentMenuItem("/home-05")}`}>Home Page 05</Link></li>
						<li><Link href="/home-06" className={`${checkCurrentMenuItem("/home-06")}`}>Home Page 06</Link></li>
						<li><Link href="/home-07" className={`${checkCurrentMenuItem("/home-07")}`}>Home Page 07</Link></li>
						<li><Link href="/home-08" className={`${checkCurrentMenuItem("/home-08")}`}>Home Page 08</Link></li>
						<li><Link href="/home-09" className={`${checkCurrentMenuItem("/home-09")}`}>Home Page 09</Link></li>
						<li><Link href="/home-10" className={`${checkCurrentMenuItem("/home-10")}`}>Home Page 10</Link></li>
					</ul>
				</li> */}
				<li className={`${checkParentActive(['/property'])}`}>
					<Link href={'/property-list-v1'}>Property</Link>
				</li>
				{/* <li className={`has-children ${checkParentActive([
					"/property-list-v1",
					"/property-map-v1",
					"/property-map-v2",
					"/property-map-v3",
					"/property-map-v4",
					"/property-list-v2",
					"/property-list-v3",
					"/property-grid-v1",
					"/property-grid-v2",
					"/property-grid-v3",
					"/property-grid-v4",
					"/property-single-v1",
					"/property-single-v2",
					"/property-single-v3",
					"/property-single-v4",
					"/property-single-v5",
					"/property-single-v6",
					"/property-single-v7",
				])}`}><a>Property</a>
					<ul className="mega-menu">
						<li>
							<ul>
								<li className="title">List view</li>
								<li>
									<Link href="/property-list-v1" className={`${checkCurrentMenuItem("/property-list-v1")}`}>Property List 01</Link>
								</li>
								<li>
									<Link href="/property-list-v2" className={`${checkCurrentMenuItem("/property-list-v2")}`}>Property List 02</Link>
								</li>
								<li>
									<Link href="/property-list-v3" className={`${checkCurrentMenuItem("/property-list-v3")}`}>Property List 03</Link>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="title">Grid view</li>
								<li>
									<Link href="/property-grid-v1" className={`${checkCurrentMenuItem("/property-grid-v1")}`}>Property Grid 01</Link>
								</li>
								<li>
									<Link href="/property-grid-v2" className={`${checkCurrentMenuItem("/property-grid-v2")}`}>Property Grid 02</Link>
								</li>
								<li>
									<Link href="/property-grid-v3" className={`${checkCurrentMenuItem("/property-grid-v3")}`}>Property Grid 03</Link>
								</li>
								<li>
									<Link href="/property-grid-v4" className={`${checkCurrentMenuItem("/property-grid-v4")}`}>Property Grid 04</Link>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="title">Single view</li>
								<li>
									<Link href="/property-single-v1" className={`${checkCurrentMenuItem("/property-single-v1")}`}>Property Single 01</Link>
								</li>
								<li>
									<Link href="/property-single-v2" className={`${checkCurrentMenuItem("/property-single-v2")}`}>Property Single 02</Link>
								</li>
								<li>
									<Link href="/property-single-v3" className={`${checkCurrentMenuItem("/property-single-v3")}`}>Property Single 03</Link>
								</li>
								<li>
									<Link href="/property-single-v4" className={`${checkCurrentMenuItem("/property-single-v4")}`}>Property Single 04</Link>
								</li>
								<li>
									<Link href="/property-single-v5" className={`${checkCurrentMenuItem("/property-single-v5")}`}>Property Single 05</Link>
								</li>
								<li>
									<Link href="/property-single-v6" className={`${checkCurrentMenuItem("/property-single-v6")}`}>Property Single 06</Link>
								</li>
								<li>
									<Link href="/property-single-v7" className={`${checkCurrentMenuItem("/property-single-v7")}`}>Property Single 07</Link>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="title">Map Style</li>
								<li>
									<Link href="/property-map-v1" className={`${checkCurrentMenuItem("/property-map-v1")}`}>Property Map 01</Link>
								</li>
								<li>
									<Link href="/property-map-v2" className={`${checkCurrentMenuItem("/property-map-v2")}`}>Property Map 02</Link>
								</li>
								<li>
									<Link href="/property-map-v3" className={`${checkCurrentMenuItem("/property-map-v3")}`}>Property Map 03</Link>
								</li>
								<li>
									<Link href="/property-map-v4" className={`${checkCurrentMenuItem("/property-map-v4")}`}>Property Map 04</Link>
								</li>
							</ul>
						</li>
					</ul>
				</li> */}
				{/* <li className={`has-children ${checkParentActive([
					"/agent-list",
					"/agent-single",
					"/agency-list",
					"/agency-single",


				])}`}><a>Realtor</a>
					<ul>
						<li><Link href="/agent-list" className={`${checkCurrentMenuItem("/agent-list",)}`}>Agent List</Link></li>
						<li><Link href="/agent-single" className={`${checkCurrentMenuItem("/agent-single",)}`}>Agent Single</Link></li>
						<li><Link href="/agency-list" className={`${checkCurrentMenuItem("/agency-list",)}`}>Agency List</Link></li>
						<li><Link href="/agency-single" className={`${checkCurrentMenuItem("/agency-single",)}`}>Agency Single</Link></li>
					</ul>
				</li> */}
				{/* <li className={`has-children ${checkParentActive([
					"/about",
					"/compare",
					"/pricing",
					"/faq",
					"/404",
					"/ui-elements",
					"/dashboard",


				])}`}><a>Pages</a>
					<ul>
						<li><Link href="/about" className={`${checkCurrentMenuItem("/about",)}`}>About Us</Link></li>
						<li><Link href="/compare" className={`${checkCurrentMenuItem("/compare",)}`}>Compare</Link></li>
						<li><Link href="/pricing" className={`${checkCurrentMenuItem("/pricing",)}`}>Pricing Packages</Link></li>
						<li><Link href="/faq" className={`${checkCurrentMenuItem("/faq",)}`}>FAQ Page</Link></li>
						<li><Link href="/404" className={`${checkCurrentMenuItem("/404",)}`}>404 Page</Link></li>
						<li><Link href="/ui-elements" className={`${checkCurrentMenuItem("/ui-elements",)}`}>UI Elements</Link></li>
						<li><Link href="/dashboard" className={`${checkCurrentMenuItem("/dashboard",)}`}>Dashboard</Link></li>
					</ul>
				</li> */}
				{/* <li className={`has-children ${checkParentActive([
					"/shop-list",
					"/shop-single",
					"/shop-cart",
					"/shop-checkout",
					"/shop-order",


				])}`}><a>Shop</a>
					<ul>
						<li><Link href="/shop-list" className={`${checkCurrentMenuItem("/shop-list",)}`}>Shop List</Link></li>
						<li><Link href="/shop-single" className={`${checkCurrentMenuItem("/shop-single",)}`}>Shop Single</Link></li>
						<li><Link href="/shop-cart" className={`${checkCurrentMenuItem("/shop-cart",)}`}>Shop Cart</Link></li>
						<li><Link href="/shop-checkout" className={`${checkCurrentMenuItem("/shop-checkout",)}`}>Shop Checkout</Link></li>
						<li><Link href="/shop-order" className={`${checkCurrentMenuItem("/shop-order",)}`}>Shop Order</Link></li>
					</ul>
				</li> */}
				<li className={`has-children ${checkParentActive(['/blog'])}`}>
					<Link href={'/blog-list-v3'}>Blog</Link>
				</li>
				{/* <li className={`has-children ${checkParentActive([
					"/blog-list-v1",
					"/blog-list-v2",
					"/blog-list-v3",
					"/blog-single",

				])}`}><a>Blog</a>
					<ul>
						<li><Link href="/blog-list-v1" className={`${checkCurrentMenuItem("/blog-list-v1",)}`}>Blog List 01</Link></li>
						<li><Link href="/blog-list-v2" className={`${checkCurrentMenuItem("/blog-list-v2",)}`}>Blog List 02</Link></li>
						<li><Link href="/blog-list-v3" className={`${checkCurrentMenuItem("/blog-list-v3",)}`}>Blog List 03</Link></li>
						<li><Link href="/blog-single" className={`${checkCurrentMenuItem("/blog-single",)}`}>Blog Single</Link></li>
					</ul>
				</li> */}
				<li className={`has-children ${checkParentActive(['/preconstructions'])}`}>
					<Link href="/preconstructions" className={`item ${pathname === "/preconstructions" ? "current" : ""}`}>Pre-constructions</Link>
				</li>
			</ul>
		</>
	)
}

