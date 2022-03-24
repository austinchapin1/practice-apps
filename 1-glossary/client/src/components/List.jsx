import React from "react";
import ListItem from './ListItem.jsx'


var List = ({ wordList }) => (

  <div>
    <h1>HElllloo</h1>
    <div>
      {wordList.map( obj =>
        <ListItem key={obj.word} word={obj.word} def={obj.definition}/>
      )}
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
//         <div>
//         {this.props.wordList.map( obj => {
//           <ListItem />
//         })}
//         </div>
//         {for(var i = 0; i < 5; i++) {
//           <ListItem />
//         }}
//       </div>
//     )}

// }






export default List;