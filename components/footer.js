import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#101928] h-[1250px] md:h-[850px] lg:h-[1100px] xl:h-[1000px] relative mt-16 md:mt-[100px] lg:mt-[150px]">
      <div className="relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="hidden md:flex mx-auto max-w-[1320px]  md:h-[750px] lg:h-[870px] px-10">
            <div className="flex-1 border-l border-b border-[#25443B]"></div>
            <div className="flex-1 border-l border-b border-[#25443B]"></div>
            <div className="flex-1 border-l border-b border-[#25443B]"></div>
            <div className="flex-1 border border-y-0 border-b border-[#25443B]"></div>
          </div>
          <div className=" px-4 lg:px-0 absolute top-0 text-white">
            <div className="text-white relative">
              <h2 className="header text-center">Take Control of Your Software Today</h2>
              <p className="description w-[50%] md:w-[60%] xl:w-[50%]">SaaS services for cloud storage and file sharing allow users store, access, and share files securely from any device with an internet connection.</p>
              <div className="subscribe">
                <input className="!bg-white !px-6 button w-[70%]" type="email" placeholder="Email Address" />
                <button className="button flex items-center justify-center mt-3 md:mt-0 w-[50%] md:w-[30%]">Subscribe <img className="ml-2" src="/right.png" alt="right aero" /> </button>
              </div>
              <div className="max-w-[1320px] mx-auto px-4 lg:px-0 mt-14 md:mt-24 lg:mt-[140px] ">
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-[50px] lg:space-x-[140px]">
                  <div className="w-full md:w-[30%]">
                    <img className="w-[30%] mx-auto md:mx-0 md:w-1/2" src="/logo.png" alt="logo" />
                    <p className="description !mt-6 md:!mt-10 !text-justify">Software a Service (SaaS) revolutionized landscape
                      of software delivery and consumption. Offering flexible
                      an scalable solution, SaaS platforms provide users with
                      to software applications over the internet. </p>
                    <div className="flex mt-6 md:mt-10 space-x-3 justify-center md:justify-start ">
                      <div className="rounded-full hover:bg-[#10B981] border border-[#25443B] hover:border-[#10B981]"> <img className="px-3 py-2" src="/facebook-f.png" alt="facebook" /></div>
                      <div className="rounded-full hover:bg-[#10B981] border border-[#25443B] hover:border-[#10B981]"> <img className="p-2" src="/twitter.png" alt="facebook" /></div>
                      <div className="rounded-full hover:bg-[#10B981] border border-[#25443B] hover:border-[#10B981]"> <img className="p-2" src="/instagram.png" alt="instagram" /></div>
                      <div className="rounded-full hover:bg-[#10B981] border border-[#25443B] hover:border-[#10B981]"> <img className="p-2" src="/linkedin-in.png" alt="facebook" /></div>
                    </div>
                  </div>
                  <div className="w-full mt-10 md:mt-0 flex flex-col md:flex-row justify-between md:w-[70%]">
                    <div className="mx-auto md:mx-0">
                      <p className="links-heading">Quick Links</p>
                      <div className=" flex flex-col mt-3 md:mt-8 lg:mt-10 ">
                        <Link href="" className="links" >Page Builder</Link>
                        <Link href="" className="links">Theme Options</Link>
                        <Link href="" className="links">Theme builder</Link>
                        <Link href="" className="links">Template library</Link>
                        <Link href="" className="links">Design & Branding</Link>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 mx-auto md:mx-0">
                      <p className="links-heading">Support</p>
                      <div className="flex flex-col mt-3 md:mt-8 lg:mt-10 ">
                        <Link href="" className="links">Page Builder</Link>
                        <Link href="" className="links">Documentation</Link>
                        <Link href="" className="links">Support Center</Link>
                        <Link href="" className="links">FAQs & Helps</Link>
                        <Link href="" className="links">Privacy Policy</Link>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 mx-auto md:mx-0">
                      <p className="links-heading">Quick Links</p>
                      <div className="flex flex-col mt-3 md:mt-8 lg:mt-10">
                        <p className="links"> 55 Street, e-block, 3rd Floor <br />Melbourne, Australia</p>
                        <p className="links mt-4 md:mt-6 mailto:lg:mt-10">infoquland@gmail.com</p>
                        <p className="links mt-4">+880 456 852 99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto rounded-full mt-10 w-10 bg-[#10B981]">
                  <button className="p-4 mx-auto text-center">
                    <img className="-rotate-90 mx-auto" src="/right.png" alt="right aero" />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-5 lg:mt-[30px]">
                  <p className="text-[16px] font-normal"> {year} &copy; All rights reserved by taxstick</p>
                  <p className="text-[16px] font-normal mt-2 md:mt-0"> <Link href=''>Term and Conditions</Link> | <Link href=''>Privacy and policy</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute top-10 left-0">
          <img className="md:max-w-[250px] lg:max-w-[300px]" src="/Rectangle 5252.png" />
          <img className="md:max-w-[250px] lg:max-w-[400px] relative -top-36" src="/Rectangle 5253.png" />
        </div>
        <div className="absolute top-10 right-0">
          <img className="md:max-w-[250px] lg:max-w-[300px]" src="/Rectangle 5245.png" />
          <img className="md:max-w-[250px] lg:max-w-[300px] relative -top-36" src="/Rectangle 5245.png" />
        </div>
      </div>
    </div>
  );
}
