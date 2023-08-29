export function Square({ value, onSquareClick, isWinSquare }) {
  const styles = {
    backgroundColor: isWinSquare ? "green" : "white",
  };

  return (
    <button className="square" onClick={onSquareClick} style={styles}>
      {value}
    </button>
  );
}
