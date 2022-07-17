import Image from "next/image";
import Link from "next/link";

const ProjectsItem = (props) => {
  const { name, tech, url, bg } = props;
  return (
    <div className="relative p-3 flex items-center justify-center h-auto w-full shadow-xl rounded-[0.85rem] border-2 border-indigo-500/30 group hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500">
      <Image
        className="rounded-xl group-hover:opacity-20 duration-100"
        src={bg}
        alt="rakib"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="text-3xl text-white tracking-wider">{name}</h3>
        <p className="text-xl pb-4 pt-2 text-white">{tech}</p>
        <Link href={url}>
          <a
            target="_blank"
            className="py-2 px-6 rounded-full bg-white text-slate-700 hover:bg-indigo-100 font-semibold text-md cursor-pointer"
          >
            Live Preview
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
