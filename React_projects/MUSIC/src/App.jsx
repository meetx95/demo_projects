import {
  FaBook,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaHome,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

function App() {
  return (
    <>
      <center>
        <pre>
          <div><h1>MUSIC APPLICATION</h1></div>
          <div>-------------------------------------------------------</div>
          <div><FaBook />                        <FaSearch />                        <FaUser /></div>
          <div>-------------------------------------------------------</div>
          <br />
          <div>Good Evening, Meet</div>
          <br />
          <div>
            <div>Continue Listening</div>
            <div>[Song] [Song] [Song]</div>
            <br />
            <div>Categories</div>
            <div>[Pop] [Rock] [Jazz] [Classical]</div>
            <br />
            <div>Trending Songs</div>
            <div>[Cover] [Cover] [Cover] [Cover]</div>
            <br />
            <div>Recommended For You</div>
            <div>[Cover] [Cover] [Cover] [Cover]</div>
            <br />
            <div>New Releases</div>
            <div>[Cover] [Cover] [Cover]</div>
          </div>

          <div>-------------------------------------------------------</div>
          <div><FaHouse />      |     <FaSearch />      |     <FaBook />     |     <FaHeart />     |     <FaUser /></div>
          <div>-------------------------------------------------------</div>
        </pre>
      </center>
    </>
  );
}

export default App;