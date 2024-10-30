import React from 'react';
import spiderImage from '../../../Assets/spider.png'; // Adjust the path based on your project structure

const Results = () => {
  const images = [
    { id: 1, title: 'spiderman play slot', src: spiderImage },
    { id: 2, title: 'spiderman play slot', src: spiderImage },
    { id: 3, title: 'spiderman play slot', src: spiderImage },
    { id: 4, title: 'spiderman play slot', src: spiderImage },
    { id: 5, title: 'spiderman play slot', src: spiderImage }
  ];

  return (
    <div className="results mt-5">
      <h3 style={{ fontWeight: 900 }}>Results</h3>
      <div className="row row-cols-2 row-cols-lg-5 mt-4">
        {images.map((image) => (
          <div className="col" key={image.id}>
            <div className="card mb-3">
              <div className="imgContainer w-100 overflow-hidden">
                <img src={image.src} className="img-fluid" alt={image.title} />
                <div className="imgButton">
                  <button className="imgbtn imgClose bg-white mb-2">
                    <i className="mdi mdi-close"></i>
                  </button>
                  <button className="imgbtn bg-white mb-2">
                    <i className="mdi mdi-eye"></i>
                  </button>
                  <button className="imgbtn bg-white mb-2">
                    <i className="mdi mdi-download"></i>
                  </button>
                </div>
              </div>
              <div className="card-body px-1 py-3">
                <h6 className="card-title fs-6 mb-0">{image.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
