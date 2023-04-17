import useGetPoints from '../hooks/useGetPoints'

const FingerPrint = ({ onPress }) => {
  const { points, error } = useGetPoints()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return points.map(point => (
    <div className="w-full left-0 top-0" key={point.id}>
      <button
        className="absolute bg-white rounded-full opacity-75"
        style={{
          left: `${point.coordX}%`,
          top: `${point.coordY}%`
        }}
        onClick={() => onPress(point)}
      >
        <img src='/fingerprint.png' alt={point.name} width='64' height='64' />
      </button>
    </div>
  ))
}

export default FingerPrint
