// src/pages/index.js
import Choose from "./choose";
import Tools from "./tools";
import Accqrate from "./accqrate";
import Sales from "./sales";
import Transform from "./transform";
import Pos from "./pos";

export default function Home() {
  return (
    <>
      <Accqrate />
      <Transform />
      <Pos />
      <Sales />
      <Tools />
      <Choose />
    </>
  );
}
