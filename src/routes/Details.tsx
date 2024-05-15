import { Detail } from "../components/todo/detail/detail";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();

  const parsedId = id ? parseInt(id, 10) : 0;

  return (
    <div>
      <Detail id={parsedId} />
    </div>
  );
};
