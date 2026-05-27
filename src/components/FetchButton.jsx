const FetchButton = ({ fetchJoke }) => {
  return (
    <button className="fetch-button" onClick={fetchJoke}>
      Get a New Joke
    </button>
  )
}

export default FetchButton
