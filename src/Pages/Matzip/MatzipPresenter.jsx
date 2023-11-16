import PropTypes from "prop-types";
import React from "react";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

const MatzipCard = ({ title, thumbImgUrl, address }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl grow-[5] ">
      <figure className="grow-[4]">
        <img
          className="w-full  aspect-[4/3]"
          src={`https://www.visitbusan.net/${thumbImgUrl}`}
          alt="Food"
        />
      </figure>
      <div className="card-body p-6 grow">
        <h2 className="card-title text-xl	grow">{title}</h2>
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
          <div className="card-actions justify-end">
            <p className="w-full h-1/4 grow text-ellipsis overflow-hidden text-sm text-slate-500 ">
              {address}
            </p>
          </div>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default function MatzipPresenter({ foodListData, isLoading, error }) {
  if (foodListData !== undefined) {
    return (
      <section className="presenter-grid">
        {foodListData.map((matzipData) => {
          return (
            <MatzipCard
              key={matzipData.uc_seq}
              thumbImgUrl={matzipData.main_img_t}
              title={matzipData.name}
              address={matzipData.addr1}
            />
          );
        })}
      </section>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <></>;
  }
}

MatzipPresenter.propTypes = {
  foodListData: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};
