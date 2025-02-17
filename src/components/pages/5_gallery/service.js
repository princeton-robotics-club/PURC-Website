// import { Client, Databases, ID, Storage } from 'appwrite';
// import { useState } from 'react';
// import './gallery.css';

// const client = new Client();
// client
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)
//   .setLocale('en');
// // .setKey(procxess.env.REACT_APP_APPWRITE_API_KEY); // Set the API key for authentication

// const storage = new Storage(client);
// const databases = new Databases(client);

// const BUCKET_ID = '672e863a0018807795aa';
// const DATABASE_ID = '672e96dc001e2db707fc';
// const COLLECTION_ID = '672e96f400079d8f7f2b';

// const PROJECT_NAMES = [
//   'Droid',
//   'Pac-Bot',
//   'Drone',
//   'Golf Cart',
//   'Exoskeleton',
//   'RoboCup',
//   'Bionics',
//   'Tinker',
//   'WALL-E',
// ];

// const EVENT_TYPES = ['general', 'special-event', 'workshop', 'competition', 'other'];

// const uploadImage = async (file, metadata) => {
//   try {
//     // Upload file to storage
//     const fileUpload = await storage.createFile(BUCKET_ID, ID.unique(), file);

//     // Create database entry with metadata
//     await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
//       fileId: fileUpload.$id,
//       project: metadata.project,
//       caption: metadata.caption,
//       tags: metadata.tags,
//       category: metadata.category,
//       imageUrl: storage.getFileView(BUCKET_ID, fileUpload.$id),
//     });

//     return true;
//   } catch (error) {
//     console.error('Error uploading:', error);
//     return false;
//   }
// };

// const GalleryUpload = () => {
//   const [formData, setFormData] = useState({
//     project: '',
//     caption: '',
//     tags: '',
//     category: 'general',
//     file: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.file) {
//       alert('Please select a file');
//       return;
//     }

//     const metadata = {
//       project: formData.project,
//       caption: formData.caption,
//       tags: formData.tags.split(',').map((tag) => tag.trim()),
//       category: formData.category,
//     };

//     const success = await uploadImage(formData.file, metadata);
//     if (success) {
//       // Reset form
//       setFormData({
//         project: '',
//         caption: '',
//         tags: '',
//         category: 'general',
//         file: null,
//       });
//       alert('Image uploaded successfully!');
//     }
//   };

//   return (
//     <div className="gallery-container">
//       <h1 className="gallery-title">Gallery Upload</h1>

//       <form onSubmit={handleSubmit} className="gallery-form">
//         <div className="form-group">
//           <select
//             value={formData.project}
//             onChange={(e) => setFormData({ ...formData, project: e.target.value })}
//             required
//             className="project-select">
//             <option value="" disabled>
//               Select Project
//             </option>
//             {PROJECT_NAMES.map((project) => (
//               <option key={project} value={project}>
//                 {project}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Photo Caption"
//             value={formData.caption}
//             onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
//             required
//             className="form-input"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Tags (comma separated)"
//             value={formData.tags}
//             onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
//             className="form-input"
//           />
//         </div>

//         <div className="form-group">
//           <select
//             value={formData.category}
//             onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//             className="project-select">
//             {EVENT_TYPES.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
//             required
//             className="file-input"
//           />
//         </div>

//         <button type="submit" className="submit-button">
//           Upload Image
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GalleryUpload;
