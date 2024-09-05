'use client'

import HOC from "./components/HOC";
import { NavItems, SocialLinks } from "./constants";
import { sanityFetch } from "@/sanity/schemaTypes/client";
import { SanityDocument } from "next-sanity";
import { useState, useEffect } from "react";
import PreRenderLoader from "./components/PreRenderLoader";
import { infoQuery, technologiesQuery } from "./queries";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [info, setInfo] = useState<SanityDocument | null>(null);
  const [technologies, setTechonologies] = useState<SanityDocument[]>([]);
  const [maskSize, setMaskSize] = useState(64);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityFetch({ query: infoQuery }) as SanityDocument;
      setInfo(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityFetch({ query: technologiesQuery }) as SanityDocument[];
      setTechonologies(data);
    };
    fetchData();
  }, []);

  if (!info) {
      return <div className="fixed z-20">
          <PreRenderLoader />
      </div>;
  }

  return (
    <main className="flex min-h-screen h-auto flex-col items-center justify-between">
      {/* Main Mask Cursor */}
      <CustomCursor className="w-full h-screen" maskSize={maskSize} setMaskSize={() => setMaskSize(32)} />

      {/* Navigation Sections */}
      <div className="flex flex-col w-full snap-y">
        {
          NavItems.map((item, index) => (
            <HOC
              component={ <item.section info={ info } technologies={technologies} /> }
              href={ item.href } key={ index }
              className={`snap-center ${item.name === "About Mee" ? 'bg-secondary-custom text-background-custom': ''}`}
            />
          ))
        }
      </div>

      {/* Socials Bar */}
      <div className="hidden md:flex flex-col fixed bottom-8 left-14 gap-1">
        <div className="flex flex-row gap-4 px-1 scroll-smooth"> 
        {SocialLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="group transition-all ease-in-out duration-300 hover:text-primary-custom" 
              target="_blank"
            >
              <span className="relative inline-block transform transition-transform ease-in-out duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                {<item.icon className="text-xl" />}
              </span>
            </a>)
        )}
      </div>
        <span className="h-[2px] w-full bg-primary-custom rounded-full"></span>
      </div>
    </main>
  );
}
