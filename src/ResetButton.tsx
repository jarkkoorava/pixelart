interface props {
  resetCanvas: () => void;
}

const ResetButton = ({resetCanvas}: props) => {
  return (
    <button className="reset-button" onClick={resetCanvas}>Reset</button>
  )
}

export default ResetButton;