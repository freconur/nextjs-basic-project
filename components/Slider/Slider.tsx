import React, { useEffect, useState } from 'react'
import { IMAGE_SLIDER_LOCAL_MOVIL } from './ArrayImageSlider'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDownSLine } from "react-icons/ri";

interface Props {
	autoplay: boolean
}

const Slider = ({ autoplay }: Props) => {

	const [selectedIndex, setSelectedIndex] = useState(0)
	const [selectedImage, setSelectedImage] = useState<string>(IMAGE_SLIDER_LOCAL_MOVIL[0])

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(() => {
				selectImageSlider(selectedIndex, IMAGE_SLIDER_LOCAL_MOVIL)
			}, 3000)
			return () => clearInterval(interval);
		}
	})
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
		<div className='relative'>

			<Link href={`${selectedImage}`} className="relative z-10 left-0 right-0 top-0 flex transition-transform ease-out duration-500" prefetch={false}>
				<Image
					src={require(`assets/slider/${selectedImage}.jpg`).default}
					alt={selectedImage}
					priority
				/>
				{/* <img src={require(`assets/slider/${selectedImage}`).default.src} alt="" /> */}
			</Link>
			{/* <button onClick={prev}>prev</button>
			<button onClick={next}>next</button> */}
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<div
					onClick={prev}
					className="relative z-20 rounded-full rotate-90 bg-gray-100 hover:bg-white"
				>
					<RiArrowDownSLine className="text-3xl" />
				</div>
				<div
					onClick={next}
					className="relative z-20  rounded-full -rotate-90 bg-gray-100 hover:bg-white"
				>
					<RiArrowDownSLine className="text-3xl" />
				</div>
			</div>
		</div>
		</>
	)
}

export default Slider