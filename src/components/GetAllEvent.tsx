const GetAllEvent = () => {
  const handlerClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert("Cliquei no botão")
  }

  return (
    <>
      <div onClickCapture={() => alert('Cliquei na div') } style={{padding: 10, background: 'red'}}>
        <button onClick={() => handlerClick}>
          Texte button
        </button>
      </div>
    </>
  )
}
export default GetAllEvent;

// onClickCapture Seve para capturar os evendos vindos dos filhos mesmo tendo o parametro (stopPropagation())