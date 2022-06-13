function Profile({ user }) {
  if (!user) {
    return <>Loading</>;
  }

  return (
    <div>
      <h1>Profile for {user.name}</h1>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Birthday: {user.birthday}</h3>
      {user.is_admin ? <h3>Account Type: Administrator</h3> : <h3>Account Type: Member</h3>}
    </div>
  );
}

export default Profile;
