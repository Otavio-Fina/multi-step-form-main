import { useDispatch, useSelector } from 'react-redux'; 
import { getPagination } from '../features/info-forms/infoForms';
import { RootState } from '../app/store';



function Form4() {

    //@ts-ignore
    document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css"><link rel="stylesheet" href="src/components/Form2.css"><link rel="stylesheet" href="src/components/Form3.css">    <link rel="stylesheet" href="src/components/Form4.css">'

    const dispatch = useDispatch(); 

    const plainType = useSelector((state:RootState) => state.infoData.styleOfPlain)
    const plain = useSelector((state:RootState) => state.infoData.plain)
    const onlineService = useSelector((state:RootState) => state.infoData.onlineService)
    const largerStorage = useSelector((state:RootState) => state.infoData.largerStorage)
    const customProfile = useSelector((state:RootState) => state.infoData.customProfile)




    const handleClickNext = () => {
        dispatch(getPagination(5))
      }

      const handleClickChange = () => {
        dispatch(getPagination(2))        
      }

      const handleClickBack = () => {

        dispatch(getPagination(3))
      }



    function RespectivePlainCostP() {
        switch (plain) {
            case "arcade": 
            return (
                <p className='plain-price'>{plainType?<>$9/mo</>:<>$90/yr</>}</p>
            )
            case "advanced": 
            return (
                <p className='plain-price'>{plainType?<>$12/mo</>:<>$120/yr</>}</p>
            )
            case "pro": 
            return (
                <p className='plain-price'>{plainType?<>$15/mo</>:<>$150/yr</>}</p>
            )
            default:
            return (
                <p className='plain-price'>{plainType?<>$9/mo</>:<>$90/yr</>}</p>
            )
        }
    }



    function PlainPrice() {
        return(
            <>
                <h4>{
                plain.toUpperCase()}{plainType?<>(MONTHLY)</>:<>(YEARLY)</>}
                </h4>
                <p className='link-to-2' onClick={handleClickChange}>Change</p>
                <RespectivePlainCostP/>
            </>
        )
    }

    function OtherAddedStuffs() {
        return(
            <>
                {onlineService && <div className='stuffs'><p>Online service</p> {plainType?<p className='cost-label'>+$1/mo</p>:<p className='cost-label'>+$10/yr</p>}</div>}
                {largerStorage && <div className='stuffs'><p>Larger Storage</p> {plainType?<p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$20/yr</p>}</div>}
                {customProfile && <div className='stuffs'><p>Customizable profile</p> {plainType?<p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$30/yr</p>}</div>}
            </>
        )
    }

    function SumPrice () { 
    
        let cost = 0
        
            if (plainType) {
                switch (plain) {
                    case 'arcade':
                        cost = 9
                        break
                    case 'advanced':
                        cost = 12
                        break
                    case 'pro':
                        cost = 15
                        break
                }
    
                if (onlineService) {
                    cost += 1
                }
    
                if (largerStorage) {
                    cost += 2
                }
    
                if (customProfile) {
                    cost += 2
                }

    
                return (
                    <p className='custo'>+{cost}/mo</p>
                )
    
            } else {
                switch (plain) {
                    case 'arcade':
                        cost = 90
                        break
                    case 'advanced':
                        cost = 120
                        break
                    case 'pro':
                        cost = 150
                        break
                }
    
                if (onlineService) {
                    cost += 10
                }
    
                if (largerStorage) {
                    cost += 20
                }
    
                if (customProfile) {
                    cost += 30
                }
    
                return (
                    <p className='custo'>+{cost}/yr</p>
                )
            
        }
        
    }


    return (
        <main>
            <div>
                <h3>Pick add-ons</h3>
                <p>Add-ons help enhance your gaming experience.</p>
                <form>
                    <div id='container-price'>
                        <PlainPrice />
                        <div className='separador'></div>
                        <OtherAddedStuffs />
                    </div>

                    <div id='total-container'>
                        <p>Total (per {plainType?<>month</>:<>year</>})</p> {/*@ts-ignore*/ }
                        <SumPrice />
                    </div>

                    <button className='btn btn-goback' onClick={handleClickBack}>Go Back</button>
                    <button type='submit' onClick={handleClickNext} className='btn btn-submit'>Confirm</button>
                </form>
            </div>
        </main>
    )
}

export default Form4