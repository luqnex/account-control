import { Dialog } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";

interface ModalProps {
  expenseId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormDelete = ({ expenseId, setOpen }: ModalProps) => {
  return (
    <>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationTriangleIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Excluir está conta?
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Ao clicar em excluir sua conta será deletada!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Form
        method="post"
        className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
      >
        <input
          type="hidden"
          name="formDeleteExpense"
          defaultValue="formDeleteExpense"
        />
        <input type="hidden" value={expenseId} name="expenseId" />
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Excluir
        </button>
        <button
          type="button"
          className="border border-[black]/[.4] mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </Form>
    </>
  );
};
