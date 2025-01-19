import useFramerTransition from "@/hooks/use-transition";
import BlogComments from "@/components/blog-comments";
import { getDate } from "@/lib/utils";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faReddit,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "@/components/social-icon";
import PostData from "@/data/posts.json"
import {Helmet} from "react-helmet"

const post = PostData[0]
const postURL = new URL(`https://wordpress-597675-3975829.cloudwaysapps.com/get-organized-technology-is-your-friend/`);
const featuredMedia = PostData[0].featuredmedia;
const author = post?.author;
const featuredImageSizes = featuredMedia?.["media_details"];

const SinglePost = useFramerTransition(
	<>
		<Helmet>
			<title>Single Post</title>
		</Helmet>
		<main className="relative mt-[4.5rem] lg:mt-[161px]">
			<div className="relative before:z-[1] before:absolute before:inset-0 flex flex-col justify-center items-center before:bg-foreground/75 px-4 py-20 sm:h-96 lg:h-[30rem]">
				{featuredMedia && featuredImageSizes && (
					<img
						src={featuredImageSizes?.["source_url"]}
						alt={featuredMedia.alt_text}
						className="absolute inset-0 mb-6 w-full h-full object-cover"
					/>
				)}
				<div className="relative z-[1] mx-auto max-w-4xl text-center">
					<h1
						className="mb-5 text-white lg:text-5xl"
						dangerouslySetInnerHTML={{ __html: post.title.rendered }}
					></h1>
					{author && (
						<div className="inline-flex flex-nowrap items-center font-medium text-base text-white lg:text-md">
							<img
								src={author.avatar_urls[48]}
								alt={author.name}
								width={48}
								height={48}
								className="mr-4 rounded-full"
							/>
							<span itemProp="author" itemType="https://schema.org/Person">
								{"by "}
								{author.name}
							</span>
							<span className="block">
								<span className="inline-block mx-2">-</span>
								{getDate(post.modified)}
							</span>
						</div>
					)}
				</div>
			</div>
			<section className="pt-16 pb-24 border-b">
				<div className="container">
					<div className="mx-auto max-w-[50rem]">
						<div className="flex items-center mb-4">
							<span className="inline-block mr-3 mb-2 font-medium text-sm">
								ارسال:
							</span>
							<div className="flex space-x-1">
								<SocialIcon
									icon={faXTwitter}
									url={`https://twitter.com/intent/tweet?url=${postURL}&text=${encodeURI(
										post.title.rendered,
									)}`}
								/>
								<SocialIcon
									icon={faFacebook}
									url={`https://www.facebook.com/sharer.php?u=${postURL}`}
									className="bg-[#324e8c]"
								/>
								<SocialIcon
									icon={faLinkedin}
									url={`https://www.linkedin.com/shareArticle?mini=true&url=${postURL}`}
									className="bg-[#0a66c2]"
								/>
								<SocialIcon
									icon={faReddit}
									url={`https://www.reddit.com/submit?url=${postURL}`}
									className="bg-[#ff4500]"
								/>
								<SocialIcon
									icon={faWhatsapp}
									url={`whatsapp://send?text=${postURL}`}
									className="bg-[#25d366]"
								/>
								<SocialIcon
									icon={faEnvelope}
									url={`mailto:?subject=${post.title.rendered}&body=${postURL}`}
									className="bg-slate-500"
								/>
							</div>
						</div>
					</div>
					<article
						className="mx-auto max-w-[50rem] prose-headings:text-foreground dark:prose-invert post-content prose prose-lg"
						dangerouslySetInnerHTML={{ __html: post.content.rendered }}
					></article>

					<div className="mx-auto mt-12 max-w-[50rem] color-scheme-initial">
						<BlogComments post={post} />
					</div>
				</div>
			</section>
		</main>
	</>
)

export default SinglePost