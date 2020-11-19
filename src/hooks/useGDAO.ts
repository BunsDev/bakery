import { useContext } from 'react'
import { Context } from '../contexts/GDAOProvider'

const useGDAO = () => {
  const { gdao } = useContext(Context)
  return gdao
}

export default useGDAO
