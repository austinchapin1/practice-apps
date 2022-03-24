import React from "react";
import ListItem from './ListItem.jsx'


var List = ({ wordList, deleteFunc, edit }) => (

  <div>
    <div>
      {wordList.map( (obj, idx) =>
        <ListItem key={obj.word} word={obj.word} def={obj.definition} idx={idx}
         deleteFunc={()=>{deleteFunc(obj.word, idx)}} edit={edit}/>
      )}
    </div>
  </div>
)


export default List;