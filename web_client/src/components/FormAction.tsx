type Props = {
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void,
  type?: string,
  action?: string,
  text: string
}

const FormAction = ({
  handleSubmit,
  type='button',
  action='submit',
  text
}: Props) => {
  return(
    <>
      {
        type === 'button' ?
        <button
          type={action as "button" | "submit" | "reset" | undefined}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
        :
        <></>
      }
    </>
  )
}

export default FormAction
