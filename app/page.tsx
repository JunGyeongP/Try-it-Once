"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("/api/gamin/userinfo")
      .then((r) => r.json())
      .then((result) => {
        alert(result);
        setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <main>
      <p>유저 정보</p>
      {userInfo.map((a) => (
        <p>
          {a[0]} : {a[1]}
        </p>
      ))}
    </main>
  );
}
