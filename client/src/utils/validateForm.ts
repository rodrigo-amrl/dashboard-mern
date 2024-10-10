import { FormValues } from "../interfaces/property"

export const validateForm = (formvalues: FormValues) => {
    const errors = { message: string } = { message: '' };
    let hasError = false;

    Object.keys(formvalues).forEach((key)=>{
        switch(key){
            case 'title':
        }
    })
}