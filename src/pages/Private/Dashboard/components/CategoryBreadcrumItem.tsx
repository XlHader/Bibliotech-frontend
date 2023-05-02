import { useDashboard } from "../hooks"
import { ApiCategory } from "../models"

interface Props {
  category: ApiCategory
}

export default function CategoryBreadcrumbItem({ category }: Props) {
  const { name } = category
  const { setSelectedCategory, selectedCategory } = useDashboard()

  const handleClick = () => {
    selectedCategory.id === category.id
      ? setSelectedCategory({} as ApiCategory)
      : setSelectedCategory(category)
  }

  return (
    <button className={selectedCategory.id !== category.id ? 'opacity-60' : ''} onClick={handleClick}>
      {name}
    </button>
  )
}