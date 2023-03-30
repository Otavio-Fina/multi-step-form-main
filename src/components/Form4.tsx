import { useDispatch, useSelector } from 'react-redux'; 
import { getCustom, getOnline, getStorage } from '../features/info-forms/infoForms';
import { useState } from 'react';
import { RootState } from '../app/store';



function Form4() {

    const dispatch = useDispatch(); 

    const plainType = useSelector((state:RootState) => state.infoData.styleOfPlain)
    const plain = useSelector((state:RootState) => state.infoData.plain)
    const onlineService = useSelector((state:RootState) => state.infoData.onlineService)
    const largerStorage = useSelector((state:RootState) => state.infoData.largerStorage)
    const customProfile = useSelector((state:RootState) => state.infoData.customProfile)



    const [plainCost, setPlainCost] = useState(0)



    function PlainPrice() {
        return(
            <>
                <h4>{
                plain.toUpperCase()}{plainType?<>(MONTHLY)</>:<>(YEARLY)</>}
                </h4>
                <p className='link-to-2'>Change</p>
                <p>{plainType?<>$9/mo</>:<>$90/yr</>}</p>
            </>
        )
    }

    function OtherAddedStuffs() {
        return(
            <>
                {onlineService && <div><p>Online service</p> {plain?<p className='cost-label'>+$1/mo</p>:<p className='cost-label'>+$10/yr</p>}</div>}
                {largerStorage && <div><p>Larger Storage</p> {plain?<p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$20/yr</p>}</div>}
                {customProfile && <div><p>Customizable profile</p> {plain?<p className='cost-label'>+$2/mo</p>:<p className='cost-label'>+$30/yr</p>}</div>}
            </>
        )
    }

    function SumPrice () {
        if (plainType) {
            switch (plain) {
                case 'arcade':
                    setPlainCost(9)
                    break
                case 'advanced':
                    setPlainCost(12)
                    break
                case 'pro':
                    setPlainCost(15)
                    break
            }

            if (onlineService) {
                let price = plainCost + 1
                setPlainCost(price)
            }

            if (largerStorage) {
                let price = plainCost + 2
                setPlainCost(price)
            }

            if (customProfile) {
                let price = plainCost + 2
                setPlainCost(price)
            }

            return (
                <p>+{plainCost}/mo</p>
            )

        } else {
            switch (plain) {
                case 'arcade':
                    setPlainCost(90)
                    break
                case 'advanced':
                    setPlainCost(120)
                    break
                case 'pro':
                    setPlainCost(150)
                    break
            }

            if (onlineService) {
                let price = plainCost + 10
                setPlainCost(price)
            }

            if (largerStorage) {
                let price = plainCost + 20
                setPlainCost(price)
            }

            if (customProfile) {
                let price = plainCost + 30
                setPlainCost(price)
            }

            return (
                <p>+{plainCost}/yr</p>
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
                        <p>Total (per {plain?<>month</>:<>year</>})</p>
                        <SumPrice />
                    </div>

                    <button className='btn btn-goback'>Go Back</button>
                    <button type='submit' className='btn btn-submit'>Confirm</button>
                </form>
            </div>
        </main>
    )
}

export default Form4