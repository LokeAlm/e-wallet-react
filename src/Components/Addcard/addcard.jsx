import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../Cards/cardSlice';
import { useHistory, Link } from 'react-router-dom';
import Card from '../Cards/Card';

const Addcard = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [cardHolder, setCardHolder] = useState("Firstname Lastname");
    const [cardNr, setCardNr] = useState("XXXX XXXX XXXX XXXX");
    const [vendor, setVendor] = useState("");
    const [expMonth, setExpMonth] = useState("MM");
    const [expYear, setExpYear] = useState("YY");
    const [ccv, setCcv] = useState("XXX");

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'cardHolder':
                setCardHolder(event.target.value);
                break;
            case 'cardNr':
                setCardNr(event.target.value);
                break;
            case 'vendor':
                setVendor(event.target.value);
                break;
            case 'expMonth':
                setExpMonth(event.target.value);
                break;
            case 'expYear':
                setExpYear(event.target.value);
                break;
            case 'ccv':
                setCcv(event.target.value);
                break;
            default: break;
        }
    };

    const initialErrorState = {
        cardHolderError: "",
        cardNrError: "",
        vendorError: "",
        expMonthError: "",
        expYearError: "",
        ccvError: ""
    }

    const [errorMsg, setErrorMsg] = useState(initialErrorState);

    const validate = () => {
        let cardHolderError = "";
        let cardNrError = "";
        let vendorError = "";
        let expMonthError = "";
        let expYearError = "";
        let ccvError = "";
        // form validation
        if(!cardHolder || cardHolder==="Firstname Lastname") {
            cardHolderError = "Please provide a name";
        }
        if(!cardNr || cardNr==="XXXX XXXX XXXX XXXX" || cardNr.length !== 19){
            cardNrError = "Please provide a valid card number";
        }
        if(vendor===""){
            vendorError = "Please select a vendor";
        }
        if(!expMonth || expMonth==="MM" || expMonth.length !== 2) {
            expMonthError = "Invalid month";
        }
        if(!expYear || expYear==="YY" || expYear.length !== 2) {
            expYearError = "Invalid year";
        }
        if(!ccv || ccv==="XXX" || ccv.length !== 3) {
            ccvError = "Invalid CCV code";
        }
        // set error messages
        if (cardHolderError || cardNrError || vendorError || expMonthError || expYearError || ccvError) {
            setErrorMsg({cardHolderError, cardNrError, vendorError, expMonthError, expYearError, ccvError});
            return false;
        }
        // if there are no errors, isValid = true
        return true;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const isValid = validate();
        if(isValid) {
            console.log("Valid");
            const formData = {
                cardHolder: cardHolder,
                cardNr: cardNr,
                vendor: vendor,
                expMonth: expMonth,
                expYear: expYear,
                ccv: ccv,
                isActive: false
            }
            //clear form errors
            setErrorMsg(initialErrorState);
            //dispatch submit function in slice
            dispatch(submitForm(formData));
            reroute(); 
        }
    }; 
    const reroute = () => { // automatically go back to /home:
        history.push("/");
    }

    return ( 
        <>
        <Link to="/">
            <button className="btn go-back-btn">GO BACK</button>
        </Link>
            <h2 className="page-header">Add a new bank card</h2>
            <div className="addcard-wrapper">
                
                <div className={vendor === "Gringotts Bank" ? "card preview-card card0" : vendor === "Iron Bank of Braavos" ? "card preview-card card1" 
                : vendor === "Intergalactic Banking Clan" ? "card preview-card card2" 
                : "preview-card card"}>
                    <Card cardNr={cardNr} cardHolder={cardHolder} vendor={vendor} expMonth={expMonth} expYear={expYear} />
                </div>
                
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <label>
                        <p>Name on card:</p>
                        <input name="cardHolder" placeholder="Firstname Lastname" onChange={handleChange} />
                    </label>
                    <div className="error-msg">{errorMsg.cardHolderError}</div>
                    <label>
                        <p>Cardnumber:</p>
                        <input name="cardNr" placeholder="XXXX XXXX XXXX XXXX" onChange={handleChange} />
                    </label>
                    <div className="error-msg">{errorMsg.cardNrError}</div>
                    <label>
                        <p>Vendor:</p>
                        <select name="vendor" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Gringotts Bank">Gringotts Bank</option>
                            <option value="Intergalactic Banking Clan">Intergalactic Banking Clan</option>
                            <option value="Iron Bank of Braavos">Iron Bank of Braavos</option>
                        </select>
                    </label>
                    <div className="error-msg">{errorMsg.vendorError}</div>
                    <div className="expire-date">
                        <label>
                            <p>Expire month:</p>
                            <input name="expMonth" placeholder="MM" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Expire year:</p>
                            <input name="expYear" placeholder="YY" onChange={handleChange}/>
                        </label>     
                    </div>
                    <div className="expire-date">
                        <div className="error-msg">{errorMsg.expMonthError}</div>
                        <div className="error-msg">{errorMsg.expYearError}</div>
                    </div>
                    <label>
                        <p>CCV:</p>
                        <input name="ccv" placeholder="XXX" onChange={handleChange}  />
                    </label>
                    <div className="error-msg">{errorMsg.ccvError}</div>        
                    <button className="btn submit-btn" type="submit">ADD CARD</button>
                </form>
            </div>
        </>
    )
};

export default Addcard;