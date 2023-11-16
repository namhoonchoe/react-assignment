const ListCard = ({ title, thumbImgUrl, content }) => {
  return (
    <div className="w-96 aspect-video px-6 py-8 flex flex-row justify-start items-center bg-base-100 shadow-xl rounded-xl  gap-x-6">
      <div className="w-40 h-40 flex items-center justify-center rounded-xl overflow-hidden grow ">
        <img
          className="w-full h-full"
          src={`https://www.visitbusan.net/${thumbImgUrl}`}
          alt="Movie"
        />
      </div>
      
      <div className="flex flex-col justify-between items-start p-0 w-[158px] h-[154px] ">
      <h2 className="w-full text-md font-bold font-sans text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h2>
        <div className="w-full flex justify-start items-center gap-2">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m18.157 16.882-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 1 1 12.314 0ZM14.5 11a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
              fill="#8E8E8E"
            />
          </svg>
          
        </div>
        <div className="card-actions justify-end">
          <p className="w-[158px] h-[64px] text-ellipsis overflow-hidden ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
