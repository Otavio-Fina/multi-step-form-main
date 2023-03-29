import { useDispatch } from 'react-redux'; 
import { getName } from '../features/info-forms/infoForms';
import { useState } from 'react';



function Form2() {

    const dispatch = useDispatch(); 

    const [switchPlain, setSwitchPlain] = useState(true) //* true == monthly, false == yearly


    function HandleSwitchPlainClick(e:Event) {
        e.preventDefault();

        if (switchPlain) { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-end";//@ts-ignore
            document.getElementById('switch-yearly').className = 'active-span-switch'//@ts-ignore
            document.getElementById('switch-monthly').className = ''//@ts-ignore
            setSwitchPlain(false)
        } else { //@ts-ignore
            document.getElementById('switch-plain').style.justifyContent = "flex-start";//@ts-ignore
            document.getElementById('switch-monthly').className = 'active-span-switch'//@ts-ignore
            document.getElementById('switch-yearly').className = ''//@ts-ignore
            setSwitchPlain(true)

        }
    }

    
    return (
        <main>
            <div>
                <h3>Select your plan</h3>
                <p>You have the option of monthly or yearly billing.</p>
                <form>
                    <div className="form-group">
                        <button className='btn-plain'>
                            <img src="./src/assets/images/icon-arcade.svg" alt="" />
                            <div className='plan-info'>
                                <h4>Arcade</h4>
                                <p>{switchPlain ? "$9/mo": "$90/yr"}</p>
                                {switchPlain ? null: (<p className='month-free'>2 months free</p>)}
                            </div>
                        </button>
                    </div>

                    <div className="form-group">
                        <button className='btn-plain'>
                            <img src="./src/assets/images/icon-advanced.svg" alt="" />
                            <div className='plan-info'>
                                <h4>Advanced</h4>
                                <p>{switchPlain ? "$12/mo": "$120/yr"}</p>
                                {switchPlain ? null: (<p className='month-free'>2 months free</p>)}
                            </div>
                        </button>
                    </div>

                    <div className="form-group">
                        <button className='btn-plain'>
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
                    <button className='btn btn-goback'>Go Back</button>
                    <button type='submit' className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form2