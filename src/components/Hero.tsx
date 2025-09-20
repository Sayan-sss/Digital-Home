"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="start"
      className="h-screen flex flex-col justify-center items-start px-10 text-white bg-[url('/bg.webp')] bg-cover bg-center relative "
    >
      <p className="font-serif text-purple-400">&lt;Start /&gt;</p>
      <h1 className="text-5xl font-bold mt-4">
        Hi, My name is{" "}
        <span className="font-serif font-thin italic text-purple-500">
          Sayan
        </span>
      </h1>

      <h2 className="text-5xl mt-4">
        <span className="font-bold">I</span>{" "}
        <span className="font-serif font-thin italic text-gray-300">
          design
        </span>{" "}
        <span className="font-bold">and</span>{" "}
        <span className="font-serif font-thin italic text-white">
          <Typewriter
            words={["develop Websites...", "build Apps...", "create UIs..."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <h3 className="text-xl mt-6">
        <span className="font-serif italic text-white">
          <Typewriter
            words={["Let me show you..."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h3>

      {/* Scroll Indicator */}
      <div className="absolute left-10 bottom-10 flex flex-col items-center">
        <span className="text-purple-500 rotate-90">scroll</span>
        <div className="w-1 h-20 bg-purple-500 mt-2 animate-pulse"></div>
      </div>
    </section>
  );
}
