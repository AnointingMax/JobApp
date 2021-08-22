import React, { useState } from "react";

import UnauthorizedStack from "./navigation/UnauthorizedStack";
import MainStack from "./navigation/MainStack";

export default function App() {
  const [auth, setAuth] = useState(true);

  return auth ? <MainStack /> : <UnauthorizedStack />;
}
