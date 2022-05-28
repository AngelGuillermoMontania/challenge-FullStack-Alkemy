import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { loadUser } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import NoSession from '../NoSession'

export default function Home() {

    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0()

    React.useEffect(() => {
        if(isAuthenticated) dispatch(loadUser(user.email))
    }, [user, dispatch, isAuthenticated])

    return (
        <main>
            {
                isAuthenticated ?
                    <div>
                        <button>All</button>
                        <button>All</button>
                    </div>
                : <NoSession />
            }
            
        </main>
    )
}