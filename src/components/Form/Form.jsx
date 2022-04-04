import React, {useEffect, useState} from 'react';
import style from './Form.module.scss'


const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    useEffect(
        () => {
            for (const validation in validations) {
                switch (validation) {
                    case 'email':
                        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                        break
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true)
                        break
                    default:
                        break
                }
            }
        }, [value])

    useEffect(() => {
        if (isEmpty || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, emailError])

    return {
        isEmpty,
        emailError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}


const Form = () => {
    const name = useInput('', {isEmpty: true})
    const venueName = useInput('', {isEmpty: true})
    const venueCity = useInput('', {isEmpty: true})
    const stateCity = useInput('', {isEmpty: true})
    const email = useInput('', {isEmpty: true, email: true})
    const subject = useInput('', {isEmpty: true})
    const message = useInput('', {isEmpty: true})

    const [isBtnClick, setIsBtnClick] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsBtnClick(false)
        alert('Форма отправлена')
    }


    const onClickBtn = (inputs) => {
        setIsBtnClick(true)
    }


    const getInput = (inputName, placeholder, type, additionalClass = '') => {

        const getInputClass = (inputName.isDirty && !inputName.inputValid) || (isBtnClick && !inputName.inputValid)
            ? [style.inputArea, style.inputAreaError, additionalClass].join(' ').trim()
            : [style.inputArea, additionalClass].join(' ').trim()

        return (
            <div className={getInputClass}>
                <input required onChange={e => inputName.onChange(e)} onBlur={e => inputName.onBlur(e)}
                       type={type} placeholder={placeholder} value={inputName.value}/>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            {getInput(name, "Name", "text")}
            {getInput(venueName, "Venue Name", "text")}
            <div className={style.groupInputs}>
                {getInput(venueCity, "Venue City", "text")}
                {getInput(stateCity, "State City", "text")}
            </div>
            {getInput(email, "Email", "email")}
            {getInput(subject, "Subject", "text")}
            {getInput(message, "Message", "text", style.inputAreaMsg)}

            <div className={style.btnArea}>
                <button type="submit"
                        onClick={() => onClickBtn([name, venueName, venueCity, stateCity, email, subject, message])}
                        value="Submit"
                        className={style.btnForm}>
                    Send
                </button>
            </div>

        </form>
    );
};

export default Form;