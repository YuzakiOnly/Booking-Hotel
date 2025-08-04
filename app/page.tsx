import Image from "next/image";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
          <p className="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, molestiae!</p>
        </div>
        <Main/>
      </div>
    </div>
  );
}
