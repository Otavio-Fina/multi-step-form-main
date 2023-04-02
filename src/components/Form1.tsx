import { useSelector, useDispatch } from 'react-redux'; 
import { getName, getEmail, getPhone, getPagination } from '../features/info-forms/infoForms';
import { useForm } from "react-hook-form";
import { RootState } from '../app/store';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().integer().positive().required()
  }).required();
  type FormData = yup.InferType<typeof schema>;



function Form1() {
    //@ts-ignore
    document.getElementById("links").innerHTML = '<link rel="stylesheet" href="src/components/Form1.css">'

    const dispatch = useDispatch(); 

    const infoData = useSelector((state:RootState) => state.infoData)

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });

    const onSubmit = (data: FormData) => {
        dispatch(getName(data.name))
        dispatch(getEmail(data.email))
        dispatch(getPhone(data.phone))
        dispatch(getPagination(2))
    }



    
    return (
        <main>
            <div>
                <h3>Personal info</h3>
                <p>Please provide your name, email, address, and phone number.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" defaultValue={infoData.name} className={`form-control ${errors.name && "border-error"}`} {...register("name")} id="name-input" placeholder="ex. Manuel Gomes" />
                        <p className='error'>{errors.name && "Nome Invalido"}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-input">Email Address</label>
                        <input type="text" defaultValue={infoData.emailAddress} className={`form-control ${errors.email && "border-error"}`} id="email-input" {...register("email")} placeholder="ex. manuel@gomes.com" />
                        <p className='error'>{errors.email && "Email Invalido"}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" defaultValue={infoData.phoneNumber} className={`form-control ${errors.phone && "border-error"}`} id="phone-number" {...register("phone")} placeholder="ex. 11 999887766" />
                        <p className='error'>{errors.phone && "Numero Invalido"}</p>
                    </div>
                    <button type='submit' className='btn btn-submit'>Next Step</button>
                </form>
            </div>
        </main>
    )
}

export default Form1