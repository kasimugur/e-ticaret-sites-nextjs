"use client"
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Hero from "../_components/Hero";
import ProductList from "../_components/Product/ProductList";

export default function Home() {
  const [position, setPosition] = React.useState("bottom")
  return (
  <>
  <div>
    <Hero />
    <ProductList />

  </div>
  </>
  );
}
