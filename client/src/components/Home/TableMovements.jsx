import React from 'react'
import { useSelector } from 'react-redux';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import ButtonsPage from './ButtonsPage';

export default function TableMovements() {

    const stateRedux = useSelector(state => state)
    const tableRef = React.createRef();
    const [data, setData] = React.useState(...stateRedux.movements.reverse());
    const [width, setWidth] = React.useState(900);

    React.useEffect(() => {
        if (movements.length > 0) {
            setData(movements.reverse());
        }
    }, [movements]);

    const [page, setPage] = React.useState(0);

    return (
        <div className='flex justify-center w-11/12 mx-auto'>
            <ButtonsPage />
            <table className='bg-gradient-to-r from-blue-300 to-blue-800 w-full my-12 text-center shadow-md shadow-black w-4/5 after:border-hidden before:border-hidden'>
                <tr>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Concept</td>
                    <td className='border-4 p-4 border-black hidden extraSM:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Type</td>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Amount</td>
                    <td className='border-4 p-4 border-black hidden md:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Date</td>
                    <td className='border-4 p-4 border-black hidden sm:table-cell bg-gradient-to-r from-blue-300 to-blue-500'>Category</td>
                    <td className='border-4 p-4 border-black bg-gradient-to-r from-blue-300 to-blue-500'>Accion</td>
                </tr>
                {
                    data.map(movement => {
                        return (
                            <tr>
                                <td className='border-2 p-2'>{movement.concept}</td>
                                <td className='border-2 p-2 hidden extraSM:table-cell'>{movement.type}</td>
                                <td className='border-2 p-2'>{movement.amount}</td>
                                <td className='border-2 p-2 hidden md:table-cell'>{movement.date}</td>
                                <td className='border-2 p-2 hidden sm:table-cell'>{movement.category}</td>
                                <td className='border-2 p-2'>{
                                    <div>
                                        HEllo
                                    </div>
                                }</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}