

import { CatalogFIcon } from "@/assets/icon/catalog-f-icon"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import React from 'react'
import { Catalog } from "./catalog"

export const SheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <div
          className="flex flex-col justify-between px-3 py-[6px] border-primary transition text-secondary/50 font-normal text-xs hover:text-secondary"
        >
          <div className="mx-auto w-6 h-6">
            <CatalogFIcon />
          </div>
          <span>Katalog</span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start">Katalog</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Catalog/>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            close
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
