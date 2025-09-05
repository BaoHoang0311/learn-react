import images from "./asset/images (1).jpg";
import "./App.css";

function MyButton({user}) {
  return (
    <>
      <button>I'm a button {user.name}</button>

      <img className="classname" src={images} alt="test" />
    </>
  );
}
function MyApp() {
  const user = {
    name: "Hedy Lamarrs",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <div>
        <h1>Welcome to my app {user.name}</h1>
        <MyButton user={user}/>
      </div>
    </>
  );
}
export default MyApp;
