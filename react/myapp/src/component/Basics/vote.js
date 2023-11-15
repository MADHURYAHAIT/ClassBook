import React, { useState, useEffect } from 'react';

const Vote = ({ studentId }) => {
  // Use local storage key specific to each student
  const localStorageKey = `votes_${studentId}`;

  // State to manage the vote count
  const [votes, setVotes] = useState(() => {
    // Load initial vote count from local storage
    const storedVotes = localStorage.getItem(localStorageKey);
    return storedVotes ? parseInt(storedVotes, 10) : 0;
  });

  // Effect to update local storage when the vote count changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, votes.toString());
  }, [votes, localStorageKey]);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <h2>Student ID: {studentId}</h2>
      <h2>Vote Count: {votes}</h2>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};

export default Vote;
