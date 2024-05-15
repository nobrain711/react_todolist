import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, FC, useState } from "react";
import { db } from "../../../firebase";

interface Props {}

export const AddData: FC = () => {
  const [name, setName] = useState<string>("");

  const addData = async () => {
    try {
      await addDoc(collection(db, "user"), { name: name });
      setName("");
    } catch (error) {
      console.error(`Error adding document: ${error}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
        placeholder="Enter name"
      />
      <button type="button" onClick={addData}>
        Add Data
      </button>
    </div>
  );
};
