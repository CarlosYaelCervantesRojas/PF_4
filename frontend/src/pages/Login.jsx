import Icon from './components/Icon'

function App() {

  return (
    <>
      <main className="h-screen w-screen sm: flex justify-center items-center">
        <section className="flex flex-col bg-[#FAFAFB] p-7 h-full w-full sm:h-2/3 sm:w-96 sm:bg-white sm:border-2 sm:border-[#BDBDBD] sm:rounded-3xl sm:p-9" action="" method="post">

          <div className="pb-4 pt-14 sm:pb-5 sm:pt-0">
            <Icon src={"/devchallenges.svg"} alt={"devchallenges"}/>
          </div>

          <h3 className="font-sans text-lg font-semibold">
            Login
          </h3>

          <form className="h-1/3 flex flex-col justify-evenly sm:h-2/4" action="pages/profile.jsx" method="post">

            <div className="flex h-12 border-solid border-2 border-[#BDBDBD] rounded-lg">
              <img src="/mail.svg" alt="mail" className="p-2" />
              <input type="email" name="email" id="email" placeholder="Email" className="w-11/12 bg-transparent font-sans text-base text-[#828282] focus:outline-none" />
            </div>

            <div className="flex h-12 border-solid border-2 border-[#BDBDBD] rounded-lg">
              <img src="/lock.svg" alt="lock" className="p-2"/>
                <input type="password" name="passw" id="password" placeholder="Password" className=" w-11/12 bg-transparent font-sans text-base text-[#828282] focus:outline-none"/>
            </div>

            <button className="h-9 bg-[#2F80ED] rounded-lg font-sans font-semibold text-base text-white" type="submit">
              Login
            </button>
          </form>

          <div className="h-1/4 font-sans text-sm	flex flex-col items-center justify-evenly text-[#828282] sm:justify-around sm:h-1/3">
            <span>
              or continue with these social profile
            </span>

            <section className="w-10/12 flex justify-evenly">
              <Icon src={"/Google.svg"} alt={"google"}/>
              <Icon src={"/Facebook.svg"} alt={"facebook"}/>
              <Icon src={"/Twitter.svg"} alt={"twitter"}/>
              <Icon src={"/Gihub.svg"} alt={"github"}/>
            </section>

          </div>

        </section>
      </main>
    </>
  )
}

export default App
