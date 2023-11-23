import {Link} from 'react-router-dom';
import Logo from './Logo';

type Props = {
  heading: string,
  paragraph: string,
  linkName: string,
  linkUrl: string
}

const Header = ({heading, paragraph, linkName, linkUrl}: Props) => {
    return(
      <div className="mb-10">
          <div className="flex justify-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h2 className="mt-6 text-center text-lg font-extrabold text-gray-900">
              {heading}
          </h2>
          <p className="text-center text-sm text-gray-600 mt-5">
          {paragraph} {' '}
          <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
              {linkName}
          </Link>
          </p>
      </div>
    )
}

export default Header
