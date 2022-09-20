import React from "react";

const Input = ({name, type, placeholder, register, errors}) => {
  return (
    <div className="w-full">
      <input
        {...register(name, { required: true, min: 1 })}
        type={type}
        className="input-field"
        placeholder={placeholder}
      />
      {errors[name] && <span className="ml-6 mt-2 block text-red-700 text-sm"> { name } is required</span>}
    </div>
  );
};

export default Input;