import { doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, FC, useState } from "react";
import { db } from "../../../firebase";

interface Props {}

export const UpdateData: FC = () => {
  const [id, setId] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  const updateData = async () => {
    const userDoc = doc(db, "user", id);

    try {
      await updateDoc(userDoc, { name: newName });
      setId("");
      setNewName("");
    } catch (error) {
      console.error(`Error updating document: ${error}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setId(event.target.value)
        }
        placeholder="Enter document ID"
      />
      <input
        type="text"
        value={newName}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setNewName(event.target.value)
        }
      />
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};
