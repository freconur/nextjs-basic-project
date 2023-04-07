import Image from "next/image";

const SectionContact = () => {
  return (
    <section className="bg-cian py-10">
      <div className="flex">
        <div className="m-auto">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/waliky-logo.png?alt=media&token=5a55b529-fd73-44dd-8120-35b9e1a00ecf"
            alt="logo"
            width={150}
            height={60}
          />
        </div>
        <div className="m-3">
          <p className="text-gray-600 text-2xl font-semibold capitalize">
            waliky store Juliaca
          </p>
          <p className="text-gray-500 text-xl capitalize">
            tienda de regalos y sublimados
          </p>
        </div>
      </div>
      <div className="pl-3">
        <div className="text-xl text-gray-500 my-5">
        <h3 className=" text-2xl text-gray-600 font-semibold capitalize">ubicanos</h3>
          <p>
            Nos ubicamos en jiron La Custre con Jiron Conima, a una cuadra de la Avenida Tambopata con jiron Conima.
          </p>
        </div>
        <div className="text-xl text-gray-500 my-5">
        <h3 className=" text-2xl text-gray-600 font-semibold capitalize">direccion</h3>

          <p>
            Mz i Lote 2 Jiron Conima.
          </p>
        </div>
        <div className="w-full shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.0364156382857!2d-70.11578248555224!3d-15.482473289245698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f33a510ceb4d%3A0x513479db1ab4c863!2swaliky%20store%20juliaca!5e0!3m2!1ses-419!2spe!4v1680830047266!5m2!1ses-419!2spe"
            // width="300"
            // height="250"
            className="w-[350px] h-[300px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
