import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      <h2>Home</h2>
      {data && (
        <p>{data.name} — {data.bio}</p>
      )}
    </div>
  );
}

export default Home;
