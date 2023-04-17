import { useEffect, useState } from 'react'
import dbPoints from '../config/firestore/points'

const useGetPoints = () => {
  const [points, setPoints] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPoints = async () => {
      const response = await dbPoints()
      const data = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setLoading(false)

      if (data.length === 0) {
        setError('There are no points to show')
      }

      setPoints(data)
    }
    getPoints()
  }, [])

  return { points, loading, error }
}

export default useGetPoints
