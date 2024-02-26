import "./InputFields.scss";
import { inputData } from "../../shared/data/inputData";
import React, { useState } from "react";

interface InputFieldsProps {
  group: string;
}

const InputFields: React.FC<InputFieldsProps> = ({ group }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form>
      <h2>{group}</h2>
      {inputData
        .filter((data) => data.group === group)
        .map((data) => (
          <div key={data.label}>
            <label>
              <p>{data.label}</p>
              {data.label === "Password" ? (
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue={data.defaultValue}
                />
              ) : (
                <input type="text" defaultValue={data.defaultValue} />
              )}
            </label>
          </div>
        ))}
      {group === "user" && (
        <div>
          <label>
            Show Password:
            <input type="checkbox" onChange={togglePasswordVisibility} />
          </label>
        </div>
      )}
      <button type="submit" className="global-button">
        {group}
      </button>
    </form>
  );
};

export default InputFields;
