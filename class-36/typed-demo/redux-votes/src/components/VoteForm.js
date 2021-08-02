import React from 'react';

import {connect, useDispatch} from 'react-redux';

// import directly from our actions
import { increment, reset } from '../store/candidates.js';

function VoteForm(props) {

  const dispatch = useDispatch();

  return (
    <section>
      <ul>
        {props.candidates.map(person => {
          // return <li onClick={() => props.increment(person.name)}>{person.name} : {person.votes}</li>
          return <li onClick={() => dispatch(increment(person.name))}>{person.name} : {person.votes}</li>
        })}
      </ul>
      <button onClick={() => props.reset()}>Reset</button>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    candidates: state.candidates.candidates
  }
}

const mapDispatchToProps = {
  increment,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteForm);
