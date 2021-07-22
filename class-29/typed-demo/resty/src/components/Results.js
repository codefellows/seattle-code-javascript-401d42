function Results(props) {
  return(
    <div>
      {Object.keys(props.response).length ? <p data-testid="results">{JSON.stringify(props.response)}</p> : null}
    </div>
  )
}

export default Results;
