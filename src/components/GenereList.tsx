import useGenres from '@/assets/hooks/useGeneres'

const GenereList = () => {
  const {data} = useGenres();
  return (
    <ul>
      {data.map(genere => <li key={genere.id}>{genere.name}</li>)}
    </ul>
  )
}

export default GenereList