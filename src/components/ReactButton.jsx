const onClick = () => {
  alert("Has pulsado el botón hecho en React");
};

export const ReactButton = () => (
  <button className="react-button" onClick={() => onClick()}>
    Click Me!
  </button>
);
