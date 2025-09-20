"use client";

import Timeline from "./Timeline";

export default function About() {
  return (
    <section
      id="about"
      className="h-auto flex flex-col justify-center items-start px-10 text-white bg-#14121c relative "
    >
      <div className="absolute  left-20  flex flex-col items-center justify-end h-full z-20 ">
        <div className="relative  h-full w-10 flex flex-col items-center justify-center z-10">
          {/* Top circular icon */}
          <div className="absolute left-1/2 -translate-x-1/2 top-5 z-30 bg-transparent">
            <svg
              width="40"
              height="40"
              viewBox="0 -3 24 24"
              className="text-purple-500"
            >
              <div className=" text-red-600"> about</div>
              <circle
                cx="12"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1"
                fill="#0e0e14"
              />
              <circle cx="12" cy="6" r="2" fill="currentColor" />
            </svg>
          </div>
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-purple-500 "></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20  max-w-3xl">
        <h2 className="font-serif text-3xl mt-5 text-gray-600 mb-4 ">
          &lt;About /&gt;
        </h2>
        <div
          className="font-mono
         rounded-xl p-8 shadow-lg text-[15px] leading-relaxed "
        >
          <span className="hover:bg-[#282436]">
            <span className="text-purple-500 ">class</span>{" "}
            <span className="text-white font-bold ">Sayan Mondal &#123;</span>
          </span>
          <br />
          <span className="text-neutral-400 pl-6">
            // I can, because I did.
          </span>
          <br />
          <span className="text-neutral-400 pl-6">
            // My vast variety of skills is continuously expanding.
          </span>
          <br />
          <span className="pl-6 text-purple-500">constructor</span>
          <span className="text-white">() &#123;</span>
          <br />
          <span className="pl-12 text-red-400">this.name</span>
          <span className="text-white"> = </span>
          <span className="text-green-400">'Sayan Mondal'</span>
          <span className="text-white">;</span>
          <br />
          <span className="pl-12 text-red-400">this.number</span>
          <span className="text-white"> = </span>
          <span className="text-yellow-300">"**********"</span>
          <span className="text-white">;</span>
          <br />
          <span className="pl-12 text-red-400">this.email</span>
          <span className="text-white"> = </span>
          <span className="text-green-400">'sayanmondal2307@gmail.com'</span>
          <span className="text-white">;</span>
          <br />
          <span className="pl-6 text-white">&#125;</span>
          <br />
          <br />
          <span className="pl-6 text-purple-500">workExperience</span>
          <span className="text-white">() &#123;</span>
          <br />
          <span className="pl-12 text-purple-400">return [</span>
          <br />
          <span className="pl-16 text-green-300">
            &#123; '2023-now': 'Web development lead at GDSC GCETTB' &#125;
          </span>
          <br />
          <span className="pl-12 text-purple-400">];</span>
          <br />
          <span className="pl-6 text-white">&#125;</span>
          <br />
          <br />
          <span className="pl-6 text-purple-500">education</span>
          <span className="text-white">() &#123;</span>
          <br />
          <span className="pl-12 text-purple-400">return [</span>
          <br />
          <span className="pl-16 text-green-300">
            &#123; '2021-now': 'Government College of Engineering and Textile
            Technology, BTech - Computer Science and Engineering' &#125;
          </span>
          <br />
          <span className="pl-12 text-purple-400">];</span>
          <br />
          <span className="pl-6 text-white">&#125;</span>
          <br />
          <br />
          <span className="pl-6 text-purple-500">skills</span>
          <span className="text-white">() &#123;</span>
          <br />
          <span className="pl-12 text-purple-400">
            return [ 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'SQL', 'NodeJS' ];
          </span>
          <br />
          <span className="pl-6 text-white">&#125;</span>
          <br />
          <span className="text-white">&#125;</span>
        </div>
      </div>
    </section>
  );
}
