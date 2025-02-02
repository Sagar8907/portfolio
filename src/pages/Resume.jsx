import React from 'react';

const ImageDownload = ({ imageUrl }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {/* Responsive Image */}
      <img 
        src={"https://i.ibb.co/KpjNV1hP/Himanshu-Sagar-3-page-0001-1.jpg"} 
        alt="Example Image" 
        className="w-full max-w-[400px] h-auto mb-4" 
      />
      
      {/* Download Button */}
      <a href="https://i.ibb.co/KpjNV1hP/Himanshu-Sagar-3-page-0001-1.jpg" download="downloaded-image.jpg">
        <button className="bg-purple-500 text-white py-2 px-6 rounded mt-2 text-xl hover:bg-purple-600 transition duration-300">
          Download Image
        </button>
      </a>
    </div>
  );
};

export default ImageDownload;
