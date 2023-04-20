import Button from '@mui/material/Button';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import Link from 'next/link'

const HomeSection2 = ({ title, subtitle, buttonCaption, href }) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
    <h1 className="text-3xl lg:text-5xl font-bold text-center">{title}</h1>
    <p className="text-md lg:text-xl  italic text-center p-4">{subtitle}</p>
    <center>
      {/* <form>
        <button
          type="submit"
          formAction={href}
          className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          <span className="px-4">{buttonCaption}</span>
        </button>
      </form> */}
      <Link href={href}> 
      <Button variant="outlined" endIcon={<NorthEastOutlinedIcon />}>
        {buttonCaption}
      </Button>
      </Link>
    </center>
    {/*       <Link href={href}>
            <a onClick={() => onClick()}>{buttonCaption}</a>
      </Link> */}
  </div>
)

export default HomeSection2
