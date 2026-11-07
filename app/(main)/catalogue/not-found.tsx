"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

const NotFound = () => {
  const [seconds, setSeconds] = useState(5);
  setTimeout(() => {
    if (seconds != 0) {
      setSeconds(seconds - 1);
    } else {
      redirect("/");
    }
  }, 1000);
  return (
    <p>There is not such a page, you will be back in ${seconds} seconds.</p>
  );
};

export default NotFound;
