export default function AllNames({ user, setData }) {
  return (
    <div onClick={() => setData(user.profile.firstName, user.profile.lastName)}>
      <h1>{user.profile.firstName + " " + user.profile.lastName}</h1>
    </div>
  );
}
