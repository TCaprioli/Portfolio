export const Tech = (props: { name: string }) => {
  return (
    <div className="border basis-2/5 md:basis-1/5 bg-opacity-0 rounded-full border-charcoal text-center px-4 mx-1 my-2 hover:border-cherry hover:text-cherry">
      {props.name}
    </div>
  )
}
