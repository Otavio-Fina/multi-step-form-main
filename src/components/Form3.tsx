import { useDispatch, useSelector } from 'react-redux'; 
import { getCustom, getOnline, getStorage, getPagination } from '../features/info-forms/infoForms';
import { useState, useEffect } from 'react';
import { RootState } from '../app/store';



function Form3() {

        //@ts-ignore
        document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css"><link rel="stylesheet" href="src/components/Form2.css"><link rel="stylesheet" href="src/components/Form3.css">'

    const dispatch = useDispatch(); 

    const [checkedOnline, setCheckedOnline] = useState(false);
    const [checkedStore, setCheckedStore] = useState(false);
    const [checkedCustom, setCheckedCustom] = useState(false);

    const styleOfPlain = useSelector((state:RootState) => state.infoData.styleOfPlain);

    const handleClickNext = () => {
        dispatch(getPagination(4))
      }

      const handleClickBack = () => {
        dispatch(getPagination(2))
      }



  /*
  ? codigo não funcionou, futuramente conserto 
    useEffect(() => {
        const inputDivs:any = document.getElementById('form-check')
        if (checkedOnline) {
            inputDivs[0].className += "focus-div"
        }

        if (checkedCustom) {
            inputDivs[1].className += "focus-div" 
        }

        if (checkedOnline) {
            inputDivs[2].className += "focus-div"
        }
    }, [checkedOnline, checkedCustom, checkedStore]);*/


    function handleClickOnline(e:any) {
        const target = e.target as HTMLInputElement; setCheckedOnline(target.checked);
        dispatch(getOnline(checkedOnline));
    }

    function handleClickStore(e:any) {
        const target = e.target as HTMLInputElement; setCheckedStore(target.checked);
        dispatch(getStorage(checkedStore));
    }

    function handleClickCustom(e:any) {
        const target = e.target as HTMLInputElement; setCheckedCustom(target.checked);
        dispatch(getCustom(checkedCustom));
    }
    
    return (
        <main>
            <div>
                <h3>Pick add-ons</h3>
                <p>Add-ons help enhance your gaming experience.</p>
                <form>
                    <div className="form-check">
                        <input onClick={(e) => {handleClickOnline(e)}} className="form-check-input" type="checkbox" value="" id="check-online-service" />
                        <label className="form-check-label" htmlFor="check-online-service">
                            <div className='plan-info'>
                                <h4>Online service</h4>
                                <p>Access to multiplayer games</p>
                            </div>
                        </label>
                        {styleOfPlain ? <p className='cost-label'>+$1/mo</p>:<p className='cost-label'>+$10/yr</p>}
                    </div>

                    <div className="form-check">
                        <input onClick={(e) => {handleClickStore(e)}} className="form-check-input" type="checkbox" value="" id="check-larger-storage" />
                        <label className="form-check-label" htmlFor="check-larger-storage">
                            <div className='plan-info'>
                                <h4>Larger storage</h4>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </label>
                        {styleOfPlain ? <p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$20/yr</p>}
                    </div>

                    <div className="form-check">
                        <input onClick={(e) => {handleClickCustom(e)}} className="form-check-input" type="checkbox" value="" id="check-customizable-profile" />
                        <label className="form-check-label" htmlFor="check-customizable-profile">
                            <div className='plan-info'>
                                <h4>Customizable profile</h4>
                                <p>Custom theme on your profile</p>
                            </div>
                        </label>
                        {styleOfPlain ? <p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$30/yr</p>}
                    </div>

                    <button className='btn btn-goback' onClick={handleClickBack}>Go Back</button>
                    <button type='submit' onClick={handleClickNext} className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form3