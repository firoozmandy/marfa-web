import { Link } from "react-router-dom"
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { getDateDay, getDateMonth } from "@/lib/utils";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const featuredMedia = post.featuredmedia;
  const featuredImageSizes = featuredMedia?.["media_details"];
  const categories = post?.categories;

  return (
    <article
      className="hover-shadow overflow-hidden rounded-lg bg-white dark:bg-slate-850"
      itemType="https://schema.org/Article"
    >
      <figure className="after: relative overflow-hidden">
        <Link to="/single-post" className="group">
          {featuredMedia && featuredImageSizes && (
            <img
              src={featuredImageSizes?.["source_url"]}
              alt={featuredMedia.alt_text}
              width={featuredImageSizes.width}
              height={featuredImageSizes.height}
              className="transition-transform duration-1600 will-change-transform group-hover:scale-105"
            />
          )}
          {post.modified && (
            <div className="pointer-events-none absolute left-4 top-4 rounded bg-white px-4 py-3 text-center font-medium leading-none text-foreground">
              <span className="block text-md">{getDateDay(post.modified)}</span>
              <span className="text-[0.625rem] uppercase tracking-wider">
                {getDateMonth(post.modified)}
              </span>
            </div>
          )}
        </Link>
      </figure>
      <div className="rounded-b-lg p-10">
        <h2 className="mb-4 text-xl font-bold">
          <Link
            className="hover:text-primary"
            to="/single-post"
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
        </h2>
        {categories && (
          <>
            <div className="mb-5 flex">
              <BookmarkIcon width={15} className="mr-1 stroke-primary" />
              <div className="space-x-2 text-xs font-medium text-foreground dark:text-white">
                {categories.map((category) => <span key={category.id}>{category.name}</span> )}
              </div>
            </div>
          </>
        )}

        {post?.excerpt?.rendered && (
          <div
            dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          ></div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
