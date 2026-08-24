'use client';

import { useState } from 'react';

type Photo = {
  id: number;
  imageUrl: string;
  uploaderId: string;
  takenAt: string;
};

const mockPhotos: Photo[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/jeju-1/1200/800',
    uploaderId: 'user-1',
    takenAt: '2026-08-18T15:00:00+09:00'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/jeju-2/1200/800',
    uploaderId: 'user-2',
    takenAt: '2026-08-18T10:00:00+09:00'
  }
];

export default function AlbumPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedPhotos = [...mockPhotos].sort((a, b) => {

    
    return new Date(a.takenAt).getTime() - new Date(b.takenAt).getTime();
  });

  const currentPhoto = sortedPhotos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((previousIndex) => {
      if (previousIndex === sortedPhotos.length - 1) {
        return 0;
      }

      return previousIndex + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((previousIndex) => {
      if (previousIndex === 0) {
        return sortedPhotos.length - 1;
      }

      return previousIndex - 1;
    });
  };

  return (
    <main>
      <h1>제주도 가족여행</h1>
      <img src={currentPhoto.imageUrl} alt="제주도 가족여행 사진" />
      <p>{currentPhoto.takenAt}</p>
      <button onClick={handlePrevious}>이전 사진</button>
      <button onClick={handleNext}>다음 사진</button>
    </main>
  );
}
