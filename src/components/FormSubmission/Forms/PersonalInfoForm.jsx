import { useState } from 'react';
import { validateEmail, validateName } from '../validation';
import PhoneInput from 'react-phone-number-input';
import classes from '../FormSubmission.module.css';
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function PersonalInfoForm({ values, onInputChange, onNext }) {
    const { email, 'first-name': firstName, 'last-name': lastName, phone } = values;

    const [didEdit, setDidEdit] = useState({
        email: false,
        'first-name': false,
        'last-name': false,
        phone: false,
    });

    const emailIsInvalid = didEdit.email && !validateEmail(email);
    const nameIsInvalid = didEdit['first-name'] && !validateName(firstName);
    const lastNameIsInvalid = didEdit['last-name'] && !validateName(lastName);
    const phoneIsInvalid = didEdit.phone && !isValidPhoneNumber(phone);

    //const isPersonalInfoValid = !emailIsInvalid && !nameIsInvalid && !lastNameIsInvalid && !phoneIsInvalid;
    // Local function to handle field blur events
    const handleBlur = (field) => {
        setDidEdit((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <div className={classes.form}>
            <p>I. Лични данни</p>

            <div className={classes.control}>
                <label htmlFor="email">Имейл *</label>
                <input required id="email" type="email" name="email"
                    onBlur={() => handleBlur('email')}
                    onChange={(event) => onInputChange('email', event.target.value)}
                    value={email} />
                {emailIsInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден имейл адрес!</p></div>}
            </div>


            <div className={classes[`control-row`]}>
                <div className={classes.control}>
                    <label htmlFor="first-name">Име *</label>
                    <input required type="text" id="first-name" name="first-name"
                        onBlur={() => handleBlur('first-name')}
                        onChange={(event) => onInputChange('first-name', event.target.value)}
                        value={firstName} />
                    {nameIsInvalid && <div className={classes[`control-error`]}><p>Полето е задължително!</p></div>}

                </div>

                <div className={classes.control}>
                    <label htmlFor="last-name">Фамилия *</label>
                    <input required type="text" id="last-name" name="last-name"
                        onBlur={() => handleBlur('last-name')}
                        onChange={(event) => onInputChange('last-name', event.target.value)}
                        value={lastName} />
                    {lastNameIsInvalid && <div className={classes[`control-error`]}> <p>Полето е задължително!</p></div>}
                </div>
            </div>

            <div className={classes.control}>
                <label htmlFor="phone">Телефонен номер *</label>
                <PhoneInput required placeholder='XX XXX XXXX' id="phone" name="phone"
                    defaultCountry="BG"
                    onBlur={() => handleBlur('phone')}
                    onChange={(value) => onInputChange('phone', value)}
                    value={phone}
                />
                {phoneIsInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден телефонен номер!</p></div>}
            </div>

            <p className={classes[`form-actions`]}>

                <button type="button" className={classes.button}
                    onClick={onNext}>
                    Продължи
                </button>
            </p>
        </div>
    )
}

export default PersonalInfoForm;

