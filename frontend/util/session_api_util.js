export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user:
      {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password
      }
    }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user:
      {
        username: user.username,
        password: user.password,
     }
    }
  })
);

export const demoLogin = () => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user:
      {
        username: 'DemoUser',
        password: 'DemoPassword09182020',
      }
    }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);

export const getUser = () => (
  $.ajax({
    url: 'api/users/'
  })
)