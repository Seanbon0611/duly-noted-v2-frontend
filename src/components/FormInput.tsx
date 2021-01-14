interface Props {
  asterisk?: boolean;
  label?: string;
  textarea?: boolean;
  type?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}

const FormInput: React.FC<Props> = ({
  asterisk,
  label,
  textarea,
  type,
  placeholder,
  handleChange,
  value,
  name,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      {label ? <label>{asterisk ? `${label}*` : label}</label> : null}
      {textarea ? (
        <textarea className="form-input" {...otherProps}></textarea>
      ) : (
        <input
          className="p-2 border border-gray-700 rounded form-input"
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
        />
      )}
    </div>
  );
};

export default FormInput;
