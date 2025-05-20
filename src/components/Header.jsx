const socialMedia = [
  {
    icon: "fab fa-facebook-f",
    link: "https://www.facebook.com/nazaruck?locale=id_ID",
  },
  {
    icon: "fab fa-twitter",
    link: "https://x.com/NazarMa60101679",
  },
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/nazarmaull/",
  },
  {
    icon: "fab fa-youtube",
    link: "https://www.youtube.com",
  },
];

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.link} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.link} />
        ))}
      </div>
    </>
  );
}

export default Header;
