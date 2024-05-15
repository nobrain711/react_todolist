import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { db } from "../../../firebase";

interface User {
  id: string;
  name: string;
}

export const ReadData: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "user"));
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as { name: string }),
      }));
      setUsers(usersData);
      usersData.map((user) => console.log(user));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
