import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import validate from "../../../validators/validateCreateMove"
import ModalCategory from "./ModalCategory";
import { createMovement, loadMovements, updateMovement } from "../../../redux/actions";
import Buttons from "./Buttons";

export default function FormMovement({ setVisibleMovement, movementToEdit }) {

    const dispatch = useDispatch()
    const [visibleCategory, setVisibleCategory] = React.useState(false)
    const stateRedux = useSelector(state => state)
    const [errors, setErrors] = React.useState({
        empty: false
    });
    let useID = React.useId()
    const [newMovement, setNewMovement] = React.useState({
        id: stateRedux.user.id,
        concept: movementToEdit?.concept ? movementToEdit.concept : "",
        type: movementToEdit?.type ? movementToEdit.type : "",
        amount: movementToEdit?.amount ? movementToEdit.amount : "",
        category: movementToEdit?.Category.name ? movementToEdit.Category.name : "",
        date: movementToEdit?.date ? new Date(movementToEdit.date) : new Date(),
    });

    const handleSubmit = (event) => {
        setNewMovement({
            ...newMovement,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...newMovement,
            [event.target.name]: event.target.value
        }))
    };

    const handleDate = (event) => {
        setNewMovement({
            ...newMovement,
            date: event
        })
        if (!newMovement.date) {
            setErrors({
                ...errors,
                date: "Date is required"
            })
        }
    };

    const onSubmit = (event) => {
        event.preventDefault()
        try {
            if (!errors.empty) {
                return
            } else {
                if(movementToEdit) {
                    dispatch(updateMovement({
                        ...newMovement,
                        movementPrevious: {
                            ...movementToEdit
                        }
                    }))
                } else {
                    dispatch(createMovement(newMovement))
                }
                dispatch(loadMovements(stateRedux.user.id))
                setVisibleMovement(false)
            }
        } catch (error) {
            console.log(error.message)
            return
        }
    };

    return (
        <form>
            <div className="m-1 md:m-4">
                <label htmlFor="concept">Concept</label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    value={newMovement.concept}
                    onChange={handleSubmit}
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your concept"
                />
                {
                    errors.concept && (<p className="text-red-400">{errors.concept}</p>)
                }
            </div>
            {
                movementToEdit ?
                    ""
                : <div className="m-1 md:m-4">
                    <label htmlFor="type">Type</label>
                    <select
                        id="type"
                        name="type"
                        className="focus:ring-indigo-500 my-1 h-8 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        onChange={handleSubmit}
                    >
                        <option hidden>~</option>
                        <option value="ENTRY">ENTRY</option>
                        <option value="EXIT">EXIT</option>
                    </select>
                    {
                        errors.type && (<p className="text-red-400">{errors.type}</p>)
                    }
                </div>
            }

            <div className="m-1 md:m-4">
                <div className="hidden sm:relative sm:flex items-center sm:pointer-events-none md:block">
                    <span className="absolute inset-y-0 left-0 pl-3 top-9 text-black sm:text-sm">$</span>
                </div>
                <label htmlFor="amount">Amount (Accept decimals. Ej: 100.50)</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={newMovement.amount}
                    onChange={handleSubmit}
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter amount"
                />
                {
                    errors.amount && (<p className="text-red-400">{errors.amount}</p>)
                }
            </div>
            <div className="m-1 md:m-4">
                <label htmlFor="category">Category</label>
                <div className="flex justify-around items-center">
                    <div className="w-2/4 mx-2 md:w-3/4 md:m-2/4 md:mx-2">
                        <select
                            name="category"
                            id="category"
                            autoComplete="feature"
                            onChange={handleSubmit}
                            className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        >
                            <option hidden>~</option>
                            {
                                stateRedux?.categories?.map(category =>
                                    <option 
                                        selected={
                                            newMovement.category === category.name ?
                                                true
                                            : false
                                        }
                                        key={category.name + useID}
                                    >
                                        {category.name}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <button
                        type="button"
                        className="mt-3 w-2/4 my-4 inline-flex justify-center rounded-md border border-black shadow-sm py-1 bg-lightBlue text-base outline-black hover:outline-white font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:my-0 sm:text-sm md:m-1/4"
                        onClick={() => setVisibleCategory(!visibleCategory)}
                    >
                        Add category?
                    </button>
                </div>
                <ModalCategory visibleCategory={visibleCategory} setVisibleCategory={setVisibleCategory} />
                {
                    errors.category && (<p className="text-red-400">{errors.category}</p>)
                }
            </div>
            <div className="m-1 md:m-4 relative">
                <label htmlFor="date">Select your day</label>
                <div className="flex justify-center">
                    <Calendar
                        onChange={handleDate}
                        value={newMovement.date}
                        calendarType="US"
                        className="rounded-lg p-2 my-2 bg-darkWhite"
                        name="date"
                    />
                </div>
                {
                    errors.date && (<p className="text-red-400">{errors.date}</p>)
                }
            </div>
            <div className={Object.values(errors).length === 0 || !errors.empty ? "hidden" : "block"}>
                <p className="text-red-400">{errors.date}</p>
            </div>
            <Buttons setVisible={setVisibleMovement} errors={errors} submit={onSubmit} />
        </form>
    )
}
