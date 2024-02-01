import React, { useState } from "react";

function UseStateHook() {
  const data = {
    user: "John",
    age: 28,
  };
  const [userData, setUserData] = useState(data);

  function updateUserData() {
    /* Method 1
    setUserData({
      user: "Miley",
      age: 22,
    });
    console.log(userData); // { user: "John", age: 28 }
    */

    /* Method 2 */
    setUserData((dt) => ({ ...dt, user: "Miley", age: 22 }));
    console.log(userData); // { user: "Miley", age: 22 }
  }
  return (
    <div>
      <h3>UseStateHook</h3>
      <p>Hello {userData.user}</p>

      <button onClick={updateUserData}>Change User</button>
    
        <hr />
    </div>
  );
}

export default UseStateHook;
