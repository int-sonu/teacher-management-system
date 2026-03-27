import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Teachers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/teachers").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Teachers</h2>
      {data.map((t: any) => (
        <p key={t._id}>{t.name}</p>
      ))}
    </div>
  );
}