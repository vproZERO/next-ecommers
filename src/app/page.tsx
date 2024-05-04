import { GradeIcon } from "@/assets/icon/grade-icon";
import { ShoppingIcon } from "@/assets/icon/shopping-icon";
import { Chegirma } from "@/components/Chegirma";
import { HeroSlider } from "@/components/HeroSlider";
import { Ommabob } from "@/components/Ommabob";
import { Catalog } from "@/components/catalog";
import { NewsCard } from "@/components/news";
export default function Home() {
  return (
    <div className="flex">
      <div className="bg-white pt-[30px] pl-[50px] w-[380px] pr-[20px] hidden md:block">
        <Catalog />
      </div>
      <div className="md:px-6 md:py-8 p-4">
        <section>
          <HeroSlider/>
        </section>
        <section id="news" className="mb-[26px]">
          <NewsCard title="Yangi mahsulotlar" />
        </section>
        <section id="ommabob" className="mb-[26px]">
          <Ommabob title="Ommabop mahsulotlar" />
        </section>
        <section id="chegirma" className="md:mb-[86px] mb-12">
          <Chegirma title="Chegirma mahsulotlar" />
        </section>
      </div>
    </div>
  );
}
