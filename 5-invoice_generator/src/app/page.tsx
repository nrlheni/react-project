import { InvoiceForm } from "./_components/invoice-form";

const Index = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="w-full flex flex-col items-center mx-auto my-5">
                <InvoiceForm />
            </div>
        </div>
    )
}

export default Index;