import { useState } from 'react';

export const useConvertImageToBase64 = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const convertImageToBase64 = async (file: File): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1];
        setBase64Image(base64String || null);
        resolve();
      };
      reader.onerror = (error) => {
        setBase64Image(null);
        reject(error);
      };
    });
  };

  return { base64Image, convertImageToBase64 };
};