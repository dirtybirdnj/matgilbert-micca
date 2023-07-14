import {categories} from "@/public/categories"
import PostCategories from "@/components/PostData/PostCategories"
const CategoriesWidget = () => {
	return <div>
		{<PostCategories categories={categories} />}
	</div>
}

export default CategoriesWidget