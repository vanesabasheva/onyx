import React from 'react';
import classes from './StepProgressBar.module.css';

function StepProgressBar({ currentStep }) {
    return (
        <div className={classes.progressBar}>
            <div className={`${classes.step} ${currentStep > 1 ? classes.active : ''}`}>
                <div className={`${classes.icon} ${currentStep >= 1 ? classes.active : ''}`}>
                    <ion-icon name="receipt-outline"></ion-icon>
                </div>
                <div className={classes.text}>1. Лични данни</div>
            </div>
            <div className={`${classes.step} ${currentStep > 2 ? classes.active : ''}`}>
                <div className={`${classes.icon} ${currentStep >= 2 ? classes.active : ''}`}>
                    <ion-icon name="cube-outline"></ion-icon>

                </div>
                <div className={classes.text}>2. Доставка</div>
            </div>
            <div className={classes.step}>
                <div className={`${classes.icon} ${currentStep >= 3 ? classes.active : ''}`}>
                    <ion-icon name="checkmark-done-circle-outline"></ion-icon>

                </div>
                <div className={classes.text}>3. Преглед</div>
            </div>
        </div>
    );
}

export default StepProgressBar;
