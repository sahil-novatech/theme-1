'use client'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderTestimonials1 = {
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}
export default function FlatTestimonial7() {
	return (
		<>

			<section className="tf-section flat-testimonial style-5">
				<div className="testimonials">
					<div className="themesflat-container">
						<div className="row justify-between">
							<div className="col-12">
								<div className="testimonials-inner style-row">
									<div>
										<h2 className="wow fadeInUp">What our customers are <br /> saying us?</h2>
									</div>
									<div className="list">
										<div className="item wow fadeInUp">
											<h3>13m+</h3>
											<p>Happy People</p>
										</div>
										<div className="item  wow fadeInUp" data-wow-delay="0.1s">
											<h3>4.88</h3>
											<p>Overall rating</p>
											<div className="ratings">
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-container slider-testimonials-1">
									<Swiper {...sliderTestimonials1}>
										<SwiperSlide>
											<div className="testimonials-item background-white wow fadeInUp">
												<div className="head">
													<div className="image">
														<img src="/images/author/author-1.png" alt="" />
													</div>
													<div>
														<div className="title">
															<Link href="/#">Cameron Williamson</Link>
														</div>
														<p>Designer</p>
													</div>
												</div>
												<div className="description">Searches for multiplexes, property
													comparisons, and the loan estimator. Works great. Lorem ipsum
													dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et dores.</div>
												<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
													<g filter="url(#filter0_d_249_14836)">
														<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
													</g>
													<defs>
														<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
															<feFlood floodOpacity={0} result="BackgroundImageFix">
															</feFlood>
															<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
															<feOffset dx={6} dy={6} />
															<feComposite in2="hardAlpha" operator="out">
															</feComposite>
															<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
															</feColorMatrix>
															<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
															<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape">
															</feBlend>
														</filter>
													</defs>
												</svg>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonials-item background-white wow fadeInUp" data-wow-delay="0.1s">
												<div className="head">
													<div className="image">
														<img src="/images/author/author-2.png" alt="" />
													</div>
													<div>
														<div className="title">
															<Link href="/#">Cameron Williamson</Link>
														</div>
														<p>Designer</p>
													</div>
												</div>
												<div className="description">Searches for multiplexes, property
													comparisons, and the loan estimator. Works great. Lorem ipsum
													dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et dores.</div>
												<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
													<g filter="url(#filter0_d_249_14836)">
														<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
													</g>
													<defs>
														<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
															<feFlood floodOpacity={0} result="BackgroundImageFix">
															</feFlood>
															<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
															<feOffset dx={6} dy={6} />
															<feComposite in2="hardAlpha" operator="out">
															</feComposite>
															<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
															</feColorMatrix>
															<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
															<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape">
															</feBlend>
														</filter>
													</defs>
												</svg>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonials-item background-white wow fadeInUp" data-wow-delay="0.2s">
												<div className="head">
													<div className="image">
														<img src="/images/author/author-3.png" alt="" />
													</div>
													<div>
														<div className="title">
															<Link href="/#">Cameron Williamson</Link>
														</div>
														<p>Designer</p>
													</div>
												</div>
												<div className="description">Searches for multiplexes, property
													comparisons, and the loan estimator. Works great. Lorem ipsum
													dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et dores.</div>
												<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
													<g filter="url(#filter0_d_249_14836)">
														<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
													</g>
													<defs>
														<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
															<feFlood floodOpacity={0} result="BackgroundImageFix">
															</feFlood>
															<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
															<feOffset dx={6} dy={6} />
															<feComposite in2="hardAlpha" operator="out">
															</feComposite>
															<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
															</feColorMatrix>
															<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
															<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape">
															</feBlend>
														</filter>
													</defs>
												</svg>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonials-item background-white">
												<div className="head">
													<div className="image">
														<img src="/images/author/author-2.png" alt="" />
													</div>
													<div>
														<div className="title">
															<Link href="/#">Cameron Williamson</Link>
														</div>
														<p>Designer</p>
													</div>
												</div>
												<div className="description">Searches for multiplexes, property
													comparisons, and the loan estimator. Works great. Lorem ipsum
													dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et dores.</div>
												<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
													<g filter="url(#filter0_d_249_14836)">
														<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
													</g>
													<defs>
														<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
															<feFlood floodOpacity={0} result="BackgroundImageFix">
															</feFlood>
															<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
															<feOffset dx={6} dy={6} />
															<feComposite in2="hardAlpha" operator="out">
															</feComposite>
															<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
															</feColorMatrix>
															<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
															<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape">
															</feBlend>
														</filter>
													</defs>
												</svg>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonials-item background-white">
												<div className="head">
													<div className="image">
														<img src="/images/author/author-3.png" alt="" />
													</div>
													<div>
														<div className="title">
															<Link href="/#">Cameron Williamson</Link>
														</div>
														<p>Designer</p>
													</div>
												</div>
												<div className="description">Searches for multiplexes, property
													comparisons, and the loan estimator. Works great. Lorem ipsum
													dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et dores.</div>
												<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
													<g filter="url(#filter0_d_249_14836)">
														<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
													</g>
													<defs>
														<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
															<feFlood floodOpacity={0} result="BackgroundImageFix">
															</feFlood>
															<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
															<feOffset dx={6} dy={6} />
															<feComposite in2="hardAlpha" operator="out">
															</feComposite>
															<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
															</feColorMatrix>
															<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
															<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape">
															</feBlend>
														</filter>
													</defs>
												</svg>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
