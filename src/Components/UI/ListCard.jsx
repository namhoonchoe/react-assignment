const ListCard = ({ title, thumbImgUrl, content }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img
          className="w-full h-full"
          src={`https://www.visitbusan.net/${thumbImgUrl}`}
          alt="Movie"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl	grow">{title}</h2>
        <p className="w-full h-1/4 grow text-ellipsis overflow-hidden text-sm text-slate-500 ">
          {content}
        </p>
        
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ListCard;
