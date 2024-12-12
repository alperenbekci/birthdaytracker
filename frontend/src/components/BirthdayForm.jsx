import { useState } from "react";
import { useCreateBirthday } from "../hooks/useCreateBirthday";

const BirthdayForm = ({ isOpen, onClose }) => {
  const { createBirthday, error, emptyFields } = useCreateBirthday();

  const [name, setName] = useState("");
  const [type, setType] = useState("friend");
  const [dates, setDates] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const birthday = { name, type, dates };
    const result = await createBirthday(birthday);

    if (result.success) {
      setName("");
      setType("friend");
      setDates("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form className="create" onSubmit={handleSubmit}>
          <h3>Add a New Birthday</h3>
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={emptyFields.includes("name") ? "error" : ""}
          />
          <div className="select-container">
            <label>Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={emptyFields.includes("type") ? "error" : ""}
            >
              <option value="friend">Friend</option>
              <option value="family">Family</option>
              <option value="colleague">Colleague</option>
            </select>
          </div>

          <label>Dates:</label>
          <input
            type="date"
            onChange={(e) => setDates(e.target.value)}
            value={dates}
            className={emptyFields.includes("dates") ? "error" : ""}
          />
          <button>Add Birthday</button>
          {error && <div className="error">{error}</div>}
        </form>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default BirthdayForm;
