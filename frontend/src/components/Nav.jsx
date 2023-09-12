export default function Nav(){

    return (
        <nav id="menuNav" className="flex-col justify-between w-48 h-44 font-sans font-medium text-xs text-[#4F4F4F] border border-[#E0E0E0] rounded-xl p-4 right-5 bg-white absolute top-14 sm:right-20">
              <a href="" className="flex h-10 items-center w-full hover:bg-[#F2F2F2] hover:rounded-lg">
                  <div className="h-5 w-5 mx-2">
                      <img src="/accountCircle.svg" className="h-full w-full" alt="Profile"/>
                  </div>
                  <span>
                      My Profile
                  </span>
              </a>
              <button className="flex h-10 items-center w-full hover:bg-[#F2F2F2] hover:rounded-lg">
                  <div className="h-5 w-5 mx-2">
                      <img src="/group.svg" className="h-full w-full" alt="GroupChat"/>
                  </div>
                  <span>
                      Group Chat
                  </span>
              </button>
              <hr/>
                  <a href="" className="flex h-10 items-center w-full hover:bg-[#F2F2F2] hover:rounded-lg">
                      <div className="h-5 w-5 mx-2">
                          <img src="/logout.svg" className="w-full h-full" alt="logout"/>
                      </div>
                      <span className="text-[#EB5757]">
                          Logout
                      </span>
                  </a>
          </nav>
    )
}