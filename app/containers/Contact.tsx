import CustomButton from "../components/CustomButton";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <CustomButton
                href="mailto:bkyl9023@gmail.com"
                content={
                    <p className="p-4">
                        Reach out
                    </p>
                }
            />
        </div>
    )
}