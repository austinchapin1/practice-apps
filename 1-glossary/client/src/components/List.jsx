import React from "react";
import ListItem from './ListItem.jsx'


var List = ({ wordList }) => (

  <div>
    <div>
      {wordList.map( obj =>
        <ListItem key={obj.word} word={obj.word} def={obj.definition}/>
      )}
    </div>
  </div>
)


export default List;