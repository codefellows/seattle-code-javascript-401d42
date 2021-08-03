import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';

function ActiveCategory() {

  let activeCategory = useSelector(state => state.store.activeCategory);

  return (
    <Typography variant="h5" component="h5">{activeCategory}</Typography>
  );
}

export default ActiveCategory;
