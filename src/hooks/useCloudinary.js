import { useState } from "react";
const URL_CLOUDINARY = import.meta.env.VITE_API_CLOUDINARY;

export const useCloudinary = () => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch(URL_CLOUDINARY, {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    uploadImage,
    loading,
    setLoading,
  };
};
