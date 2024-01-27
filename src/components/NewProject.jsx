import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const custModal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      custModal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={custModal} buttonText="Close">
        <h2 className="text-xl font-bold mb-4 text-stone-700">Invalid Input</h2>
        <p className="text-stone-500 mb-3">
          Oops... looks like you forgot to enter some values !
        </p>
        <p className="text-stone-500 mb-3">
          Please make sure provide some values for every input fields
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} isTextArea />
          <Input type="date" ref={dueDate} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
