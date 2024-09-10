// import Link from "next/link";
// import React from "react";
// import Navbar from "../components/Navbar";

// const UsersPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <p>UsersPageuser</p>
//       <Link href="users/new">New User</Link>
//       <a href="users/new">New User</a>
//     </div>
//   );
// };

// export default UsersPage;


// pages/users.tsx

// app/users/page.tsx

import React from 'react';
import { fetchUsers } from '../api/apiFunction';


export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
