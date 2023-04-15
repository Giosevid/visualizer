import useGetPoints from '../hooks/useGetPoints';

const FingerPrint = () => {
  const { points, error } = useGetPoints();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return points.map(point => (
    <button
      key={point.id}
      className="absolute"
      style={{
        left: `${point.coordX}%`,
        top: `${point.coordY}%`
      }}
    >
      <img src="/fingerprint.png" alt={point.name} width="64" height="64" />
    </button>
  ));
};

export default FingerPrint;
