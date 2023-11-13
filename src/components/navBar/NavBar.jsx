import style from './NavBar.module.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFolder, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [download, setDownloaded] = useState(false)
  const location = useLocation();
  const handleDownloadCV = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 1000);
  };

  return (
    <div className={style['navbar']}>
      {download && (
          <div className={style['downloaded-message']}>
            ¡Descarga completa! Tu CV se ha descargado.
          </div>
      )}
      <div className={style['logo']}>
        <h1>MV</h1>
      </div>
      <div className={style['navbar-container']}>
     
      
      
        <div className={style['navbar-item']}>
          <Link to="/home">
            <button>
              <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
          <Link to="/home/portfolio">
            <button>
              <FontAwesomeIcon icon={faFolder} />
            </button>
          </Link>
        
          <Link to="/home/about">
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
          </Link>
    
          <a href='https://drive.google.com/uc?export=download&id=1LiJ1kKO8xZbArCB203RUapBGhWGNa5-a'
                download="MatiasVincent_CV.pdf"
                className={style['child-btn-download']}
                onClick={handleDownloadCV}
               >
            <FontAwesomeIcon icon={faDownload}/>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
