import { Breadcrumbs } from "@material-tailwind/react";
import CategoryBreadcrumbItem from "./CategoryBreadcrumItem";

import { useDashboard } from "../hooks";

export default function CategoryBreadcrumb() {
  const { categories } = useDashboard()

  return (
    <div className="flex justify-center items-center mt-10">
      <Breadcrumbs>
        {categories.map(category => <CategoryBreadcrumbItem category={category} key={category.id} />)}
      </Breadcrumbs>
    </div>
  );
}