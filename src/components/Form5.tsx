import { useDispatch } from 'react-redux'; 
import { getPagination } from '../features/info-forms/infoForms';

function Form5() {

    //@ts-ignore
     document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css"><link rel="stylesheet" href="src/components/Form2.css"><link rel="stylesheet" href="src/components/Form3.css">    <link rel="stylesheet" href="src/components/Form4.css"><link rel="stylesheet" href="src/components/Form5.css">'

     const dispatch = useDispatch(); 

     const handleClickBack = () => {
        dispatch(getPagination(4))
      }


    return (
        <main>
            <div>
                <img src="./src/assets/images/icon-thank-you.svg" alt="OBRIGADO!!" />
                <h3>OBRIGADO!</h3>
                <p>Obrigado por me apoiar nessa aplicação!! Espero que tenha gostado! Lembre de me apoiar no GitHub dando uma estrelinha no repositório ;) . Acesse meu site: <a href="https://otaviofina.website" target="_blank">otaviofina.website</a> </p>
                <button className='btn btn-goback' onClick={handleClickBack}>Go Back</button>
            </div>
        </main>
    )
}

export default Form5