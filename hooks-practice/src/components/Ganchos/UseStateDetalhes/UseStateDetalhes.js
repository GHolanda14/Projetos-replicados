import React from "react";

const UseState = () => {
  return (
    <div>
      <h1>useState</h1>
      {/* <p>
        Esse hook tem como princípio guardar um estado e/ou alterá-lo, que
        quando é alterado, ele é renderizado automaticamente. O useState retorna
        por padrão, um array com uma variável e um método para alterá-la.
        Podemos utilizar a desestruturação do ES6 para receber esse valores. Por
        questão de convenção, colocamos a função com o setNomePropriedade.
        Podemos inicializar ela com algum valor inicial, seja ele válido ou não:
      </p>
      <code>
        const [state, setState] = useState("estado inicial");
        <br />
        console.log(state);
        <br />
        -------------------------------------------
        <br />
        <span>Saída: estado inicial</span>
      </code>
      <h2>Vamos ver na prática?</h2> */}

      <h2>Basics</h2>
      <p>
        Ele retorna um array com 2 posições, a primeira é o estado e a segunda é
        a função para alterar esse estado.
      </p>

      <pre>
        <code>const [contador,setContador] = useState()</code>
      </pre>

      <p>
        Caso precise do valor anterior do estado para gerar o novo, não esqueça
        de chamar o método com uma arrow function. Lembre que cada vez que o
        nosso estado muda, ele renderiza o elemento.
      </p>
      <code>setContador((prevContador) =&gt; prevContador + 1)</code>
      
      <h2>Avançando</h2>
      <p>
        Além disso, se você tiver um estado que possui um objeto e deseja mudar
        um ou dois valores usando o setState(), use o spread operator para que
        os outros valores permaneçam iguais.
      </p>
      <p>
        <code>const [user, setUser] = useState&#10100;</code>
        <br></br>
        <code>nome: "Pedrinho",</code>
        <br></br>
        <code>idade: "21" &#125;</code>
        <br></br>
        <br></br>
        <code>setUser((prevUser) =&gt; &#123; ...prevUser, nome: "Ana" &#125;)</code>
      </p>
      <h2>Pratique!</h2>
    </div>
  );
};

export default UseState;
