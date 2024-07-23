import Image from "next/image";

export default function About() {
  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">About Us</h1>
        <Image
          src="/images/about-underline.png"
          alt="About Us underlined"
          width={140}
          height={12}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-2.5 mt-24 lg:mt-32">
        <Image
          src="/images/brrng-ussd-integration.png"
          alt="Hand dialing a USSD shortcode"
          width={500}
          height={400}
          className="w-full lg:w-1/2 h-auto"
        />
        <div className="hidden lg:block w-1 h-72 rounded-lg border-black border-2 border-gray-900 mt-8 lg:mt-24"></div>
        <div className="flex flex-col mt-8 lg:mt-24 p-4 lg:p-0">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            MenuGenius is an innovative USSD menu
            <br className="hidden lg:block" /> generation platform designed to cater to
            <br className="hidden lg:block" /> the diverse and bespoke needs of both
            <br className="hidden lg:block" /> individuals and corporate entities.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            You can easily create dynamic USSD apps
            <br className="hidden lg:block" /> that can be accessed anywhere without
            <br className="hidden lg:block" /> internet connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}
