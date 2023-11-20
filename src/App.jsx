import "./App.css";

function App() {
  return (
    <>
      <div
        style={{ width: "1000px", height: "600px" }}
        className="bg-white mt-12 flex-row"
        id="main-container"
      >
        <div className="w-1/3 bg-sky-950 h-full flex-col" id="left">
          <div id="pfp-section" className="w-full flex-col h-auto pt-6">
            <img
              src="profile-ngotak.png"
              className="rounded-full w-52 mx-auto"
              alt=""
            />
            <p className="text-white text-center mt-4 font-sans font-semibold text-2xl">
              MAHESA BIMA
              <br />
              WIJAYA
            </p>
            <p className="text-white text-center mt-3 text-sm">
              WEB DEVELOPMENT STUDENT
            </p>
            <hr className="mt-6 w-10/12 mx-auto" />
          </div>
        </div>
        <div className="w-2/3" id="right"></div>
      </div>
    </>
  );
}

export default App;
