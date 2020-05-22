import React from "react";
import {useState,useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import "../App.css";
import FormSchema from '../validation/FormSchema';

export default function Pizza(props) {

    const initialForm = {
        name: '',
        size: '',
        toppings: {
            pepperoni: false,
            mushroom: false,
            sausage: false,
            pepper: false,
            onion: false,
        },
        instructions: ''
    }

    const [errors, setErrors] = useState({
        name: '',
        size: '',
    });

    const initialDisabled = true;

    const [disabled, setDisabled] = useState(initialDisabled);

    const [order, setOrder] = useState(initialForm)
    const [processedOrder, setProcessedOrder] = useState(initialForm)

    const changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        yup.reach(FormSchema, name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors,
                [name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [name]: err.errors[0]
            });
        });

        setOrder({ ...order, [name]: value });
    }

    const checkboxChange = (event) => {
        const {name} = event.target
        const {checked} = event.target

        setOrder ({
            ...order,
            toppings: {
                ...order.toppings,
                [name]: checked
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', order)
        .then(res => {
            setProcessedOrder(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        setOrder(initialForm)
    }

    useEffect(() => {
        FormSchema.isValid(order).then(valid => {
            setDisabled(!valid)
        })
    }, [order])

    console.log(processedOrder)


    return (
        <div className="pizza-container">
            <h1>Lambda Eats!</h1>
            <div>
                <h2>Order your pizza!</h2>

                <form className="pizza-form" onSubmit={(event) => submitHandler(event)}>
                    <label>
                    {errors.name.length > 0 ? <p>{errors.name}</p> : null}
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={order.name}
                            onChange={(event) => changeHandler(event)}
                        />
                    </label>
                    <label>
                        {errors.size.length > 0 ? <p>{errors.size}</p> : null}
                        Size:
                        <select
                            name="size"
                            onChange={changeHandler}>
                                <option value="">Select</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                        </select>
                    </label>
                        <h4 className="toppings">Toppings</h4>
                            <label>Pepperoni
                            <input type="checkbox"
                                   name="pepperoni"
                                   checked={order.toppings.pepperoni}
                                   onChange={checkboxChange}/>
                            </label>
                            <label>Mushroom
                            <input type="checkbox"
                                   name="mushroom"
                                   checked={order.toppings.mushroom}
                                   onChange={checkboxChange}/>
                            </label>
                            <label>Sausage
                            <input type="checkbox"
                                   name="sausage"
                                   checked={order.toppings.sausage}
                                   onChange={checkboxChange}/>
                            </label>
                            <label>Pepper
                            <input type="checkbox"
                                   name="pepper"
                                   checked={order.toppings.pepper}
                                   onChange={checkboxChange}/>
                            </label>
                            <label>Onion
                            <input type="checkbox"
                                   name="onion"
                                   checked={order.toppings.onion}
                                   onChange={checkboxChange}/>
                            </label>
                    <h4>Special Instructions</h4>
                        <textarea
                            type="text"
                            name="instructions"
                            value={order.instructions}
                            onChange={(event) => changeHandler(event)}/>
                    <button id="submit" disabled={disabled}>Submit</button>
                    {processedOrder.size.length > 0 ? <p>Check the console for your order!</p> : null}
                </form>
            </div>
        </div>
    )

}
