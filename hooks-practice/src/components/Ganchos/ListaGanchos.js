import React from "react";
import { Link } from "react-router-dom";
import { AprendaContext } from "../../context/AprendaContext";
import styles from "./Ganchos.module.css";


const Ganchos = () => {
  return (
    <ul>
      <li>
        <Link to="/hooks/useState">
          <p>useState</p>
        </Link>
      </li>
      <li>
        <Link to="/hooks/useContext">
          <p>useContext</p>
        </Link>
      </li>
      <li>
        <Link to="/hooks">
          <p>useState</p>
        </Link>
      </li>
      <li>
        <Link to="/hooks">
          <p>useState</p>
        </Link>
      </li>
    </ul>
  );
};

export default Ganchos;
