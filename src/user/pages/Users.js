import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nasri Mariem",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/221332655_1241292539646731_4475957864017006781_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Aa6zjtzb8u0AX-VPT7k&tn=i4VOvQNXeQxNZnOE&_nc_ht=scontent.ftun1-2.fna&oh=a9d182156fb4a2d6fce8a7809b13dfee&oe=61A6C48F",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
