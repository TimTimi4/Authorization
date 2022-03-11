const Login = () => {
  const CLIENT_ID = 'fae8d4b9598a92c1fc1f'
  const REDIRECT_URI = 'http://localhost:3000'
  const oauthUrl = 'https://github.com/login/oauth/authorize'
  const authLink = `${oauthUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&path=/&scope=user:email`

  return (
    <a href={authLink}>
      Login by github
    </a>
  )
}

export default Login
