import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus, Percent, Trash } from "lucide-react";
import { InvoiceGenerated } from "./invoice-generated";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Product {
    name: string;
    qty: number;
    price: number;
}

export const InvoiceForm = () => {
    const [companyName, setCompanyName] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [billedToName, setBilledToName] = useState("");
    const [billedToEmail, setBilledToEmail] = useState("");
    const [billedToPhone, setBilledToPhone] = useState("");
    const [products, setProducts] = useState<Product[]>([{ name: "", qty: 0, price: 0 }]);
    const [tax, setTax] = useState(0);
    const [isInvoiceGenerated, setIsInvoiceGenerated] = useState(false);

    const formSchema = z.object({
        companyName: z.string().min(1, {
            message: "Company Name is required.",
        }),
        logoUrl: z.string().optional(),
        billedToName: z.string().min(1, {
            message: "Billed To Name is required",
        }),
        billedToEmail: z.string().optional(),
        billedToPhone: z.string().optional(),
        products: z.array(
            z.object({
              name: z.string().min(1, {
                message: "Name is required",
              }),
              qty: z.number().min(1, {
                message: "Quantity must be at least 1",
              }),
              price: z.number().min(0, {
                message: "Price must be at least 0",
              }),
            })
        ),
        tax: z.number().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            logoUrl: "",
            billedToName: "",
            billedToEmail: "",
            billedToPhone: "",
            products: [
                { name: "", qty: 1, price: 0 },
            ],
            tax: 0,

        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);

        setCompanyName(values.companyName);
        setLogoUrl(values.logoUrl ?? "");
        setBilledToName(values.billedToName);
        setBilledToEmail(values.billedToEmail ?? "");
        setBilledToPhone(values.billedToPhone ?? "");
        setProducts(values.products);
        setTax(values.tax ?? 0);

        setIsInvoiceGenerated(true);
    };

    const addProductRow = () => {
        const newProduct = { name: "", qty: 1, price: 0 };

        setProducts((prevProducts) => {
            const updatedProducts = [...prevProducts, newProduct];
            form.setValue("products", updatedProducts);
            return updatedProducts;
        });
    };

    const deleteProductRow = (index: number) => {
        setProducts((prevProducts) => {
            const newProducts = prevProducts.filter((_, i) => i !== index);
            form.setValue("products", newProducts);
            return newProducts;
        });
    };

    return (
        <>
            {!isInvoiceGenerated ? (
                <div id="invoice-form" className="w-1/2 h-[90vh] rounded-lg bg-white shadow-lg">
                    <div className="text-lg text-center font-bold tracking-wide text-gray-800 mt-4 mb-2">Invoice Form</div>
                    <div className="flex w-full max-h-[75vh] overflow-y-auto justify-start px-8 mx-auto gap-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm">Billed From</FormLabel>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Enter your company/organization/personal name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="logoUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm">Logo (Optional)</FormLabel>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="https://example.com/example.png" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="billedToName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm">Billed To</FormLabel>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="billedToEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="billedToPhone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="text" className="w-full" placeholder="Phone Number" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <div className="flex flex-row items-center gap-2">
                                        <Label>Products/Items</Label>
                                        <div>
                                            <CirclePlus onClick={addProductRow} className="text-gray-600 hover:cursor-pointer hover:opacity-80" />
                                        </div>
                                    </div>
                                    {products.map((_, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.name`}
                                                render={({ field }) => (
                                                <FormItem>
                                                    {index === 0 && <FormLabel className="text-xs">Title/Name</FormLabel>}
                                                    <FormControl>
                                                    <Input type="text" className="w-full" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.qty`}
                                                render={({ field }) => (
                                                <FormItem>
                                                    {index === 0 && <FormLabel className="text-xs">QTY</FormLabel>}
                                                    <FormControl>
                                                    <Input type="number" className="w-full" {...field} min={1} onChange={event => field.onChange(+event.target.value)}/>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.price`}
                                                render={({ field }) => (
                                                <FormItem>
                                                    {index === 0 && <FormLabel className="text-xs">Price</FormLabel>}
                                                    <FormControl>
                                                    <Input type="number" className="w-full" {...field} min={0} onChange={event => field.onChange(+event.target.value)}/>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                                )}
                                            />
                                            <div className="hover:cursor-pointer" style={{ width: '24px' }}>
                                                {index > 0 ? (
                                                    <Trash size={16} className="text-gray-600 hover:opacity-80" onClick={() => deleteProductRow(index)} />
                                                    ) : (
                                                    <Trash size={16} className="text-gray-600" style={{ visibility: 'hidden' }} />
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <FormField
                                    control={form.control}
                                    name="tax"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm">Tax</FormLabel>
                                            <FormControl>
                                                <Input type="number" className="w-1/4" placeholder="" {...field} min={0} onChange={event => field.onChange(+event.target.value)} icon={<Percent size={16} />}/>
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-black/80 text-white hover:opacity-80">Generate Invoice</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            ) : (
                <InvoiceGenerated
                    companyName={companyName}
                    logo={logoUrl}
                    billedToName={billedToName}
                    billedToEmail={billedToEmail}
                    billedToPhone={billedToPhone}
                    products={products}
                    tax={tax}
                />
            )}
        </>
    );
};
