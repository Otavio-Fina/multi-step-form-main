import { useDispatch, useSelector } from 'react-redux'; 
import { getCustom, getOnline, getStorage, getPagination, getPlain } from '../features/info-forms/infoForms';
import { RootState } from '../app/store';



function Form3() {

        //@ts-ignore
        document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css"><link rel="stylesheet" href="src/components/Form2.css"><link rel="stylesheet" href="src/components/Form3.css">'

    const dispatch = useDispatch(); 


    const infoData = useSelector((state:RootState) => state.infoData);

    const handleClickNext = () => {
        dispatch(getPagination(4))
      }

      const handleClickBack = () => {
        dispatch(getPagination(2))
      }


    function handleClickOnline(e:any) {
        const target = e.target as HTMLInputElement;
        dispatch(getOnline(target.checked));
    }

    function handleClickStore(e:any) {
        const target = e.target as HTMLInputElement;
        dispatch(getStorage(target.checked));
    }

    function handleClickCustom(e:any) {
        const target = e.target as HTMLInputElement;
        dispatch(getCustom(target.checked));
    }
    
    return (
        <main>
            <div>
                <h3>Pick add-ons</h3>
                <p>Add-ons help enhance your gaming experience.</p>
                <form>
                    <div className="form-check">
                        <input onClick={(e) => {handleClickOnline(e)}} className="form-check-input" type="checkbox" value="" id="check-online-service" checked={infoData.onlineService} />
                        <label className="form-check-label" htmlFor="check-online-service">
                            <div className='plan-info'>
                                <h4>Online service</h4>
                                <p>Access to multiplayer games</p>
                            </div>
                        </label>
                        {infoData.styleOfPlain ? <p className='cost-label'>+$1/mo</p>:<p className='cost-label'>+$10/yr</p>}
                    </div>

                    <div className="form-check">
                        <input onClick={(e) => {handleClickStore(e)}} className="form-check-input" type="checkbox" value="" id="check-larger-storage" checked={infoData.largerStorage} />
                        <label className="form-check-label" htmlFor="check-larger-storage">
                            <div className='plan-info'>
                                <h4>Larger storage</h4>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </label>
                        {infoData.styleOfPlain ? <p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$20/yr</p>}
                    </div>

                    <div className="form-check">
                        <input onClick={(e) => {handleClickCustom(e)}} className="form-check-input" type="checkbox" value="" id="check-customizable-profile"  checked={infoData.customProfile}/>
                        <label className="form-check-label" htmlFor="check-customizable-profile">
                            <div className='plan-info'>
                                <h4>Customizable profile</h4>
                                <p>Custom theme on your profile</p>
                            </div>
                        </label>
                        {infoData.styleOfPlain ? <p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$30/yr</p>}
                    </div>

                    <button className='btn btn-goback' onClick={handleClickBack}>Go Back</button>
                    <button type='submit' onClick={handleClickNext} className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form3