import { useContext, useState } from 'react';
import classes from './FormSubmission.module.css';
import classes1 from '../Cart/Cart.module.css';
import { validateEmail, validateName, validatePostcode } from './validation.js';

import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import StepProgressBar from './StepProgressBar.jsx';
import { CartContext } from '../../store/shopping-cart-context.jsx';
import PersonalInfoForm from './Forms/PersonalInfoForm.jsx';
import DeliveryInfoForm from './Forms/DeliveryInfoForm.jsx';

function FormSubmission() {
    // State to track the current step. This could also come from context or props
    const [currentStep, setCurrentStep] = useState(1);

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        'first-name': '',
        'last-name': '',
        phone: '',
        city: '',
        'street-address': '',
        district: '',
        postcode: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        'first-name': false,
        'last-name': false,
        phone: false,
        city: false,
        'street-address': false,
        district: false,
        postcode: false,
    });

    const emailIsInvalid = didEdit.email && !validateEmail(enteredValues.email);
    const nameIsInvalid = didEdit['first-name'] && !validateName(enteredValues['first-name']);
    const lastNameIsInvalid = didEdit['last-name'] && !validateName(enteredValues['last-name']);
    const phoneIsInvalid = didEdit.phone && !isValidPhoneNumber(enteredValues.phone);

    const isPersonalInfoValid = !emailIsInvalid && !nameIsInvalid && !lastNameIsInvalid && !phoneIsInvalid;

    const isCityInvalid = didEdit.city && !validateName(enteredValues.city);
    // const isStreetAddressInvalid = !didEdit['street-address'];
    const isDistrictInvalid = didEdit.district && !validateName(enteredValues.district);
    const isPostcodeInvalid = didEdit.postcode && !validatePostcode(enteredValues.postcode);

    const isDeliveryInfoValid = !isCityInvalid && !isDistrictInvalid && !isPostcodeInvalid;

    const handleInputBlur = (field) => {
        setDidEdit((prev) => ({ ...prev, [field]: true }));
    };

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value || '',
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }


    //&& didEdit.email && didEdit['first-name'] && didEdit['last-name'] && didEdit.phone
    function goToNextStep() {
        if (currentStep === 1) {
            const requiredFieldsInteracted = didEdit.email && didEdit['first-name'] && didEdit['last-name'] && didEdit.phone;
            if (isPersonalInfoValid && requiredFieldsInteracted) {
                setCurrentStep(2);
            } else {
                // Mark all required fields as edited to show validation messages for untouched fields
                setDidEdit({
                    email: true,
                    'first-name': true,
                    'last-name': true,
                    phone: true,
                });
            }
        } else if (currentStep === 2) {
            const requiredFieldsInteracted = didEdit.city && didEdit['street-address'] && didEdit.district && didEdit.postcode;
            if (isDeliveryInfoValid && requiredFieldsInteracted) {
                setCurrentStep(3);
            } else {
                // Mark all required fields as edited to show validation messages for untouched fields
                setDidEdit({
                    city: true,
                    'street-address': true,
                    district: true,
                    postcode: true,
                });
            }
        }
    }

    function goToStep(value) {
        setCurrentStep(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        debugger;

        if (isPersonalInfoValid) {

            setCurrentStep(prevStep => prevStep + 1);
        }


        const finalData = {
            ...enteredValues,
        };
        console.log(finalData);

        const fd = new FormData(event.target);
        const acquisitionChannel = fd.getAll('acquisition');

        const customerData = Object.fromEntries(fd.entries());
        customerData.acquisition = acquisitionChannel;
        console.log(customerData);
    }

    const { items } = useContext(CartContext);
    const priceProducts = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const formattedPriceProducts = `${priceProducts.toFixed(2)} лв.`
    const priceWithDelivery = priceProducts + 5.9;
    const formattedTotalPrice = `${priceWithDelivery.toFixed(2)} лв.`;

    return (
        <div className={classes.layout}>
            <h1>Финализирай поръчката</h1>
            <StepProgressBar currentStep={currentStep} />
            {currentStep === 1 &&
                <PersonalInfoForm
                    values={enteredValues}
                    onInputChange={handleInputChange}
                    onInputBlur={handleInputBlur}
                    onNext={goToNextStep}
                />}

            {currentStep === 2 &&
                <DeliveryInfoForm
                    values={enteredValues}
                    onInputChange={handleInputChange}
                    onInputBlur={handleInputBlur}
                    onNext={goToNextStep}
                    onGoToStep={goToStep}>
                </DeliveryInfoForm>
            }

            {currentStep === 3 &&
                <>
                    <div className={classes.form}>
                        <p> III. Преглед</p>

                        <ul className={classes1[`cart-items`]}>
                            {items.map((item) => {
                                const formattedPrice = `${item.price.toFixed(2)} лв.`;

                                return (
                                    <li key={item.id}>
                                        <img src={item.image} alt={item.title} />
                                        <span>{item.title}</span>
                                        <span>{formattedPrice}</span>
                                    </li>
                                );
                            })}
                        </ul>

                        <p className={`${classes['total-price']} ${classes.bold}`}>
                            <span>Всички продукти:</span>
                            <span>{formattedPriceProducts}</span>
                        </p>
                        <p className={classes[`total-price`]}>
                            <span>Доставка: </span>
                            <span>{`${5.90.toFixed(2)} лв.`}</span>
                        </p>
                        <p className={classes[`total-price`]}>
                            <span><strong>Крайна сума: </strong></span>
                            <span><strong>{formattedTotalPrice}</strong></span>
                        </p>
                        <hr />

                        <div className={classes.control}>
                            <label htmlFor="terms-and-conditions">
                                <input type="checkbox" id="terms-and-conditions" name="terms" />I
                                agree to the terms and conditions
                            </label>
                        </div>


                        <p className={classes[`form-actions`]}>
                            <button type="button" className={`${classes.button} ${classes[`button-flat`]}`}
                                onClick={() => goToStep(2)}>
                                Назад
                            </button>
                            <button type="submit" className={classes.button}
                                onClick={handleSubmit}>
                                Завърши поръчката
                            </button>
                        </p>
                    </div>
                </>
            }
        </div >
    );
}

export default FormSubmission;