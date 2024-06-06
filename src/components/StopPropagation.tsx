const StopPropagation = () => {

  const handlerClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert("Cliquei no botão")
  }

  return (
    <>
      <div onClick={() => alert('Cliquei na div') } style={{padding: 10, background: 'red'}}>
        <button onClick={() => handlerClick}>
          Texte button
        </button>
      </div>
    </>
  )
}

export default StopPropagation;