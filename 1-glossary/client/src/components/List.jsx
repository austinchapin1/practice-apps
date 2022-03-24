import React from "react";
import ListItem from './ListItem.jsx'


var List = ({ wordList }) => (

  <div>
    <div>
      {wordList.map( obj => {
        <ListItem key={obj.word} word={obj.word} def={obj.definition}/>
      })}
    </div>
  </div>
)


// class List extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>hellohello</h1>
//       </div>
//     )}

// }






export default List;