export default function User(props: any) {
  const { id, email, first_name, last_name, avatar, deleteUser } = props;

  return (
    <>
      <p>{id}</p>
      <p>{email}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <img src={avatar} alt={first_name} />
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
