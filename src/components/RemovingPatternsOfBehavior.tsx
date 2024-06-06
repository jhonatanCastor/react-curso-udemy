import { FormEvent } from "react";

const RemovingPatternsOfBehavior = () => {

  const handlerClick = (e: FormEvent) => {
    e.preventDefault();
    alert("Fomulario enviado")
  }

  return (
    <>
      <div>
        <form onSubmit={handlerClick}>
          <input />
          <button>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default RemovingPatternsOfBehavior;

// preventDefault impede que o navegador execute um comportamento padrão associado