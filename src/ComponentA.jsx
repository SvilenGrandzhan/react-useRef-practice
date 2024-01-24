import PropTypes from "prop-types";

export default function ComponentA({ elRef }) {
  return (
    <p>
      Input Value in Component A:
      <input
        placeholder="New Value"
        className="border border-black rounded-md m-1"
        ref={elRef}
      />
    </p>
  );
}

ComponentA.propsTypes = {
  elRef: PropTypes.string,
};
