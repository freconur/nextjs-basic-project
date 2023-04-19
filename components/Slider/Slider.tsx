import React, { useState } from 'react'
import { IMAGE_SLIDER_LOCAL_MOVIL } from './ArrayImageSlider'
import Lalo from '../../assets/slider/trava.jpg'
import Image from 'next/image'
const Slider = () => {

	const [selectedIndex, setSelectedIndex] = useState(0)
	const [selectedImage, setSelectedImage] = useState<string>(IMAGE_SLIDER_LOCAL_MOVIL[0])

	const selectImageSlider = (index: number, image: string[], next = true) => {
		const condition = next ? selectedIndex < IMAGE_SLIDER_LOCAL_MOVIL.length - 1 : selectedIndex > 0
		const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : IMAGE_SLIDER_LOCAL_MOVIL.length - 1
		setSelectedImage(IMAGE_SLIDER_LOCAL_MOVIL[nextIndex])
		setSelectedIndex(nextIndex)
	}

	const prev = () => {
		selectImageSlider(selectedIndex, IMAGE_SLIDER_LOCAL_MOVIL, false)
	}

	const next = () => {
		selectImageSlider(selectedIndex, IMAGE_SLIDER_LOCAL_MOVIL)
	}

	return (
		<>
			<Image
				src={require(`assets/slider/${selectedImage}`).default} 
				alt="images slider"
				priority
			/>
			{/* <img src={require(`assets/slider/${selectedImage}`).default.src} alt="" /> */}
			<button onClick={prev}>prev</button>
			<button onClick={next}>next</button>
		</>
	)
}

export default Slider