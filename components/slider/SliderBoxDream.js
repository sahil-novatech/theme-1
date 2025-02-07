'use client'
import data from "@/utils/carousel.json"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


export default function SliderBoxDream({ start, end, path, completePath = '' }) {
	const sliderBoxDream = {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 0,
		slidesPerView: 1,
		Autoplay: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: `.sdp${start}`,
			prevEl: `.sdp${end}`,
			clickable: true,
		},
		pagination: {
			el: ".box-dream-pagination",
			clickable: true,
		},
	}
	return (
		<>
			<Swiper {...sliderBoxDream} className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
				<div className="swiper-wrapper">
					{completePath ? (
						<>
						<SwiperSlide>
							<div className="w-full">
								<img src={`${completePath}`} alt="" />
							</div>
						</SwiperSlide>
						</>
					): (
						<>
						{data.slice(start, end).map((item, i) => (
						<SwiperSlide>
							<div className="w-full">
								<img src={`/images/${path}-${item.id}.jpg`} alt="" />
							</div>
						</SwiperSlide>
					))}
						</>
					)}
					
				</div>
				<div className="swiper-pagination box-dream-pagination" />
				<div className={`box-dream-next swiper-button-next sdp${start}`} />
				<div className={`box-dream-prev swiper-button-prev sdp${end}`} />
			</Swiper>
		</>
	)
}
