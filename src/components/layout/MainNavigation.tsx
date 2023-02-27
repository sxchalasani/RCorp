import styles from "./MainNavigation.module.css";
// import "./MainNavigation.module.css";
import Link from "next/link";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

function MainNavigation() {
  const xx = () => {
    console.log("xx");
  };

  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7" style={{ textAlign: "right" }}>
            &nbsp;
          </div>
          <div className="col-md-1" style={{ textAlign: "right" }}>
            <span>203.558.2274</span>
          </div>
          <div className="col-md-2" style={{ textAlign: "right" }}>
            <span>Sign in</span>
          </div>
          <div className="col-md-2" style={{ textAlign: "right" }}>
            <span>Create an Account</span>
          </div>
        </div>

        <div className={` ${styles.header} row`}>
          <div className="col-md-1"></div>
          <div
            className={`${styles.logo} col-md-2  `}
            style={{
              marginTop: 5,
              marginBottom: 5,
              backgroundColor: "lightgrey",

              //   backgroundImage: "url('/LogoV2.png')",
            }}
          >
            <img
              className={`${styles.logo}`}
              src="/LogoV2.png"
              alt="RASHICORP LLC"
            />
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-8"
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      style={{ border: "0", width: 500 }}
                    ></input>
                    <span>
                      <button type="submit" onClick={xx}>
                        <i
                          className="fa fa-search fa-border-none"
                          style={{
                            fontSize: 20,
                            color: "grey",
                            textShadow: "0 0 3px orange",
                          }}
                        ></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <nav>
                      <ul>
                        <li>
                          <Link href="/">Products</Link>
                        </li>
                        <li>
                          <Link href="/new-meetup">Specials</Link>
                        </li>
                        <li>
                          <Link href="/AboutUs">About Us</Link>
                        </li>
                        <li>
                          <Link href="/ContactUs">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    //  <Script
    //  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    //  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    //  crossOrigin="anonymous"
    // />
  );
}

export default MainNavigation;
