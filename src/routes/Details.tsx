import React from "react";
import Detail from "../components/detail/detail";
import { useParams } from "react-router-dom";
import { parseJsonText } from "typescript";
const Details = () => {
  const { id } = useParams();

  const parsedId = id ? parseInt(id, 10) : 0;

  return (
    <div>
      <Detail id={parsedId} />
    </div>
  );
};

export default Details;
