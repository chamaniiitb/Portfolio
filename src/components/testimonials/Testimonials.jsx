import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "CodeChef",
      title: "A Competitive Coding Platform",
      img:
        "assets/codechef.png",
      icon: "assets/3star.jpeg",
      desc:
        "3- Star/1733+ Rated Coder at CodeChef User name : chamanlal97196",
    },
    {
      id: 2,
      name: "HackerRank",
      title: "A Competitive Coding Platform",
      img:
        "assets/hackerrank.png",
      icon: "assets/5star.jpeg",
      desc:
        "5- Star Rated Coder at HackerRank in C++ and Data Structure and Algorithms User name : chamanlal97196",
      featured: true,
    },
    {
      id: 3,
      name: "Codame",
      title: "Coding Club of IIIT B",
      img:
        "assets/codama.png",
      icon: "assets/linkedin.png",
      desc:
        "CODAME, Programming Club of IIIT Bhopal. Programming Lead CODAME ECPC member / volunteer.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Achievements</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
