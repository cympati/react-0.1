import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          width: "50vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{ width: "6.5vw", height: "6.5vw" }}
            src="https://d2kq0urxkarztv.cloudfront.net/63319bc8d7d98b0036d2c4a4/3972972/upload-8161b866-ed90-406a-aecb-4f9ab17abbe5.png?e=webp&nll=true"
          />
          <div>
            <h1 style={{ color: "rgba(217, 69, 151, 1)", margin: "0" }}>
              Patiphon K.
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "1.5vw" }}
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                alt=""
              />
              <p
                style={{
                  color: "rgb(90,101,934)",
                  marginLeft: "10px",
                  fontWeight: "500",
                }}
              >
                cream#3595
              </p>
            </div>
          </div>
          <div className="image-container">
            <img
              className="animated-image"
              src="https://avatars.githubusercontent.com/u/69670820?v=4"
            />
            <img
              src="/src/assets/hover-image.png"
              alt="Hover Image"
              className="hover-image"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
