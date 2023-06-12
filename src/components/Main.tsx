import atlassianIcon from "../assets/Atlassian Icon.svg";
import behanceIcon from "../assets/Behance Icon.svg";
import bingIcon from "../assets/Bing Icon.svg";
import bitbucketIcon from "../assets/Bitbucket Icon.svg";
import dropboxIcon from "../assets/Dropbox Icon.svg";
import twitchIcon from "../assets/Twitch Icon.svg";
import twitterIcon from "../assets/Twitter Icon.svg";
import illustration from "../assets/Illustration.png";
export const Main = () => {
  return (
    <div className="my-14 grid laptop:grid-cols-2 ">
      <div className="flex flex-col gap-4 tablet:gap-10 text-center laptop:text-left">
        <div className="bg-primary py-2 px-6 rounded-full mx-auto w-fit laptop:mx-0">
          <span className="text-slate-300">
            We are now allowing early access for users.
          </span>{" "}
          <a href="" className=" text-white underline">
            Learn more.
          </a>
        </div>
        <h2 className="text-primary text-2xl tablet:text-5xl font-bold">
          Build a highly engaged community with no effort.
        </h2>
        <p className="text-slate-500">
          Commune offers the tools you need to buid a highly engaged community
          with little to no effort. Simply your Commune workspace, and manage
          everything from members to content from one central dashboard.
        </p>
        <div className="flex flex-col gap-4 text-center tablet:flex-row tablet:mx-auto laptop:mx-0">
          <input
            type="text"
            className="px-4 py-3 rounded-md border border-gray-300 outline-none tablet:w-96 laptop:w-auto"
            placeholder="Enter your e-mail address"
          />
          <button className="text-white px-4 py-3 bg-primary rounded-md ">
            Join Waitlist
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <p className="font-semibold text-left">Used by these companies:</p>
          <div className="flex gap-4 flex-wrap">
            <img src={atlassianIcon} />
            <img src={behanceIcon} />
            <img src={bingIcon} />
            <img src={bitbucketIcon} />
            <img src={dropboxIcon} />
            <img src={twitchIcon} />
            <img src={twitterIcon} />
          </div>
        </div>
      </div>
      <div className="laptop:flex hidden flex-col items-center lap">
        <img src={illustration} className="animate-pulse w-3/5 h-auto" alt="" />
      </div>
    </div>
  );
};
