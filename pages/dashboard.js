import useAuth from 'src/hooks/useAuth'

const Dashboard = () => {
  const { user, signout } = useAuth()

  return (
    <>
      <h1>Bem vindo {user?.name} </h1>
      <button onClick={() => signout()}>logout</button>
    </>
  )
}

export default Dashboard
