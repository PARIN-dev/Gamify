import useGenres from '@/assets/hooks/useGeneres'
import React from 'react'

const GenereList = () => {
  const {generes} = useGenres(); 
  return (
    <ul>
      {generes.map(genere => <li key={genere.id}>{genere.name}</li>)}
    </ul>
  )
}

export default GenereList