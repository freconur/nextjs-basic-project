import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter";
import Image from "next/image";
import Link from "next/link";
import Polos from '../../assets/bts-categories/polo.jpg'
import Tazas from '../../assets/bts-categories/taza.jpg'
import Cartucheras from '../../assets/bts-categories/cartuchera.jpg'
import Libretas from '../../assets/bts-categories/libreta.jpg'
import Medias from '../../assets/bts-categories/medias.jpg'
import Poster from '../../assets/bts-categories/poster.jpg'
import CojinMid from '../../assets/bts-categories/cojinMid.jpg'
import Cojin from '../../assets/bts-categories/cojin.jpg'

type Props = {
  btsCategories: BtsCategories[];
}

const BtsCategories = ({ btsCategories }: Props) => {

  return (
    <>
      <LayoutMarginCenter>
        <h2 className="text-3xl text-verde font-bold capitalize my-10 text-center">categorias</h2>
        <ul className="grid grid-cols-1 gap-5 m-2 xsm:grid-cols-2 xs:grid-cols-3 lg:grid-cols-4">
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/poster">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
                <Image className="xsm:w-full" src={Poster} alt="poster bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">poster</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/cartucheras">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Cartucheras} alt="cartucheras bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cartucheras</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/libretas">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Libretas} alt="libretas bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">libretas</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/cojines">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Cojin} alt="cojines bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cojines</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/cojinesMid">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={CojinMid} alt="cojinesMid bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cojinesMid</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/medias">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Medias} alt="medias bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">medias</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/tazas">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Tazas} alt="tazas bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">tazas</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full h-fit rounded-xl shadow-md  bg-blanco-cool xsm:overflow-hidden">
            <Link className="flex p-5 xsm:p-0 xsm:block" href="bts/polos">
              <div className="w-full overflow-hidden rounded-full shadow-lg xsm:shadow-none xsm:rounded-none">
              <Image className="xsm:w-full" src={Polos} alt="polos bts" width={150} height={150} placeholder="blur"/>
              </div>
              <div className="p-3 grid place-content-center xsm:block">
                <h3 className="text-2xl text-fuxia capitalize font-bold text-center">polos</h3>
                <div className="block text-texto">
                  poster bts para tu cuarto pa ponerte en cuatro
                </div>
              </div>
            </Link>
          </li>
        </ul >
      </LayoutMarginCenter>
    </>
  )
};

export default BtsCategories;