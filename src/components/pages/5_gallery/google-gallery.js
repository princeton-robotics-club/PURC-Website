// src/GoogleDriveGallery.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';

// Your Google Drive folder ID
const FOLDER_ID = 'YOUR_FOLDER_ID';
// Your Google Drive API Key
const API_KEY = 'YOUR_API_KEY';

// Function to fetch image URLs from Google Drive
const fetchImagesFromDrive = async () => {
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const files = response.data.files;

    // Filter image files and format URLs
    const images = files
      .filter((file) => file.mimeType.startsWith('image/'))
      .map((file) => ({
        src: `https://drive.google.com/uc?export=view&id=${file.id}`,
        thumbnail: `https://drive.google.com/uc?export=view&id=${file.id}`,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: file.name,
      }));

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

const GoogleDriveGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagesData = await fetchImagesFromDrive();
      setImages(imagesData);
    };

    loadImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default GoogleDriveGallery;
