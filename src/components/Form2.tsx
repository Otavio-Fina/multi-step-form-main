import { useSelector ,useDispatch } from 'react-redux'; 
import { getPlain, getPlainStyle, getPagination, getFocusedPlain } from '../features/info-forms/infoForms';
import { useState, useEffect } from 'react';
import { RootState } from '../app/store';



function Form2() {
    //@ts-ignore
    document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css"><link rel="stylesheet" href="src/components/Form2.css">'

    const dispatch = useDispatch(); 

    const infoData = useSelector((state:RootState) => state.infoData);

    const [switchPlain, setSwitchPlain] = useState(infoData.styleOfPlain) //* true == monthly, false == yearly

    const [focusedButton, setFocusedButton] = useState(infoData.focusedPlain); 


    function HandleChosePlainClick(e:any, plainAtt:string) {
        e.preventDefault();

        dispatch(getPlain(plainAtt));
    }


    //? o código a seguir garante que quando você saia do componente e volte, o switch esteja correto de acordo com o plano.
    //? o useEffect é usado para dar tempo de renderizar os elementos e não voltar um elemento `undefined`.

    useEffect(() => {
      
        if (switchPlain) { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-start";//@ts-ignore
            document.getElementById('switch-yearly').className = ''//@ts-ignore
            document.getElementById('switch-monthly').className = 'active-span-switch'//@ts-ignore
        } else { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-end";//@ts-ignore
            document.getElementById('switch-monthly').className = ''//@ts-ignore
            document.getElementById('switch-yearly').className = 'active-span-switch'//@ts-ignore
        }
    }, []) 
    

    function HandleSwitchPlainClick(e:Event) {
        e.preventDefault();

        if (switchPlain) { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-end";//@ts-ignore
            document.getElementById('switch-yearly').className = 'active-span-switch'//@ts-ignore
            document.getElementById('switch-monthly').className = ''//@ts-ignore
            setSwitchPlain(false)
            dispatch(getPlainStyle(false));
        } else { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-start";//@ts-ignore
            document.getElementById('switch-monthly').className = 'active-span-switch'//@ts-ignore
            document.getElementById('switch-yearly').className = ''//@ts-ignore
            setSwitchPlain(true)
            dispatch(getPlainStyle(true));
        }
    }

    const handleClickNext = () => {
        dispatch(getPagination(3))
      }

    const handleClickBack = () => {
        dispatch(getPagination(1))
      }

    const handleButtonFocus = (index: number) => {
        setFocusedButton(index);
        dispatch(getFocusedPlain(index))
    }

    
    return (
        <main>
            <div>
                <h3>Select your plan</h3>
                <p>You have the option of monthly or yearly billing.</p>
                <form className='form-flex'>
                    <div className="form-group">
                        <button className={`btn-plain ${focusedButton === 0 ? 'focus' : ''}`} onClick={(e) => {HandleChosePlainClick(e, 'arcade'); handleButtonFocus(0);}}>
                            <img src="./src/assets/images/icon-arcade.svg" alt="" />
                            <div className='plan-info'>
                                <h4>Arcade</h4>
                                <p>{switchPlain ? "$9/mo": "$90/yr"}</p>
                                {switchPlain ? null: (<p className='month-free'>2 months free</p>)}
                            </div>
                        </button>
                    </div>

                    <div className="form-group">
                        <button className={`btn-plain ${focusedButton === 1 ? 'focus' : ''}`} onClick={(e) => {HandleChosePlainClick(e, 'advanced'); handleButtonFocus(1);}}>
                            <img src="./src/assets/images/icon-advanced.svg" alt="" />
                            <div className='plan-info'>
                                <h4>Advanced</h4>
                                <p>{switchPlain ? "$12/mo": "$120/yr"}</p>
                                {switchPlain ? null: (<p className='month-free'>2 months free</p>)}
                            </div>
                        </button>
                    </div>

                    <div className="form-group">
                        <button className={`btn-plain ${focusedButton === 2 ? 'focus' : ''}`}  onClick={(e) => {HandleChosePlainClick(e, 'pro'); handleButtonFocus(2);}}>
                            <img src="./src/assets/images/icon-pro.svg" alt="" />
                            <div className='plan-info'>
                                <h4>Pro</h4>
                                <p>{switchPlain ? "$15/mo": "$150/yr"}</p>
                                {switchPlain ? null: (<p className='month-free'>2 months free</p>)}
                            </div>
                        </button>
                    </div>

                    <div className="form-group">
                        <div id='switch-container'>
                            <span id='switch-monthly' className='active-span-switch'>Monthly</span> {/*@ts-ignore*/}
                            <button id='switch-plain' onClick={(e) => {HandleSwitchPlainClick(e)}}><div></div></button>
                            <span id='switch-yearly' className=''>Yearly</span>
                        </div>
                    </div>
                    <button className='btn btn-goback' onClick={handleClickBack}>Go Back</button>
                    <button type='submit' onClick={handleClickNext} className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form2