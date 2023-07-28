import PostDate from "@/components/PostData/PostDate"
import ReadingTime from "@/components/PostData/ReadingTime"
import Separator from "@/components/PostData/Separator"
import PostCategories from "@/components/PostData/PostCategories"

const PostDataTop = ({categories, date, content, className=""}) => {
	return <div className={`flex flex-wrap gap-3 items-center ${className}`}>
		<PostCategories categories={categories}/>
		<div className="text-sm data-color flex items-center ">
			<PostDate date={date} />
			<br/>
			<Separator />
			<ReadingTime content={content} />
		</div>
	</div>

}

export default PostDataTop