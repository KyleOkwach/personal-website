export default function Hero() {
    return (
        <div className="flex flex-col w-full h-full items-start justify-center gap-4">
            <h3 className="text-primary-custom font-mono">Hello, my name is</h3>
            <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold">Kyle Bolo.</h3>
            <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold opacity-50">Welcome to my world.</h3>
            <h3 className="opacity-50 md:w-[60%]">
            A passionate coder, designer, and engineer. I thrive on creating innovative solutions, crafting beautiful designs, and engineering robust systems. Let’s build something amazing together!
            </h3>
        </div>
    )
}