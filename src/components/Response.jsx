function getChar() {
  const possibleChars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,.!()-':;/";
  const index = Math.floor(Math.random() * possibleChars.length);
  return possibleChars[index];
}

function generateText() {
  const length = Math.floor(Math.random() * 500) + 1;

  let currentText = "";

  for (let i = 0; i < length; i++) {
    currentText = currentText.concat(getChar());
  }

  return currentText;
}

function Response({onClick}) {
  return(
  <section className="d-flex justify-content-center align-items-center bg-dark bg-gradient bg-opacity-75 vw-100 vh-100 position-fixed top-50 start-50 translate-middle z-3">
    <section className="bg-white d-flex flex-column align-items-center">
      <h4>The AS responds!</h4>
      <p>{generateText()}</p>

      <a onClick={onClick} className="btn btn-info fw-bold text-white">Close</a>
    </section>
  </section>
  )
}

export default Response;