
'use client'
import Link from "next/link"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderBoxDream from "../slider/SliderBoxDream"
const sliderRecentProperties = {
	modules: [Navigation, Pagination],
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".recent-properties-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}

export default function FeaturedListings() {
	return (
		<>

			<section className="tf-section featured-listings">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section style-white">
									<h2 className="wow fadeInUp">Recent Listings in Toronto</h2>
									<div className="text wow fadeInUp">Based on your view history</div>
								</div>
								{/* <Link href="/property-map-v1" className="tf-button-no-bg style-white wow fadeInUp">
									View All Cities
									<i className="icon-arrow-right-add" />
								</Link> */}
							</div>
						</div>
						<div className="col-12">
							<Swiper {...sliderRecentProperties} className="swiper-container slider-recent-properties pagination-style-2">
								<div class="swiper-wrapper">
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white wow fadeInUp">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>

												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={0} end={2} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white wow fadeInUp" data-wow-delay="0.1s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Villa One Hyde Park</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white wow fadeInUp" data-wow-delay="0.15s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={2} end={4} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Home Pitt Street</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white wow fadeInUp" data-wow-delay="0.2s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={0} end={2} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-2 type-small style-white">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/rent-properties" start={2} end={4} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-single-v1">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="bot">
													<div className="icon-box">
														<div className="item">
															<i className="flaticon-hotel" />
															<p>4</p>
														</div>
														<div className="item">
															<i className="flaticon-bath-tub" />
															<p>3</p>
														</div>
														<div className="item">
															<i className="flaticon-minus-front" />
															<p>2660</p>
														</div>
													</div>
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination style-black recent-properties-pagination" />
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
