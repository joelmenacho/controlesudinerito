const Header = ({ company }) => {
    const { name, slogan } = company;
    return (
      <header className="py-3 text-center">
        <div className="container d-flex flex-column gap-1">
          <h2 className="text-warning fs-2 m-0">{name}</h2>
          <h1 className="text-light fs-5 m-0">{slogan}</h1>
        </div>
      </header>
    );
  };
  
  export default Header;