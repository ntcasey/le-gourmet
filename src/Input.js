import React from "react";
import clsx from "clsx";

export default function Input({
  placeholder,
  className,
  type = "default",
  required,
  ...rest
}) {
  const name = clsx({ input: true }, className);

  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input
          className={name}
          required={required}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </label>
  );
}
