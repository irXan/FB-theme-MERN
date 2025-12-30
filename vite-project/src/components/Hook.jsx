import { useState } from "react";

function Hook() {
 const [user, setUser] = useState({
  name: "",
  age: 0
});

setUser({
  ...user,
  name: "Irzan"
});

}

export default Hook;
