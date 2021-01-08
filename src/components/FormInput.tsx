interface Props {
  asterisk: boolean;
  label: string;
  textarea: boolean;
  type: string;
  placeholder: string;
}

const FormInput: React.FC<Props> = ({
  asterisk,
  label,
  textarea,
  type,
  placeholder,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      {label ? <label>{asterisk ? `${label}*` : label}</label> : null}
      {textarea ? (
        <textarea className="form-input" {...otherProps}></textarea>
      ) : (
        <input
          className="w-full p-2 border border-black rounded form-input"
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
