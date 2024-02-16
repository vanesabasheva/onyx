import classes from '../FormSubmission.module.css';
import { useState } from 'react';
import { validateName, validatePostcode } from '../validation';

function DeliveryInfoForm({ values, onInputChange, onNext, onGoToStep }) {
    const { city, 'street-address': streetAddress, district, postcode } = values;


    const [didEdit, setDidEdit] = useState({
        city: false,
        'street-address': false,
        district: false,
        postcode: false,
    });

    const isCityInvalid = didEdit.city && !validateName(city);
    const isStreetAddressInvalid = false;
    const isDistrictInvalid = didEdit.district && !validateName(district);
    const isPostcodeInvalid = didEdit.postcode && !validatePostcode(postcode);


    const handleBlur = (field) => {
        debugger;
        setDidEdit((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <form className={classes.form}>
            <p> II. Данни за доставка</p>
            <div className={classes[`control-row`]}>
                <div className={classes.control}>
                    <label htmlFor="text">Град *</label>
                    <input required id="city" name="city"
                        onBlur={() => handleBlur('city')}
                        onChange={(event) => onInputChange('city', event.target.value)}
                        value={city} />
                    {isCityInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден град!</p></div>}

                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Пощенски код</label>
                    <input id="city" name="postcode" placeholder='0000'
                        onBlur={() => handleBlur('postcode')}
                        onChange={(event) => onInputChange('postcode', event.target.value)}
                        value={postcode} />
                    {isPostcodeInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден пощенски код!</p></div>}

                </div>

            </div>
            <div className={classes.control}>
                <label htmlFor="text">Улица *</label>
                <input required id="street-address" name="street-address"
                    onBlur={() => handleBlur('street-address')}
                    onChange={(event) => onInputChange('street-address', event.target.value)}
                    value={streetAddress} />
                {isStreetAddressInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден адрес!</p></div>}

            </div>

            <div className={classes.control}>
                <label htmlFor="text">Квартал</label>
                <input required id="district" name="district"
                    onBlur={() => handleBlur('district')}
                    onChange={(event) => onInputChange('district', event.target.value)}
                    value={district} />
                {isDistrictInvalid && <div className={classes[`control-error`]}> <p>Моля въведете валиден квартал!</p></div>}

            </div>


            <p className={classes[`form-actions`]}>
                <button type="button" className={`${classes.button} ${classes[`button-flat`]}`}
                    onClick={() => onGoToStep(1)}>
                    Назад
                </button>
                <button type="button" className={classes.button}
                    onClick={onNext}>
                    Продължи
                </button>
            </p>
        </form>
    )
}

export default DeliveryInfoForm;