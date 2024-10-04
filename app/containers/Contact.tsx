import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-between debug">
            <div className="flex flex-col items-center justify-center max-w-96 gap-8">
                <div className="flex w-full items-center justify-center">
                    <h3 className="opacity-70 text-center">
                        Whether you have an idea that you'd like to see brought to life, or you just want to say hi, my inbox is open. Feel free to reach out.
                    </h3>
                </div>
                <CustomButton
                    href="mailto:bkyl9023@gmail.com"
                >
                    <p className="p-4">
                        Reach out
                    </p>
                </CustomButton>
            </div>
            <Footer className="debug" />
        </div>
    )
}