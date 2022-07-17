import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";

import { regions, tags, types } from "../utils/constants/event";
import { isValidDate } from "../utils";
import SelectInput from "./UI/SelectInput";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Chip from "./UI/Chip";

function FiltersModal({ open, toggleModal, handleFilter }) {
  const [chips, setChips] = useState([]);
  const regionRef = useRef();
  const typeRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const handleAddChip = (e) => {
    if (!chips.includes(e.target.value)) {
      setChips((prevChips) => [...prevChips, e.target.value]);
    }
  };

  const handleDeleteChip = (chipToRemove) => {
    setChips((prevChips) => {
      return prevChips.filter((chip) => chip !== chipToRemove);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let startDate = startDateRef.current?.value;
    let endDate = endDateRef.current?.value;

    // validate entered dates
    if (isValidDate(startDate)) {
      startDate = new Date(startDate).toISOString();
    }

    if (isValidDate(endDate)) {
      endDate = new Date(endDate).toISOString();
    }

    handleFilter({
      region: regionRef.current.value,
      type: typeRef.current.value,
      startDate,
      endDate,
      tags: chips,
    });

    setChips([]);
  };

  return (
    <Modal open={open} onClose={toggleModal}>
      <h1 className="text-xl md:text-2xl font-medium capitalize mt-7 truncate">
        Filter Events
      </h1>

      <form onSubmit={handleSubmit} className="mt-5">
        <SelectInput
          id="region"
          labelText="Event Region"
          defaultOption="Select a region"
          className="mt-9"
          ref={regionRef}
          options={regions}
        />

        <SelectInput
          id="type"
          labelText="Event Type"
          defaultOption="Select a type"
          className="mt-9"
          ref={typeRef}
          options={types}
        />

        <div className="mt-9 md:flex gap-5">
          <Input
            type="date"
            id="startDate"
            labelText="Start date"
            ref={startDateRef}
          />

          <Input
            type="date"
            id="endDate"
            labelText="End date"
            className="mt-9 md:mt-0"
            ref={endDateRef}
          />
        </div>

        <SelectInput
          id="tags"
          labelText="Tags"
          defaultOption="Select tags (can be multiple)"
          className="mt-9"
          options={tags}
          onChange={handleAddChip}
        />

        <div className="flex flex-wrap mt-3">
          {chips.map((chip, index) => (
            <Chip
              key={index}
              text={chip}
              type="warning"
              icon={
                <MdOutlineClose
                  className="cursor-pointer"
                  onClick={() => handleDeleteChip(chip)}
                />
              }
            />
          ))}
        </div>

        <Button type="submit" text="Submit" className="mt-10 w-full" />
      </form>
    </Modal>
  );
}

export default FiltersModal;
