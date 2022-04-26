import useAuth from '../hooks/useAuth'

export default function Home() {
  const { user, signinGitHub, signinGoogle } = useAuth()
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <button onClick={() => signinGitHub()}>Entrar com Github</button>
      </div>
      <div>
        <button onClick={() => signinGoogle()}>Entrar com Google</button>
      </div>
    </div>
  )
}
