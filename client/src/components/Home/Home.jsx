import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { loadUser, loadMovements, loadCategories } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import NoSession from '../NoSession'
import ContainButtons from './Filters/ContainButtons'
import ModalMovement from './Movement/ModalMovement'
import Total from './Total'

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
                        <ContainButtons />
                        <ModalMovement visibleMovement={visibleMovement} setVisibleMovement={setVisibleMovement} />
                        <Total />
                        <button onClick={() => setVisibleMovement(!visibleMovement)}>Add Move</button>
                    </div>
                : <NoSession />
            }
            
        </main>
    )
}