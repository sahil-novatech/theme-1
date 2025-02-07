'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function FeaturedCategories3() {
	const router = useRouter()
	return (
		<>

			<section className="tf-section featured-categories style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section">
									<h2 className="wow fadeInUp">Featured Cities</h2>
									<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
								</div>
								{/* <Link href="/property-list-v1" className="tf-button-no-bg wow fadeInUp">
									View All Categories
									<i className="icon-arrow-right-add" />
								</Link> */}
							</div>
						</div>
						<div className="col-12">
							<div className="wrap mobile-wrap">
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}}>
									<div className="icon">
										<i className="flaticon-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Toronto</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}} data-wow-delay="0.1s">
									<div className="icon">
										<i className="flaticon-cottage" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Mississauga</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}} data-wow-delay="0.15s">
									<div className="icon">
										<i className="flaticon-buildings" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Brampton</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}} data-wow-delay="0.2s">
									<div className="icon">
										<i className="flaticon-office-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Hamilton</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}} data-wow-delay="0.25s">
									<div className="icon">
										<i className="flaticon-cottage" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Vaughan</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div onClick={() => router.push('/property-list-v1')} className="categories-item style-1 wow fadeInUp" style={{cursor: 'pointer'}} data-wow-delay="0.3s">
									<div className="icon">
										<i className="flaticon-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Markham</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
