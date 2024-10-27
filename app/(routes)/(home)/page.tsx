"use client"
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const [position, setPosition] = React.useState("bottom")
  return (
  <>
  <div>home
<Button variant="destructive">button</Button>
<ModeToggle />

  </div>
<div className="mt5">
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><MenuIcon/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">top</DropdownMenuRadioItem>
         
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
  </>
  );
}
