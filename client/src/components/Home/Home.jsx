import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { loadUser, loadMovements, loadCategories } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import NoSession from '../NoSession'
import ContainButtons from './Filters/ContainButtons'
import ModalMovement from './Movement/ModalMovement'
import Total from './Total'
import TableMovements from './TableMovements'

export default function Home() {

    const dispatch = useDispatch()
    const stateRedux = useSelector(state => state)
    const { user, isAuthenticated } = useAuth0()
    const [ visibleMovement, setVisibleMovement] = React.useState(false)

    React.useEffect(() => {
        if(isAuthenticated) {
            dispatch(loadUser(user.email))
        }
    }, [isAuthenticated, dispatch, user])
    
    React.useEffect(() => {
        dispatch(loadMovements(stateRedux.user.id))
        dispatch(loadCategories(stateRedux.user.id))
    }, [stateRedux.user.id, dispatch])

    return (
        <main>
            {
                isAuthenticated ?
                    <div>
                        <Total />
                        <div className='flex justify-center mt-8'>
                            <button onClick={() => setVisibleMovement(!visibleMovement)} className='w-4/12 shadow-md shadow-black inline-flex justify-center rounded-md border border-transparent bg-lightBlue text-base font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm sm:px-2 sm:py-1'
                            >Add Move
                            </button>
                        </div>
                        <ModalMovement visibleMovement={visibleMovement} setVisibleMovement={setVisibleMovement} />
                        <ContainButtons />
                        <TableMovements />
                    </div>
                : <NoSession />
            }
            
        </main>
    )
}