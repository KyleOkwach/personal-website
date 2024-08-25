import Link from "next/link";
import HOC from "./components/HOC";
import { NavItems, SocialLinks } from "./constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Navigation Sections */}
      <div className="flex flex-col w-full">
        {
          NavItems.map((item, index) => (
            <HOC component={ <item.section /> } href={ item.href } key={ index } className={`${item.name === "About Mee" ? 'bg-secondary-custom text-background-custom': ''}`} />
          ))
        }
      </div>

      {/* Socials Bar */}
      <div className="hidden md:flex flex-col fixed bottom-8 left-14 gap-2">
        <div className="flex flex-row gap-4 px-1 scroll-smooth"> {
            SocialLinks.map((item, index) => (
              <a key={ index } href={ item.href } className="group transition-all ease-in duration-200 hover:bottom-2 hover:text-primary-custom" target="blank">
                <div className="relative transition-all ease-in duration-200 group-hover:bottom-1">
                  { <item.icon className="text-xl" /> }
                </div>
              </a>
            ))
        } </div>
        <span className="h-[2px] w-full bg-primary-custom rounded-full"></span>
      </div>
    </main>
  );
}
