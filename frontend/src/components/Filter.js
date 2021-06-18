export default function Filter({ filter, setFilter }) {

  const handleChange = e => {
      setFilter(e.target.value)
  }

  return (
    <form>
      <input className="search_bar" onChange={handleChange} value={filter} placeholder="Search for Playlist" />
  </form>
  )
}