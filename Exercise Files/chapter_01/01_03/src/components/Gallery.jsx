import { useState } from 'react';
import Card from './Card.jsx';

const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
];

function Gallery(props) {
  const [items, setItems] = useState(photos);

  return (
    <>
      <h1
        className=""
        style={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Gallery
      </h1>
      <div className="row mt-5">
        {items.map(photo => {
          return (
            <div
              className="col mb-5 justify-content-center align-items-center"
              align="center"
            >
              <Card img={photo} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
