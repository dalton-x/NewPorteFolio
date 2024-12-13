import { Card } from "../../Card/Card";
import dataCard from "./projets.json";

function InteWeb() {

  return (
    <section className="py-5">
      <div className="container">
        <div className="row m-3">
          {dataCard.map((card, index) => (
            <Card key={'card_' + index} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteWeb;