import LayoutMarginCenter from '@components/Layout/LayoutMarginCenter';
import { TAZAS_SUBLIMADOS } from 'ImagesLink/imagesLink';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react'

const TazasSublimadas = () => {
	return (
		<div>
			<LayoutMarginCenter>
				<div className="mt-10">
					<div className="text-center">
						<h1 className="capitalize text-4xl text-texto font-bold">
							cilindros y biombos para fiestas
						</h1>
						<p className="text-2xl text-texto-title my-5">
							Reserva tus ciclindros y biombos para tu fiesta a unos precios
							increibles, echale un ojo a nuestras tematicas disponibles.
						</p>
					</div>
					<ul className="grid grid-cols-1 gap-5 my-10 mx-5 sm:grid-cols-2">
						
								<li className="overflow-hidden rounded-lg bg-blanco-cool shadow-xl tematicas-disponibles__item">
									<Link href="/biombos/plantillas">
										<Image
											layout="responsive"
											src={`${TAZAS_SUBLIMADOS.personalizados.url}`}
											alt={`${TAZAS_SUBLIMADOS.personalizados.name} `}
											width={150}
											height={150}
										/>
										<h3 className="tematicas-disponibles__name p-5 text-center text-xl xm:text-2xl  text-texto-title capitalize font-bold">
											{TAZAS_SUBLIMADOS.personalizados.name}
										</h3>
									</Link>
								</li>
						
					</ul>
				</div>
			</LayoutMarginCenter>
		</div>
	)
}

export default TazasSublimadas