import { useSelector, useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Votes() {

  const votes = useSelector(state => state.totalVotes);
  const candidates = useSelector(state => state.candidates);
  const dispatch = useDispatch();

  const increment = (name) => {
    dispatch({
      type: 'INCREMENT',
      payload: name,
    })
  }

  return (
    <>  
      <Typography>Total votes{votes}</Typography>
      {candidates.map(candidate => {
        return (
          <Card>
            <CardContent>
              <Typography>{candidate.name}</Typography>
              <Typography>{candidate.votes}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => increment(candidate.name)} size="small">Vote for me!</Button>
            </CardActions>
          </Card>
        )
      })}
    </>
  )
}

export default Votes;
