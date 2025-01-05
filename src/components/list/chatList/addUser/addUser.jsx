import "./addUser.css";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src={"./avatar.png"} alt="" />
          <span>{"Jhon"}</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
