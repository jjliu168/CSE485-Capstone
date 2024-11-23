// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import "./globals.css"

export default function Home() {
  return (
    <div>
      <div className="home-page-bg">
        <div className="flex-col-centered gap-[2vh]">
          <div className="flex-row-centered gap-[1vw]">
            <div className="flex-col-centered">
              {/* GreenLiving Icon Image */}
              <Image
                className="object-cover"
                src="/greenliving_iconv1.png"
                alt="Green Expectations.png logo"
                loading="eager"
                width={100}
                height={100}
                priority
              />
              <a className="text-xs ml-auto" href="https://www.freepik.com/icons/house">Icon by Freepik</a>
            </div>
            <div className="flex-col-centered">
              <h1 className="text-5xl font-semibold">Green</h1>
              <h1 className="text-5xl mr-auto">Living</h1>
            </div>
          </div>

          <div>
              <p className="text-2xl">
                <span className="font-semibold">
                  Building a 
                  <span className="coffee-green font-semibold" style={{color:"#006241"}}>
                    &nbsp;Greener&nbsp;
                  </span> 
                  Future: 
                </span>
               
                &nbsp;Sustainable Homes and Eco-Friendly Living
              </p>
          </div>
          {/* TODO: Fix badly factored code. Currently setting text color manually instead of importing from globals.css. */}
        </div>
        
        <div className="nav-ribbon-body mt-[1vh]">
          {/* Card for Calculator */}
            <div className="nav-ribbon-card">
              <h2 className="nav-ribbon-card-title">
                Calculator
              </h2>
              <p className="nav-ribbon-card-caption">
                Use our calculator to estimate your current sustainability score.
              </p>
              {/* Link to the Calculator page */}
              <Link
                href="/calculator"
                className="nav-ribbon-card-button"
              >
                Calculator
                <i className="ml-2 fa-solid fa-calculator"></i>
              </Link>
            </div>

          {/* Card for Chatbot */}
            <div className="nav-ribbon-card">
                <h2 className="nav-ribbon-card-title">
                  Chatbot
                </h2>
                <p className="nav-ribbon-card-caption">
                  Ask our chatbot any questions you have about sustainable living.
                </p>
                {/* Link to the Chatbot page */}
                <Link
                  href="/chatbot"
                  className="nav-ribbon-card-button"
                >
                  Chatbot
                  <i className="ml-2 fa-regular fa-comment"></i>
                </Link>
              </div>

            {/* Card for FAQ */}
              <div className="nav-ribbon-card">
                <h2 className="nav-ribbon-card-title">FAQ</h2>
                <p className="nav-ribbon-card-caption">
                  Find answers to frequently asked questions.
                </p>
                {/* Link to the FAQ page */}
                <Link
                  href="/faq"
                  className="nav-ribbon-card-button"
                >
                  FAQ
                  <i className="ml-2 fa-solid fa-question"></i>
                </Link>
              </div>

            {/* Card for Green Expectations */}
              <div className="nav-ribbon-card">
                <h2 className="nav-ribbon-card-title">
                  Green Expectations
                </h2>
                <p className="nav-ribbon-card-caption">
                  Learn more about Green Expectations and sustainable housing.
                </p>
                {/* Link to the GreenExpectations Real Estate website */}
                <Link
                href="https://greenexpectations.us/"
                className="nav-ribbon-card-button"
                // Used to open website in a new tab
                target="_blank" rel="noopener noreferrer"        
                >
                Learn More
                <i className="ml-2 fa-solid fa-house"></i> {/* House Icon */}
                </Link>
              </div>
        </div>

        {/* used for spacing */}
        <div>
        </div>

      </div>
    </div>
  );
}
