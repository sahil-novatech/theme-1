
'use client'
import Link from "next/link"
import { EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const sliderHome7 = {
	modules: [Navigation, EffectFade],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: ".home7-next",
		prevEl: ".home7-prev",
		clickable: true,
	},
}

export default function Slider7() {
	return (
		<>

			<section className="slider home7">
				<div className="swiper-container slider-home7 slider-effect-fade arrow-style-1 pagination-style-1">
					<Swiper {...sliderHome7}>
						<SwiperSlide>
							<div className="wrap-slider">
								<div className="image">
									<img src="/images/slider/slider-home-7.jpg" alt="" />
								</div>
								<div className="slider-item">
									<div className="themesflat-container">
										<div className="row">
											<div className="col-12">
												<div className="slider-content">
													<div className="text fade-item fade-item-1">25 beds - 291 Bats -
														2500 sq ft</div>
													<h1 className="fade-item fade-item-2">Modern Apartment in <br />
														Mission District</h1>
													<div className="text-1 fade-item fade-item-3">$85.000</div>
													<Link href="/property-single-v1" className="tf-button-primary m-auto fade-item fade-item-4">View
														Details<i className="icon-arrow-right-add" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wrap-slider">
								<div className="image">
									<img src="/images/slider/slider-home-71.jpg" alt="" />
								</div>
								<div className="slider-item">
									<div className="themesflat-container">
										<div className="row">
											<div className="col-12">
												<div className="slider-content">
													<div className="text fade-item fade-item-1">25 beds - 291 Bats -
														2500 sq ft</div>
													<h1 className="fade-item fade-item-2">Modern Apartment in <br />
														Mission District</h1>
													<div className="text-1 fade-item fade-item-3">$85.000</div>
													<Link href="/property-single-v1" className="tf-button-primary m-auto fade-item fade-item-4">View
														Details<i className="icon-arrow-right-add" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wrap-slider">
								<div className="image">
									<img src="/images/slider/slider-home-72.jpg" alt="" />
								</div>
								<div className="slider-item">
									<div className="themesflat-container">
										<div className="row">
											<div className="col-12">
												<div className="slider-content">
													<div className="text fade-item fade-item-1">25 beds - 291 Bats -
														2500 sq ft</div>
													<h1 className="fade-item fade-item-2">Modern Apartment in <br />
														Mission District</h1>
													<div className="text-1 fade-item fade-item-3">$85.000</div>
													<Link href="/property-single-v1" className="tf-button-primary m-auto fade-item fade-item-4">View
														Details<i className="icon-arrow-right-add" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="home7-next has-background swiper-button-next" />
					<div className="home7-prev has-background swiper-button-prev" />
				</div>
				<form className="form-search-home5 background-secondary wow fadeInUp">
					<div className="list">
						<div className="group-form form-search-content">
							<div className="form-style-has-title">
								<div className="title">Keyword</div>
								<div className="relative">
									<fieldset className="name">
										<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} aria-required="true" required />
									</fieldset>
									<div className="style-absolute-right">
										<div className="style-icon-default"><i className="flaticon-magnifiying-glass" />
										</div>
									</div>
									<div className="box-content-search style-1">
										<ul>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-8.png" alt="" />
														</div>
														<p>Archer House</p>
													</div>
													<div className="text">For Sale</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-7.png" alt="" />
														</div>
														<p>Home Pitt Street</p>
													</div>
													<div className="text">For Rent</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-9.png" alt="" />
														</div>
														<p>Villa One Hyde Park</p>
													</div>
													<div className="text">For Rent</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-10.png" alt="" />
														</div>
														<p>House on the beverly hills</p>
													</div>
													<div className="text">For Sale</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Status</div>
								<select className="nice-select style-white" tabIndex={0}>
									<option data-value="For Sale" className="option selected">For Sale</option>
									<option data-value="For Ren" className="option">For Ren</option>

								</select>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Type</div>
								<select className="nice-select" tabIndex={0}>
									<option data-value className="option selected focus">All Type</option>
									<option data-value="Office" className="option">Office</option>
									<option data-value="Villa" className="option">Villa</option>
									<option data-value="Shop" className="option">Shop</option>

								</select>
							</div>
						</div>
					</div>
					<div className="flex gap10">
						<div className="group-form">
							<div className="wg-filter">
								<div className="tf-button-filter btn-filter"><i className="flaticon-filter" />Filter</div>
								<div className="open-filter filter-no-content" id="a1">
									<div>
										<div className="grid-3-cols mb-20">
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">City</option>
												<option data-value="New York" className="option">New York</option>
												<option data-value="Paris" className="option">Paris</option>
												<option data-value="Ha Noi" className="option">Ha Noi</option>

											</select>
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Bedrooms</option>
												<option data-value="1 Bed" className="option">1 Bed</option>
												<option data-value="2 Bed" className="option">2 Bed</option>

											</select>
											<select className="nice-select" tabIndex={0}>

												<option data-value className="option selected">Bathrooms</option>
												<option data-value="1 Bath" className="option">1 Bath</option>
												<option data-value="2 Bath" className="option">2 Bath</option>

											</select>
										</div>
										<div className="grid-4-cols">
											<fieldset className="name">
												<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} aria-required="true" required />
											</fieldset>
											<fieldset className="name">
												<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} aria-required="true" required />
											</fieldset>
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Min. Price</option>
												<option data-value="100 $" className="option">100 $</option>
												<option data-value="150 $" className="option">150 $</option>

											</select>
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Max. Price</option>
												<option data-value="1000 $" className="option">1000 $</option>
												<option data-value="1500 $" className="option">1500 $</option>

											</select>
										</div>
									</div >
									<div>
										<div className="title">Amenities</div>
										<ul className="grid-checkbox">
											<li className="checkbox-item">
												<label>
													<p>Air Conditioning</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Barbeque</p>
													<input type="checkbox" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Dryer</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Gym</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Lawn</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Microwave</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Refrigerator</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Sauna</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Swimming Pool</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>TV Cable</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Washer</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>WiFi</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
										</ul>
									</div>
								</div >
							</div >
						</div >
						<div className="group-form">
							<div className="button-submit">
								<button className type="submit">Search</button>
							</div>
						</div>
					</div >
				</form >
			</section >
		</>
	)
}
