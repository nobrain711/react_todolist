import { deleteDoc, doc } from "firebase/firestore";
import { ChangeEvent, FC, useState } from "react";
import { db } from "../../../firebase";

interface Props {}

export const DeleteData: FC = () => {
  const [id, setId] = useState<any>("");

  const deleteData = async () => {
    const userDoc = doc(db, "user", id);

    try {
      await deleteDoc(userDoc);
      setId("");
    } catch (error) {
      console.error(`Error deleting document: ${error}`);
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
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
};
