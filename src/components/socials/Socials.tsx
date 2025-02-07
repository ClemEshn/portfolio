interface SocialsProps {
    forMobile?: boolean;
  }

  export default function Socials({ forMobile = false }: SocialsProps) {
    return (
        <div className={forMobile ? "showAsHeaderMob" : "socials"}> 
            <a href="mailTo:siteContact.eischen@gmail.com" target="_blank"><img className="logo" src="/logo/mail.svg"/></a>
            <a href="tel:0633454124"><img className="logo" src="/logo/phone.svg"/></a>
            <a href="https://www.linkedin.com/in/clement-eischen-3355281b3/" target="_blank"><img className="logo" src="/logo/linkedin.svg"/></a>
            <a href="https://github.com/ClemEshn" target="_blank"><img className="logo" src="/logo/github.svg"/></a>
        </div>
    )
}