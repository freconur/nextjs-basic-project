
type Props = {
  btsCategories: BtsCategories[];
}

const BtsCategories = ({ btsCategories }: Props) => {

  return (
    <>
      <h2 className="text-3xl text-verde font-bold capitalize my-10 text-center">categorias</h2>
      <ul className="grid grid-cols-1 gap-5 m-2">
        <li className="flex w-full rounded-xl shadow-md p-5 bg-blanco-cool">
          <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fposter%2Fposter-bts-brilliant-color.jpg?alt=media&token=bbefab8e-6eee-4d48-b6b0-4279acc71375" alt="poster bts" />
          <div className="p-3 grid place-content-center">
            <h3 className="text-2xl text-fuxia capitalize font-bold text-center">poster</h3>
            <div className="block text-texto">
              poster bts para tu cuarto pa ponerte en cuatro
            </div>
          </div>
        </li>
        <li className="flex flex-row-reverse w-full rounded-xl shadow-md p-5 bg-blanco-cool">
          <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fcojines%2Fbts-cojin-al-authogrape.jpg?alt=media&token=9cce4c25-6d37-41e1-9127-c2676ee2e506" alt="poster bts" />
          <div className="p-3 grid place-content-center">
            <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cojines</h3>
            <div className="block text-texto">
              poster bts para tu cuarto pa ponerte en cuatro
            </div>
          </div>
        </li>
      <li className="flex w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Flibretas%2Fbts-libretas-blue.jpg?alt=media&token=f1d2a906-19d0-4c30-b8c9-d32e0e0b40d1" alt="libreta bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">libretas</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
      <li className="flex flex-row-reverse w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fcojines-chicos%2Fbts-cojin-chico-dibu.jpg?alt=media&token=9126efab-da03-4d84-b1db-6e1fd0a04444" alt="cojined mid bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cojines mid</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
      <li className="flex w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fcatucheras%2Fcartuchera-bts-roja.jpg?alt=media&token=6e9436e6-034d-4ee9-9b00-5a5f2b03d024" alt="cartucheras bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">cartucheras</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
      <li className="flex flex-row-reverse w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Ftazas%2Ftaza-bts-butter.jpg?alt=media&token=b262c0d0-4b02-4326-b9cf-ef08466b4570" alt="tazas bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">tazas</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
      <li className="flex w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fpolos%2Fpolo-bts-mujer-3.jpg?alt=media&token=763fb062-f7da-45ee-bf50-8c0ea79e473d" alt="polos bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">polos</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
      <li className="flex flex-row-reverse w-full rounded-xl shadow-md p-5 bg-blanco-cool">
        <img className="rounded-full max-w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fmedias%2Fbts-media-blanco-kawaii.jpg?alt=media&token=a9ee8709-449e-4aba-8832-c01d46405b2d" alt="medias bts" />
        <div className="p-3 grid place-content-center">
          <h3 className="text-2xl text-fuxia capitalize font-bold text-center">medias</h3>
          <div className="block text-texto">
            poster bts para tu cuarto pa ponerte en cuatro
          </div>
        </div>
      </li>
    </ul >
    </>
  )
};

export default BtsCategories;