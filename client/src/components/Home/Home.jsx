import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { loadUser, loadMoves } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import NoSession from '../NoSession'
import ContainButtons from './Filters/ContainButtons'
import ModalMove from './AddMove/ModalMove'

export default function Home() {

    const dispatch = useDispatch()
    const stateRedux = useSelector(state => state)
    const { user, isAuthenticated } = useAuth0()
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        if(isAuthenticated) {
            dispatch(loadUser(user.email))
        }
    }, [user, dispatch, isAuthenticated])

    React.useEffect(() => {
        dispatch(loadMoves(stateRedux.user.id))
    }, [stateRedux.user.id, dispatch])

    return (
        <main>
            {
                isAuthenticated ?
                    <div>
                        <ContainButtons />
                        <ModalMove open={open} setOpen={setOpen} />
                        <button onClick={() => setOpen(!open)}>Add Move</button>
                    </div>
                : <NoSession />
            }
            
        </main>
    )
}