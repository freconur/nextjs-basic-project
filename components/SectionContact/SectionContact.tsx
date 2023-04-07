import Image from "next/image";
import { RiWhatsappLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
const SectionContact = () => {
  return (
    <section className="bg-cian py-10 px-3">
      <div className="flex">
        <div className="m-auto">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/waliky-logo.png?alt=media&token=5a55b529-fd73-44dd-8120-35b9e1a00ecf"
            alt="logo"
            width={200}
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
      <div className="">
        <div className="text-xl pt-10">
          <h3 className=" text-2xl text-gray-600 font-semibold capitalize">
            ubicanos
          </h3>
          <p className="text-white font-semibold">
            Nos ubicamos en jiron La Custre con Jiron Conima, a una cuadra de la
            Avenida Tambopata con jiron Conima.
          </p>
        </div>
        <div className="text-xl py-10">
          <h3 className=" text-2xl text-gray-600 font-semibold capitalize">
            direccion
          </h3>

          <p className="text-white font-semibold">Mz i Lote 2 Jiron Conima.</p>
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.0364156382857!2d-70.11578248555224!3d-15.482473289245698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f33a510ceb4d%3A0x513479db1ab4c863!2swaliky%20store%20juliaca!5e0!3m2!1ses-419!2spe!4v1680830047266!5m2!1ses-419!2spe"
            // width="300"
            // height="250"
            className="w-full h-[300px]"
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-center pt-5">
          <h3 className="text-gray-600 text-3xl font-semibold capitalize my-5">
            contactanos
          </h3>
          <div className="flex gap-2 w-full mx-auto">
            <div className=" flex gap-2 m-auto">

            <RiWhatsappLine className="text-white text-4xl" />
            <p className="block leading-10  text-white text-2xl font-bold">
              +51 936 263 748
            </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          <h3 className="text-gray-600 text-3xl font-semibold capitalize my-5">
            redes sociales
          </h3>
          <div className="flex gap-2 ">
            <div className="m-auto flex gap-8">
              <a href="">
                <RiFacebookCircleFill className="text-white text-4xl font-semibold" />
              </a>
              <a href="">
                <RiInstagramLine className="text-white text-4xl font-semibold" />
              </a>
              <a href="">
                <RiYoutubeLine className="text-white text-4xl font-semibold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
