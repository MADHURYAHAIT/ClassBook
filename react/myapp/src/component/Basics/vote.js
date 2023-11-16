import React, { useState, useEffect } from 'react';
import { TbArrowBigDown ,TbArrowBigUp} from "react-icons/tb";
import Star from './Star';
const Vote = ({ studentId }) => {
  // Use local storage key specific to each student
  const localStorageKey = `votes_${studentId}`;
  const localStorageKey1 = `Up_${studentId}`;
  const localStorageKey2 = `down_${studentId}`;
//   const [Up,setUp]=useState(0);
//   const [down,setDown]=useState(0);

  // State to manage the vote count
  const[flg,setflg]=useState(false);
  localStorage.setItem(`flag_${studentId}`, flg);

  
  const [votes, setVotes] = useState(() => {
    // Load initial vote count from local storage
    const storedVotes = localStorage.getItem(localStorageKey);
    return storedVotes ? parseInt(storedVotes, 10) : 0;
  });

  const [Up, setUp] = useState(() => {
    // Load initial vote count from local storage
    const storedVotes1 = localStorage.getItem(localStorageKey1);
    return storedVotes1 ? parseInt(storedVotes1, 10) : 0;
  });
  const [down, setDown] = useState(() => {
    // Load initial vote count from local storage
    const storedVotes2 = localStorage.getItem(localStorageKey2);
    return storedVotes2 ? parseInt(storedVotes2, 10) : 0;
  });

  // Effect to update local storage when the vote count changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, votes.toString());
  }, [votes, localStorageKey]);
  useEffect(() => {
    localStorage.setItem(localStorageKey1, Up.toString());
  }, [Up, localStorageKey1]);
  useEffect(() => {
    localStorage.setItem(localStorageKey2,down.toString());
  }, [down, localStorageKey2]);


  const handleUpvote = () => {
    if (flg===false){
    setVotes(votes + 1);
    setUp(Up+1);
     setflg(true)   }

  };

  const handleDownvote = () => {
    if (flg===false){
    setVotes(votes + 1);
    setDown(down+1);
    setflg(true);
    }
    };



  return (
    <div>
      {/* <h2>Student ID: {studentId}</h2> */}
        <div class="roww"> Person : <Star stars={Up/down} reviews={votes}/>
      {/* Vote Count: {votes} */}
      </div>
        <br/>
        <div class="roww">
            <div class="votes">
                <TbArrowBigUp className="votes1"  onClick={handleUpvote}/> {Up}
                <TbArrowBigDown className="votes2" onClick={handleDownvote}/>{down}
            </div>
        <span className='card-tag subtle'>Rate Me</span>
        </div>

      {/* <button onClick={handleUpvote}>Upvote</button> */}
      {/* <button onClick={handleDownvote}>Downvote</button> */}
    </div>
  );
};

export default Vote;
