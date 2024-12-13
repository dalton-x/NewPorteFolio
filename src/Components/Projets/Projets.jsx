import { useState } from 'react';
import DevWeb from './DevWeb/DevWeb'
import './Styles.css'
import Cci from './CCI/Cci';
import InteWeb from './InteWeb/InteWeb';


function Projets () {

  const [activeTab, setActiveTab] = useState('tab1');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'tab1':
        return <DevWeb />;
      case 'tab2':
        return <Cci />;
      case 'tab3':
        return <InteWeb />;
      default:
        return null;
    }
  };

  return (
    <div id='formation'>
      <div className="container">
        <h2 className='text-center h2 pb-5'>
          Mes projets de formation
        </h2>
      </div>
      <div className="container border border-danger p-2 rounded">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab1')}
              role="tab"
              aria-selected={activeTab === 'tab1'}
            >
              DevWeb
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab2')}
              role="tab"
              aria-selected={activeTab === 'tab2'}
            >
              CCI
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab3')}
              role="tab"
              aria-selected={activeTab === 'tab3'}
            >
              Intégrateur Web
            </button>
          </li>
        </ul>
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Projets