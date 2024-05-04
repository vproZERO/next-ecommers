import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getBanners } from "@/service/getBanners"

export const HeroSlider = async () => {

    const data = await getBanners()

  return (
    <Carousel className="md:max-w-[1198px]  mx-auto">
      <CarouselContent>
        {data.map((item:any) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
                <img src={item.img} alt="img" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 hidden "/>
      <CarouselNext  className="right-5 hidden "/>
    </Carousel>
  )
}
