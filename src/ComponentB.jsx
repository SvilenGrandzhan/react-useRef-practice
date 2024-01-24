import { useState } from "react";
import PropTypes from "prop-types";

export default function ComponentB({ getRefFrom }) {
  const [value, setValue] = useState("");

  const submit = () => setValue(getRefFrom.current?.value);

  return (
    <p>
      <button
        className="border border-black"
        type="button"
        onClick={submit}
      >
        Click Here
      </button>{" "}
      to get the COMPONENT A value via ref: {value}
    </p>
  );
}

ComponentB.propsType = {
  getRefFrom: PropTypes.string,
};
