import { socialLinks } from "../data/social-links-data";
import { cn } from "../lib/utils";

interface SocialLinkProps {
  className?: string;
  iconSize: number;
}

const SocialLinks = ({ className, iconSize }: SocialLinkProps) => {
  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.path}
          target="_blank"
          rel="noopener noreferrer"
          href={link.path}
          aria-label={`Abrir perfil no ${link.label}`}
          className={cn(className)}
        >
          <link.Icon size={iconSize} className="text-black" />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
