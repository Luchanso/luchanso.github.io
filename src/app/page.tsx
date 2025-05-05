import { Button } from "@/components/ui/button";
import Image from "next/image";
import flagEU from './flag-eu.png';
import flagUS from './flag-us.png';

export default function Home() {
  return (
    <div className="@container">
      <div className="mx-auto flex min-h-svh max-w-7xl border-dashed px-4 pt-8 sm:px-6 md:items-center xl:border-l">
        <div className="flex flex-col justify-between md:justify-normal">
          <div />
          <div>
            <h1 className="text-2xl font-semibold">Hi, I&apos;m Oleg.</h1>
            <p className="mt-4 text-5xl font-extrabold md:text-6xl xl:text-7xl 2xl:text-8xl">
              Software development with&nbsp;emphasis on&nbsp;
              <span className="rainbow-text">design</span> and&nbsp;
              <span className="text-green-400">quality</span>
            </p>
          </div>
          <div className="mt-8 mb-6 flex flex-col gap-2 md:flex-row">
            <Button asChild variant="outline" className="p-6 md:p-4">
              <a
                target="_blank"
                href="https://github.com/Luchanso/resume/raw/master/eu/Oleg%20Luchanskii%20Resume.pdf"
              >
                <Image src={flagEU} height={24} alt="flag-eu" />
                CV
              </a>
            </Button>
            <Button asChild variant="outline" className="p-6 md:p-4">
              <a
                target="_blank"
                href="https://github.com/Luchanso/resume/raw/master/us/Oleg%20Luchanskii%20Resume.pdf"
              >
                <Image src={flagUS} height={24} alt="flag-us" /> CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
