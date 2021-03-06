import React from 'react';
function List(props) {
  return (
    <ul className="list-group">
      {
        props.groceries.map(grocery => {
          return <li key={grocery.id}>{grocery.name}</li>
        })
      }
    </ul>
  );
}
export default List;
