const KeyBoards = ({ clearFunc, handleNumberClick, keyboardFunClick }) => {
  return (
    <div id="keyboardBox">
      <button
        onClick={() => {
          clearFunc();
        }}
        id="clrBttn"
      >
        clear
      </button>
      <div id="buttonGrid">
        <div id="keyboardNumberKeys">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <button
                onClick={() => {
                  handleNumberClick(item);
                }}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div id="keyboardFuncKeys">
          {["+", "-", "x", "/"].map((item, index) => {
            return (
              <button
                onClick={() => {
                  keyboardFunClick(
                    item === "+"
                      ? "plus"
                      : item === "-"
                      ? "minus"
                      : item === "x"
                      ? "multiply"
                      : item === "/"
                      ? "divide"
                      : ""
                  );
                }}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <button id="EqualsBttn">=</button>
    </div>
  );
};

export default KeyBoards;
