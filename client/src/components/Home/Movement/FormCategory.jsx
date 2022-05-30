import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validate from '../../../validators/validateCreateCategory'
import { createCategory } from '../../../redux/actions';
import Buttons from './Buttons';

export default function FormCategory({setVisibleCategory}) {

    const userDB = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [errors, setErrors] = React.useState({
        empty: false
    });
    const [newMove, setNewMove] = React.useState({
        id: userDB.id,
        category: ""
    });

    const handleSubmit = (event) => {
        setNewMove({
            ...newMove,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...newMove,
            [event.target.name]: event.target.value
        }))
    };

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            if(!errors.empty) {
                return
            } else {
                dispatch(createCategory(newMove))
                setVisibleCategory(false)
            }
        } catch (error) {
            console.log(error.message)
            return
        }
    };

    return (
        <form>
            <div className='m-1 md:m-4'>
                <label htmlFor='category'>Concept</label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={newMove.category}
                    onChange={handleSubmit}
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your concept"
                />
                {
                    errors.category && (<p className='text-red-400'>{errors.category}</p>)
                }
            </div>
            <Buttons setVisible={setVisibleCategory} errors={errors} submit={onSubmit} />
        </form>
    )
}
