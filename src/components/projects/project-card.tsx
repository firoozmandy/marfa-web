import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
  project: Post;
};

const ProjectCard = ({ project }: Props) => {
  const featuredMedia = project.featuredmedia;
  const featuredImageSizes = featuredMedia?.["media_details"];
  const categories = project?.categories;

  return (
    <article className="hover:top-0 hover-shadow rounded-lg overflow-hidden">
      <figure className="relative overflow-hidden">
        {categories && (
          <div className="top-0 left-0 z-[1] absolute flex space-x-1.5 p-8 font-medium text-xs">
            {categories.map((category) => <span className="bg-slate-850/80 px-3 py-1 rounded text-white" key={category.id}>
              {category.name}
              </span>
            )}
          </div>
        )}
        <Link
          to={`/single-project`}
          className="after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-950/75 after:via-transparent after:via-50% group"
        >
          {featuredMedia && featuredImageSizes && (
            <>
              <img
                src={featuredImageSizes?.["source_url"]}
                alt={featuredMedia.alt_text}
                width={featuredImageSizes.width}
                height={featuredImageSizes.height}
                className="group-hover:scale-105 will-change-transform transition-transform duration-1600"
              />
            </>
          )}
        </Link>
        <h2 className="bottom-0 absolute mb-0 px-8 py-6 font-bold text-white text-xl hover:text-primary">
          <Link
            to={`/single-project`}
            dangerouslySetInnerHTML={{ __html: project?.title?.rendered }}
          />
        </h2>
      </figure>
      <div className="bg-white dark:bg-slate-800 p-10 rounded-b-lg">
        {(project?.acf?.project_feature_1_number ||
          project?.acf?.project_feature_1_text ||
          project?.acf?.project_feature_2_number ||
          project?.acf?.project_feature_2_text) && (
          <div className="flex flex-wrap lg:flex-nowrap items-center mb-5">
            <div className="lg:flex-1 p-3 lg:border-r w-full text-center">
              {project?.acf?.project_feature_1_number && (
                <span className="block font-bold text-2xl text-green lg:text-[2.25rem]">
                  {project?.acf?.project_feature_1_number}
                </span>
              )}
              {project?.acf?.project_feature_1_text && (
                <span className="font-bold text-[1.0625rem]">
                  {project?.acf?.project_feature_1_text}
                </span>
              )}
            </div>
            <div className="lg:flex-1 p-3 w-full text-center">
              {project?.acf?.project_feature_2_number && (
                <span className="block font-bold text-2xl text-green lg:text-[2.25rem]">
                  {project?.acf?.project_feature_2_number}
                </span>
              )}
              {project?.acf?.project_feature_2_text && (
                <span className="font-bold text-[1.0625rem]">
                  {project?.acf?.project_feature_2_text}
                </span>
              )}
            </div>
          </div>
        )}

        {project?.excerpt?.rendered && (
          <div
            dangerouslySetInnerHTML={{ __html: project?.excerpt?.rendered }}
          ></div>
        )}
        <a
          href={`/projects/${project.slug}`}
          className="inline-flex items-center mt-6 font-bold text-secondary text-sm hover:text-primary"
        >
         مشاهده این مورد
          <ChevronRightIcon width={20} height={20} className="ml-4 rotate-180" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
