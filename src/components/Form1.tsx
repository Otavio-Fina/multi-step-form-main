import { useDispatch } from 'react-redux'; 
import { getName, getEmail, getPhone } from '../features/info-forms/infoForms';



function Form1() {

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
    
    return (
        <main>
            <div>
                <h3>Personal info</h3>
                <p>Please provide your name, email, address, and phone number.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" className="form-control" id="name-input" placeholder="ex. Manuel Gomes" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-input">Email Address</label>
                        <input type="text" className="form-control" id="email-input" placeholder="ex. manuel@exemplo.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" className="form-control" id="phone-number" placeholder="ex. 11 999887766" />
                    </div>
                    <button type='submit' className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form1