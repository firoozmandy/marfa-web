import useFramerTransition from "@/hooks/use-transition";
import SectionQuotation from "@/components/sections/section-quotation";
import PostData from "@/data/projects.json";
import { Helmet } from "react-helmet";

const post = PostData[0];
const featuredMedia = PostData[0].featuredmedia;
const featuredImageSizes = featuredMedia?.["media_details"];

const SingleProject = useFramerTransition(
  <>
    <Helmet>
      <title>پروژه تنها</title>
    </Helmet>
    <main className="relative mt-[4.5rem] lg:mt-[161px]">
      <div className="relative before:z-[1] before:absolute before:inset-0 flex flex-col justify-center items-center before:bg-foreground/75 px-4 py-16 h-96 lg:h-[30rem]">
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
        </div>
      </div>

      {(post?.acf?.project_feature_1_number ||
        post?.acf?.project_feature_1_text ||
        post?.acf?.project_feature_2_number ||
        post?.acf?.project_feature_2_text ||
        post?.acf?.project_feature_3_number ||
        post?.acf?.project_feature_3_text) && (
        <div className="relative z-[1] flex flex-wrap lg:flex-nowrap items-center lg:space-x-10 space-y-5 lg:space-y-0 -m-20 mx-auto mb-5 max-w-[50rem]">
          {post?.acf?.project_feature_1_number ||
          post?.acf?.project_feature_1_text ? (
            <div className="lg:flex-1 bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-950/20 p-12 rounded w-full">
              {post?.acf?.project_feature_1_number && (
                <span className="block mb-4 font-bold text-2xl text-green lg:text-[2.25rem]">
                  {post?.acf?.project_feature_1_number}
                </span>
              )}
              {post?.acf?.project_feature_1_text && (
                <span className="font-bold text-[1.0625rem] text-foreground dark:text-slate-400">
                  {post?.acf?.project_feature_1_text}
                </span>
              )}
            </div>
          ) : null}

          {post?.acf?.project_feature_2_number ||
          post?.acf?.project_feature_2_text ? (
            <div className="lg:flex-1 bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-950/20 p-12 rounded w-full">
              {post?.acf?.project_feature_2_number && (
                <span className="block mb-4 font-bold text-2xl text-green lg:text-[2.25rem]">
                  {post?.acf?.project_feature_2_number}
                </span>
              )}
              {post?.acf?.project_feature_2_text && (
                <span className="font-bold text-[1.0625rem] text-foreground dark:text-slate-400">
                  {post?.acf?.project_feature_2_text}
                </span>
              )}
            </div>
          ) : null}

          {post?.acf?.project_feature_3_number ||
          post?.acf?.project_feature_3_text ? (
            <div className="lg:flex-1 bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-950/20 p-12 rounded w-full">
              {post?.acf?.project_feature_3_number && (
                <span className="block mb-4 font-bold text-2xl text-green lg:text-[2.25rem]">
                  {post?.acf?.project_feature_3_number}
                </span>
              )}
              {post?.acf?.project_feature_3_text && (
                <span className="font-bold text-[1.0625rem] text-foreground dark:text-slate-400">
                  {post?.acf?.project_feature_3_text}
                </span>
              )}
            </div>
          ) : null}
        </div>
      )}

      <section className="pt-16 pb-24">
        <div className="container">
          <article
            className="mx-auto max-w-[50rem] prose-headings:text-foreground dark:prose-invert prose prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></article>
        </div>
      </section>
      <SectionQuotation />
    </main>
  </>,
);

export default SingleProject;
