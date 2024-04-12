import React from 'react';

export const AuthLogin = React.forwardRef(({ errorMsg, label, ...rest }, ref) => {
  return (
    <div className="">
      <div className="">
        <label htmlFor="firstName">{label}</label>
        <input className="border w-full mt-2 rounded-md py-1" ref={ref} {...rest} />
        {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}
      </div>
    </div>
  );
});
