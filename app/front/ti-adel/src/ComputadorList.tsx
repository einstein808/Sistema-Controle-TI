import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface CardData {
  image: string;
  title: string;
  description: string;
}

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
      <><h1>Lista de Computadores</h1><div>
      {computadores.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="Imagem do Card" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {/* Adicione aqui outros dados que deseja exibir no card */}
        </div>
      ))}
    </div></>
  );
}

export default ComputadorList;
