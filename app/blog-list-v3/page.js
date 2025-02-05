
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogListV3() {

	return (
		<>

			<Layout headerStyle={12} footerStyle={1}>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Blog Pages</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Property List</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="themesflat-container">
					<div className="row">
						<div className="col-lg-8">
							{/* list-blog */}
							<div className="wg-blog style-large wow fadeInUp">
								<div className="image">
									<img src="/images/blog/blog-1.jpg" alt="" />
								</div>
								<div className="content">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href="/blog-single">Sweet Deal: Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida</Link>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. </p>
									<Link href="/blog-single" className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
							<div className="wg-blog style-large wow fadeInUp">
								<div className="image">
									<img src="/images/blog/blog-2.jpg" alt="" />
								</div>
								<div className="content">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href="/blog-single">'Architectural Jewel': Century-Old Bay Area Craftsman Designed by Bernard Maybeck</Link>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. </p>
									<Link href="/blog-single" className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
							<div className="wg-blog style-large wow fadeInUp">
								<div className="image">
									<img src="/images/blog/blog-3.jpg" alt="" />
								</div>
								<div className="content">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href="/blog-single">$1.9M Midcentury Home With Glass-Domed Pool Dips Onto the Market in New York</Link>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. </p>
									<Link href="/blog-single" className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
							{/* /list-blog */}
							<ul className="wg-pagination justify-center mt-31 wow fadeInUp">
								<li>
									<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
								</li>
								<li>
									<Link href="/#">1</Link>
								</li>
								<li className="active">
									<Link href="/#">2</Link>
								</li>
								<li>
									<Link href="/#">3</Link>
								</li>
								<li>
									<Link href="/#">4</Link>
								</li>
								<li>
									<Link href="/#">...</Link>
								</li>
								<li>
									<Link href="/#">20</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-4">
							<div className="sidebar">
								<div className="sidebar-item sidebar-search">
									<form className="form-search">
										<fieldset className="name">
											<input type="text" placeholder="Search" className name="name" tabIndex={2} aria-required="true" required />
										</fieldset>
										<div className="button-submit style-absolute-right-center">
											<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
										</div>
									</form>
								</div>
								<div className="sidebar-item sidebar-categories">
									<div className="sidebar-title">Categories</div>
									<ul>
										<li>
											<Link href="/#">Apartment</Link>
										</li>
										<li className="active">
											<Link href="/#">Office</Link>
										</li>
										<li>
											<Link href="/#">Single Family</Link>
										</li>
										<li>
											<Link href="/#">Shop</Link>
										</li>
										<li>
											<Link href="/#">Villa</Link>
										</li>
									</ul>
								</div>
								<div className="sidebar-item sidebar-agents">
									<div className="sidebar-title">Recent Agents</div>
									<ul>
										<li>
											<div className="image">
												<img src="/images/blog/blog-list-1.jpg" alt="" />
											</div>
											<div className="content">
												<div className="name">
													<Link href="/blog-single">Manhattan Apartments</Link>
												</div>
												<p>May 27, 2024</p>
											</div>
										</li>
										<li>
											<div className="image">
												<img src="/images/blog/blog-list-3.jpg" alt="" />
											</div>
											<div className="content">
												<div className="name">
													<Link href="/blog-single">Modern Villa</Link>
												</div>
												<p>May 27, 2024</p>
											</div>
										</li>
										<li>
											<div className="image">
												<img src="/images/blog/blog-list-2.jpg" alt="" />
											</div>
											<div className="content">
												<div className="name">
													<Link href="/blog-single">Best Luxury Family House</Link>
												</div>
												<p>May 27, 2024</p>
											</div>
										</li>
									</ul>
								</div>
								<div className="sidebar-item sidebar-tags">
									<div className="sidebar-title">Popular Tags</div>
									<ul>
										<li><Link href="/#">Real Estate</Link></li>
										<li><Link href="/#">Business</Link></li>
										<li><Link href="/#">Construction</Link></li>
										<li><Link href="/#">Luxury</Link></li>
										<li><Link href="/#">House</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}