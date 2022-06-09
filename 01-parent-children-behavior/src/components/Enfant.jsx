const Enfant = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <button
        disabled={props.parentState.disabled}
        onClick={() => props.reponseEnfant("D'accord tout de suite")}
      >
        Répondre
      </button>

      <p>{props.parentState.messageEnfant}</p>
    </div>
  );
};

export default Enfant;
