function App() {
  return(<>
    <header className="text-center p-2 lh-1 border-bottom">
      <h1 className="fw-bold">Babel AS</h1>
      <p className="fs-6">The leader of AS technology (Artifical Stupidity)</p>
    </header>

    <main>
      <section className="d-flex flex-column align-items-center m-5">
        <h4>Ask a question to the AS</h4>
        <textarea placeholder="Enter your question" className="text-center m-2 p-1" rows="2" cols="75" style={{resize: "none"}}/>
        <a className="btn btn-info fw-bold text-white fs-4 px-4 m-2">Ask</a>
      </section>
    </main>
  </>)
}

export default App;
