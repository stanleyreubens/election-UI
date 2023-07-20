import './Scorecard.css';

function Scorecard({ results }) {
  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

  let scores = [];

  console.log(results)
  const maxVoteSort = results.sort((a, b) => b.votes + a.votes);
  const maxVote = maxVoteSort[maxVoteSort.length-1].votes
  console.log(maxVote)
  for (let i=0; i < results.length; i++) {
    const isMaxVote = results[i].votes === maxVote ? "maxClass" : "";
    scores.push(
      <tr key={i}>
        <td className={isMaxVote}>{results[i].party}</td>
        <td className={isMaxVote}>{results[i].candidateName}</td>
        <td className={isMaxVote}>{results[i].votes}</td>



      </tr>
    )
  }

  return (
    <div className="Scorecard">
        <table className="Scorecard-table">
          <thead>
            <tr>
              <th>Party</th>
              <th>Candidate</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {scores}
          </tbody>
        </table>
    </div>
  );
}

export default Scorecard;
