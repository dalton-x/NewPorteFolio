
import ModalIframe from '../../Modal/ModalIframe';
import './Style.css'
import dataCard from "./projets.json";
import { Card } from "../../Card/Card";


function DevWeb() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row m-3 justify-content-center">
            {dataCard.map((card, index) => (
              <Card key={'card_' + index} card={card} />
            ))}
        </div>

        <ModalIframe
          id={'SEOOriginal'}
          title={'Rapport SEO de la version originale du site'}
          lien={'./projets/devWeb/html/rapport_seo_original.html'}
          titreIframe={'Rapport SEO Original'}
        />
        <ModalIframe
          id={'SEOOptimise'}
          title={'Rapport SEO de la version optimisée du site'}
          lien={'./projets/devWeb/html/rapport_seo_optimise.html'}
          titreIframe={'Rapport SEO Optimisé'}
        />

      </div>
    </section>
  );
}

export default DevWeb