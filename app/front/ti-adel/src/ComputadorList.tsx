import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComputadorList = () => {
  const [computadores, setComputadores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then((response: { data: React.SetStateAction<never[]>; }) => {
        setComputadores(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Computadores</h1>
      <pre>{JSON.stringify(computadores, null, 2)}</pre>
    </div>
  );
}

export default ComputadorList;
