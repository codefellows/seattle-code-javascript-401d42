import React from 'react';

// hook that allows us to connector to a store property
import { connect, useSelector } from 'react-redux';

function Votes(props) {

  const totalVotes = useSelector(state => state.candidates.totalVotes);

  return (
    <section>
      <p>Total Votes: {totalVotes}</p>
    </section>
  )
}

// passing your component into the connect function, and supply a callback that will map global state to component props
// function mapStateToProps(state) {
//   return {
//     totalVotes: state.candidates.totalVotes,
//   }
// }

const mapStateToProps = state => ({totalVotes: state.candidate.totalVotes});

// function currying
// export default connect(mapStateToProps)(Votes);
export default Votes;
