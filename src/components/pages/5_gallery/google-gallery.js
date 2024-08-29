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

// The two google drive folders w/pictures that I used for the Open House slides:
// https://drive.google.com/drive/folders/1Ki8IECHKGzRreEZ4NgP1rzOcTcUGNKBU?usp=drive_link
// https://drive.google.com/drive/folders/1e6KUhVUtf8F92qPp1o8MQb5AxbZQctwG?usp=drive_link

// 1. Set Up Google Drive API
// Create a Project in Google Cloud Console:

// Go to the Google Cloud Console.
// Create a new project or select an existing one.
// Enable Google Drive API:

// Go to the API Library in the Cloud Console.
// Search for "Google Drive API" and enable it.
// Create Credentials:

// Go to the "Credentials" section in the Cloud Console.
// Click on "Create Credentials" and select "OAuth 2.0 Client ID" or "API Key" depending on your needs.
// If using OAuth 2.0, configure the OAuth consent screen and set up the OAuth client ID. You'll get a Client ID and Client Secret.
