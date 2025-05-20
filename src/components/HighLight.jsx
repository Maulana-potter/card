function Bagde({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

const HighLight = () => {
  return (
    <div className="buttons">
      <Bagde text="HTML" />
      <Bagde text="CSS" />
      <Bagde text="JavaScript" />
    </div>
  );
};

export default HighLight;
