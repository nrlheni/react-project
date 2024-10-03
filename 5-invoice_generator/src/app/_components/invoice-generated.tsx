import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Product {
    item: string;
    quantity: number | string;
    price: number | string;
}

interface InvoiceGeneratedProps {
    companyName: string;
    logo: string;
    billedTo: string;
    email: string;
    phone: string;
    products: Product[];
    tax: number;
}

export const InvoiceGenerated: React.FC<InvoiceGeneratedProps> = ({ companyName, logo, billedTo, email, phone, products, tax }) => {
    const subtotal = products.reduce((acc, product) => acc + Number(product.price) * Number(product.quantity), 0);
    const totalTax = (subtotal * tax) / 100;
    const total = subtotal - totalTax;

    return (
        <div className="w-1/2 bg-white shadow-lg">
            <div className="flex flex-col w-full max-h-screen justify-start mx-auto gap-4 px-8 py-6">
                <div className="w-full flex flex-row items-center justify-between">
                    { logo ? (
                        <img src={logo} alt={companyName} className="size-12 bg-white" />
                        ): (
                            <div className="w-10 text-sm text-justify text-black font-light tracking-wide">{companyName || 'Your Logo'}</div>
                        )
                    }
                    <div className="w-24 break-words text-sm text-black font-light tracking-wide">No.0001</div>
                </div>
                <div className="text-black/90 font-extrabold text-[48px] tracking-wide uppercase">Invoice</div>
                <div className="flex flex-col items-start justify-start">
                    <div className="text-xs font-bold">Billed to:</div>
                    <div className="text-xs capitalize">{billedTo}</div>
                    <div className="text-xs">{email}</div>
                    <div className="text-xs">{phone}</div>
                </div>
                <div className="my-2">
                    <ScrollArea className="max-h-[160px]">
                        <Table className="min-w-full text-left text-xs">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="px-4 py-2">Item</TableHead>
                                    <TableHead className="px-4 py-2">Quantity</TableHead>
                                    <TableHead className="px-4 py-2">Price</TableHead>
                                    <TableHead className="px-4 py-2">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="px-4 py-2">{product.item || '-'}</TableCell>
                                        <TableCell className="px-4 py-2">{product.quantity}</TableCell>
                                        <TableCell className="px-4 py-2">Rp {product.price}</TableCell>
                                        <TableCell className="px-4 py-2">Rp {Number(product.price) * Number(product.quantity)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div>
                <div className="flex flex-row justify-end items-end text-xs gap-4 mt-4">
                    <div className="flex flex-col gap-2 justify-start">
                        <p className="font-bold tracking-wide uppercase">Subtotal</p>
                        <p className="font-bold tracking-wide uppercase">Tax</p>
                        <p className="font-bold tracking-wide uppercase">Total</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <p className="tracking-wide capitalize">Rp {subtotal}</p>
                        <p className="tracking-wide capitalize">Rp {tax/100 * subtotal}</p>
                        <p className="tracking-wide capitalize">Rp {total}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-0">
                <svg width="100%" height="100px" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 20 V10 Q 20 5 50 10 T 100 10 V20 Z" fill="#6D6E71" />
                <path d="M0 20 V15 Q 20 10 50 15 T 100 15 V20 Z" fill="#D1D3D4" />
                </svg>
            </div>
        </div>
    );
};
