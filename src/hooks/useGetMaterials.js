import { useEffect, useState } from 'react';
import dbMaterials from '../config/firestore/materials';

const useGetMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMaterials = async () => {
      const response = await dbMaterials();
      const data = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setLoading(false);

      if (data.length === 0) {
        setError('There are no materials to show');
      }

      setMaterials(data);
    };
    getMaterials();
  }, []);

  return { materials, loading, error };
};

export default useGetMaterials;
