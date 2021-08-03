import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ipod from '../ipod.jpeg';

function CategoryList() {

  // here is a hook that read from state.
  const categories = useSelector(state => state.store.categories);
  const dispatch = useDispatch();

  const setCategory = (category) => {
    dispatch({
      type: 'ACTIVATE',
      payload: category,
    });
  }

  return (
    <List>
      {/* // displayy each category */}
      {categories.map(category => {
        return (
          <ListItem onClick={() => setCategory(category.normalizedName)}>
            <ListItemText primary={category.displayName}/>
          </ListItem>
        )
      })}
    </List>
  )
}

export default CategoryList;
