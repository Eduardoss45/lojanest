const Input = ({type, id, text, icon}) => {
  return (
    <>
      <input type={type} name={id} id={id} placeholder={text} />
      {icon && <span>{icon}</span>}
    </>
  );
};

export default Input;
