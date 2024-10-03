import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus, Trash } from "lucide-react";
import { InvoiceGenerated } from "./invoice-generated";

interface Product {
    item: string;
    quantity: number | string;
    price: number | string;
}

export const InvoiceForm = () => {
    const [companyName, setCompanyName] = useState("");
    const [logo, setLogo] = useState("");
    const [billedTo, setBilledTo] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [products, setProducts] = useState<Product[]>([{ item: "", quantity: "", price: "" }]);
    const [tax, setTax] = useState(0);
    const [isInvoiceGenerated, setIsInvoiceGenerated] = useState(false); // State to track invoice generation

    const handleProductChange = (index: number, field: keyof Product, value: string | number) => {
        const newProducts = [...products];
        newProducts[index][field] = value as never;
        setProducts(newProducts);
    };

    const addProductRow = () => {
        setProducts([...products, { item: "", quantity: 0, price: 0 }]);
    };

    const deleteProductRow = (index: number) => {
        const newProducts = products.filter((_, i) => i !== index); // Remove the product at the specified index
        setProducts(newProducts);
    };

    const handleGenerateInvoice = () => {
        setIsInvoiceGenerated(true); // Set state to indicate the invoice has been generated
    };

    return (
        <>
            {!isInvoiceGenerated ? ( // Conditional rendering based on invoice generation
                <div id="invoice-form" className="w-1/2 max-h-screen overflow-y-auto rounded-lg bg-white shadow-lg">
                    <div className="flex flex-col w-full min-h-[90vh] justify-start p-8 mx-auto gap-4">
                        <div className="text-lg text-center font-bold tracking-wide text-gray-800">Invoice Form</div>
                        <div id="company-details" className="flex flex-col gap-2">
                            <Label htmlFor="name" className="text-xs">Company/Organization</Label>
                            <Input type="text" id="name" placeholder="Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="logo" className="text-xs">Logo (Optional)</Label>
                                <Input type="text" id="logo" placeholder="https://github.com/johndoe.png" value={logo} onChange={(e) => setLogo(e.target.value)} />
                            </div>
                        </div>
                        <div id="billed-details" className="flex flex-col gap-2">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="billedTo" className="text-xs">Billed To</Label>
                                <Input type="text" id="billedTo" placeholder="Name" value={billedTo} onChange={(e) => setBilledTo(e.target.value)} />
                            </div>
                            <div className="flex flex-row gap-2">
                                <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div id="product-details" className="flex flex-col gap-2">
                            <Label className="text-xs">Products/Items</Label>
                            {products.map((product, index) => (
                                <div key={index} className="flex flex-row items-center gap-2">
                                    <Input
                                        type="text"
                                        placeholder="name"
                                        value={product.item}
                                        onChange={(e) => handleProductChange(index, "item", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="qty"
                                        value={product.quantity}
                                        onChange={(e) => handleProductChange(index, "quantity", Number(e.target.value))}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="price"
                                        value={product.price}
                                        onChange={(e) => handleProductChange(index, "price", Number(e.target.value))}
                                    />
                                    <div className="hover:cursor-pointer" onClick={() => deleteProductRow(index)}>
                                        <Trash size={16} className="text-gray-600 hover:opacity-80" />
                                    </div>
                                </div>
                            ))}
                            <div className="hover:cursor-pointer" onClick={addProductRow}>
                                <CirclePlus className="text-gray-600 hover:opacity-80" />
                            </div>
                        </div>
                        <div id="tax-details" className="flex flex-col gap-2">
                            <Label htmlFor="tax" className="text-xs">Tax</Label>
                            <Input type="number" id="tax" placeholder="in percent" value={tax} onChange={(e) => setTax(Number(e.target.value))} />
                        </div>
                        <Button onClick={handleGenerateInvoice} className="bg-black/80 text-white hover:opacity-80">Generate Invoice</Button>
                    </div>
                </div>
            ) : (
                <InvoiceGenerated
                    companyName={companyName}
                    logo={logo}
                    billedTo={billedTo}
                    email={email}
                    phone={phone}
                    products={products}
                    tax={tax}
                />
            )}
        </>
    );
};
