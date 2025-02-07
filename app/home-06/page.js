
import Layout from "@/components/layout/Layout"
import AccountBar3 from "@/components/sections/AccountBar3"
import ChooseUs3 from "@/components/sections/ChooseUs3"
import FeaturedCategories3 from "@/components/sections/FeaturedCategories3"
import FeaturedListings from "@/components/sections/FeaturedListings"
import FlatCities4 from "@/components/sections/FlatCities4"
import FlatCounter2 from "@/components/sections/FlatCounter2"
import FlatDiscover2 from "@/components/sections/FlatDiscover2"
import FlatExperts2 from "@/components/sections/FlatExperts2"
import FlatQuestion from "@/components/sections/FlatQuestion"
import FlatTestimonial5 from "@/components/sections/FlatTestimonial5"
import LuxuryHome4 from "@/components/sections/LuxuryHome4"
import Slider6 from "@/components/sections/Slider6"

export default function Home6() {

	return (
		<>

			<Layout  headerStyle={6} footerStyle={1} mainContentCls="default" footerCls="style-full style-fourth">
				<Slider6 />
				<ChooseUs3 />
				<FlatDiscover2 />
				<FeaturedCategories3 />
				<FeaturedListings />
				<FlatCounter2 />
				{/* <FlatCities4 /> */}
				{/* <FlatExperts2 /> */}
				<LuxuryHome4 />
				{/* <FlatTestimonial5 /> */}
				{/* <FlatQuestion /> */}
				{/* <AccountBar3 /> */}
			</Layout>
		</>
	)
}