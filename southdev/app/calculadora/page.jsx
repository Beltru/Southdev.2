"use client";
import { useState } from "react";
import Link from "next/link";
import "./style.css";

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = 0;

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Error");
      return;
    }

    switch (operador) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          setResultado("Error");
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }
    setResultado(res);
  };

  const limpiar = () => {
    setNum1("");
    setNum2("");
    setOperador("+");
    setResultado("");
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="fila1">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
          className="text-black p-2 rounded"
        />
        <select
          className="operador text-black p-2 rounded"
          value={operador}
          onChange={(e) => setOperador(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          className="text-black p-2 rounded"
        />
        <button className="igual" onClick={calcular}>
          =
        </button>
        <button className="limpiar" onClick={limpiar}>
          C
        </button>
      </div>
      <div className="resultado">{resultado}</div>
      <Link href="/" className="submit-btn" style={{ textAlign: "center", textDecoration: "none", display: "block", marginTop: "20px" }}>
        Back to Home
      </Link>
    </div>
  );
}
