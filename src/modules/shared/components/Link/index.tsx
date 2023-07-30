import Link from 'next/link';
import { StyledLink } from './styles';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default CustomLink;
