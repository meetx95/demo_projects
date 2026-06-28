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
          <div><h1>CHAT APPLICATION</h1></div>
          <div>-------------------------------------------------------</div>
          <div><FaBook />                        <FaSearch />                        <FaUser /></div>
          <div>-------------------------------------------------------</div>
          <br />
          <div>Good Evening, Meet</div>
          <br />
          <div>
            <div>Continue Reading</div>
            <div>[Chat] [Chat] [Chat]</div>
            <br />
            <div>Categories</div>
            <div>[Fiction] [Science] [Romance] [Tech]</div>
            <br />
            <div>Trending Books</div>
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