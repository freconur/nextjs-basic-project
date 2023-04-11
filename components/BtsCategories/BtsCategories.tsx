
type Props = {
  btsCategories: BtsCategories[];
}

const BtsCategories = ({ btsCategories }: Props) => {

  return (
    <ul className="grid grid-cols-2 gap-2 m-2">
      {btsCategories.map((btsCategory) => {
        return (
          <li key={btsCategory.id}>
            <div className="relative">
              <img className="" src={btsCategory.image} alt={btsCategory.name} />
              <h3 className="">{btsCategory.name}</h3>
            </div>
          </li>
        )
      })
      }
    </ul>
  )
};

export default BtsCategories;