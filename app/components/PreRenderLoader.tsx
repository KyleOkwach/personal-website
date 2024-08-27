import Logo from "./Logo";

export default function PreRenderLoader() {
    return (
        <span className="fixed bg-background-custom w-full h-screen top-0 left-0">
            <div className="flex flex-col items-center justify-center h-screen animate-pulse">
                {/* <h1 className="text-4xl font-bold text-primary-custom">Loading...</h1> */}
                <Logo className='w-32 h-32 fill-primary-custom'/>
            </div>
        </span>
    )
}