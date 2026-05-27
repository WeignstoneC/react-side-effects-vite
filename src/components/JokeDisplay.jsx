const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      <p>{loading ? 'Loading...' : joke}</p>
    </div>
  )
}

export default JokeDisplay
