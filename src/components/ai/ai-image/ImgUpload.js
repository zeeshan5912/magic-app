import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

const ImgUpload = () => {
    const [pictures, setPictures] = useState([]);

    const onDrop = (pictureFiles) => {
        setPictures(pictureFiles);
    };

    return (
        <div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
            />
            
            {/* Optional: Display the uploaded images */}
            <div>
                {pictures.map((picture, index) => (
                    <img key={index} src={URL.createObjectURL(picture)} alt={`uploaded ${index}`} style={{ width: '100px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default ImgUpload;
