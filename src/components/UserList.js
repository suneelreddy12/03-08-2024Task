import React from "react";
import UserItem from "./UserItem";

function UserList({ users, updateUser, deleteUser }) {
  return (
    <div>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}

export default UserList;
