import Image from "next/image"
import Logo from "@/components/Logo"
import Figure from '../Figure/Figure'
const AboutUsWidget = () => {
	return <div>
		<div className="mb-4" >
			<Figure src="https://res.cloudinary.com/vtapico/image/upload/c_crop,w_2500,h_1800/v1690491027/matgilbert.com/PXL_20230704_201242489_atmpqm.jpg" alt="Mat with a Salmon"/>
		</div>
		<p>Mat Gilbert is a creative engineer living in Huntington, VT with his Wife and Cat. He goes fishing as much as possible, but enjoys technology and artwork when not on the water.</p>
	</div>
}

export default AboutUsWidget