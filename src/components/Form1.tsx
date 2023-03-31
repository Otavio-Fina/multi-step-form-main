import { useDispatch } from 'react-redux'; 
import { getName, getEmail, getPhone, getPagination } from '../features/info-forms/infoForms';



function Form1() {
    //@ts-ignore
    document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css">'

    const dispatch = useDispatch(); 


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getName(event.target.value));
      };

      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getEmail(event.target.value));
      };
    
      const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        dispatch(getPhone(event.target.value));
      };

      const handleClickNext = () => {
        dispatch(getPagination(2))
      }

    
    return (
        <main>
            <div>
                <h3>Personal info</h3>
                <p>Please provide your name, email, address, and phone number.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" className="form-control" onChange={(e) => handleNameChange(e)} id="name-input" placeholder="ex. Manuel Gomes" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-input">Email Address</label>
                        <input type="text" className="form-control" id="email-input" onChange={(e) => handleEmailChange(e)} placeholder="ex. manuel@exemplo.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" className="form-control" id="phone-number" onChange={(e) => handlePhoneChange(e)} placeholder="ex. 11 999887766" />
                    </div>
                    <button type='submit' onClick={handleClickNext} className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form1