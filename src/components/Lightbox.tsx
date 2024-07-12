// components/Lightbox.tsx
'use client'

import { useState, FC } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
}

const Lightbox: FC<LightboxProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const imagesPerPage = 10;

  const openImage = (index: number) => {
    setSelectedImage(images[startIndex + index]);
    setCurrentIndex(startIndex + index);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToPreviousBatch = () => {
    const newStartIndex = (startIndex - imagesPerPage < 0) ? images.length - imagesPerPage : startIndex - imagesPerPage;
    setStartIndex(newStartIndex);
  };

  const goToNextBatch = () => {
    const newStartIndex = (startIndex + imagesPerPage >= images.length) ? 0 : startIndex + imagesPerPage;
    setStartIndex(newStartIndex);
  };

  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="container">
      <div className="flex justify-between mb-4">
        <button onClick={goToPreviousBatch} className="btn btn-primary">Previous 10 Images</button>
        <button onClick={goToNextBatch} className="btn btn-primary">Next 10 Images</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentImages.map((src, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openImage(index)}>
            <Image src={src} alt={`Image ${startIndex + index + 1}`} layout="responsive" width={500} height={300} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button onClick={() => setSelectedImage(null)} className="absolute top-0 right-0 m-2">
              <Image src="/images/x.svg" alt="Close" width={50} height={50} />
            </button>
            <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 m-2 text-white text-7xl">
              &lt;
            </button>
            <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 m-2 text-white text-7xl">
              &gt;
            </button>
            <Image src={selectedImage} alt="Selected" layout="intrinsic" width={1200} height={600} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;