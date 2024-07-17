import Image from "next/image";

export default function About() {
  return (
    <section className="mt-[80px]">
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-6xl mb-4">About Us</h1>
        <Image
          src="/images/about-underline.png"
          alt="About Us underlined"
          width={140}
          height={12}
        />
      </div>

      <div className="flex justify-center gap-2.5 mt-[95px]">
        <Image
          src="/images/brrng-ussd-integration.png"
          alt="Hand dialling a USSD shortcode"
          width={500}
          height={400}
        />
        {/*<Image 
        src="/images/sect-divider.png" 
        alt="A section divder"
        width={28}
        height={10}/> */}
        <div className="w-4 h-72 rounded-lg border-black border-2 mt-[100px] border-gray-900 "></div>
        <div className="flex flex-col mt-[120px]">
          <p className="text-2xl mb-4 ">
            MenuGenius is an innovative USSD menu
            <br /> generation platform designed to cater to
            <br /> the diverse and bespoke needs of both
            <br /> individuals and corporate entities.
          </p>
          <p className="text-2xl">
            You can Easily create dynamic USSD apps
            <br /> that can be accessed anywhere without
            <br /> internet connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}
