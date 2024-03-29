const Modal = ({
  clickedImg,
  setClickedImg,
  setincoming,
  setShadowImage,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
      setincoming(null); //needed to let the useEffect know that the incoming image has changed so it can update
    }
  };

  //this function checks if there is a setshadowimage value (meaning its a comm image being enlarged), if none it sets it to the defualt site themed color
  const checkShadow = (shadow) => {
    if (!shadow) {
      return "shadow-teal-500/50";
    } else return shadow;
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img
          className={`rounded scale-110 shadow-xl ${checkShadow(
            setShadowImage
          )}`}
          src={clickedImg}
          alt="bigger pic"
        />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default Modal;
