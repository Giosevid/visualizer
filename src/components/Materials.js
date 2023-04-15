import { useMemo } from 'react';
import useGetMaterials from '../hooks/useGetMaterials';

const Materials = ({ point, setMaterial }) => {
  const { materials } = useGetMaterials();
  const filteredMaterials = useMemo(() => materials.filter(material => material.points.includes(point.id)), [materials, point]);

  return (
    <div className="absolute right-12 grid">
      {filteredMaterials.map(material => (
        <button key={material.id} className="mt-4 border-4 border-white" onClick={() => setMaterial(material)}>
          <img src={material.materialPreview} alt={material.name} className="w-20 h-20" />
        </button>
      ))}
    </div>
  );
};

export default Materials;
