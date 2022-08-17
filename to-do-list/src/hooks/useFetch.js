import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [method, setMethod] = useState(null);
  const [dados, setDados] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [taskId, setTaskId] = useState(null);

  //Configurando as mensagens
  const httpConfig = (dados, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTaskId(dados);
    }
    setMethod(method);
  };

  //Criando o envio de uma nova tarefa
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        try {
          const res = await fetch(url, config);

          json = await res.json();

          setCallFetch(json);
        } catch (error) {
          console.log(error.message);
        }
      } else if (method === "DELETE") {
        try {
          const res = await fetch(`${url}/${taskId}`, config);

          json = await res.json();

          setCallFetch(json);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    httpRequest();
  }, [config, url, taskId, method]);

  //Carregar os dados
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setDados(json);
    };
    fetchData();
  }, [url, config, callFetch]);

  return { dados, httpConfig };
};
