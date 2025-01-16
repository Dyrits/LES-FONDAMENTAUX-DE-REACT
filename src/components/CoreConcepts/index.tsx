import CoreConcept from "./CoreConcept.tsx";
import { CORE_CONCEPTS } from "../../data.ts";
import "./CoreConcepts.css";

export default function Index() {
  return (
    <section id="core-concepts">
      <h2>Les concepts fondamentaux</h2>
      <ul>
        { CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={ concept.title } { ...concept } />
        )) }
      </ul>
    </section>
  )
}