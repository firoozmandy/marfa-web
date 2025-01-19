import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarEmpty } from "@heroicons/react/24/outline"

type StarRatingProps = {
  value?: number
}

const StarRating = ({value } : StarRatingProps ) => {
  const stars = []
  const filledStars = Math.floor(Number(value))

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star">
        <StarIcon width={18} height={18} className="fill-yellow" />
      </span>
    )
  }

  const emptyStars = 5 - stars.length
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="star">
        <StarEmpty width={18} height={18} className="stroke-yellow" />
      </span>
    )
  }

  return <div className="flex">{stars}</div>
}

export default StarRating
