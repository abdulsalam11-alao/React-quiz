function Progress({ index, numQuestion, points, maxPossiblepoint, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1} </strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong> /{maxPossiblepoint}
      </p>
    </header>
  );
}

export default Progress;
