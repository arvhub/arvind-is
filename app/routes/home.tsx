import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arvind is..." },
    { name: "description", content: "A website for all things Arvind." },
  ];
}

export default function Home() {
  return <Welcome />;
}
