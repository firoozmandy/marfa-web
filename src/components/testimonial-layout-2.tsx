import StarRating from "./star-rating";

type TestimonialProps = {
  testimonial: Testimonial;
};

const TestimonialLayout2 = ({
  testimonial: { name, company, comment, image, rating,id },
}: TestimonialProps) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-5 bg-white dark:bg-slate-850 shadow-sm px-10 py-12 p-12 rounded-xl">
      {(image || name || company) && (
        <>
          {image && (
            <img
              src={image}
              alt={`Testimonial of ${name}`}
              className="rounded-xl w-28 lg:w-auto self-start shrink-0"
              width={168}
              height={168}
            />
          )}
          {/* <div className="flex justify-center items-center border-[5px] border-white dark:border-slate-700 bg-primary -mt-4 md:mb-0 -ml-14 rounded-full w-16 md:w-16 h-16 shrink-0">
            <svg
              width="22"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
            >
              <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z"></path>
            </svg>
          </div> */}
          {name || company || rating || comment ? (
            <div className="testimonial__info">
              {rating && (
                <div className="mb-3">
                  <StarRating value={rating} />
                </div>
              )}
              {comment && <p className="mb-5 text-md">{comment}</p>}
              {name && (
                <span className="block mb-0 font-bold text-foreground text-xs dark:text-white">
                  {name}
                </span>
              )}
              {company && (
                <span className="font-medium text-[.8125rem] text-slate-400 dark:text-slate-300 tracking-tight">
                  {company}
                </span>
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default TestimonialLayout2;
