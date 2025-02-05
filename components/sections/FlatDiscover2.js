
'use client'
import Link from "next/link"
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderBoxDream from "../slider/SliderBoxDream"
const sliderDiscover = {
	module: [Pagination],
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".discover-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}

export default function FlatDiscover2() {
	return (
		<>

			<section className="tf-section flat-discover">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section">
									<h2 className="wow fadeInUp">Discover Our Best Deals</h2>
									<div className="text wow fadeInUp">Based on your view history</div>
								</div>
								<Link href="/property-list-v1" className="tf-button-no-bg wow fadeInUp">
									View All Properties
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
						<div className="col-12">
							<div className="swiper-container slider-discover padding-bottom-80 pagination-style-2">
								<Swiper {...sliderDiscover}>
									<SwiperSlide>
										<div className="box-dream style-2 wow fadeInUp">
											<div className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
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
										<div className="box-dream style-2 wow fadeInUp" data-wow-delay="0.15s">
											<div className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={2} end={4} />
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
										<div className="box-dream style-2 wow fadeInUp" data-wow-delay="0.2s">
											<div className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
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
										<div className="box-dream style-2">
											<div className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={4} end={6} />
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
										<div className="box-dream style-2">
											<div className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
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
								</Swiper>
								<div className="swiper-pagination discover-pagination" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
