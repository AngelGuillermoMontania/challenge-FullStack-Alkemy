import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovement } from '../../redux/actions';
import ButtonsPage from './ButtonsPage';
import ButtonsFilter from './Filters/ButtonsFilter';
import ModalMovement from './Movement/ModalMovement';

export default function TableMovements() {

    const dispatch = useDispatch()
    const [ visibleMovementEdit, setVisibleMovementEdit] = React.useState(false)
    const [ movementToEdit, setMovementToEdit] = React.useState('')
    const movements = useSelector(state => state.movements)
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
        if (movements.length > 0) {
            setData([...movements]);
        }
    }, [movements]);

    return (
        <div className='flex justify-center items-center flex-col w-11/12 mx-auto mt-6 lg:w-full'>
            
            <ModalMovement visibleMovement={visibleMovementEdit} setVisibleMovement={setVisibleMovementEdit} movementToEdit={movementToEdit}/>
            
            <ButtonsFilter />

            <table className='bg-gradient-to-r from-blue-300 to-blue-800 w-full mb-4 text-center shadow-md shadow-black w-4/5 after:border-hidden before:border-hidden'>
                <tr>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Concept</td>
                    <td className='border-4 p-4 border-black hidden extraSM:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Type</td>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Amount</td>
                    <td className='border-4 p-4 border-black hidden md:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Date</td>
                    <td className='border-4 p-4 border-black hidden sm:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Category</td>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Accion</td>
                </tr>
                {
                    data.slice(page,page + 10).map(movement => {
                        return (
                            <tr key={movement.id}>
                                <td className='border-2 p-2'>{movement.concept}</td>
                                <td className='border-2 p-2 hidden extraSM:table-cell'>{movement.type}</td>
                                <td className='border-2 p-2'>{movement.amount}</td>
                                <td className='border-2 p-2 hidden md:table-cell'>{movement.date}</td>
                                <td className='border-2 p-2 hidden sm:table-cell'>{movement.Category.name}</td>
                                <td className='border-2 p-2'>{
                                    <div className='flex flex-col w-full h-full justify-around sm:flex-row'>
                                        <button 
                                            className='inline-flex justify-center my-2 rounded-md border border-transparent shadow-md shadow-black bg-lightBlue text-base font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm sm:px-2 sm:py-1'
                                            onClick={() => {
                                                setMovementToEdit(movement)
                                                setVisibleMovementEdit(!visibleMovementEdit)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        
                                        <button 
                                            className='inline-flex justify-center my-2 rounded-md border border-transparent shadow-md shadow-black bg-red-700 text-base font-medium ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm sm:px-2 sm:py-1'
                                            onClick={() => {
                                                dispatch(deleteMovement(movement.id))
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                }</td>
                            </tr>
                        )
                    })
                }
            </table>
            <ButtonsPage movements={data} setPage={setPage}/>
        </div>
    )
}