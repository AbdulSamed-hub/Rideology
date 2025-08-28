import Loader from "../components/GuideAnimation"
export default function GuideWelcomePage() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <div className="w-fit">
                <Loader />
            </div>
            <div className="text-left flex flex-col gap-y-4 items-center justify-center tracking-wide game-font max-w-[35ch] w-fit mx-auto text-sm">
                <p>Hey there!</p>
                <p>Welcome to the guide — glad to have you here.</p>
                <p>Use the nav bar on the right to jump into whatever topic you're curious about.</p>
                <p>No pressure, take your time, explore what you want — and most importantly, have fun with it.</p>
            </div>
        </div>
    )
}