import {useAuth} from '../context/AuthContext'

function ProfilePage() {

  const {user} = useAuth()

  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default ProfilePage